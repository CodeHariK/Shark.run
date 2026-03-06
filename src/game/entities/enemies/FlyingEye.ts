import { Bodies, World, Body } from "matter-js";
import { Entity } from "../../core/types";

export function createFlyingEye(world: World, x: number, y: number): Entity {
    const body = Bodies.circle(x, y, 15, {
        inertia: Infinity,
        frictionAir: 0.1,
        label: "enemy",
        isStatic: false
    });
    World.add(world, body);

    return {
        id: Math.random().toString(36).substr(2, 9),
        type: "FLYING_EYE",
        state: "ALIVE",
        pos: { x, y },
        vel: { vx: 0, vy: 0 },
        width: 30,
        height: 30,
        body,
        health: 2,
        maxHealth: 2,
        timer: 0 // Used for movement pattern
    };
}

export function updateFlyingEye(ent: Entity, playerPos: { x: number, y: number }) {
    if (!ent.body || ent.state !== "ALIVE") return;

    if (ent.timer === undefined) ent.timer = 0;
    ent.timer += 0.05;

    // Sinusoidal hover + move towards player if close
    const dx = playerPos.x - ent.body.position.x;
    const dy = playerPos.y - ent.body.position.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    let targetVx = Math.cos(ent.timer) * 2;
    let targetVy = Math.sin(ent.timer * 2) * 1;

    if (dist < 300) {
        targetVx = (dx / dist) * 2.5;
        targetVy = (dy / dist) * 2.5;
    }

    Body.setVelocity(ent.body, { x: targetVx, y: targetVy });
}
