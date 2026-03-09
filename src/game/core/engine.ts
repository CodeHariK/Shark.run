import { Engine, World, Bodies, Body, Query } from "matter-js";
import { GameState, Player, Entity } from "./types";
import { createGoomba, updateGoomba } from "../entities/enemies/Goomba";
import { createTurtle, updateTurtle } from "../entities/enemies/Turtle";
import { createFireRod, updateFireRod } from "../entities/hazards/FireRod";
import { createBrick, updateBrick } from "../entities/environment/Brick";
import { createPowerup, updatePowerup } from "../entities/items/Powerup";
import { updateSnowball } from "../entities/items/Snowball";
import { performDash, performSuperheroKick } from "../abilities/Abilities";
import { createWeapon, fireWeapon } from "../entities/projectiles/Weapon";
import { updateProjectile, createBasicProjectile } from "../entities/projectiles/Projectile";
import { createJumpingPlatform, updateJumpingPlatform } from "../entities/environment/JumpingPlatform";
import { updateMissileShooter, updateLaserHazard } from "../entities/hazards/Hazards";
import { createMovingPlatform, updateMovingPlatform, createAcidWater } from "../entities/environment/Environment";
import { updatePortal } from "../entities/environment/Portal";
import { createGoal } from "../entities/environment/Goal";
import { createBike } from "../entities/items/Bike";
import { createFlyingEye, updateFlyingEye } from "../entities/enemies/FlyingEye";
import { createBoss, updateBoss } from "../entities/enemies/Boss";

const JUMP_FORCE = -11;
const DASH_SPEED = 18;
const MAX_SPEED = 8;
const ACCEL = 0.8;
const AIR_ACCEL = 0.4;
const COYOTE_TIME = 8;
const JUMP_BUFFER = 6;

export function setupPhysics(player: Player, worldWidth: number) {
    const engine = Engine.create();
    engine.gravity.y = 1.5;

    const playerBody = Bodies.rectangle(player.pos.x, player.pos.y, player.width, player.height, {
        inertia: Infinity,
        friction: 0,
        frictionAir: 0,
        restitution: 0,
        label: "player",
    });

    const ground = Bodies.rectangle(worldWidth / 2, 485, worldWidth, 30, { isStatic: true, label: "ground" });
    const wall1 = Bodies.rectangle(-10, 250, 20, 500, { isStatic: true, label: "ground" });
    const wall2 = Bodies.rectangle(worldWidth + 10, 250, 20, 500, { isStatic: true, label: "ground" });

    // Base platforms (common to all stages)
    const platforms = [
        Bodies.rectangle(400, 380, 200, 20, { isStatic: true, label: "ground" }),
        Bodies.rectangle(800, 300, 200, 20, { isStatic: true, label: "ground" }),
    ];

    World.add(engine.world, [playerBody, ground, wall1, wall2, ...platforms]);
    return { engine, playerBody };
}

function spawnStageEntities(engine: Engine, stageNum: number, worldWidth: number): Entity[] {
    const isBoss = stageNum % 5 === 0;
    const entities: Entity[] = [];

    if (isBoss) {
        // Clean Boss Arena
        entities.push(createBoss(engine.world, 800, 250));
        // Add cover pillars
        const pillars = [
            Bodies.rectangle(500, 400, 40, 200, { isStatic: true, label: "ground" }),
            Bodies.rectangle(1100, 400, 40, 200, { isStatic: true, label: "ground" }),
        ];
        World.add(engine.world, pillars);
    } else {
        // Ordinary Level
        entities.push(
            ...createFireRod(500, 250, 2),
            createGoomba(engine.world, 400, 400),
            createTurtle(engine.world, 600, 400),
            createPowerup(engine.world, 200, 400, "SHOTGUN"),
            createBrick(engine.world, 800, 250, true),
            createJumpingPlatform(engine.world, 1000, 430),
            createMovingPlatform(engine.world, 1200, 300, 150, "x"),
            createAcidWater(1400, 465, 400, 40),
            createGoal(engine.world, worldWidth - 50, 440)
        );

        // Add more clutter based on stage number
        for (let i = 0; i < Math.min(stageNum, 5); i++) {
            entities.push(createFlyingEye(engine.world, 1500 + i * 400, 200));
        }
    }

    // Always keep bike at start
    entities.push(createBike(engine.world, 150, 440));

    return entities;
}

