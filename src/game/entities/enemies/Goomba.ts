import { Bodies, World, Body, Query } from "matter-js";
import { Entity } from "../../core/types";

export function createGoomba(world: World, x: number, y: number): Entity {
    const width = 30;
    const height = 30;

    const body = Bodies.rectangle(x, y, width, height, {
        inertia: Infinity,
        friction: 0,
        label: "enemy",
        restitution: 0.1
    });

    World.add(world, body);

    return {
        id: "goomba-" + Math.random().toString(36).substr(2, 9),
        type: "GOOMBA",
        state: "ALIVE",
        pos: { x, y },
        vel: { vx: -1.5, vy: 0 },
        width,
        height,
        body,
        facing: "LEFT",
        health: 1,
        maxHealth: 1,
        timer: 0
    };
}

export function updateGoomba(goomba: Entity, bodies: any[]) {
    if (goomba.state !== "ALIVE" || !goomba.body) return;

    // Patrolling logic: Check for walls OR ledges
    const filter = bodies.filter(b => b.label === "ground");
    const aheadX = goomba.body.position.x + (goomba.vel.vx > 0 ? 15 : -15);
    const aheadY = goomba.body.position.y + 20;

    const floorAhead = Query.point(filter, { x: aheadX, y: aheadY }).length > 0;
    const wallAhead = Math.abs(goomba.body.velocity.x) < 0.1;

    if (wallAhead || !floorAhead) {
        goomba.vel.vx *= -1;
        goomba.facing = goomba.vel.vx > 0 ? "RIGHT" : "LEFT";
    }

    Body.setVelocity(goomba.body, { x: goomba.vel.vx, y: goomba.body.velocity.y });
}
