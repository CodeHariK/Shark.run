import { World } from "matter-js";
import { Entity, Player } from "../../core/types";
import { createBasicProjectile } from "./Projectile";

export function fireMachineGun(world: World, player: Player): Entity[] {
    const direction = player.facing === "RIGHT" ? 1 : -1;
    const startX = player.pos.x + (direction > 0 ? player.width : -10);
    const startY = player.pos.y + player.height / 2;

    // Slight random spread for MG
    const spread = (Math.random() - 0.5) * 0.05;
    return [createBasicProjectile(world, startX, startY, direction, 36, 0.5, "MACHINE_GUN", spread)];
}
