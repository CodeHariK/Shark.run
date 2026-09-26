---
title: 'Hello, WebGPU'
description: 'Why the Shark.run landing page runs a live WebGPU shader — and what this devlog is for.'
pubDate: '2026-09-26'
---

This site is my scratchpad for real-time graphics and game-dev experiments. The
banner on the home page isn't an image or a video — it's a **WebGPU** fragment
shader running live in your browser, redrawn every frame.

The whole effect is one full-screen triangle and a handful of lines of WGSL. The
vertex stage emits a triangle big enough to cover the viewport, and the fragment
stage does all the work per pixel:

```wgsl
@fragment
fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
	let uv = (frag.xy * 2.0 - vec2f(u.w, u.h)) / u.h;
	let t = u.t * 0.35;
	var q = uv * 1.6;
	for (var k = 0; k < 5; k = k + 1) {
		let fk = f32(k);
		q = q + vec2f(sin(t + q.y * 1.6 + fk), cos(t + q.x * 1.6 + fk)) * 0.45;
	}
	let d = length(q);
	var c = 0.5 + 0.5 * cos(vec3f(0.0, 1.8, 3.6) + d * 1.8 + t);
	return vec4f(c, 1.0);
}
```

A single `time` uniform drives the animation; everything else is pure math on the
GPU. No textures, no meshes, no draw list — just a domain-warped field folded a
few times and coloured with a cosine palette.

## What goes here

Short devlogs, mostly: shader breakdowns, terrain and procedural-generation
notes, performance write-ups, and whatever else I'm poking at. Code-heavy, light
on ceremony.

More soon.
