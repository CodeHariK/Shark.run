import { World, Bodies } from "matter-js";
import { Entity } from "../../core/types";

export function createJumpingPlatform(world: World, x: number, y: number): Entity {
    const body = Bodies.rectangle(x, y, 40, 20, {
        isStatic: true,
        label: "ground", // So player can stand on it
    });

    World.add(world, body);

    return {
        id: "spring_" + Math.random().toString(36).substr(2, 9),
        type: "JUMP_PLATFORM",
        state: "STATIC",
        pos: { x, y },
        vel: { vx: 0, vy: 0 },
        width: 40,
        height: 20,
        body,
        timer: 0 // Used for animation state
    };
}

export function updateJumpingPlatform(ent: Entity) {
    if (ent.timer && ent.timer > 0) {
        ent.timer--;
        ent.state = "BUMPED";
    } else {
        ent.state = "STATIC";
    }
}
