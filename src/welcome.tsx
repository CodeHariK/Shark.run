import * as SOL from "solgaleo"
import * as UI from "solgaleo/ui"
import * as NAV from "solgaleo/nav"
import * as FANCY from "solgaleo/fancy"
import * as ADV from "solgaleo/adv"
import * as SVG from "solgaleo/svg"

export function Welcome() {
    return (<>
        <UI.GridLayout
            header={
                <NAV.Header
                    title={<NAV.AA className={SOL.CssSRC.BorderBasic} href="/" children={<SVG.IconHeart />} />}
                    right={<UI.ThemeToggle />}
                />
            }
        >
            <button class={UI.CssUI.OutlinedButton}>Outline Button</button>

            <SOL.Banner title='Hello' />

            <FANCY.Banner title='Fancy' />

            <ADV.Carousel />

        </UI.GridLayout>

    </>)
}
