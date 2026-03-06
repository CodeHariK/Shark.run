import { onMount, createSignal, Show, For } from "solid-js";
import "./nintendo.css";

export const Nintendo1 = () => {
    const [isDark, setIsDark] = createSignal(false);

    onMount(() => {
        // Check local storage or system preference for theme
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add("night");
        } else {
            setIsDark(false);
            document.documentElement.classList.remove("night");
        }
    });

    const toggleTheme = () => {
        const newDark = !isDark();
        setIsDark(newDark);
        if (newDark) {
            document.documentElement.classList.add("night");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("night");
            localStorage.setItem("theme", "light");
        }
    };

    const projects = [
        {
            title: "Nebula Engine",
            stack: "React • Three.js • Node",
            type: "Web App",
            badge: "V2.0 OUT NOW",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYtiH1q1MblhQhQlG0WljTe3iqU1CqgYTHGkgB-q-hrlNtTSEepYV3Uztsbj9PLOFqinb2oRCI5V-gYdWFtbTel3Vru-qIHT40JxSHBXgzlRIjZwvJkDwXCXgnGejWTyE2wL-ZpGh1cAv0iZ6Myo_11DM979od-HSfZTt5usxdU9AmKknK_KqI10sHfPh6xO1ntk6W2z057Q6cUjU0ocveu9OaXbi_XAQlW8GtyptQlZZ-ze-xinMMAOnYZWtPsunOFSsMijfujEb7",
            color: "bg-blue-500"
        },
        {
            title: "Pixel Quest",
            stack: "Unity • C# • Pixel Art",
            type: "Game Dev",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeo4Qe8xxeDGBMUWMCUhUgDmx8bpN5mDvCfpa9Fz4k8wU0DKouRlK2c9Ad2wswQpj6xRs4BMHF4sz_9FIo2eLq2skTm0yxb8idDGZsgVE712Bd1jB-Mnc-nJyyAgzrgEZSzhMQdd0LaGdShZ5bixihQHs7Wx7tTrx33Lsj7Ni8TNf_kVIeN_hPUuQTLnOwYvunGKDATfHF-FkaAVoFVz7ghCLwJ3AJMsGY0Azqc-oGK3OBGkC9i5m-PnJMP7lteo5jQmXdTCKdcqpB",
            color: "bg-green-500"
        },
        {
            title: "Data Viz Dashboard",
            stack: "Next.js • D3.js • Tailwind",
            type: "Web App",
            badge: "POPULAR",
            badgeClass: "popular-badge",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy_k8T1N7DbXtkdg5VuZx2V6xotBPY-YGW0177hSOcQCDvz7LzTIadxawtLAFPUdiedYxpQTB3_336tZ4euvqcckVsYozYNKO4WcCfzzNst5Hg5Z4DACTiGKpP-krR6V61-buLzVabJEGxeDSBIPHiUIOXC4vRU4P5240mQrc7wxRUI3ZHJRzGOie6s4iTD-OU7woEdcNQVmNBNW-WYZBZJqH2OrIUHGPPbrkYC8Lji9uFMrTJATnw_x5zYQJfhVK4Ms2a7gWHqekf",
            color: "bg-orange-500"
        },
        {
            title: "Social Connect",
            stack: "React Native • Firebase",
            type: "Mobile",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKuAvBcZR9McJHfvX7GeFz8qHDu6I3nVr6-gWJMO1uDKqH4DMYTQm2baMnJ4VGUHZO1Bce6KMEtX7sLLgw5HqLK-GTYaCDyKyBatow5FKWbORryyLQZJQ4I8IjNpeXLACqDAX5wsvuNdTd_PPT-kvQKhjwEzWhIWiNiHcwkBUevdBRCp6yS6XLr-23T8w2Sh4NlqvumijLhJjwFFZt4lNiDplqEoprNJKQ3zDrsTpJP2I2ZV886q3ETSoVkP-e1ewtYPyYZphXSWHM",
            color: "bg-purple-500"
        }
    ];

    return (
        <div class="nintendo-theme">
            <nav class="nintendo-nav">
                <div class="nav-container">
                    <div class="nav-left">
                        <div class="logo-badge">DEV</div>
                        <div class="nav-links">
                            <a class="nav-link" href="#">
                                <span class="material-icons">explore</span> Projects
                            </a>
                            <a class="nav-link" href="#">
                                <span class="material-icons">code</span> Stack
                            </a>
                            <a class="nav-link" href="#">
                                <span class="material-icons">person</span> About
                            </a>
                        </div>
                    </div>
                    <div class="nav-right">
                        <button class="theme-toggle" onClick={toggleTheme}>
                            <span class="material-icons">{isDark() ? "light_mode" : "dark_mode"}</span>
                        </button>
                        <div class="hire-me-wrapper">
                            <span class="material-icons">login</span>
                            <span class="hire-me-text">Hire Me</span>
                        </div>
                    </div>
                </div>
            </nav>

            <header class="nintendo-header">
                <div class="header-container">
                    <div class="header-content">
                        <h1 class="header-title">
                            Build, Play, and <span>Create.</span>
                        </h1>
                        <p class="header-description">
                            Full-stack developer crafting high-performance digital experiences with a touch of fun and a lot of energy.
                        </p>
                        <div class="header-actions">
                            <button class="btn-primary">
                                View Projects <span class="material-icons">arrow_forward</span>
                            </button>
                            <button class="btn-secondary">Get in Touch</button>
                        </div>
                    </div>
                    <div class="header-visual">
                        <div class="video-box">
                            <img
                                alt="Abstract colorful gaming setup"
                                class="video-img"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-lxHQkXQ0-WMp5g9MZrg5UwWPYQ8ZeRexqhF4eJtxBNppD-AFqbGKnPYLjZVRoCaxWdi1hC-FNNfNu1xXHZdyhqbBCq_1zUG13xbFdzJI_S6RkBJaGMVUY6B4L8TJFOvYPR_V_K-baaYoOLWlVOmjI42ZoOLfiHuggH7SJWfh71SvEkVLJzQ6bFjy4uWsNsoknL6pqiND7T3B4HnWWVUz6gdhrHtQyl3cbT_R09ch9YWcNwkCezP3A4E5C4MaM5D6ubwxcIJ3admj"
                            />
                            <div class="video-icon-overlay">
                                <span class="material-icons">videogame_asset</span>
                            </div>
                        </div>
                        <div class="star-badge">
                            <span class="material-icons" style="color: white; font-size: 1.875rem;">star</span>
                        </div>
                    </div>
                </div>
            </header>

            <section class="hiring-section">
                <div class="hiring-banner">
                    <div class="banner-icon">
                        <span class="material-icons">campaign</span>
                    </div>
                    <div class="banner-content">
                        <div>
                            <h2 class="banner-title">Hiring Status: Available!</h2>
                            <p class="banner-subtitle">
                                Open for new freelance projects and full-time roles starting July 2024.
                            </p>
                        </div>
                        <button class="chat-btn">Let's Chat</button>
                    </div>
                    <div class="banner-decoration">
                        <div class="decoration-skew"></div>
                        <div class="decoration-icon">
                            <span class="material-icons">work</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="projects-section">
                <div class="section-header">
                    <h3 class="section-title">Featured Projects</h3>
                    <a class="see-all" href="#">See all projects →</a>
                </div>
                <div class="projects-grid">
                    <For each={projects}>
                        {(project) => (
                            <div class="project-card">
                                <div class={`card-img-wrapper ${project.color}`}>
                                    <img alt={project.title} class="card-img" src={project.img} />
                                    <Show when={project.badge}>
                                        <div class={`card-badge ${project.badgeClass || ""}`}>
                                            {project.badge}
                                        </div>
                                    </Show>
                                </div>
                                <div class="card-content">
                                    <h4 class="card-title">{project.title}</h4>
                                    <p class="card-stack">{project.stack}</p>
                                    <div class="card-footer">
                                        <span class="card-type">{project.type}</span>
                                        <span class="material-icons favorite-icon">favorite_border</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </For>
                </div>
            </section>

            <section class="eco-section">
                <h3 class="section-title" style="margin-bottom: 2rem;">Dev Ecosystem</h3>
                <div class="eco-grid">
                    <div class="eco-card">
                        <div class="eco-icon-box">
                            <span class="material-icons" style="color: #3b82f6;">language</span>
                        </div>
                        <h4 class="eco-title">The Web Suite</h4>
                        <p class="eco-desc">React, Next.js, TypeScript, and modern CSS frameworks.</p>
                        <button class="explore-btn">Explore Stack →</button>
                    </div>
                    <div class="eco-card">
                        <div class="eco-icon-box">
                            <span class="material-icons" style="color: #22c55e;">storage</span>
                        </div>
                        <h4 class="eco-title">The Engine Room</h4>
                        <p class="eco-desc">Node.js, PostgreSQL, GraphQL, and AWS Cloud Infrastructure.</p>
                        <button class="explore-btn">Explore Stack →</button>
                    </div>
                    <div class="eco-card">
                        <div class="eco-icon-box">
                            <span class="material-icons" style="color: #a855f7;">smartphone</span>
                        </div>
                        <h4 class="eco-title">Pocket Apps</h4>
                        <p class="eco-desc">Cross-platform development with React Native and Expo.</p>
                        <button class="explore-btn">Explore Stack →</button>
                    </div>
                </div>
            </section>

            <section class="cta-section">
                <div class="cta-box">
                    <div class="cta-content">
                        <div class="collaboration-badge">
                            <div class="badge-dot"></div>
                            <span class="badge-text">Open for Collaborations</span>
                        </div>
                        <h2 class="cta-title">
                            LEVEL UP YOUR<br /><span>BUSINESS.</span>
                        </h2>
                        <p class="cta-desc">
                            Whether you're a startup or an established company, I bring a creative and technical edge to every project.
                        </p>
                        <button class="start-btn">START A PROJECT</button>
                    </div>
                    <div class="cta-features">
                        <div class="feature-tag">
                            <span class="material-icons">speed</span>
                            <span class="feature-text">Fast Delivery</span>
                        </div>
                        <div class="feature-tag">
                            <span class="material-icons">brush</span>
                            <span class="feature-text">Pixel Perfect</span>
                        </div>
                        <div class="feature-tag">
                            <span class="material-icons">security</span>
                            <span class="feature-text">Clean Code</span>
                        </div>
                        <div class="feature-tag">
                            <span class="material-icons">support_agent</span>
                            <span class="feature-text">24/7 Support</span>
                        </div>
                    </div>
                    <div class="bg-glow-red"></div>
                    <div class="bg-glow-dark-red"></div>
                </div>
            </section>

            <footer class="nintendo-footer">
                <div class="footer-logo-box">
                    <div class="footer-logo">DEV</div>
                </div>
                <div class="footer-links-grid" style="max-width: 80rem; margin: 0 auto; padding: 0 1rem 4rem;">
                    <div>
                        <h5 class="footer-col-title">Navigation</h5>
                        <ul class="footer-ul">
                            <li class="footer-li"><a href="#">Home</a></li>
                            <li class="footer-li"><a href="#">Featured Projects</a></li>
                            <li class="footer-li"><a href="#">Skillset</a></li>
                            <li class="footer-li"><a href="#">Resume</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="footer-col-title">Social</h5>
                        <ul class="footer-ul">
                            <li class="footer-li"><a href="#">GitHub</a></li>
                            <li class="footer-li"><a href="#">LinkedIn</a></li>
                            <li class="footer-li"><a href="#">Twitter / X</a></li>
                            <li class="footer-li"><a href="#">YouTube</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="footer-col-title">Resources</h5>
                        <ul class="footer-ul">
                            <li class="footer-li"><a href="#">Blog</a></li>
                            <li class="footer-li"><a href="#">Case Studies</a></li>
                            <li class="footer-li"><a href="#">Style Guide</a></li>
                            <li class="footer-li"><a href="#">Documentation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="footer-col-title">Contact</h5>
                        <ul class="footer-ul">
                            <li class="footer-li"><a href="#">Email Me</a></li>
                            <li class="footer-li"><a href="#">Calendly</a></li>
                            <li class="footer-li"><a href="#">Request Quote</a></li>
                            <li class="footer-li"><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom" style="max-width: 80rem; margin: 0 auto; padding: 2rem 1rem 0;">
                    <div class="footer-bottom-left">
                        <span>© 2024 Developer Portfolio. All rights reserved.</span>
                        <a href="#" style="color: white; text-decoration: none;">Terms of Use</a>
                    </div>
                    <div class="footer-bottom-right">
                        <div class="lang-selector">
                            <span class="material-icons" style="font-size: 1rem;">public</span>
                            <span>English (United States)</span>
                        </div>
                        <div class="esrb-box">
                            <img
                                alt="ESRB Everyone Rating"
                                class="esrb-img"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfH92VYBpp2Xjd0e-9WraCiqrl18CrTs4pvDeQ0uG_Ry8HI6-HZn_6Z-wvkwieH60YZ3gGyCBhSyF7MkF1mWpKnk2m8WoaZFnFda5zzIvmKzfOg-5SmA2xV9tulopRO0etv4y61mcVsfnByWZ5vLtEkFBYu4MaCgwygp_mdU5uFjzklbGPnaTSOY1SNvCQe7WwKE8P79F4ZCGgBla3b7lXDzVJChgyC3L8fSyPoQCYlH_oKFAJsHmHMx_x0DmKE4XAD7u8a_md1SSf"
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Nintendo1;
