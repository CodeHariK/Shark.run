import { World, Bodies } from "matter-js";
import { Entity } from "../../core/types";

export function createBike(world: World, x: number, y: number): Entity {
    const body = Bodies.rectangle(x, y, 40, 30, {
        isStatic: true, // It's static until picked up
        isSensor: true,
        label: "bike"
    });

    World.add(world, body);

    return {
        id: Math.random().toString(36).substr(2, 9),
        type: "BIKE",
        state: "ALIVE",
        pos: { x: x - 20, y: y - 15 },
        vel: { vx: 0, vy: 0 },
        width: 40,
        height: 30,
        body
    };
}
