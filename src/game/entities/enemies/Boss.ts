import { Bodies, World, Body } from "matter-js";
import { Entity } from "../../core/types";
import { NodeStatus, Blackboard, Sequence, Selector, ActionNode, ConditionNode } from "../../ai/BehaviorTree";
import { createGoomba } from "./Goomba";
import { createFlyingEye } from "./FlyingEye";

export function createBoss(world: World, x: number, y: number): Entity {
    const body = Bodies.rectangle(x, y, 120, 120, {
        inertia: Infinity,
        frictionAir: 0.1,
        label: "enemy",
        isStatic: false
    });
    World.add(world, body);

    return {
        id: "final-boss",
        type: "BOSS",
        state: "ALIVE",
        pos: { x, y },
        vel: { vx: 0, vy: 0 },
        width: 120,
        height: 120,
        body,
        health: 100,
        maxHealth: 100,
        timer: 100 // Shooting/action interval
    };
}

// --- Behavior Tree Nodes for Boss ---

const dodgeAction = new ActionNode((bb: Blackboard) => {
    const ent = bb.ent;
    const projectiles = bb.allEntities.filter(e => e.type === "PROJECTILE" && e.category !== "ENEMY_BULLET" && e.state === "ALIVE");
    let dodgeVy = 0;
    projectiles.forEach(p => {
        const dx = p.pos.x - ent.body!.position.x;
        const dy = p.pos.y - ent.body!.position.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 160000) {
            const pVel = p.vel || { vx: 0, vy: 0 };
            if (dx * pVel.vx < 0) {
                dodgeVy = (dy > 0 ? -1 : 1) * 6;
            }
        }
    });
    bb.dodgeVy = dodgeVy;
    return NodeStatus.SUCCESS;
});

const orbitAction = new ActionNode((bb: Blackboard) => {
    const ent = bb.ent;
    const centerX = 600;
    const targetX = centerX + Math.sin(Date.now() * 0.001) * 350;
    const targetY = 200 + Math.cos(Date.now() * 0.002) * 100;
    const dx = targetX - ent.body!.position.x;
    const dy = targetY - ent.body!.position.y;

    Body.setVelocity(ent.body!, {
        x: dx * 0.05,
        y: (dy * 0.05) + (bb.dodgeVy || 0)
    });

    if (bb.ent.timer !== undefined && bb.ent.timer <= 0) {
        return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
});

const shootAction = new ActionNode((bb: Blackboard) => {
    const ent = bb.ent;
    // Don't shoot if on cooldown
    if ((ent as any).shootCooldown > 0) return NodeStatus.FAILURE;

    const isEnraged = (ent.health || 0) < 50;
    const dist = Math.sqrt(Math.pow(bb.playerPos.x - ent.body!.position.x, 2) + Math.pow(bb.playerPos.y - ent.body!.position.y, 2));
    const bulletSpeed = isEnraged ? 12 : 8;
    const timeToHit = dist / bulletSpeed;

    const predictedX = bb.playerPos.x + (bb.playerVel.vx * timeToHit);
    const predictedY = bb.playerPos.y + (bb.playerVel.vy * timeToHit);

    const adx = predictedX - ent.body!.position.x;
    const ady = predictedY - ent.body!.position.y;
    const adist = Math.sqrt(adx * adx + ady * ady);

    const vx = (adx / adist) * bulletSpeed;
    const vy = (ady / adist) * bulletSpeed;

    bb.spawnedEntities.push(createBossBullet(bb.world, ent.body!.position.x, ent.body!.position.y, vx, vy));
    ent.timer = isEnraged ? 30 : 60;
    return NodeStatus.SUCCESS;
});

const pulseAction = new ActionNode((bb: Blackboard) => {
    const ent = bb.ent;
    if ((ent as any).shootCooldown > 0) return NodeStatus.FAILURE;

    const isEnraged = (ent.health || 0) < 50;
    const count = isEnraged ? 16 : 12;
    for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const vx = Math.cos(angle) * (isEnraged ? 8 : 5);
        const vy = Math.sin(angle) * (isEnraged ? 8 : 5);
        bb.spawnedEntities.push(createBossBullet(bb.world, ent.body!.position.x, ent.body!.position.y, vx, vy));
    }
    ent.timer = 80;
    return NodeStatus.SUCCESS;
});

const chargeAction = new ActionNode((bb: Blackboard) => {
    const ent = bb.ent;
    const target = (ent as any).targetPos || bb.playerPos;
    const dx = target.x - ent.body!.position.x;
    const dy = target.y - ent.body!.position.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 20 && ent.timer !== undefined && ent.timer > 0) {
        const speed = (ent.health || 0) < 50 ? 25 : 18;
        Body.setVelocity(ent.body!, { x: (dx / dist) * speed, y: (dy / dist) * speed });
        return NodeStatus.RUNNING;
    }
    ent.timer = 50;
    return NodeStatus.SUCCESS;
});

