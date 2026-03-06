import { World, Bodies } from "matter-js";
import { Entity } from "../../core/types";

export function createGoal(world: World, x: number, y: number): Entity {
    const body = Bodies.rectangle(x, y, 40, 60, {
        isStatic: true,
        isSensor: true,
        label: "goal"
    });

    World.add(world, body);

    return {
        id: "goal-final",
        type: "GOAL",
        state: "STATIC",
        pos: { x: x - 20, y: y - 30 },
        vel: { vx: 0, vy: 0 },
        width: 40,
        height: 60,
        body
    };
}
