export class Vector2 {
    x: number;
    y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    add(v: Vector2): Vector2 { return new Vector2(this.x + v.x, this.y + v.y); }
    sub(v: Vector2): Vector2 { return new Vector2(this.x - v.x, this.y - v.y); }
    mul(scalar: number): Vector2 { return new Vector2(this.x * scalar, this.y * scalar); }
    div(scalar: number): Vector2 { return new Vector2(this.x / scalar, this.y / scalar); }
    dot(v: Vector2): number { return this.x * v.x + this.y * v.y; }
    cross(v: Vector2): number { return this.x * v.y - this.y * v.x; }
    mag(): number { return Math.sqrt(this.x * this.x + this.y * this.y); }
    magSq(): number { return this.x * this.x + this.y * this.y; }

    normalize(): Vector2 {
        const m = this.mag();
        if (m === 0) return new Vector2(0, 0);
        return new Vector2(this.x / m, this.y / m);
    }

    dist(v: Vector2): number {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    copy(): Vector2 { return new Vector2(this.x, this.y); }
}

export class PointMass {
    pos: Vector2;
    oldPos: Vector2;
    acc: Vector2;
    mass: number;
    isStatic: boolean;
    inBody: boolean = false; // used for drawing logic

    constructor(x: number, y: number, mass: number = 1.0, isStatic: boolean = false) {
        this.pos = new Vector2(x, y);
        this.oldPos = new Vector2(x, y);
        this.acc = new Vector2(0, 0);
        this.mass = mass;
        this.isStatic = isStatic;
    }

    applyForce(force: Vector2): void {
        if (this.isStatic) return;
        this.acc = this.acc.add(force.div(this.mass));
    }

    update(dt: number): void {
        if (this.isStatic) return;

        // Verlet Integration
        const velocity = this.pos.sub(this.oldPos);
        const nextPos = this.pos.add(velocity).add(this.acc.mul(dt * dt));

        this.oldPos = this.pos.copy();
        this.pos = nextPos;

        this.acc = new Vector2(0, 0);
    }
}

// True PBD Distance Constraint instead of Force-based Spring
export class Spring {
    p1: PointMass;
    p2: PointMass;
    restLength: number;
    baseRestLength: number;
    stiffness: number;
    isRigidConstraint: boolean; // if true, enforces exactly restLength

    constructor(p1: PointMass, p2: PointMass, stiffness: number = 0.5, isRigidConstraint: boolean = false) {
        this.p1 = p1;
        this.p2 = p2;
        this.restLength = p1.pos.dist(p2.pos);
        this.baseRestLength = this.restLength;
        this.stiffness = stiffness;
        this.isRigidConstraint = isRigidConstraint;
    }

    update(): void {
        if (this.p1.isStatic && this.p2.isStatic) return;

        const delta = this.p2.pos.sub(this.p1.pos);
        const dist = delta.mag();
        if (dist === 0) return;

        const error = dist - this.restLength;
        const correctionDir = delta.mul(1 / dist);

        let actualStiffness = this.stiffness;
        if (this.isRigidConstraint) {
            // For structural spokes, only push out powerfully if collapsing, 
            // or heavily resist complete structural failure
            actualStiffness = 0.8;
        }

        // PBD formula: split error evenly, scaled by stiffness (0 to 1)
        const correctionMag = error * actualStiffness * 0.5;
        const correction = correctionDir.mul(correctionMag);

        if (!this.p1.isStatic) {
            this.p1.pos = this.p1.pos.add(correction.mul(this.p2.isStatic ? 2 : 1));
        }
        if (!this.p2.isStatic) {
            this.p2.pos = this.p2.pos.sub(correction.mul(this.p1.isStatic ? 2 : 1));
        }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.moveTo(this.p1.pos.x, this.p1.pos.y);
        ctx.lineTo(this.p2.pos.x, this.p2.pos.y);
        ctx.strokeStyle = '#aaaaaa';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}

export class LineSegment {
    p1: Vector2;
    p2: Vector2;
    normal: Vector2;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.p1 = new Vector2(x1, y1);
        this.p2 = new Vector2(x2, y2);
        const dir = this.p2.sub(this.p1);
        this.normal = new Vector2(-dir.y, dir.x).normalize();
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 4;
        ctx.stroke();
    }
}

export class Body {
    points: PointMass[] = [];
    springs: Spring[] = [];
    isWheel: boolean = false;
    color: string = 'rgba(100, 200, 255, 0.8)';

