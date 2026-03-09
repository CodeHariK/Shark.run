import { Route, Router } from "@solidjs/router";

import { render } from "solid-js/web";
import { Welcome } from "./pages/welcome";

import "solgaleo/solgaleo.css"

import * as SOL from "solgaleo"

import { Canvas } from "./game/Canvas";
import JellyCarPage from "./jellycar/JellyCarPage";
import Nintendo1 from "./pages/nintendo1";
import Nintendo2 from "./pages/nintendo2";
import Haunt from "./pages/haunt";
import HauntingHero from "./pages/haunting_hero";
import CandyHunt from "./pages/candyhunt";
import CozyOS from "./projects/os/CozyOS";
import CozyFeed from "./projects/os/CozyFeed";
import BadgeHunt from "./pages/BadgeHunt";
import Foodly from "./projects/foodly/Foodly";
import WonderKids from "./projects/wonderkids/WonderKids";
import TravelLanding from "./pages/TravelLanding";
import FitnessApp from "./projects/fitness/FitnessApp";
import StarpayHome from "./projects/starpay/starpay";

render(() => <SOL.SolProvider initialData={{ baseroute: "", themes: [] }}>
    <Router base="/">
        <Route path={"/"} component={Welcome} />
        <Route path={"/game"} component={Canvas} />
        <Route path={"/jellycar"} component={JellyCarPage} />
        <Route path={"/nintendo1"} component={Nintendo1} />
        <Route path={"/nintendo2"} component={Nintendo2} />
        <Route path={"/haunt"} component={Haunt} />
        <Route path={"/haunting_hero"} component={HauntingHero} />
        <Route path={"/candyhunt"} component={CandyHunt} />
        <Route path={"/cozyos"} component={CozyOS} />
        <Route path={"/cozyfeed"} component={CozyFeed} />
        <Route path={"/badgehunt"} component={BadgeHunt} />
        <Route path={"/foodly"} component={Foodly} />
        <Route path={"/wonderkids"} component={WonderKids} />
        <Route path={"/travellanding"} component={TravelLanding} />
        <Route path={"/fitness"} component={FitnessApp} />
        <Route path={"/starpay"} component={StarpayHome} />
    </Router>
</SOL.SolProvider>,
    document.body!)