const boulderCrushAction = new ActionNode((bb: Blackboard) => {
    const ent = bb.ent;
    if (!(ent as any).boulderState) (ent as any).boulderState = "START";

    const bState = (ent as any).boulderState;
    if (bState === "START") {
        // Jump high
        Body.setVelocity(ent.body!, { x: 0, y: -25 });
        (ent as any).boulderState = "ASCENDING";
        return NodeStatus.RUNNING;
    } else if (bState === "ASCENDING") {
        if (ent.body!.position.y < 100) {
            (ent as any).boulderState = "PAUSE";
            ent.timer = 30; // 0.5s pause
            Body.setVelocity(ent.body!, { x: 0, y: 0 });
            // Track player position for smash
            (ent as any).targetX = bb.playerPos.x;
        }
        return NodeStatus.RUNNING;
    } else if (bState === "PAUSE") {
        Body.setVelocity(ent.body!, { x: 0, y: 0 });
        // Stay above player's last known X
        Body.setPosition(ent.body!, { x: (ent as any).targetX, y: ent.body!.position.y });
        if (ent.timer !== undefined && ent.timer <= 0) {
            (ent as any).boulderState = "SLAM";
            Body.setVelocity(ent.body!, { x: 0, y: 40 }); // High velocity slam
        }
        return NodeStatus.RUNNING;
    } else if (bState === "SLAM") {
        if (Math.abs(ent.body!.velocity.y) < 2) { // Hit something
            (ent as any).boulderState = undefined;
            // Create shockwaves to left and right
            bb.spawnedEntities.push(createShockwave(bb.world, ent.body!.position.x - 60, ent.body!.position.y + 50, -1));
            bb.spawnedEntities.push(createShockwave(bb.world, ent.body!.position.x + 60, ent.body!.position.y + 50, 1));
            ent.timer = 50;
            return NodeStatus.SUCCESS;
        }
        return NodeStatus.RUNNING;
    }
    return NodeStatus.FAILURE;
});

const spawnMinionsAction = new ActionNode((bb: Blackboard) => {
    const ent = bb.ent;

    const currentMinions = bb.allEntities.filter(e => (e.type === "GOOMBA" || e.type === "FLYING_EYE") && e.state === "ALIVE").length;
    if (currentMinions >= 6) {
        // Skip spawning if there are already enough minions, but trigger cooldown to avoid getting stuck
        ent.timer = 60;
        return NodeStatus.SUCCESS;
    }

    const isEnraged = (ent.health || 0) < 50;
    const numToSpawn = isEnraged ? 3 : 2;
    for (let i = 0; i < numToSpawn; i++) {
        if (Math.random() > 0.5) {
            bb.spawnedEntities.push(createGoomba(bb.world, ent.body!.position.x + (Math.random() - 0.5) * 200, ent.body!.position.y + 20));
        } else {
            bb.spawnedEntities.push(createFlyingEye(bb.world, ent.body!.position.x + (Math.random() - 0.5) * 300, ent.body!.position.y - 100));
        }
    }
    ent.timer = 120;
    return NodeStatus.SUCCESS;
});

const grenadeTossAction = new ActionNode((bb: Blackboard) => {
    const ent = bb.ent;
    const dx = bb.playerPos.x - ent.body!.position.x;
    const vx = dx * 0.05; // Toss towards player
    const vy = -12; // Arcing up

    bb.spawnedEntities.push(createGrenade(bb.world, ent.body!.position.x, ent.body!.position.y - 40, vx, vy));
    ent.timer = 60;
    return NodeStatus.SUCCESS;
});

const updateCooldownsAction = new ActionNode((bb: Blackboard) => {
    if ((bb.ent as any).shootCooldown > 0) {
        (bb.ent as any).shootCooldown--;
    }
    return NodeStatus.SUCCESS;
});

const setShootCooldownAction = new ActionNode((bb: Blackboard) => {
    (bb.ent as any).shootCooldown = 250; // Long cooldown
    return NodeStatus.SUCCESS;
});

