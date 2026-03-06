# Jelly Car Soft-Body Physics Engine: Architecture & Plan

This document outlines the core data structures, algorithms, and development plan to build a "Jelly Car" clone from scratch. The simulation will use a **Mass-Spring System** combined with **Verlet Integration**, which is highly stable for soft-body physics.

## 1. Fundamentals of Soft-Body Physics

Instead of rigid shapes, a soft body is simulated as a network of **Point Masses** (particles) connected by **Springs**.
*   **The Chassis:** A polygon of perimeter point masses, internally connected with cross-springs to maintain structural volume.
*   **The Wheels:** Soft circles consisting of a center mass and perimeter masses.
*   **The Suspension:** Springs connecting the center of the wheels to specific points on the chassis.

---

## 2. Core Data Structures

### `Vector2`
*   **Properties:** `x`, `y`
*   **Methods:** `add()`, `sub()`, `mul()`, `div()`, `dot()`, `cross()`, `length()`, `normalize()`
*   *Purpose:* Handles all 2D vector mathematics.

### `PointMass` (Particle)
*   **Properties:** 
    *   `pos`: `Vector2` (Current position)
    *   `oldPos`: `Vector2` (Previous position for Verlet Integration)
    *   `acceleration`: `Vector2`
    *   `mass`: `number` (Usually 1.0)
    *   `isStatic`: `boolean` (If true, ignores forces. Useful for terrain)
*   *Purpose:* The fundamental node in the physics simulation.

### `Spring`
*   **Properties:**
    *   `massA`: `PointMass` reference
    *   `massB`: `PointMass` reference
    *   `restLength`: `number` (Ideal distance)
    *   `stiffness`: `number` (Hooke's constant, $k$)
    *   `damping`: `number` (Friction over the spring movement)
*   *Purpose:* Keeps PointMasses together, providing the "Jelly" bounce.

### `Body` (Soft Body Object)
*   **Properties:**
    *   `masses`: `Array<PointMass>`
    *   `springs`: `Array<Spring>`
*   *Purpose:* Represents an individual entity (the car chassis, a single wheel, a jelly block).

### `World`
*   **Properties:**
    *   `bodies`: `Array<Body>`
    *   `staticLines`: `Array<LineSegment>` (The terrain)
    *   `gravity`: `Vector2`
*   *Purpose:* The simulation container holding the main physics/update loop.

---

## 3. Core Algorithms

### A. Verlet Integration
Rather than storing velocity explicitly, Verlet derives it from the current and previous positions. This approach handles spring forces and collisions with supreme stability.
```javascript
// Each frame, for each non-static PointMass:
velocity = pos - oldPos
nextPos = pos + velocity + acceleration * (dt * dt)

oldPos = pos
pos = nextPos
acceleration = Vector2(0, 0) // Reset after applying
```

### B. Spring Forces (Hooke's Law)
For every spring, calculate the distance between `massA` and `massB`. The force pushes or pulls the masses to return to `restLength`.
```javascript
distance = |massB.pos - massA.pos|
error = distance - restLength
force = (error * stiffness) // Modulated by damping as well

// Apply calculated force to massA and massB in opposite directions
```

### C. Collision Detection & Resolution
*   **Point vs. Line Segment:** The terrain is made of static lines.
*   Check if a `PointMass`'s path (from `oldPos` to `pos`) intersects with or passes behind a terrain line.
*   **Resolution:** If a mass crosses the boundary, project it back onto the surface (shortest distance to the line segment).
*   **Friction:** Reduce the tangential velocity of the `PointMass` when touching the ground so the wheels can grip and drive.

### D. Locomotion (Driving)
To drive, we apply a rotational torque to the **wheels**.
*   We apply tangential forces to the perimeter particles of the wheel relative to the center particle.
*   With the wheels rubbing against the friction of the terrain, this torque propels the car forward.

### E. Jelly Car Transformation (Scale/Grow)
A signature ability of Jelly Car is growing and shrinking.
*   To grow the car, temporarily multiply the `restLength` of all springs in the chassis and wheels by a `scaleFactor` (e.g., `1.5x`).
*   The physics engine will naturally expand the car, bouncing physics off the terrain in the process.

---

## 4. Implementation Plan

We will build the game step-by-step to isolate bugs and tune the physics effectively.

### Phase 1: Physics Engine Foundation
1.  Implement the `Vector2`, `PointMass`, and `Spring` structures.
2.  Implement the `World` loop with Gravity and Verlet Integration.
3.  Set up an HTML5 Canvas rendering loop to draw points and lines.

### Phase 2: Terrain and Collision
1.  Create standard boundary shapes (floor, walls) using static Line Segments.
2.  Implement Point-vs-Line projection collision logic.
3.  Ensure a single dropped `PointMass` behaves correctly (bounces, slides, and stops).

### Phase 3: Constructing Soft Bodies
1.  Create a factory function to build a "Box" soft body (4 perimeter masses, 4 bounding springs, 2 internal diagonal cross-springs).
2.  Create a factory function to build a "Wheel" soft body (1 center mass, N perimeter masses, springs connecting center to perimeter and perimeter to adjacent perimeter).
3.  Drop these shapes into the world to ensure they retain volume and bounce like jelly objects.

### Phase 4: Constructing the Car
1.  Spawn 1 Chassis Box body and 2 Wheel bodies.
2.  Attach the centers of the wheels to the bottom-left and bottom-right particles of the chassis using strong springs (Axle / Suspension).
3.  Tune the weights and stiffness so the car supports its own weight without collapsing.

### Phase 5: Input & Gameplay
1.  Add Keyboard listeners (Left/Right arrows for driving, Up/Down for leaning/rotation, Space for growing).
2.  Implement wheel torque logic based on input.
3.  Implement the `restLength` scaling modifier for the 'Grow' mechanic.
4.  Tweak friction variables so the car can grip steep slopes and clear gaps.

### Phase 6: Level Design & Polish
1.  Design a robust terrain loader.
2.  Add camera tracking (follow the center of the car chassis).
3.  Add goal zones/flags to win the level!
