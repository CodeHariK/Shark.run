import { World, Bodies, Body } from "matter-js";
import { Entity } from "../../core/types";

export function createBasicProjectile(
    world: World,
    x: number,
    y: number,
    dir: number,
    speed: number,
    damage: number,
    category: string,
    angleOffset: number = 0,
    size: number = 6,
    lifespan: number = 100
): Entity {
    const body = Bodies.rectangle(x, y, size, size, {
        friction: 0,
        frictionAir: 0,
        frictionStatic: 0,
        label: "projectile",
        isSensor: true
    });

    Body.setVelocity(body, {
        x: dir * speed,
        y: angleOffset * speed
    });

    World.add(world, body);

    return {
        id: Math.random().toString(36).substr(2, 9),
        type: "PROJECTILE",
        state: "ALIVE",
        pos: { x, y },
        vel: { vx: dir * speed, vy: angleOffset * speed },
        width: size,
        height: size,
        body,
        category,
        damage,
        timer: lifespan
    };
}

export function updateProjectile(ent: Entity, world: World) {
    if (!ent.body) return;

    // Ensure straight line travel by constant velocity
    if (ent.vel) {
        Body.setVelocity(ent.body, { x: ent.vel.vx, y: ent.vel.vy });
    }

    if (ent.timer !== undefined) ent.timer--;
    if (ent.timer !== undefined && ent.timer <= 0) {
        ent.state = "COLLECTED";
        World.remove(world, ent.body);
        ent.body = undefined;
    }
}
