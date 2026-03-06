import { World } from "matter-js";
import { Entity, Player } from "../../core/types";
import { createBasicProjectile } from "./Projectile";

export function fireSniper(world: World, player: Player): Entity[] {
    const direction = player.facing === "RIGHT" ? 1 : -1;
    const startX = player.pos.x + (direction > 0 ? player.width : -10);
    const startY = player.pos.y + player.height / 2;

    // Very fast, high damage, long lifespan (piercing could be added later)
    return [createBasicProjectile(world, startX, startY, direction, 75, 10, "SNIPER", 0, 4, 300)];
}
