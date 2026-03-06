import { World, Bodies } from "matter-js";
import { Entity } from "../../core/types";

export function createPortal(world: World, x: number, y: number, linkId?: string): Entity {
    const body = Bodies.rectangle(x, y, 40, 60, {
        isStatic: true,
        isSensor: true,
        label: "portal"
    });

    World.add(world, body);

    return {
        id: Math.random().toString(36).substr(2, 9),
        type: "PORTAL",
        state: "STATIC",
        pos: { x: x - 20, y: y - 30 },
        vel: { vx: 0, vy: 0 },
        width: 40,
        height: 60,
        body,
        category: linkId, // Use category to store link information
        timer: 0 // Cooldown timer
    };
}

export function updatePortal(ent: Entity) {
    if (ent.timer && ent.timer > 0) ent.timer--;
}
