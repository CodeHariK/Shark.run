import { Route, Router } from "@solidjs/router";

import { render } from "solid-js/web";
import { Welcome } from "./pages/welcome";

import "solgaleo/solgaleo.css"

import * as SOL from "solgaleo"

import { Canvas } from "./game/Canvas";
import JellyCarPage from "./jellycar/JellyCarPage";
import Kawaii from "./pages/kawaii";

render(() => <SOL.SolProvider initialData={{ baseroute: "", themes: [] }}>
    <Router base="/">
        <Route path={"/"} component={Welcome} />
        <Route path={"/game"} component={Canvas} />
        <Route path={"/jellycar"} component={JellyCarPage} />
        <Route path={"/kawaii"} component={Kawaii} />
    </Router>
</SOL.SolProvider>,
    document.body!)