    // Shape matching base setup
    originalLocalPoints: Vector2[] = [];
    centerOfMass: Vector2 = new Vector2();
    shapeMatchingStiffness: number = 0.5;

    finalizeShape(): void {
        this.centerOfMass = new Vector2();
        for (const p of this.points) {
            this.centerOfMass = this.centerOfMass.add(p.pos);
        }
        this.centerOfMass = this.centerOfMass.div(this.points.length);

        for (const p of this.points) {
            this.originalLocalPoints.push(p.pos.sub(this.centerOfMass));
        }
    }

    applyShapeMatching(scale: number): void {
        if (this.points.length < 3 || this.shapeMatchingStiffness <= 0) return;

        // Find current center of mass
        let cm = new Vector2();
        for (const p of this.points) {
            cm = cm.add(p.pos);
        }
        this.centerOfMass = cm.div(this.points.length);
        cm = this.centerOfMass;

        // Find optimal rotation to match the rigid shape
        // A pq = Sum(p_current * p_original_local^T)
        // simplified 2d cross-covariance math to find rotation angle
        let a = 0;
        let b = 0;
        for (let i = 0; i < this.points.length; i++) {
            const p = this.points[i].pos.sub(cm);
            const q = this.originalLocalPoints[i].mul(scale);

            a += p.x * q.x + p.y * q.y;
            b += p.y * q.x - p.x * q.y; // Corrected sign for cross-covariance
        }

        const angle = Math.atan2(b, a);
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        // Pull points toward their ideally rotated goal positions
        for (let i = 0; i < this.points.length; i++) {
            if (this.points[i].isStatic) continue;

            const q = this.originalLocalPoints[i].mul(scale);
            const goalX = cm.x + q.x * cos - q.y * sin;
            const goalY = cm.y + q.x * sin + q.y * cos;

            const goalPos = new Vector2(goalX, goalY);
            const delta = goalPos.sub(this.points[i].pos);
            this.points[i].pos = this.points[i].pos.add(delta.mul(this.shapeMatchingStiffness));
        }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        if (this.points.length >= 3) {
            ctx.beginPath();
            if (this.isWheel) {
                // Point 0 is center, 1..N are rim
                ctx.moveTo(this.points[1].pos.x, this.points[1].pos.y);
                for (let i = 2; i < this.points.length; i++) {
                    ctx.lineTo(this.points[i].pos.x, this.points[i].pos.y);
                }
            } else {
                ctx.moveTo(this.points[0].pos.x, this.points[0].pos.y);
                for (let i = 1; i < this.points.length; i++) {
                    ctx.lineTo(this.points[i].pos.x, this.points[i].pos.y);
                }
            }
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = '#222';
            ctx.lineWidth = 3;
            ctx.stroke();
        }
    }
}

function getIntersection(a: Vector2, b: Vector2, c: Vector2, d: Vector2) {
    const s1 = b.sub(a);
    const s2 = d.sub(c);

    const denom = -s1.x * s2.y + s2.x * s1.y;
    if (denom === 0) return null;

    const t = (-s2.y * (c.x - a.x) + s2.x * (c.y - a.y)) / denom;
    const s = (s1.x * (c.y - a.y) - s1.y * (c.x - a.x)) / denom;

    if (t >= 0 && t <= 1 && s >= 0 && s <= 1) {
        return {
            pos: a.add(s1.mul(t)),
            fraction: t
        };
    }
    return null;
}

function closestPointOnSegment(p: Vector2, a: Vector2, b: Vector2): Vector2 {
    const ab = b.sub(a);
    const distSq = ab.magSq();
    if (distSq === 0) return a;
    const t = Math.max(0, Math.min(1, p.sub(a).dot(ab) / distSq));
    return a.add(ab.mul(t));
}

export class World {
    points: PointMass[];
    springs: Spring[];
    lines: LineSegment[];
    bodies: Body[];
    gravity: Vector2;
    dt: number;
    scale: number = 1.0;
    targetScale: number = 1.0;
    goal: Vector2 | null = null;
    won: boolean = false;

    constructor(gravityY: number = 800) {
        this.points = [];
        this.springs = [];
        this.lines = [];
        this.bodies = [];
        this.gravity = new Vector2(0, gravityY);
        this.dt = 1 / 180; // MUCH smaller time step for soft body stability
    }