export function createInitialState(stageNum = 1): GameState {
    const isBoss = stageNum % 5 === 0;
    const worldWidth = isBoss ? 1200 : 3000 + (stageNum * 500);

    const initialPlayer: Player = {
        id: "mario",
        type: "PLAYER",
        state: "IDLE",
        pos: { x: 100, y: 300 },
        vel: { vx: 0, vy: 0 },
        width: 24,
        height: 32,
        facing: "RIGHT",
        isGrounded: false,
        dashCount: 1,
        maxDashes: 1,
        dashTimer: 0,
        jumpCount: 0,
        maxJumps: 2,
        coyoteTimer: 0,
        jumpBufferTimer: 0,
        invincibleTimer: 0,
        speedBoost: 0,
        rangeBoost: 0,
        powerBoost: 0,
        shotTimer: 0,
        health: 5,
        maxHealth: 5,
        inventory: [createWeapon("REVOLVER")],
        activeWeaponIndex: 0,
        score: 0
    };

    const { engine, playerBody } = setupPhysics(initialPlayer, worldWidth);
    initialPlayer.body = playerBody;

    const entities = spawnStageEntities(engine, stageNum, worldWidth);

    return {
        player: initialPlayer,
        entities,
        gravity: 0,
        friction: 0.82,
        airFriction: 0.95,
        physicsEngine: engine,
        camera: { x: 0, y: 0 },
        worldWidth,
        worldHeight: 500,
        currentStage: stageNum,
        isBossStage: isBoss
    };
}

