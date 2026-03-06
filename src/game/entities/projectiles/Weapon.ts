import { World } from "matter-js";
import { WeaponType, Weapon, Player, Entity } from "../../core/types";
import { fireRevolver } from "./Revolver";
import { fireShotgun } from "./Shotgun";
import { fireMachineGun } from "./MachineGun";
import { fireMissile } from "./Missile";
import { fireSniper } from "./Sniper";

export function createWeapon(type: WeaponType): Weapon {
    const weaponMap: Record<WeaponType, Partial<Weapon>> = {
        REVOLVER: { ammo: 100, maxAmmo: 100, cooldown: 15 },
        SHOTGUN: { ammo: 10, maxAmmo: 20, cooldown: 40 },
        MACHINE_GUN: { ammo: 50, maxAmmo: 100, cooldown: 5 },
        MISSILE: { ammo: 5, maxAmmo: 10, cooldown: 60 },
        SNIPER: { ammo: 5, maxAmmo: 10, cooldown: 80 }
    };
    const base = weaponMap[type];
    return {
        type,
        ammo: base.ammo!,
        maxAmmo: base.maxAmmo!,
        cooldown: base.cooldown!,
        lastFired: 0
    };
}

export function fireWeapon(world: World, player: Player): Entity[] {
    const weapon = player.inventory[player.activeWeaponIndex];
    if (!weapon || weapon.ammo <= 0) return [];

    weapon.ammo--;

    switch (weapon.type) {
        case "REVOLVER": return fireRevolver(world, player);
        case "SHOTGUN": return fireShotgun(world, player);
        case "MACHINE_GUN": return fireMachineGun(world, player);
        case "MISSILE": return fireMissile(world, player);
        case "SNIPER": return fireSniper(world, player);
        default: return [];
    }
}