    addPoint(x: number, y: number, mass: number = 1.0, isStatic: boolean = false): PointMass {
        const point = new PointMass(x, y, mass, isStatic);
        this.points.push(point);
        return point;
    }

    addSpring(p1: PointMass, p2: PointMass, stiffness: number = 0.8, isRigid: boolean = false): Spring {
        const spring = new Spring(p1, p2, stiffness, isRigid);
        this.springs.push(spring);
        return spring;
    }

    addLine(x1: number, y1: number, x2: number, y2: number): LineSegment {
        const line = new LineSegment(x1, y1, x2, y2);
        this.lines.push(line);
        return line;
    }

    createBox(centerX: number, centerY: number, width: number, height: number, stiffness = 0.8): Body {
        const b = new Body();
        const hw = width / 2;
        const hh = height / 2;

        const p0 = this.addPoint(centerX - hw, centerY - hh, 1.0);
        const p1 = this.addPoint(centerX + hw, centerY - hh, 1.0);
        const p2 = this.addPoint(centerX + hw, centerY + hh, 1.0);
        const p3 = this.addPoint(centerX - hw, centerY + hh, 1.0);

        b.points.push(p0, p1, p2, p3);
        p0.inBody = true; p1.inBody = true; p2.inBody = true; p3.inBody = true;

        const s1 = this.addSpring(p0, p1, stiffness);
        const s2 = this.addSpring(p1, p2, stiffness);
        const s3 = this.addSpring(p2, p3, stiffness);
        const s4 = this.addSpring(p3, p0, stiffness);
        const c1 = this.addSpring(p0, p2, stiffness);
        const c2 = this.addSpring(p1, p3, stiffness);

        b.springs.push(s1, s2, s3, s4, c1, c2);

        b.finalizeShape();
        this.bodies.push(b);
        return b;
    }

    createWheel(centerX: number, centerY: number, radius: number, segments: number, stiffness = 0.8): Body {
        const b = new Body();
        b.isWheel = true;
        b.color = '#333';

        const center = this.addPoint(centerX, centerY, 1.5); // heavier center
        b.points.push(center);
        center.inBody = true;

        for (let i = 0; i < segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            const px = centerX + Math.cos(angle) * radius;
            const py = centerY + Math.sin(angle) * radius;
            const p = this.addPoint(px, py, 1.0);
            p.inBody = true;
            b.points.push(p);
        }

        for (let i = 1; i <= segments; i++) {
            // Center spokes maintain wheel integrity
            b.springs.push(this.addSpring(center, b.points[i], stiffness, true));
        }

        for (let i = 1; i <= segments; i++) {
            const next = i === segments ? 1 : i + 1;
            // Outer rim is slightly softer for grip
            b.springs.push(this.addSpring(b.points[i], b.points[next], stiffness * 0.5));
        }

        const half = Math.floor(segments / 2);
        for (let i = 1; i <= segments; i++) {
            let opp = i + half;
            if (opp > segments) opp -= segments;
            if (i < opp) {
                // Cross braces for anti-collapse
                b.springs.push(this.addSpring(b.points[i], b.points[opp], stiffness, true));
            }
        }

        b.finalizeShape();
        b.shapeMatchingStiffness = 0.1; // mild shape matching to help retain roundness
        this.bodies.push(b);
        return b;
    }

    applyWheelTorque(wheel: Body, torqueAmount: number): void {
        if (!wheel.isWheel || wheel.points.length < 2) return;
        const center = wheel.points[0];
        for (let i = 1; i < wheel.points.length; i++) {
            const p = wheel.points[i];
            const dir = p.pos.sub(center.pos);
            const tangent = new Vector2(-dir.y, dir.x).normalize();
            p.applyForce(tangent.mul(torqueAmount));
            center.applyForce(tangent.mul(-torqueAmount));
        }
    }

