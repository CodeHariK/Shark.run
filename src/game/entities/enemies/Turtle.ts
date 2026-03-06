import { Bodies, World, Body, Query } from "matter-js";
import { Entity } from "../../core/types";

export function createTurtle(world: World, x: number, y: number): Entity {
    const width = 24;
    const height = 36;

    const body = Bodies.rectangle(x, y, width, height, {
        inertia: Infinity,
        friction: 0,
        label: "enemy",
        restitution: 0.1
    });

    World.add(world, body);

    return {
        id: "turtle-" + Math.random().toString(36).substr(2, 9),
        type: "TURTLE",
        state: "ALIVE",
        pos: { x, y },
        vel: { vx: -1.2, vy: 0 },
        width,
        height,
        body,
        facing: "LEFT",
        health: 1,
        maxHealth: 1,
        timer: 0
    };
}

export function updateTurtle(turtle: Entity, worldBodies: Body[]) {
    if (!turtle.body) return;

    if (turtle.state === "ALIVE") {
        if (Math.abs(turtle.body.velocity.x) < 0.1) {
            turtle.vel.vx *= -1;
            turtle.facing = turtle.vel.vx > 0 ? "RIGHT" : "LEFT";
        }
        Body.setVelocity(turtle.body, { x: turtle.vel.vx, y: turtle.body.velocity.y });
    } else if (turtle.state === "KICKED") {
        Body.setVelocity(turtle.body, { x: turtle.vel.vx, y: turtle.body.velocity.y });

        // Bounce off static walls
        const staticWalls = worldBodies.filter(b => b.isStatic && b.label === "ground");
        if (Query.collides(turtle.body, staticWalls).length > 0 && Math.abs(turtle.body.velocity.x) < 0.1) {
            turtle.vel.vx *= -1;
        }
    }
}
