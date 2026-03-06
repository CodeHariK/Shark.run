import { Bodies, World, Body } from "matter-js";
import { Entity, Player } from "../../core/types";

export function createSnowball(world: World, player: Player): Entity {
    const size = 10 + (player.powerBoost * 4);
    const speed = 10;
    const velocityX = player.facing === "RIGHT" ? speed : -speed;

    const body = Bodies.circle(player.pos.x + player.width / 2, player.pos.y + player.height / 2, size / 2, {
        inertia: Infinity,
        friction: 0,
        frictionAir: 0,
        label: "projectile",
        isSensor: true // Don't push player, just detect overlap
    });

    World.add(world, body);
    Body.setVelocity(body, { x: velocityX, y: 0 });

    return {
        id: "snowball-" + Math.random().toString(36).substr(2, 9),
        type: "SNOWBALL",
        state: "ALIVE",
        pos: { x: body.position.x - size / 2, y: body.position.y - size / 2 },
        vel: { vx: velocityX, vy: 0 },
        width: size,
        height: size,
        timer: (30 + (player.rangeBoost * 20)), // Lifespan in frames
        body
    };
}

export function updateSnowball(snowball: Entity, world: World) {
    if (!snowball.body || snowball.state !== "ALIVE") return;

    if (snowball.timer && snowball.timer > 0) {
        snowball.timer--;
        if (snowball.timer <= 0) {
            snowball.state = "COLLECTED"; // Reuse for disposal
            World.remove(world, snowball.body);
            snowball.body = undefined;
        }
    }
}