// --- Root BT Setup ---
const bossBT = new Sequence([
    updateCooldownsAction,
    dodgeAction,
    new Selector([
        // Phase 1: Cooldown Active (Use melee/spawns)
        new Sequence([
            new ConditionNode(bb => (bb.ent as any).shootCooldown > 0),
            new Selector([
                // If we are currently doing a move, continue it until timer is up or move finishes
                new Sequence([
                    new ConditionNode(bb => bb.ent.timer !== undefined && bb.ent.timer > 0),
                    new Selector([
                        new Sequence([
                            new ConditionNode(bb => (bb.ent as any).boulderState !== undefined || bb.ent.category === "BOULDER"),
                            boulderCrushAction
                        ]),
                        new Sequence([
                            new ConditionNode(bb => bb.ent.category === "CHARGE"),
                            chargeAction
                        ]),
                        orbitAction // Fallback drift
                    ])
                ]),
                // Ready for a new cooldown move
                new Selector([
                    new Sequence([
                        new ConditionNode(_ => Math.random() < 0.3),
                        new ActionNode(bb => { bb.ent.category = "BOULDER"; return boulderCrushAction.tick(bb); })
                    ]),
                    new Sequence([
                        new ConditionNode(_ => Math.random() < 0.4),
                        new ActionNode(bb => { bb.ent.category = "SPAWN"; return spawnMinionsAction.tick(bb); })
                    ]),
                    new Sequence([
                        new ConditionNode(_ => Math.random() < 0.5),
                        new ActionNode(bb => { bb.ent.category = "GRENADE"; return grenadeTossAction.tick(bb); })
                    ]),
                    // Fallback to charge if nothing else picked
                    new ActionNode(bb => {
                        bb.ent.category = "CHARGE";
                        (bb.ent as any).targetPos = { x: bb.playerPos.x, y: bb.playerPos.y };
                        return chargeAction.tick(bb);
                    })
                ])
            ])
        ]),

        // Phase 2: Shooting Phase
        new Sequence([
            new ConditionNode(bb => !((bb.ent as any).shootCooldown > 0)),
            new Selector([
                // Try to start a shoot sequence
                new Sequence([
                    new ConditionNode(bb => bb.ent.timer !== undefined && bb.ent.timer <= 0),
                    // Standard moves
                    new Selector([
                        new Sequence([
                            new ConditionNode(() => Math.random() < 0.3),
                            new ActionNode(bb => { bb.ent.category = "PULSE"; return pulseAction.tick(bb); })
                        ]),
                        new Sequence([
                            new ActionNode(bb => { bb.ent.category = "SHOOT"; return shootAction.tick(bb); }),
                            orbitAction
                        ])
                    ]),
                    setShootCooldownAction // Set the cooldown AFTER shooting
                ]),
                // Drift while preparing to shoot
                orbitAction
            ])
        ])
    ])
]);

export function updateBoss(ent: Entity, world: World, playerPos: { x: number, y: number }, playerVel: { vx: number, vy: number }, allEntities: Entity[]): Entity[] {
    if (!ent.body || ent.state !== "ALIVE") return [];

    const spawned: Entity[] = [];
    if (ent.timer !== undefined) ent.timer--;

    const blackboard: Blackboard = {
        ent,
        world,
        playerPos,
        playerVel,
        allEntities,
        spawnedEntities: spawned
    };

    bossBT.tick(blackboard);

    ent.pos = { x: ent.body.position.x - ent.width / 2, y: ent.body.position.y - ent.height / 2 };
    return spawned;
}

function createBossBullet(world: World, x: number, y: number, vx: number, vy: number): Entity {
    const bullet = Bodies.rectangle(x, y, 16, 16, {
        friction: 0,
        frictionAir: 0,
        frictionStatic: 0,
        label: "projectile",
        isSensor: true
    });
    // ignoreGravity is handled by constant velocity in update wrapper usually,
    // but here we set it once. Engine will need to lock Boss bullets too.
    (bullet as any).ignoreGravity = true;
    Body.setVelocity(bullet, { x: vx, y: vy });
    World.add(world, bullet);

    return {
        id: Math.random().toString(36).substr(2, 9),
        type: "PROJECTILE",
        state: "ALIVE",
        pos: { x, y },
        vel: { vx, vy },
        width: 16,
        height: 16,
        body: bullet,
        category: "ENEMY_BULLET",
        damage: 1,
        timer: 300
    };
}

function createShockwave(world: World, x: number, y: number, dir: number): Entity {
    const body = Bodies.rectangle(x, y, 40, 60, {
        isSensor: true,
        label: "projectile", // Reuse projectile logic for collision in engine
        frictionAir: 0
    });
    // Velocity lock logic
    (body as any).ignoreGravity = true;
    Body.setVelocity(body, { x: dir * 10, y: 0 });
    World.add(world, body);

    return {
        id: Math.random().toString(36).substr(2, 9),
        type: "SHOCKWAVE",
        state: "ALIVE",
        pos: { x, y },
        vel: { vx: dir * 10, vy: 0 },
        width: 40,
        height: 60,
        body,
        category: "ENEMY_BULLET",
        damage: 1,
        timer: 40
    };
}

function createGrenade(world: World, x: number, y: number, vx: number, vy: number): Entity {
    const body = Bodies.circle(x, y, 12, {
        restitution: 0.8, // Bouncy
        friction: 0.05,
        frictionAir: 0.01,
        label: "enemy_grenade" // Custom label so it doesn't get auto-deleted like generic projectiles hitting ground
    });
    Body.setVelocity(body, { x: vx, y: vy });
    World.add(world, body);

    return {
        id: Math.random().toString(36).substr(2, 9),
        type: "PROJECTILE",
        state: "ALIVE",
        pos: { x, y },
        vel: { vx, vy },
        width: 24,
        height: 24,
        body,
        category: "GRENADE",
        damage: 2,
        timer: 150 // Explodes after 2.5 seconds
    };
}
