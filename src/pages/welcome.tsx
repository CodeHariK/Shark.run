import * as SOL from "solgaleo"
import * as UI from "solgaleo/ui"
import * as NAV from "solgaleo/nav"
import * as SVG from "solgaleo/svg"
import { CubeWidget } from "../cube/cube_widget"

export function Welcome() {
    return <>
        <UI.GridLayout
            header={
                <NAV.Header
                    title={<NAV.AA className={SOL.CssSRC.Border} href="/" children={<SVG.IconHeart />} />}
                    right={<UI.ThemeToggle />}
                />
            }
        >

            <SOL.Banner title='Hello' />

            <CubeWidget width={300} height={300} />

            <DeveloperProfile />

        </UI.GridLayout>

    </>
}

interface Skill {
    name: string;
    icon: string;
    category: 'cloud' | 'game' | 'mobile' | 'platform';
}

export function DeveloperProfile() {
    const skills: Skill[] = [
        { name: 'Go', icon: '🔹', category: 'cloud' },
        { name: 'Godot', icon: '🎮', category: 'game' },
        { name: 'Flutter', icon: '📱', category: 'mobile' },
        { name: 'Firebase', icon: '🔥', category: 'platform' },
        { name: 'GCP', icon: '☁️', category: 'platform' },
        { name: 'iOS', icon: '🍎', category: 'mobile' },
        { name: 'Android', icon: '🤖', category: 'mobile' },
    ];

    return (
        <div class={SOL.CssSRC.Card}>
            <div class={SOL.CssSRC.CardContent}>
                <div>
                    <div class={SOL.CssSRC.ButtonOutlined}>Cloud Developer</div>
                    <div class={SOL.CssSRC.ButtonOutlined}>Game Developer</div>
                    <div class={SOL.CssSRC.ButtonOutlined}>Mobile Developer</div>
                </div>

                <br />

                <div>
                    {Object.entries(
                        skills.reduce((acc, skill) => ({
                            ...acc,
                            [skill.category]: [...(acc[skill.category] || []), skill]
                        }), {} as Record<string, Skill[]>)
                    ).map(([category, categorySkills]) => (
                        <div>
                            <h3 class={SOL.CssSRC.ButtonOutlined}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </h3>
                            <div >
                                {categorySkills.map(skill => (
                                    <span>
                                        {skill.icon} {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
