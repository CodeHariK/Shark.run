import { World, Bodies, Body } from "matter-js";
import { Entity } from "../../core/types";

export function createMovingPlatform(world: World, x: number, y: number, range: number, axis: "x" | "y" = "x", speed: number = 0.02): Entity {
    const body = Bodies.rectangle(x, y, 80, 20, {
        isStatic: true,
        label: "ground",
        friction: 1,
        restitution: 0
    });

    World.add(world, body);

    return {
        id: "platform_" + Math.random().toString(36).substr(2, 9),
        type: "MOVING_PLATFORM",
        state: "STATIC",
        pos: { x, y },
        vel: { vx: 0, vy: 0 },
        width: 80,
        height: 20,
        body,
        offset: { x, y },
        range,
        interval: speed,
        timer: 0,
        category: axis
    };
}

export function createAcidWater(x: number, y: number, width: number, height: number): Entity {
    return {
        id: "acid_" + Math.random().toString(36).substr(2, 9),
        type: "ACID_WATER",
        state: "STATIC",
        pos: { x, y },
        vel: { vx: 0, vy: 0 },
        width,
        height,
    };
}

export function updateMovingPlatform(ent: Entity) {
    if (!ent.body || !ent.offset) return;

    if (ent.timer !== undefined) ent.timer += ent.interval || 0.02;

    const wave = Math.sin(ent.timer || 0);
    const displacement = wave * (ent.range || 100);

    const newX = ent.offset.x + (ent.category === "y" ? 0 : displacement);
    const newY = ent.offset.y + (ent.category === "y" ? displacement : 0);

    // Calculate velocity for Matter.js to handle friction/collision with player correctly
    const vx = newX - ent.body.position.x;
    const vy = newY - ent.body.position.y;

    Body.setPosition(ent.body, { x: newX, y: newY });
    Body.setVelocity(ent.body, { x: vx, y: vy });

    ent.pos = { x: newX - ent.width / 2, y: newY - ent.height / 2 };
}
