import { Entity } from "../../core/types";

export function createFireRod(x: number, y: number, length: number): Entity[] {
    const pivotId = "pivot-" + Math.random().toString(36).substr(2, 9);
    const pivot: Entity = {
        id: pivotId,
        type: "FIRE_ROD_PIVOT",
        state: "STATIC",
        pos: { x, y },
        vel: { vx: 0, vy: 0 },
        width: 10,
        height: 10,
        timer: 0 // angle
    };

    const segments: Entity[] = [];
    for (let i = 1; i <= length; i++) {
        segments.push({
            id: `fire-${i}-${pivotId}`, // Fixed ID structure for matching
            type: "FIRE_ROD_SEGMENT",
            state: "STATIC",
            pos: { x: x + i * 20, y },
            vel: { vx: 0, vy: 0 },
            width: 16,
            height: 16,
        });
    }

    return [pivot, ...segments];
}

export function updateFireRod(entities: Entity[]) {
    const pivots = entities.filter(e => e.type === "FIRE_ROD_PIVOT");

    pivots.forEach(pivot => {
        pivot.timer = (pivot.timer || 0) + 0.05; // Update angle
        const angle = pivot.timer;

        // Find segments belonging to this pivot
        entities.forEach(ent => {
            if (ent.type === "FIRE_ROD_SEGMENT" && ent.id.endsWith(pivot.id)) {
                const idx = parseInt(ent.id.split("-")[1]);
                ent.pos.x = pivot.pos.x + Math.cos(angle) * (idx * 20);
                ent.pos.y = pivot.pos.y + Math.sin(angle) * (idx * 20);
            }
        });
    });
}
