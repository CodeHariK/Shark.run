import { onMount, onCleanup } from "solid-js";
import { initPhysics } from "./physics";

export default function JellyCarPage() {
    let canvasRef!: HTMLCanvasElement;
    let stopPhysics: (() => void) | undefined;

    onMount(() => {
        if (canvasRef) {
            stopPhysics = initPhysics(canvasRef);
        }
    });

    onCleanup(() => {
        if (stopPhysics) stopPhysics();
    });

    return (
        <div style="width: 100vw; height: 100vh; overflow: hidden; background-color: #f0f0f0;">
            <canvas ref={canvasRef} style="display: block; width: 100%; height: 100%;"></canvas>
        </div>
    );
}
