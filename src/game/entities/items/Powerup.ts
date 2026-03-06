import { Bodies, World, Body } from "matter-js";
import { Entity, PowerupCategory } from "../../core/types";

export function createPowerup(world: World, x: number, y: number, categoryOverride?: PowerupCategory): Entity {
    const width = 24;
    const height = 24;

    const categories: PowerupCategory[] = ["SPEED", "RANGE", "POWER", "INVINCIBLE"];
    const category = categoryOverride || categories[Math.floor(Math.random() * categories.length)];

    const body = Bodies.rectangle(x, y, width, height, {
        inertia: Infinity,
        friction: 0,
        restitution: 0.2,
        label: "item"
    });

    World.add(world, body);

    // Pop out animation
    Body.setVelocity(body, { x: 0, y: -5 });

    return {
        id: "powerup-" + Math.random().toString(36).substr(2, 9),
        type: "POWERUP",
        state: "ALIVE",
        category,
        pos: { x: x - width / 2, y: y - height / 2 },
        vel: { vx: 2, vy: 0 },
        width,
        height,
        body
    };
}

export function updatePowerup(powerup: Entity) {
    if (!powerup.body || powerup.state !== "ALIVE") return;

    // Constant lateral speed
    Body.setVelocity(powerup.body, { x: powerup.vel.vx, y: powerup.body.velocity.y });

    // Wall bounce
    if (Math.abs(powerup.body.velocity.x) < 0.1) {
        powerup.vel.vx *= -1;
    }
}
