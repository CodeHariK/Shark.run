import { Route, Router } from "@solidjs/router";

import { Practice } from "./practice";
import { render } from "solid-js/web";
import { Welcome } from "./welcome";

import "solgaleo/solgaleo.css"

import * as SOL from "solgaleo"

render(() => <SOL.SolProvider initialData={{ baseroute: "", themes: [] }}>
    <Router base="/">
        <Route path={"/"} component={Welcome} />
        <Route path={"/blog"} component={Practice} />
    </Router>
</SOL.SolProvider>,
    document.body!)
