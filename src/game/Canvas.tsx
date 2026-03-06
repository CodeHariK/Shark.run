import { createSignal, onCleanup, onMount } from "solid-js";
import { createInitialState, update } from "./core/engine";
import { GameState } from "./core/types";

export function Canvas() {
    let canvasRef: HTMLCanvasElement | undefined;
    let state: GameState = createInitialState();
    const keys = new Set<string>();

    const [dimensions, setDimensions] = createSignal({ width: window.innerWidth, height: window.innerHeight });

    const onKeyDown = (e: KeyboardEvent) => {
        keys.add(e.key);
        if (e.key === "n" || e.key === "N") {
            const nextStage = state.currentStage + 1;
            const nextState = createInitialState(nextStage);
            state = {
                ...nextState,
                player: {
                    ...nextState.player,
                    inventory: state.player.inventory,
                    activeWeaponIndex: state.player.activeWeaponIndex,
                    score: state.player.score,
                    health: state.player.health
                }
            };
        }
    };
    const onKeyUp = (e: KeyboardEvent) => keys.delete(e.key);

    const onMouseDown = (e: PointerEvent) => {
        if (!canvasRef) return;
        const rect = canvasRef.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        // Check inventory slots
        state.player.inventory.forEach((_, i) => {
            const sx = 20 + i * 90;
            const sy = 80;
            if (mx >= sx && mx <= sx + 80 && my >= sy && my <= sy + 45) {
                state.player.activeWeaponIndex = i;
                state.player.shotTimer = 5; // Small delay
            }
        });
    };

    const render = (ctx: CanvasRenderingContext2D) => {
        // Clear background
        ctx.fillStyle = "#87CEEB";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Draw HUD (Fixed)
        const { player, entities, camera } = state;
        ctx.fillStyle = "#fff";
        ctx.font = "bold 16px Inter, sans-serif";
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(0,0,0,0.5)";
        ctx.fillText(`HP: ${player.health}/${player.maxHealth}`, 20, 30);
        ctx.font = "bold 18px Inter, sans-serif";
        ctx.textAlign = "right";
        const stageLabel = state.isBossStage ? "BOSS STAGE" : `STAGE ${state.currentStage}`;
        ctx.fillText(stageLabel, ctx.canvas.width - 20, 30);
        ctx.textAlign = "left";

        ctx.font = "14px Inter, sans-serif";
        ctx.fillText(`SPD: ${player.speedBoost} RNG: ${player.rangeBoost} PWR: ${player.powerBoost}`, 20, 55);

        ctx.font = "14px Inter, sans-serif";
        ctx.fillText(`SPD: ${player.speedBoost} RNG: ${player.rangeBoost} PWR: ${player.powerBoost}`, 20, 55);

        // Skip Stage Hint
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.font = "italic 12px Inter, sans-serif";
        ctx.textAlign = "right";
        ctx.fillText("Press [N] to Skip Stage", ctx.canvas.width - 20, 55);
        ctx.textAlign = "left";

        // Inventory HUD
        player.inventory.forEach((w, i) => {
            const isActive = i === player.activeWeaponIndex;
            const x = 20 + i * 90;
            const y = 80;

            ctx.fillStyle = isActive ? "rgba(255, 255, 255, 0.3)" : "rgba(0,0,0,0.4)";
            ctx.strokeStyle = isActive ? "#fff" : "#666";
            ctx.lineWidth = isActive ? 2 : 1;
            ctx.beginPath();
            ctx.roundRect(x, y, 80, 45, 6);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#fff";
            ctx.font = "bold 11px Inter, sans-serif";
            ctx.fillText(w.type, x + 8, y + 18);
            ctx.font = "10px Inter, sans-serif";
            ctx.fillText(`${w.ammo}/${w.maxAmmo}`, x + 8, y + 35);
        });

        if (player.inventory.length > 0) {
            ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
            ctx.font = "italic 10px Inter, sans-serif";
            ctx.fillText("CLICK SLOTS TO SWITCH", 20, 140);
        }

        // --- Boss Health Bar (HUD) ---
        const boss = entities.find(e => e.type === "BOSS" && e.state === "ALIVE");
        if (boss && boss.health !== undefined && boss.maxHealth !== undefined) {
            const barWidth = dimensions().width * 0.6;
            const barHeight = 20;
            const bx = (dimensions().width - barWidth) / 2;
            const by = dimensions().height - 50;

            // Background
            ctx.fillStyle = "rgba(0,0,0,0.6)";
            ctx.fillRect(bx, by, barWidth, barHeight);

            // Fill
            const hpRatio = boss.health / boss.maxHealth;
            const isEnraged = boss.health < boss.maxHealth * 0.5;
            const gradient = ctx.createLinearGradient(bx, 0, bx + barWidth, 0);

            if (isEnraged) {
                gradient.addColorStop(0, "#d50000");
                gradient.addColorStop(1, "#ff5252");
            } else {
                gradient.addColorStop(0, "#4a148c");
                gradient.addColorStop(1, "#b39ddb");
            }

            ctx.fillStyle = gradient;
            ctx.fillRect(bx, by, barWidth * hpRatio, barHeight);

            // Border
            ctx.strokeStyle = isEnraged ? "#ff5252" : "#fff";
            ctx.lineWidth = 2;
            ctx.strokeRect(bx, by, barWidth, barHeight);

            // Text
            ctx.fillStyle = "#fff";
            ctx.font = "bold 12px Inter, sans-serif";
            ctx.textAlign = "center";
            const label = isEnraged ? "ANCIENT GUARDIAN - ENRAGED" : "ANCIENT GUARDIAN";
            ctx.fillText(`${label} - ${Math.ceil(boss.health)}/${boss.maxHealth}`, bx + barWidth / 2, by - 8);
            ctx.textAlign = "start";
        }

        // --- Controls UI ---
        ctx.fillStyle = "rgba(0,0,0,0.4)";
        ctx.fillRect(dimensions().width - 220, 20, 200, 160);
        ctx.strokeStyle = "rgba(255,255,255,0.2)";
        ctx.strokeRect(dimensions().width - 220, 20, 200, 160);

        ctx.fillStyle = "white";
        ctx.font = "bold 12px Inter, sans-serif";
        ctx.fillText("CONTROLS", dimensions().width - 210, 40);

        const controls = [
            "ARROWS : Move / Jump",
            "Z / SPACE : Jump",
            "X / SHIFT : Dash",
            "S / DOWN : Superhero Kick",
            "F / C : Shoot",
            "Q / E : Switch Weapon"
        ];
        ctx.font = "10px Inter, sans-serif";
        controls.forEach((c, i) => {
            ctx.fillText(c, dimensions().width - 210, 65 + i * 18);
        });

        ctx.shadowBlur = 0; // Reset shadow

        // --- Start World Rendering ---
        ctx.save();
        ctx.translate(-camera.x, -camera.y);

        // Draw Environment (Ground bodies from physics world)
        ctx.fillStyle = "#3e2723";
        const groundBodies = state.physicsEngine?.world.bodies.filter(b => b.label === "ground") || [];
        groundBodies.forEach(gb => {
            const w = gb.bounds.max.x - gb.bounds.min.x;
            const h = gb.bounds.max.y - gb.bounds.min.y;
            ctx.fillRect(gb.position.x - w / 2, gb.position.y - h / 2, w, h);
            ctx.strokeStyle = "#261b15";
            ctx.lineWidth = 1;
            ctx.strokeRect(gb.position.x - w / 2, gb.position.y - h / 2, w, h);
        });

        const drawHealthBar = (x: number, y: number, w: number, current: number, max: number) => {
            if (current >= max && max === 1) return;
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fillRect(x, y - 10, w, 4);
            ctx.fillStyle = (current / max < 0.3) ? "#ff5252" : "#4caf50";
            ctx.fillRect(x, y - 10, (current / max) * w, 4);

            // Health Numbers
            ctx.fillStyle = "#fff";
            ctx.font = "bold 10px Inter, sans-serif";
            ctx.textAlign = "center";
            ctx.shadowColor = "black";
            ctx.shadowBlur = 2;
            ctx.fillText(`${Math.ceil(current)}/${max}`, x + w / 2, y - 12);
            ctx.shadowBlur = 0;
            ctx.textAlign = "start";
        };

        // Draw Player (with invincibility flash)
        if (player.invincibleTimer % 4 < 2) {
            if (player.onBike) {
                // Draw Bike under player
                ctx.fillStyle = "#ff5722";
                ctx.fillRect(player.pos.x - 5, player.pos.y + 20, player.width + 10, 15);
                ctx.fillStyle = "#333";
                // Wheels
                ctx.beginPath();
                ctx.arc(player.pos.x, player.pos.y + 35, 8, 0, Math.PI * 2);
                ctx.arc(player.pos.x + player.width, player.pos.y + 35, 8, 0, Math.PI * 2);
                ctx.fill();

                // Draw Player on top
                ctx.fillStyle = "#ef5350";
                ctx.fillRect(player.pos.x, player.pos.y, player.width, 25);
            } else {
                if (player.state === "DASHING") ctx.fillStyle = "#00bcd4";
                else if (player.state === "KICKING") ctx.fillStyle = "#2979ff";
                else if (player.dashCount === 0) ctx.fillStyle = "#78909c";
                else ctx.fillStyle = (player.state === "JUMPING" || player.state === "FALLING") ? "#ffd600" : "#ef5350";

                ctx.fillRect(player.pos.x, player.pos.y, player.width, player.height);
            }

            drawHealthBar(player.pos.x, player.pos.y, player.width, player.health || 0, player.maxHealth || 1);

            if (player.state === "KICKING") {
                ctx.fillStyle = "rgba(41, 121, 255, 0.4)";
                ctx.fillRect(player.pos.x, player.pos.y - 15, player.width, 10);
                ctx.fillRect(player.pos.x, player.pos.y - 30, player.width, 10);
            }
        }

        // Draw Entities
        entities.forEach(ent => {
            if (ent.type === "GOOMBA") {
                ctx.fillStyle = ent.state === "SQUASHED" ? "#3e2723" : "#795548";
                ctx.fillRect(ent.pos.x, ent.state === "SQUASHED" ? ent.pos.y + 20 : ent.pos.y, ent.width, ent.state === "SQUASHED" ? 10 : ent.height);
                if (ent.state === "ALIVE") drawHealthBar(ent.pos.x, ent.pos.y, ent.width, ent.health || 0, ent.maxHealth || 1);
            } else if (ent.type === "TURTLE") {
                ctx.fillStyle = ent.state === "ALIVE" ? "#4caf50" : (ent.state === "KICKED" ? "#e91e63" : "#2e7d32");
                ctx.fillRect(ent.pos.x, ent.pos.y, ent.width, ent.height);
                if (ent.state === "ALIVE") drawHealthBar(ent.pos.x, ent.pos.y, ent.width, ent.health || 0, ent.maxHealth || 1);
            } else if (ent.type === "BRICK") {
                ctx.fillStyle = "#8d6e63";
                const offsetY = ent.state === "BUMPED" ? -8 : 0;
                ctx.fillRect(ent.pos.x, ent.pos.y + offsetY, ent.width, ent.height);
                ctx.strokeStyle = "#3e2723";
                ctx.strokeRect(ent.pos.x, ent.pos.y + offsetY, ent.width, ent.height);
            } else if (ent.type === "POWERUP") {
                const colors: Record<string, string> = {
                    SPEED: "#2196f3", RANGE: "#9c27b0", POWER: "#ffeb3b", INVINCIBLE: "#ffffff",
                    REVOLVER: "#cfd8dc", SHOTGUN: "#ff9800", MACHINE_GUN: "#009688", MISSILE: "#607d8b", SNIPER: "#3e2723"
                };
                ctx.fillStyle = colors[ent.category as string] || "#fff";
                ctx.fillRect(ent.pos.x + 6, ent.pos.y + 8, 12, 14);
                ctx.fillStyle = "#333";
                ctx.fillRect(ent.pos.x + 9, ent.pos.y + 4, 6, 4);
            } else if (ent.type === "PROJECTILE") {
                ctx.fillStyle = ent.category === "ENEMY_BULLET" ? "#f44336" :
                    (ent.category === "MISSILE" ? "#455a64" :
                        (ent.category === "SNIPER" ? "#ffd600" :
                            (ent.category === "GRENADE" ? "#1b5e20" : "#fff")));
                ctx.shadowBlur = 8;
                ctx.shadowColor = ctx.fillStyle as string;
                if (ent.category === "MISSILE") {
                    ctx.fillRect(ent.pos.x, ent.pos.y, ent.width * 2, ent.height);
                } else if (ent.category === "SNIPER") {
                    ctx.fillRect(ent.pos.x, ent.pos.y, ent.width * 3, ent.height);
                } else if (ent.category === "GRENADE") {
                    ctx.beginPath();
                    ctx.arc(ent.pos.x + ent.width / 2, ent.pos.y + ent.height / 2, ent.width / 2, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = "#fff";
                    ctx.fillRect(ent.pos.x + ent.width / 2 - 2, ent.pos.y - 2, 4, 4); // Little pin
                } else {
                    ctx.beginPath();
                    ctx.arc(ent.pos.x + ent.width / 2, ent.pos.y + ent.height / 2, ent.width / 2, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.shadowBlur = 0;
            } else if (ent.type === "FIRE_ROD_SEGMENT") {
                ctx.fillStyle = "#ff5722";
                ctx.beginPath();
                ctx.arc(ent.pos.x + 8, ent.pos.y + 8, 8, 0, Math.PI * 2);
                ctx.fill();
            } else if (ent.type === "FIRE_ROD_PIVOT") {
                ctx.fillStyle = "#212121";
                ctx.fillRect(ent.pos.x, ent.pos.y, ent.width, ent.height);
            } else if (ent.type === "JUMP_PLATFORM") {
                ctx.fillStyle = ent.state === "BUMPED" ? "#ffab00" : "#ff6f00";
                ctx.fillRect(ent.pos.x, ent.pos.y + (ent.state === "BUMPED" ? 5 : 0), ent.width, ent.height - (ent.state === "BUMPED" ? 5 : 0));
                ctx.strokeStyle = "#3e2723";
                ctx.strokeRect(ent.pos.x, ent.pos.y + (ent.state === "BUMPED" ? 5 : 0), ent.width, ent.height - (ent.state === "BUMPED" ? 5 : 0));
            } else if (ent.type === "SHOCKWAVE") {
                ctx.fillStyle = "rgba(255, 100, 0, 0.8)";
                ctx.shadowBlur = 10;
                ctx.shadowColor = "red";
                // Draw a wave-like shape
                ctx.beginPath();
                ctx.moveTo(ent.pos.x, ent.pos.y + ent.height);
                ctx.lineTo(ent.pos.x + ent.width / 2, ent.pos.y);
                ctx.lineTo(ent.pos.x + ent.width, ent.pos.y + ent.height);
                ctx.closePath();
                ctx.fill();
                ctx.shadowBlur = 0;
            } else if (ent.type === "MISSILE_SHOOTER") {
                ctx.fillStyle = "#37474f";
                ctx.fillRect(ent.pos.x, ent.pos.y, ent.width, ent.height);
                ctx.fillStyle = "#263238";
                ctx.fillRect(ent.pos.x + 5, ent.pos.y + 5, ent.width - 10, ent.height - 10);
                // Barrel (Use camera/player pos to face)
                ctx.fillStyle = "#212121";
                ctx.fillRect(ent.pos.x + (ent.pos.x < player.pos.x ? 30 : -10), ent.pos.y + 10, 20, 10);
            } else if (ent.type === "LASER_HAZARD") {
                if (ent.isActive) {
                    ctx.fillStyle = "rgba(255, 0, 0, 0.8)";
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = "red";
                    ctx.fillRect(ent.pos.x, ent.pos.y, ent.width, ent.height);
                    ctx.shadowBlur = 0;
                } else {
                    ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
                    ctx.fillRect(ent.pos.x, ent.pos.y, ent.width, ent.height);
                }
            } else if (ent.type === "MOVING_PLATFORM") {
                ctx.fillStyle = "#546e7a";
                ctx.fillRect(ent.pos.x, ent.pos.y, ent.width, ent.height);
                ctx.strokeStyle = "#263238";
                ctx.strokeRect(ent.pos.x, ent.pos.y, ent.width, ent.height);
            } else if (ent.type === "ACID_WATER") {
                ctx.fillStyle = "rgba(76, 175, 80, 0.6)";
                ctx.fillRect(ent.pos.x, ent.pos.y, ent.width, ent.height);
                // Simple bubbles
                ctx.fillStyle = "#fff";
                for (let i = 0; i < 3; i++) {
                    const bx = ent.pos.x + (Math.sin(Date.now() * 0.001 + i) * 0.5 + 0.5) * ent.width;
                    const by = ent.pos.y + ent.height - ((Date.now() * 0.05 + i * 20) % ent.height);
                    ctx.fillRect(bx, by, 2, 2);
                }
            } else if (ent.type === "PORTAL") {
                ctx.fillStyle = "rgba(103, 58, 183, 0.6)";
                ctx.beginPath();
                ctx.ellipse(ent.pos.x + ent.width / 2, ent.pos.y + ent.height / 2, ent.width / 2, ent.height / 2, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "#fff";
                ctx.lineWidth = 2;
                ctx.stroke();
                // Inner swirl
                ctx.strokeStyle = "rgba(255,255,255,0.4)";
                ctx.beginPath();
                ctx.arc(ent.pos.x + ent.width / 2, ent.pos.y + ent.height / 2, (ent.width / 4) * (Math.sin(Date.now() * 0.01) + 1.5), 0, Math.PI * 2);
                ctx.stroke();
            } else if (ent.type === "GOAL") {
                ctx.fillStyle = "#fff";
                ctx.fillRect(ent.pos.x, ent.pos.y, ent.width, ent.height);
                ctx.fillStyle = "#000";
                const size = 10;
                for (let i = 0; i < ent.width / size; i++) {
                    for (let j = 0; j < ent.height / size; j++) {
                        if ((i + j) % 2 === 0) ctx.fillRect(ent.pos.x + i * size, ent.pos.y + j * size, size, size);
                    }
                }
                ctx.strokeStyle = "#333";
                ctx.strokeRect(ent.pos.x, ent.pos.y, ent.width, ent.height);
            } else if (ent.type === "COIN") {
                const bounce = Math.sin(Date.now() * 0.01) * 5;
                ctx.fillStyle = "#ffd600";
                ctx.beginPath();
                ctx.ellipse(ent.pos.x + ent.width / 2, ent.pos.y + ent.height / 2 + bounce, ent.width / 2, ent.height / 2, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "#ffab00";
                ctx.stroke();
                ctx.fillStyle = "#ffab00";
                ctx.font = "bold 10px Inter, sans-serif";
                ctx.textAlign = "center";
                ctx.fillText("$", ent.pos.x + ent.width / 2, ent.pos.y + ent.height / 2 + 4 + bounce);
                ctx.textAlign = "start";
            } else if (ent.type === "FLYING_EYE") {
                ctx.fillStyle = "#f44336";
                ctx.beginPath();
                ctx.arc(ent.pos.x + ent.width / 2, ent.pos.y + ent.height / 2, ent.width / 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = "#000";
                const lookX = Math.cos(Date.now() * 0.005) * 4;
                ctx.beginPath();
                ctx.arc(ent.pos.x + ent.width / 2 + lookX, ent.pos.y + ent.height / 2, ent.width / 4, 0, Math.PI * 2);
                ctx.fill();
            } else if (ent.type === "BOSS") {
                ctx.fillStyle = "#6a1b9a";
                ctx.fillRect(ent.pos.x, ent.pos.y, ent.width, ent.height);
                ctx.strokeStyle = "#4a148c";
                ctx.lineWidth = 4;
                ctx.strokeRect(ent.pos.x, ent.pos.y, ent.width, ent.height);
                // Health bar for boss
                const hpWidth = (ent.health! / ent.maxHealth!) * ent.width;
                ctx.fillStyle = "red";
                ctx.fillRect(ent.pos.x, ent.pos.y - 15, ent.width, 5);
                ctx.fillStyle = "green";
                ctx.fillRect(ent.pos.x, ent.pos.y - 15, hpWidth, 5);
            } else if (ent.type === "BIKE") {
                const bounce = Math.sin(Date.now() * 0.005) * 5;
                ctx.fillStyle = "#ff5722";
                ctx.fillRect(ent.pos.x, ent.pos.y + bounce, ent.width, ent.height);
                ctx.fillStyle = "#333";
                // Simple wheels
                ctx.beginPath();
                ctx.arc(ent.pos.x + 5, ent.pos.y + ent.height + bounce, 8, 0, Math.PI * 2);
                ctx.arc(ent.pos.x + ent.width - 5, ent.pos.y + ent.height + bounce, 8, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        ctx.restore();
    };

    const loop = () => {
        state = update(state, keys);
        if (canvasRef) {
            const ctx = canvasRef.getContext("2d");
            if (ctx) render(ctx);
        }
        requestAnimationFrame(loop);
    };

    onMount(() => {
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);
        window.addEventListener("resize", () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        });
        canvasRef?.addEventListener("pointerdown", onMouseDown);
        requestAnimationFrame(loop);
    });

    onCleanup(() => {
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("keyup", onKeyUp);
        canvasRef?.removeEventListener("pointerdown", onMouseDown);
    });

    return (
        <canvas
            ref={canvasRef}
            width={dimensions().width}
            height={dimensions().height}
            style={{
                background: "#121212",
                display: "block",
                width: "100%",
                height: "100vh"
            }}
        />
    );
}
