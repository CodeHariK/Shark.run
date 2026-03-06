import { Entity } from "../core/types";
import { World } from "matter-js";

export enum NodeStatus {
    SUCCESS,
    FAILURE,
    RUNNING
}

export abstract class BTNode {
    abstract tick(blackboard: Blackboard): NodeStatus;
}

export interface Blackboard {
    ent: Entity;
    world: World;
    playerPos: { x: number, y: number };
    playerVel: { vx: number, vy: number };
    allEntities: Entity[];
    spawnedEntities: Entity[];
    [key: string]: any;
}

export class Sequence extends BTNode {
    private children: BTNode[];
    constructor(children: BTNode[]) {
        super();
        this.children = children;
    }
    tick(blackboard: Blackboard): NodeStatus {
        for (const child of this.children) {
            const status = child.tick(blackboard);
            if (status !== NodeStatus.SUCCESS) return status;
        }
        return NodeStatus.SUCCESS;
    }
}

export class Selector extends BTNode {
    private children: BTNode[];
    constructor(children: BTNode[]) {
        super();
        this.children = children;
    }
    tick(blackboard: Blackboard): NodeStatus {
        for (const child of this.children) {
            const status = child.tick(blackboard);
            if (status !== NodeStatus.FAILURE) return status;
        }
        return NodeStatus.FAILURE;
    }
}

export class ActionNode extends BTNode {
    private action: (blackboard: Blackboard) => NodeStatus;
    constructor(action: (blackboard: Blackboard) => NodeStatus) {
        super();
        this.action = action;
    }
    tick(blackboard: Blackboard): NodeStatus {
        return this.action(blackboard);
    }
}

export class ConditionNode extends BTNode {
    private condition: (blackboard: Blackboard) => boolean;
    constructor(condition: (blackboard: Blackboard) => boolean) {
        super();
        this.condition = condition;
    }
    tick(blackboard: Blackboard): NodeStatus {
        return this.condition(blackboard) ? NodeStatus.SUCCESS : NodeStatus.FAILURE;
    }
}
