import { Engine, Body } from "matter-js";

export type EntityType = "PLAYER" | "GOOMBA" | "TURTLE" | "FIRE_ROD_SEGMENT" | "FIRE_ROD_PIVOT" | "BRICK" | "POWERUP" | "SNOWBALL" | "JUMP_PLATFORM" | "PROJECTILE" | "MISSILE_SHOOTER" | "LASER_HAZARD" | "MOVING_PLATFORM" | "ACID_WATER" | "PORTAL" | "GOAL" | "COIN" | "FLYING_EYE" | "BOSS" | "BIKE" | "SHOCKWAVE";

export type PlayerState = "IDLE" | "WALKING" | "JUMPING" | "FALLING" | "CROUCHING" | "DASHING" | "KICKING" | "DEAD";

export type EntityState = "ALIVE" | "SQUASHED" | "SHELL" | "KICKED" | "STATIC" | "BUMPED" | "COLLECTED";

export type PowerupCategory = "SPEED" | "RANGE" | "POWER" | "INVINCIBLE" | "REVOLVER" | "SHOTGUN" | "MACHINE_GUN" | "MISSILE" | "SNIPER";

export type WeaponType = "REVOLVER" | "SHOTGUN" | "MACHINE_GUN" | "MISSILE" | "SNIPER";

export interface Weapon {
    type: WeaponType;
    ammo: number;
    maxAmmo: number;
    cooldown: number;
    lastFired: number;
}

export type PlayerAction = "MOVE_LEFT" | "MOVE_RIGHT" | "JUMP" | "STOP" | "LAND" | "FALL" | "DASH" | "END_DASH" | "KICK" | "SWITCH_WEAPON" | "DIE";

export interface Position {
    x: number;
    y: number;
}

export interface Velocity {
    vx: number;
    vy: number;
}

export interface Entity {
    id: string;
    type: EntityType;
    state: EntityState | PlayerState;
    pos: Position;
    vel: Velocity;
    width: number;
    height: number;
    body?: Body;
    facing?: "LEFT" | "RIGHT";
    timer?: number;
    category?: PowerupCategory | string;
    health?: number;
    maxHealth?: number;
    damage?: number;
    offset?: Position;
    range?: number;
    interval?: number;
    isActive?: boolean;
}

export interface Player extends Entity {
    state: PlayerState;
    facing: "LEFT" | "RIGHT";
    isGrounded: boolean;
    dashCount: number;
    maxDashes: number;
    dashTimer: number;
    jumpCount: number;
    maxJumps: number;
    coyoteTimer: number;
    jumpBufferTimer: number;
    invincibleTimer: number;

    // Snow Bros Stats
    speedBoost: number;  // Red Potion
    rangeBoost: number;  // Blue Potion
    powerBoost: number;  // Yellow Potion
    shotTimer: number;

    // Dan the Man Inventory
    inventory: Weapon[];
    activeWeaponIndex: number;
    score: number;
    onBike?: boolean;
    bikeHealth?: number;
}

export interface GameState {
    player: Player;
    entities: Entity[];
    gravity: number;
    friction: number;
    airFriction: number;
    physicsEngine?: Engine;
    camera: Position;
    worldWidth: number;
    worldHeight: number;
    currentStage: number;
    isBossStage: boolean;
}

export type FSMTransitions = {
    [K in PlayerState]: {
        [A in PlayerAction]?: PlayerState;
    };
};

export const MARIO_FSM: FSMTransitions = {
    IDLE: {
        MOVE_LEFT: "WALKING",
        MOVE_RIGHT: "WALKING",
        JUMP: "JUMPING",
        FALL: "FALLING",
        DASH: "DASHING",
        KICK: "KICKING",
    },
    WALKING: {
        STOP: "IDLE",
        JUMP: "JUMPING",
        FALL: "FALLING",
        DASH: "DASHING",
        KICK: "KICKING",
    },
    JUMPING: {
        FALL: "FALLING",
        LAND: "IDLE",
        DASH: "DASHING",
        JUMP: "JUMPING",
        KICK: "KICKING",
    },
    FALLING: {
        LAND: "IDLE",
        JUMP: "JUMPING",
        DASH: "DASHING",
        KICK: "KICKING",
    },
    DASHING: {
        END_DASH: "FALLING",
    },
    KICKING: {
        LAND: "IDLE",
    },
    CROUCHING: {},
    DEAD: {}
};
