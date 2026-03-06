import { Route, Router } from "@solidjs/router";

import { render } from "solid-js/web";
import { Welcome } from "./pages/welcome";

import "solgaleo/solgaleo.css"

import * as SOL from "solgaleo"

import { Canvas } from "./game/Canvas";

render(() => <SOL.SolProvider initialData={{ baseroute: "", themes: [] }}>
    <Router base="/">
        <Route path={"/"} component={Welcome} />
        <Route path={"/game"} component={Canvas} />
    </Router>
</SOL.SolProvider>,
    document.body!)
