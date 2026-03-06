import { World } from "matter-js";
import { Entity, Player } from "../../core/types";
import { createBasicProjectile } from "./Projectile";

export function fireShotgun(world: World, player: Player): Entity[] {
    const direction = player.facing === "RIGHT" ? 1 : -1;
    const startX = player.pos.x + (direction > 0 ? player.width : -10);
    const startY = player.pos.y + player.height / 2;

    const projectiles: Entity[] = [];
    for (let i = -1; i <= 1; i++) {
        projectiles.push(createBasicProjectile(world, startX, startY, direction, 24, 1, "SHOTGUN", i * 0.1));
    }
    return projectiles;
}