export function update(state: GameState, keys: Set<string>): GameState {
    const { player, physicsEngine } = state;
    if (!physicsEngine || !player.body) return state;

    let pState = player.state;
    let facing = player.facing;
    let isGrounded = player.isGrounded;
    let dashCount = player.dashCount;
    let dashTimer = player.dashTimer;
    let jumpCount = player.jumpCount;
    let coyoteTimer = player.coyoteTimer;
    let jumpBufferTimer = player.jumpBufferTimer;
    let invincibleTimer = player.invincibleTimer;
    let speedBoost = player.speedBoost;
    let rangeBoost = player.rangeBoost;
    let powerBoost = player.powerBoost;
    let shotTimer = player.shotTimer;
    let health = player.health;
    let maxHealth = player.maxHealth;
    let inventory = [...player.inventory];
    let activeWeaponIndex = player.activeWeaponIndex;
    let score = player.score || 0;

    const body = player.body;
    const vel = body.velocity;

    // --- Timers ---
    if (coyoteTimer > 0) coyoteTimer--;
    if (jumpBufferTimer > 0) jumpBufferTimer--;
    if (dashTimer > 0) dashTimer--;
    if (invincibleTimer > 0) invincibleTimer--;
    if (shotTimer > 0) shotTimer--;

    const inputX = (keys.has("ArrowRight") ? 1 : 0) - (keys.has("ArrowLeft") ? 1 : 0);
    const jumpPressed = keys.has("ArrowUp") || keys.has("z") || keys.has(" ");
    const dashPressed = keys.has("x") || keys.has("Shift");
    const shiftPressed = keys.has("Shift") || keys.has("s") || keys.has("ArrowDown");
    const shotPressed = keys.has("f") || keys.has("c");
    const switchPressed = keys.has("q") || keys.has("e");

    if (jumpPressed) jumpBufferTimer = JUMP_BUFFER;

    // --- Weapon Switching ---
    if (switchPressed && shotTimer <= 0) {
        activeWeaponIndex = (activeWeaponIndex + 1) % inventory.length;
        shotTimer = 10;
    }

    // --- On Bike Logic ---
    let onBike = player.onBike || false;
    let bikeHealth = player.bikeHealth || 0;

    // --- Player Movement ---
    let targetVx = vel.x;
    let targetVy = vel.y;

    const dynamicMaxSpeed = MAX_SPEED + (speedBoost * 4);
    const dynamicAccel = ACCEL + (speedBoost * 0.4);

    if (pState === "DASHING") {
        if (dashTimer <= 0) {
            pState = "FALLING";
            targetVx *= 0.5;
        } else {
            targetVx = (facing === "RIGHT" ? 1 : -1) * (DASH_SPEED + (speedBoost * 5));
            targetVy = 0;
        }
    } else if (pState === "KICKING") {
        targetVx = 0;
        targetVy = 15;
    } else if (pState !== "DEAD") {
        if (dashPressed && performDash({ ...player, dashCount, dashTimer })) {
            pState = "DASHING";
            dashTimer = 20;
            dashCount--;
        } else if (shiftPressed && performSuperheroKick(player, state.entities)) {
            pState = "KICKING";
        }

        if (inputX !== 0 && !onBike) {
            const acc = isGrounded ? dynamicAccel : AIR_ACCEL;
            targetVx += inputX * acc;
            facing = inputX > 0 ? "RIGHT" : "LEFT";
        } else if (onBike) {
            if (shiftPressed) {
                onBike = false;
                targetVy = -5; // Small hop off
            } else {
                targetVx = dynamicMaxSpeed; // Forced right movement
                facing = "RIGHT";
            }
        } else {
            targetVx *= isGrounded ? state.friction : state.airFriction;
        }

        if (Math.abs(targetVx) > dynamicMaxSpeed) targetVx = Math.sign(targetVx) * dynamicMaxSpeed;

        const canJump = (isGrounded || coyoteTimer > 0) || (jumpCount < player.maxJumps);
        if (jumpBufferTimer > 0 && canJump) {
            targetVy = JUMP_FORCE;
            isGrounded = false;
            coyoteTimer = 0;
            jumpBufferTimer = 0;
            jumpCount++;
            pState = "JUMPING";
        }

        if (!jumpPressed && targetVy < 0) targetVy *= 0.8;
    }

    const spawnedEntities: Entity[] = [];

    // --- Shooting ---
    const weapon = inventory[activeWeaponIndex];
    if (shotPressed && weapon && shotTimer <= 0 && pState !== "DEAD") {
        const weaponProjectiles = fireWeapon(physicsEngine.world, { ...player, pos: { x: body.position.x - player.width / 2, y: body.position.y - player.height / 2 }, facing, inventory, activeWeaponIndex });
        spawnedEntities.push(...weaponProjectiles);
        shotTimer = weapon.cooldown;
    }

    Body.setVelocity(body, { x: targetVx, y: targetVy });

    // --- Entity Updates & Collisions ---
    updateFireRod(state.entities);

    const updatedEntities = state.entities.map(ent => {
        if (!ent.body && ent.type !== "FIRE_ROD_SEGMENT") return ent;

        // Specialized Updates
        if (ent.type === "GOOMBA") updateGoomba(ent, (physicsEngine as any).world.bodies);
        if (ent.type === "TURTLE") updateTurtle(ent, physicsEngine.world.bodies);
        if (ent.type === "BRICK") updateBrick(ent);
        if (ent.type === "POWERUP") updatePowerup(ent);
        if (ent.type === "SNOWBALL") updateSnowball(ent, physicsEngine.world);
        if (ent.type === "PROJECTILE") {
            updateProjectile(ent, physicsEngine.world);
            if (ent.category === "GRENADE" && ent.state === "COLLECTED") {
                // Explode by spawning shrapnel
                for (let i = 0; i < 8; i++) {
                    const angle = (i / 8) * Math.PI * 2;
                    const b = createBasicProjectile(physicsEngine.world, ent.pos.x, ent.pos.y, 1, 6, 2, "ENEMY_BULLET", angle, 8, 40);
                    spawnedEntities.push(b);
                }
            }
        }
        if (ent.type === "JUMP_PLATFORM") updateJumpingPlatform(ent);
        if (ent.type === "MISSILE_SHOOTER") {
            const missile = updateMissileShooter(ent, physicsEngine.world, player);
            if (missile) spawnedEntities.push(missile);
            if (missile) spawnedEntities.push(missile);
        }
        if (ent.type === "LASER_HAZARD") updateLaserHazard(ent);
        if (ent.type === "MOVING_PLATFORM") updateMovingPlatform(ent);
        if (ent.type === "PORTAL") updatePortal(ent);
        if (ent.type === "FLYING_EYE") updateFlyingEye(ent, player.pos);
        if (ent.type === "BOSS") {
            const spawned = updateBoss(ent, physicsEngine.world, player.pos, { vx: player.body.velocity.x, vy: player.body.velocity.y }, state.entities);
            if (spawned.length > 0) spawnedEntities.push(...spawned);
        }

        // Lock velocity for ALL projectiles (Straight lines) except GRENADE
        if (ent.type === "PROJECTILE" && ent.body && ent.category !== "GRENADE") {
            if (ent.vel) {
                Body.setVelocity(ent.body, { x: ent.vel.vx, y: ent.vel.vy });
            }
        }
        // Update positions from physics
        if (ent.body) {
            ent.pos = { x: ent.body.position.x - ent.width / 2, y: ent.body.position.y - ent.height / 2 };
        }

        // --- Handle Collisions with Player ---
        if (ent.body && pState !== "DEAD") {
            const collision = Query.collides(body, [ent.body]);
            if (collision.length > 0) {
                // Collectables
                if (ent.type === "COIN" && ent.state === "ALIVE") {
                    ent.state = "COLLECTED";
                    score += 10;
                    World.remove(physicsEngine.world, ent.body);
                }

                // Portals
                if (ent.type === "PORTAL" && ent.timer === 0) {
                    const destination = state.entities.find(e =>
                        e.type === "PORTAL" && e.id !== ent.id && e.category === ent.category
                    );
                    if (destination && destination.body) {
                        Body.setPosition(body, {
                            x: destination.body.position.x,
                            y: destination.body.position.y
                        });
                        ent.timer = 60;
                        (destination as any).timer = 60;
                    }
                }

                // Goal
                if (ent.type === "GOAL") {
                    alert("CONGRATULATIONS! YOU REACHED THE GOAL!\nScore: " + score);
                    window.location.reload();
                }

                // Powerups
                if (ent.type === "POWERUP" && ent.state === "ALIVE") {
                    ent.state = "COLLECTED";
                    World.remove(physicsEngine.world, ent.body);
                    if (ent.category === "SPEED") speedBoost = Math.min(speedBoost + 1, 3);
                    if (ent.category === "RANGE") rangeBoost = Math.min(rangeBoost + 1, 3);
                    if (ent.category === "POWER") powerBoost = Math.min(powerBoost + 1, 3);
                    if (ent.category === "INVINCIBLE") invincibleTimer = 300;
                    if (["REVOLVER", "SHOTGUN", "MACHINE_GUN", "MISSILE", "SNIPER"].includes(ent.category as string)) {
                        const weaponType = ent.category as any;
                        const existing = inventory.find(w => w.type === weaponType);
                        if (existing) {
                            existing.ammo = Math.min(existing.ammo + 20, existing.maxAmmo);
                        } else {
                            inventory.push(createWeapon(weaponType));
                            activeWeaponIndex = inventory.length - 1;
                        }
                    }
                }

                // Bike Pickup
                if (ent.type === "BIKE" && ent.state === "ALIVE") {
                    ent.state = "COLLECTED";
                    onBike = true;
                    bikeHealth = 1;
                    World.remove(physicsEngine.world, ent.body);
                }

                // Enemy Collisions
                const isAbove = body.position.y < ent.body.position.y - ent.height / 2 + 5;
                if (isAbove && body.velocity.y > 0) {
                    if ((ent.type === "GOOMBA" || ent.type === "TURTLE" || ent.type === "FLYING_EYE") && ent.state === "ALIVE") {
                        const damage = pState === "KICKING" ? 5 : 1;
                        if (ent.health !== undefined) ent.health -= damage;
                        if (ent.health !== undefined && ent.health <= 0) {
                            ent.state = ent.type === "GOOMBA" ? "SQUASHED" : "SHELL";
                            if (ent.state === "SQUASHED" || ent.type === "FLYING_EYE") {
                                World.remove(physicsEngine.world, ent.body);
                                ent.body = undefined;
                                if (ent.type === "FLYING_EYE") ent.state = "COLLECTED";
                            }
                        }
                        Body.setVelocity(body, { x: body.velocity.x, y: -10 });
                    }
                } else if (invincibleTimer === 0 && (ent.type === "GOOMBA" || ent.type === "TURTLE" || ent.type === "FLYING_EYE") && ent.state === "ALIVE") {
                    if (onBike) {
                        onBike = false;
                        bikeHealth = 0;
                        invincibleTimer = 60;
                    } else {
                        health--;
                        invincibleTimer = 60;
                        if (health <= 0) pState = "DEAD";
                    }
                }
            }
        }

        // Projectile collisions (Restore Combat)
        if (ent.type === "PROJECTILE" && ent.state === "ALIVE") {
            const isEnemyBullet = ent.category === "ENEMY_BULLET";
            const projectileBody = ent.body!;

            // 1. Check collision with ground/walls (Disappear immediately)
            const groundBodies = physicsEngine.world.bodies.filter(b => b.label === "ground");
            if (Query.collides(projectileBody, groundBodies).length > 0) {
                ent.state = "COLLECTED";
                World.remove(physicsEngine.world, projectileBody);
                ent.body = undefined;
                return ent;
            }

            // 2. Check collision with player
            if (isEnemyBullet && Query.collides(body, [projectileBody]).length > 0 && invincibleTimer === 0) {
                if (onBike) {
                    onBike = false;
                    bikeHealth = 0;
                    invincibleTimer = 60;
                } else {
                    health--;
                    invincibleTimer = 60;
                    if (health <= 0) pState = "DEAD";
                }
                ent.state = "COLLECTED";
                World.remove(physicsEngine.world, projectileBody);
                ent.body = undefined;
                return ent;
            }

            // 3. Check collision with enemies (if player bullet)
            if (!isEnemyBullet) {
                state.entities.forEach(target => {
                    if (!ent.body) return;
                    if (target.body && (target.type === "GOOMBA" || target.type === "TURTLE" || target.type === "FLYING_EYE" || target.type === "BOSS") && target.state === "ALIVE") {
                        if (Query.collides(projectileBody, [target.body]).length > 0) {
                            if (target.health !== undefined) target.health -= (ent.damage || 1);
                            if (target.health !== undefined && target.health <= 0) {
                                target.state = target.type === "GOOMBA" ? "SQUASHED" : "ALIVE";
                                if (target.type === "TURTLE") target.state = "SHELL";
                                if (target.type === "FLYING_EYE" || target.type === "BOSS" || target.state === "SQUASHED") {
                                    World.remove(physicsEngine.world, target.body);
                                    target.body = undefined;
                                    target.state = "COLLECTED";
                                }
                            }
                            // Bullet disappears on hit
                            ent.state = "COLLECTED";
                            World.remove(physicsEngine.world, projectileBody);
                            ent.body = undefined;
                        }
                    }
                });
            }
        }

        return ent;
    }).filter(ent => ent.state !== "SQUASHED" && ent.state !== "COLLECTED");

    // --- Progression Check ---
    const bossAlive = updatedEntities.some(e => e.type === "BOSS" && e.state === "ALIVE");
    const atGoal = Query.collides(body, updatedEntities.filter(e => e.type === "GOAL").map(e => e.body!).filter(Boolean)).length > 0;

    if ((state.isBossStage && !bossAlive) || (!state.isBossStage && atGoal)) {
        // Transition to next stage
        const nextState = createInitialState(state.currentStage + 1);
        // Persist some player stats if desired (inventory, score, etc.)
        return {
            ...nextState,
            player: {
                ...nextState.player,
                inventory: inventory,
                activeWeaponIndex: player.activeWeaponIndex,
                score: player.score,
                health: Math.min(health + 2, maxHealth) // Small heal between stages
            }
        };
    }

    // --- Physics Step ---
    Engine.update(physicsEngine, 1000 / 60);

    // --- Ground Check ---
    const groundBodies = physicsEngine.world.bodies.filter(b => b.label === "ground");
    const onGround = Query.collides(body, groundBodies).length > 0 && body.velocity.y >= -0.1;

    if (onGround) {
        if (!isGrounded) {
            isGrounded = true;
            dashCount = player.maxDashes;
            jumpCount = 0;
            if (pState !== "DEAD" && pState !== "KICKING") pState = "IDLE";
            if (pState === "KICKING") pState = "IDLE";
        }
    } else {
        if (isGrounded) {
            isGrounded = false;
            coyoteTimer = COYOTE_TIME;
        }
    }

    // --- Camera Update ---
    const camX = Math.max(0, Math.min(state.worldWidth - 800, body.position.x - 400));
    const camera = { x: camX, y: 0 };

    return {
        ...state,
        player: {
            ...player,
            state: pState,
            pos: { x: body.position.x - player.width / 2, y: body.position.y - player.height / 2 },
            vel: { vx: body.velocity.x, vy: body.velocity.y },
            facing,
            isGrounded,
            dashCount,
            dashTimer,
            jumpCount,
            coyoteTimer,
            jumpBufferTimer,
            invincibleTimer,
            speedBoost,
            rangeBoost,
            powerBoost,
            shotTimer,
            health,
            maxHealth,
            inventory,
            activeWeaponIndex,
            score,
            onBike,
            bikeHealth
        },
        entities: updatedEntities.concat(spawnedEntities),
        camera
    };
}
