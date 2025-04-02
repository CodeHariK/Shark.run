import { render } from "solid-js/web";
import { Router, type RouteDefinition } from "@solidjs/router";
import { createSignal } from "solid-js";

import { Blog } from "./pages/storybook";

import "solgaleo/solgaleo.css"

import "./index.css";

export const routes: RouteDefinition[] = [
    {
        path: "/",
        component: Blog,
    },
    {
        path: "/routes",
        component: RouteList,
    },
];

function RouteList() {
    const [iframeSrc, setIframeSrc] = createSignal("/test");

    return (
        <div class="w-full flex flex-row h-screen">
            <span class="p-4">
                {routes.map((e) => (
                    <>
                        <p class="underline" onclick={() => setIframeSrc(e.path)}>
                            {e.path}
                        </p>
                    </>
                ))}
                <p class="text-red-400">{iframeSrc()}</p>
            </span>
            <iframe src={iframeSrc()} class="w-full" />
        </div>
    );
}
render(
    () => (
        <Router>{routes}</Router>
    ),
    document.body!,
);
