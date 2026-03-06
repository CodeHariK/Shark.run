import { World } from "matter-js";
import { Entity } from "../../core/types";

export function createBoss(_world: World, x: number, y: number): Entity {
    // Placeholder for future boss implementation
    return {
        id: "boss-placeholder",
        type: "GOOMBA", // Temporary type
        state: "ALIVE",
        pos: { x, y },
        vel: { vx: 0, vy: 0 },
        width: 60,
        height: 80,
        timer: 0
    };
}
