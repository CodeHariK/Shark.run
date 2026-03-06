import { World, Bodies, Body } from "matter-js";
import { Entity, Player } from "../../core/types";

export function createMissileShooter(world: World, x: number, y: number, interval: number = 180): Entity {
    const body = Bodies.rectangle(x, y, 40, 40, { isStatic: true, label: "ground" });
    World.add(world, body);

    return {
        id: "shooter_" + Math.random().toString(36).substr(2, 9),
        type: "MISSILE_SHOOTER",
        state: "STATIC",
        pos: { x, y },
        vel: { vx: 0, vy: 0 },
        width: 40,
        height: 40,
        body,
        interval,
        timer: interval
    };
}

export function createLaserHazard(x: number, y: number, width: number, height: number, interval: number = 120): Entity {
    return {
        id: "laser_" + Math.random().toString(36).substr(2, 9),
        type: "LASER_HAZARD",
        state: "STATIC",
        pos: { x, y },
        vel: { vx: 0, vy: 0 },
        width,
        height,
        interval,
        timer: interval,
        isActive: false
    };
}

export function updateMissileShooter(ent: Entity, world: World, player: Player): Entity | null {
    if (ent.timer !== undefined) ent.timer--;

    if (ent.timer !== undefined && ent.timer <= 0) {
        ent.timer = ent.interval;

        // Spawn a missile
        const dir = player.pos.x > ent.pos.x ? 1 : -1;
        const startX = ent.pos.x + (dir > 0 ? 30 : -20);
        const startY = ent.pos.y + 10;

        const missileBody = Bodies.rectangle(startX, startY, 24, 12, {
            frictionAir: 0,
            label: "projectile",
            isSensor: true
        });
        Body.setVelocity(missileBody, { x: dir * 5, y: 0 });
        World.add(world, missileBody);

        return {
            id: "enemy_missile_" + Math.random().toString(36).substr(2, 9),
            type: "PROJECTILE",
            state: "ALIVE",
            pos: { x: startX, y: startY },
            vel: { vx: dir * 5, vy: 0 },
            width: 24,
            height: 12,
            body: missileBody,
            category: "MISSILE",
            damage: 2,
            timer: 200
        };
    }
    return null;
}

export function updateLaserHazard(ent: Entity) {
    if (ent.timer !== undefined) ent.timer--;

    if (ent.timer !== undefined && ent.timer <= 0) {
        ent.timer = ent.interval;
        ent.isActive = !ent.isActive;
    }
}