    createCar(centerX: number, centerY: number): { chassis: Body, wheel1: Body, wheel2: Body } {
        // chassis (Monster truck chassis, soft internal springs, highly shape matched)
        const chassis = this.createBox(centerX, centerY, 120, 50, 0.05);
        chassis.color = '#ff4444';
        chassis.shapeMatchingStiffness = 0.8; // High structural integrity but soft

        // wheels (Bigger monster truck wheels)
        const wheel1 = this.createWheel(centerX - 60, centerY + 30, 40, 16, 0.1);
        const wheel2 = this.createWheel(centerX + 60, centerY + 30, 40, 16, 0.1);

        // axles (sturdy connection to rigid wheel centers)
        const w1_c = wheel1.points[0];
        this.addSpring(w1_c, chassis.points[3], 0.1); // main suspension
        this.addSpring(w1_c, chassis.points[0], 0.1); // support
        this.addSpring(w1_c, chassis.points[2], 0.05); // cross support

        const w2_c = wheel2.points[0];
        this.addSpring(w2_c, chassis.points[2], 0.1);
        this.addSpring(w2_c, chassis.points[1], 0.1);
        this.addSpring(w2_c, chassis.points[3], 0.05);

        return { chassis, wheel1, wheel2 };
    }

    update(): void {
        this.scale += (this.targetScale - this.scale) * 0.1;

        for (const point of this.points) {
            point.applyForce(this.gravity.mul(point.mass));
        }

        // Multiple solver iterations for stability (Position Based Dynamics)
        const solverIterations = 5;

        for (const point of this.points) {
            point.update(this.dt);
        }

        for (let iter = 0; iter < solverIterations; iter++) {
            // Apply Shape Matching constraints globally per body
            for (const b of this.bodies) {
                b.applyShapeMatching(this.scale);
            }

            for (const spring of this.springs) {
                spring.restLength = spring.baseRestLength * this.scale;
                spring.update();
            }

            for (const point of this.points) {
                for (const line of this.lines) {
                    const radius = 4;
                    const hit = getIntersection(point.oldPos, point.pos, line.p1, line.p2);
                    if (hit) {
                        let normal = line.normal;
                        if (point.pos.sub(point.oldPos).dot(normal) > 0) {
                            normal = normal.mul(-1);
                        }
                        point.pos = hit.pos.add(normal.mul(radius));

                        const tangent = new Vector2(-normal.y, normal.x);
                        let vel = point.pos.sub(point.oldPos);
                        let vTan = vel.dot(tangent);
                        let vNorm = vel.dot(normal);

                        // Friction and bounce
                        let friction = 0.95;
                        let bounce = 0.0;
                        if (point.inBody) friction = 0.8; // body points grab more

                        let newVel = tangent.mul(vTan * friction).add(normal.mul(vNorm * -bounce));
                        point.oldPos = point.pos.sub(newVel);
                    } else {
                        const closest = closestPointOnSegment(point.pos, line.p1, line.p2);
                        const distV = point.pos.sub(closest);
                        const distSq = distV.magSq();

                        if (distSq < radius * radius && distSq > 0) {
                            const dist = Math.sqrt(distSq);
                            let normal = distV.mul(1 / dist);

                            if (point.pos.sub(point.oldPos).dot(normal) > 0) {
                                normal = normal.mul(-1);
                            }

                            point.pos = closest.add(normal.mul(radius));

                            const tangent = new Vector2(-normal.y, normal.x);
                            let vel = point.pos.sub(point.oldPos);
                            let vTan = vel.dot(tangent);
                            let vNorm = vel.dot(normal);

                            let friction = 0.95;
                            let bounce = 0.0;
                            if (point.inBody) friction = 0.8;

                            let newVel = tangent.mul(vTan * friction).add(normal.mul(vNorm * -bounce));
                            point.oldPos = point.pos.sub(newVel);
                        }
                    }
                } // end loop lines
            } // end loop points
        } // end loop iterations
    }

