import { World, Bodies } from "matter-js";
import { Entity } from "../../core/types";

export function createCoin(world: World, x: number, y: number): Entity {
    const body = Bodies.circle(x, y, 10, {
        isStatic: true,
        isSensor: true,
        label: "coin"
    });

    World.add(world, body);

    return {
        id: Math.random().toString(36).substr(2, 9),
        type: "COIN",
        state: "ALIVE",
        pos: { x: x - 10, y: y - 10 },
        vel: { vx: 0, vy: 0 },
        width: 20,
        height: 20,
        body
    };
}
