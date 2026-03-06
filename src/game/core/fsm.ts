import { PlayerState, PlayerAction } from "./types";

export type FSMTransitions = {
    [K in PlayerState]: Partial<Record<PlayerAction, PlayerState>>;
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