    draw(ctx: CanvasRenderingContext2D): void {
        for (const line of this.lines) line.draw(ctx);

        // Draw loose springs not in bodies
        for (const spring of this.springs) {
            if (!(spring.p1.inBody && spring.p2.inBody)) {
                spring.draw(ctx);
            }
        }

        if (this.goal) {
            ctx.beginPath();
            ctx.arc(this.goal.x, this.goal.y, 40, 0, Math.PI * 2);
            ctx.fillStyle = this.won ? '#00ff00' : 'rgba(255, 215, 0, 0.5)';
            ctx.fill();
            ctx.strokeStyle = '#daa520';
            ctx.lineWidth = 4;
            ctx.stroke();
        }

        for (const b of this.bodies) b.draw(ctx);

        // Draw loose points
        for (const point of this.points) {
            if (!point.inBody) {
                ctx.beginPath();
                ctx.arc(point.pos.x, point.pos.y, 4, 0, Math.PI * 2);
                ctx.fillStyle = point.isStatic ? 'red' : 'blue';
                ctx.fill();
            }
        }
    }
}

export function initPhysics(canvas: HTMLCanvasElement): () => void {
    const ctx = canvas.getContext('2d');
    if (!ctx) return () => { };

    function resize(): void {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const world = new World();

    // Level Design
    world.addLine(0, 200, 0, 800);      // left wall
    world.addLine(0, 800, 600, 800);    // flat start
    world.addLine(600, 800, 1000, 600); // ramp up
    world.addLine(1000, 600, 1400, 600);// flat
    world.addLine(1400, 600, 1600, 200);// steep wall upward
    world.addLine(1600, 200, 2000, 200);// high flat
    world.addLine(2000, 200, 2600, -200);// high flat extended 
    world.addLine(2600, -200, 3000, -200);// win room floor
    world.addLine(3000, -200, 3000, -800);// win room backwall
    world.addLine(2600, -200, 2600, -800);// win room entrance arch

    world.goal = new Vector2(2850, -280);

    // Spawn the Jelly Car!
    const car = world.createCar(200, 100);

    const keys = { arrowLeft: false, arrowRight: false, space: false };
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === 'ArrowLeft') keys.arrowLeft = true;
        if (e.code === 'ArrowRight') keys.arrowRight = true;
        if (e.code === 'Space') keys.space = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'ArrowLeft') keys.arrowLeft = false;
        if (e.code === 'ArrowRight') keys.arrowRight = false;
        if (e.code === 'Space') keys.space = false;
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    let lastTime = 0;
    let animationId: number;

    const PHYSICS_STEP = 1 / 180; // match world dt
    let accumulator = 0;

    let smoothCamX = 0;
    let smoothCamY = 0;

    function loop(time: number): void {
        if (lastTime !== 0) {
            let dt = (time - lastTime) / 1000;
            if (dt > 0.1) dt = 0.1; // clamp to prevent death spiral
            accumulator += dt;

            // Fixed timestep physics update
            while (accumulator >= PHYSICS_STEP) {
                world.targetScale = keys.space ? 1.3 : 1.0;

                const torque = 25000; // tuned down slightly to prevent expansion glitch
                if (keys.arrowRight) {
                    world.applyWheelTorque(car.wheel1, torque);
                    world.applyWheelTorque(car.wheel2, torque);
                }
                if (keys.arrowLeft) {
                    world.applyWheelTorque(car.wheel1, -torque);
                    world.applyWheelTorque(car.wheel2, -torque);
                }

                world.update();
                accumulator -= PHYSICS_STEP;
            }

            // Win & Reset Logic
            const centerP = car.chassis.centerOfMass;
            if (world.goal && !world.won && centerP.sub(world.goal).magSq() < 60 * 60) {
                world.won = true;
            }
            if (centerP.y > 2000) {
                window.location.reload(); // fall off edge reset
            }

            // Camera Tracking Loop (smoothed)
            const targetCamX = canvas.width / 2 - centerP.x;
            const targetCamY = canvas.height / 2 - Math.min(centerP.y, 800);

            // Initial camera snap if just started
            if (smoothCamX === 0 && smoothCamY === 0) {
                smoothCamX = targetCamX;
                smoothCamY = targetCamY;
            } else {
                smoothCamX += (targetCamX - smoothCamX) * 0.1;
                smoothCamY += (targetCamY - smoothCamY) * 0.1;
            }

            ctx!.save();
            ctx!.setTransform(1, 0, 0, 1, 0, 0);
            ctx!.clearRect(0, 0, canvas.width, canvas.height);
            ctx!.translate(smoothCamX, smoothCamY);

            world.draw(ctx!);

            ctx!.restore();

            if (world.won) {
                ctx!.fillStyle = '#000';
                ctx!.font = 'bold 48px sans-serif';
                ctx!.textAlign = 'center';
                ctx!.fillText('YOU WIN!', canvas.width / 2, canvas.height / 2);
            }
        }
        lastTime = time;
        animationId = requestAnimationFrame(loop);
    }

    animationId = requestAnimationFrame(loop);

    return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', resize);
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
    };
}
