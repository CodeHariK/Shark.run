import { Body } from "matter-js";
import { Player, Entity } from "../core/types";

export function performDash(player: Player): boolean {
    if (player.dashCount > 0 && player.state !== "DASHING") {
        player.state = "DASHING";
        player.dashTimer = 10;
        player.dashCount--;
        return true;
    }
    return false;
}

export function performSuperheroKick(player: Player, entities: Entity[]): boolean {
    if (player.state !== "JUMPING" && player.state !== "FALLING") return false;

    // Check if any enemy is below and far enough
    const KICK_RANGE = 200;
    const enemyBelow = entities.find(ent => {
        if (ent.type !== "GOOMBA" && ent.type !== "TURTLE") return false;
        const dx = Math.abs(player.pos.x - (ent.pos.x + ent.width / 2));
        const dy = ent.pos.y - player.pos.y;
        return dx < 32 && dy > 40 && dy < KICK_RANGE;
    });

    if (enemyBelow && player.body) {
        player.state = "KICKING";
        Body.setVelocity(player.body, { x: 0, y: 15 }); // Fast dive
        return true;
    }
    return false;
}
