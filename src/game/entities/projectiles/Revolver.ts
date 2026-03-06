import { World } from "matter-js";
import { Entity, Player } from "../../core/types";
import { createBasicProjectile } from "./Projectile";

export function fireRevolver(world: World, player: Player): Entity[] {
    const direction = player.facing === "RIGHT" ? 1 : -1;
    const startX = player.pos.x + (direction > 0 ? player.width : -10);
    const startY = player.pos.y + player.height / 2;

    return [createBasicProjectile(world, startX, startY, direction, 30, 1, "REVOLVER")];
}
