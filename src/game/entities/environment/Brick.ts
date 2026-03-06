import { Bodies, World } from "matter-js";
import { Entity } from "../../core/types";

export function createBrick(world: World, x: number, y: number, containsItem: boolean = false): Entity {
    const width = 32;
    const height = 32;

    const body = Bodies.rectangle(x, y, width, height, {
        isStatic: true,
        label: "ground", // So player can stand on it
        friction: 0.1,
        restitution: 0
    });

    World.add(world, body);

    return {
        id: "brick-" + Math.random().toString(36).substr(2, 9),
        type: "BRICK",
        state: "STATIC",
        pos: { x: x - width / 2, y: y - height / 2 },
        vel: { vx: 0, vy: 0 },
        width,
        height,
        body,
        timer: containsItem ? 1 : 0 // timer > 0 means has item
    };
}

export function bumpBrick(brick: Entity) {
    if (brick.state !== "STATIC") return;
    brick.state = "BUMPED";
    brick.timer = 10; // Animation timer
}

export function updateBrick(brick: Entity) {
    if (brick.state === "BUMPED" && brick.timer && brick.timer > 0) {
        brick.timer--;
        if (brick.timer <= 0) {
            brick.state = "STATIC";
        }
    }
}
