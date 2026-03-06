# Shark.run 🦈

Welcome to **Shark.run**, an action-packed, fast-paced 2D platformer builder built on top of Web technologies! Driven by the robust `matter-js` physics engine, this game combines satisfying combat mechanics with dynamic platforming and challenging enemy AI.

This document serves as an overview of all the features, mechanics, characters, and elements currently implemented in the game.

---

## 🎮 Gameplay & Mechanics

### Core System
- **Physics-Driven Platformer:** Every entity reacts to realistic gravity, friction, and collision forces powered by `matter-js`.
- **Dynamic Camera:** The viewpoint actively follows the player character seamlessly zooming through expansive levels.
- **Stage Progression:** Progress through 5 distinct stages. Stages 1-4 are sprawling, hazard-filled zones, culminating in the enclosed, intense final Boss fight in Stage 5. Can be manually bypassed by pressing the `[N]` key.
- **Health Bar System:** Players and durable enemies possess health pools that trigger "Alive", "Dead", and "Invincible" states.
- **Collectibles:** Scoring is tied to gathering `COINS` scattered throughout levels or hidden inside blocks. 

### Player Controls
- **Move / Jump**: Arrow Keys
- **Dash / Air Dash**: `X` or `SHIFT` (Quick burst of forward momentum)
- **Superhero Kick**: `S` or `ARROW DOWN` (Devastating downward diagonal strike, breaking bricks and damaging enemies)
- **Shoot**: `F` or `C`
- **Switch Weapons**: `Q` or `E`

---

## 👤 Characters & Enemies

### The Hero (Player)
A versatile fighter equipped with an arsenal of firearms, a lethal "Superhero Kick," and the ability to ride vehicles. 

### Regular Enemies
1. **Goombas:** Ground-based patrolling enemies. Move predictably and turn around at ledges or walls. Can be squashed.
2. **Turtles:** Armored patrollers. Taking damage retreats them into an invincible spinning `SHELL` state that ricochets off walls as a hazard.
3. **Flying Eyes:** Airborne annoyances that hover in a sine-wave pattern and aggressively fly towards players approaching too closely.

### The Final Boss (Stage 5)
Locked in an enclosed arena with boundaries, the Boss relies on a modular **Behavior Tree** AI, featuring complex combat rhythms and advanced tactics.
- **Predictive Aiming:** Calculates player velocity to lead its shots.
- **Dodging:** Actively detects incoming player projectiles and moves to avoid them.
- **Pulse/Shoot Waves:** Unleashes rapid volleys of straight-line projectiles or 360-degree bursts entirely locking down sightlines.
- **Shoot Cooldown Rhythm:** After aggressive shooting phases, the boss gets momentarily "exhausted" and enforces a cooldown where it will *only* utilize heavy physical abilities and summoning:
   - **Boulder Crush:** The Boss jumps extremely high off-screen, tracks the player, then slams down with massive velocity. Impact spawns fiery shockwaves sweeping left to right.
   - **Charge:** Directly thrusts itself towards the player.
   - **Grenade Toss:** Arcs explosive ordnance that bounces off the ground before bursting into deadly, scattering 8-way shrapnel.
   - **Summon Minions:** Spawns `Goombas` and `Flying Eyes` to swarm the player, mathematically capped to ensure performance.

---

## 🔫 Weapons & Combat

The player has an inventory system capable of hot-swapping through a variety of lethal, physics-locked armaments. 

1. **Revolver:** Balanced, high-damage starter weapon with a moderate firerate.
2. **Machine Gun:** Rapid-fire capabilities with minimal cooldown.
3. **Shotgun:** Fires a spread of 3 projectiles simultaneously for close-range clearing.
4. **Sniper:** High-velocity, large piercing rounds that decimate foes from afar.
5. **Missile Launcher:** Shoots explosive, oversized rockets.

Projectiles travel in straight linear arcs unhindered by gravity for tight, predictable aiming, expiring immediately upon striking solid ground.

---

## 📦 Items & Power-ups

### Environmental Pickups
You can bump/break distinct brown bricks to generate randomized loot!
- **Snowballs:** Throwables freezing foes in their tracks.
- **Potions:** Temporary stat boosters (Speed, Jump Power, Range extensions, and Invincibility).

### The Bike
Players can mount an orange mechanical **Bike**.
- **Bonus Hit Point:** Riding effectively adds an extra layer of armor. Taking a hit destroys the bike instead of the player's core health pool.
- **Dismounting:** The bike can be manually unequiped by pressing `S` or `ARROW DOWN`, forcefully jumping off to safety.

---

## 🌋 Environmental Hazards & Objects

- **Bricks & Jump Platforms:** Core platforming tools. Jump platforms grant immense vertical boots.
- **Moving Platforms:** Horizontally and vertically shifting terra firma.
- **Fire Rods:** Swiping sticks of fire rotating ominously.
- **Missile Shooters / Laser Hazards:** Automated turrets firing lethal projectiles or flashing beams of destruction.
- **Acid Water:** Deadly liquid expanses instantly draining life upon contact.
- **Portals:** Teleport you instantly across the map connecting distinct layout wings.

--- 

Good luck, keep your weapons loaded, and ride that bike to victory!
