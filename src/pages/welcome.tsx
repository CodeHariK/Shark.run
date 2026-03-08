import { CubeWidget } from "../cube/cube_widget"
import { Component, For } from 'solid-js';
import { Grid } from "../../../solgaleo/src/ui/grid";
import { ThemeToggle } from "solgaleo";
import styles from './kawaii.module.css';


export function Welcome() {
    return <Kawaii />
}

interface Skill {
    name: string;
    icon: string;
    category: 'cloud' | 'game' | 'mobile' | 'platform';
}

export function DeveloperProfile() {
    const skills: Skill[] = [
        { name: 'React Native', icon: '⚛️', category: 'mobile' },
        { name: 'Kotlin Compose', icon: '🚀', category: 'mobile' },
        { name: 'SwiftUI', icon: '🎨', category: 'mobile' },
        { name: 'Firebase', icon: '🔥', category: 'platform' },
        { name: 'Supabase', icon: '⚡', category: 'platform' },
        { name: 'Go', icon: '🔹', category: 'cloud' },
        { name: 'Godot', icon: '🎮', category: 'game' },
        { name: 'Flutter', icon: '📱', category: 'mobile' },
        { name: 'GCP', icon: '☁️', category: 'platform' },
        { name: 'iOS', icon: '🍎', category: 'mobile' },
        { name: 'Android', icon: '🤖', category: 'mobile' },
    ];

    const categoryIcons = {
        cloud: 'cloud',
        game: 'sports_esports',
        mobile: 'smartphone',
        platform: 'auto_awesome'
    };

    return (
        <section class={styles["kawaii-profile-section"]}>
            <div class={styles["profile-card"]}>
                <div class={styles["profile-header"]}>
                    <div class={styles["profile-avatar-wrapper"]}>
                        <img
                            src="https://avatars.githubusercontent.com/u/144345505?v=4"
                            alt="Avatar"
                            class={styles["profile-avatar"]}
                        />
                        <div class={styles["profile-avatar-decoration"]}>✨</div>
                    </div>
                    <div class={styles["profile-intro"]}>
                        <h2>Felix <span>Developer</span></h2>
                        <p class={styles["profile-bio"]}>
                            Crafting adorable digital experiences across clouds, games, and mobile worlds.
                            I love building tools that make people smile! 🌸
                        </p>
                    </div>
                </div>

                <div class={styles["skill-categories"]}>
                    {Object.entries(
                        skills.reduce((acc, skill) => ({
                            ...acc,
                            [skill.category]: [...(acc[skill.category] || []), skill]
                        }), {} as Record<string, Skill[]>)
                    ).map(([category, categorySkills]) => (
                        <div class={styles["skill-category-card"]}>
                            <h3 class={styles["skill-category-title"]}>
                                <span class={`material-symbols-outlined ${styles["category-icon"]}`}>
                                    {categoryIcons[category as keyof typeof categoryIcons]}
                                </span>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </h3>
                            <div class={styles["skill-list"]}>
                                {categorySkills.map(skill => (
                                    <span class={styles["skill-pill-kawaii"]}>
                                        {skill.icon} {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}




const Kawaii: Component = () => {
    const categories = [
        { name: 'All', icon: 'grid_view', active: true, color: 'pink' },
        { name: 'Web Apps', icon: 'computer', active: false, color: 'sky' },
        { name: 'Games', icon: 'sports_esports', active: false, color: 'purple' },
        { name: 'Mobile', icon: 'smartphone', active: false, color: 'pink-soft' },
        { name: 'Open Source', icon: 'code', active: false, color: 'green' },
        { name: 'Design Systems', icon: 'palette', active: false, color: 'yellow' },
    ];

    const projects = [
        {
            title: 'Wonder kids',
            description: 'The best place to learn and play for kids',
            image: 'https://m.media-amazon.com/images/S/abs-image-upload-na/f/AmazonStores/ATVPDKIKX0DER/498caa3a588d23f54b7cd9d613d4324c.w680.h675.png',
            tag: 'Web App',
            tagClass: 'web-app',
            tagIcon: 'cloud',
            link: '/wonderkids',
            overlayClass: 'kawaii-purple',
            stack: [
                { name: 'React', class: 'tech-react' },
                { name: 'Node.js', class: 'tech-node' },
                { name: 'MongoDB', class: 'tech-mongodb' },
            ]
        },
        {
            title: 'Pixel Adventure',
            description: 'An engaging 2D platformer game featuring retro graphics and challenging levels.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuUHNdIZUqm1wXlcNN_8uZpzM2FN-UQsgXxSf677x22WxoExNq8rN-nrnDC8YFvhBrR4KNn48P86fbSh79pYUZRQirS6_5Jkjeqxl3gdXgVGNXQd3BA8k8zWdiN426xCtwGYNwbJ_z3fVKhoX6fyuTinYvHjfYBv2cImtUAB9PaQ8c_dd9R9k_Fi_q8y8HacJnD4B3sbZmU_bYj3NQgasl2wNNhQpQqpd5hHo_953ltPVGX5wtxbivdwe7YibEfAZCQekgTzPmSAF8',
            tag: 'Game',
            tagClass: 'game',
            tagIcon: 'sports_esports',
            overlayClass: 'kawaii-pink',
            stack: [
                { name: 'Unity', class: 'tech-unity' },
                { name: 'C#', class: 'tech-csharp' },
            ]
        },
        {
            title: 'E-Shop Redesign',
            description: 'A complete UX case study and UI redesign for a major fashion e-commerce platform.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiSkZYNdMYmrpfWn4EVhS6yOrX3G5ULVuL4iIEGAh8NP-jDAwIpWppSsMhoPxeN6xrlxh8E9XEGor3rMUgFO0XB81_WwnHXxVWzJ1Wvkfy3_JB-65W11CDU2s-MEvIkGIaprw6ztVi3IPjfhKhHOkj2fANkBz63cGdqOqI-TwZCW1hz4x3xA8T4O-ffD74EFZsYoJYjR_UcaSC59BjPE0O9zfU-AhE7Ngw2sw29v0_snb6NYY-JYLaV3JjkCQDYJmgtuOgu6Z122uB',
            tag: 'Design',
            tagClass: 'design',
            tagIcon: 'brush',
            overlayClass: 'kawaii-mint',
            stack: [
                { name: 'Figma', class: 'tech-figma' },
                { name: 'UI/UX', class: 'tech-uiux' },
            ]
        },
        {
            title: 'Foodly Platform',
            description: 'A premium food delivery portfolio showcase with menu management and order tracking.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWL0YM0AUpQ7SxDv7LnR2auQ01E9moXGjECw&s',
            tag: 'Web App',
            tagClass: 'web-app',
            tagIcon: 'restaurant',
            overlayClass: 'kawaii-accent',
            link: '/foodly',
            stack: [
                { name: 'SolidJS', class: 'tech-react' },
                { name: 'Vanilla CSS', class: 'tech-css3' },
            ]
        },
        {
            title: 'Portfolio v1',
            description: 'My first portfolio site built with static HTML/CSS. A look back at where I started.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-i5D1eucxjGnZqzm1Ewv9dJAnOfsstNga81vxLEpurDV6V1RYGAifOuCv7SoTaO76SoJrMSbzZQW8yc83uUKaXsHPBPV1RcYFxRcb6_2T2JfOEymTziYbLcaHYIqbQovECoWFEL7rVZCYWI0kYJB4dzM4OPHhgGH8NeSeo9V3vLcTMHjMJpYugNezM-KAX85DOn49RMBua25naacu1DBsB-240Rjs9SjhPS63IEdV50nZM4g1bkdpYlRNh2Ye-0VBZPF6tOcTHosi',
            tag: 'Web',
            tagClass: 'web-app',
            tagIcon: 'public',
            overlayClass: 'kawaii-purple',
            stack: [
                { name: 'HTML5', class: 'tech-html5' },
                { name: 'CSS3', class: 'tech-css3' },
            ]
        },
        {
            title: 'Chat Bot AI',
            description: 'A natural language processor capable of handling customer support queries with high accuracy.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2wImmB7xC8axKeS1_aoXV9WF1chXHccSeWbrzV6g1-qqf_azWTlBpPl8aoxoUgXozoUrYRyWFb8VDFMFCgB2YKjpYRs7rlnGoJ5GMuL_m4FzZmsnHlrS_YXptTHHMDJbXDq-WfDayA7wARrPyQdpwWo2cyG07jfAt-JSW9Npi1v0rFFjG5YLQ4pyuF7zKkHJCQCT8_KSbU4crf1wOrogFz9AnkpTSBj0qUf8kfWQQpTb-fR7I0Q2oGS3iICvp7_kANunf77Zk7F1u',
            tag: 'AI',
            tagClass: 'ai',
            tagIcon: 'smart_toy',
            overlayClass: 'kawaii-pink',
            stack: [
                { name: 'Python', class: 'tech-python' },
                { name: 'TensorFlow', class: 'tech-tensorflow' },
            ]
        },
    ];

    return (
        <div class={styles["kawaii-page"]}>
            <div class={styles["kawaii-header-wrapper"]}>
                <div class={styles["kawaii-container"]}>
                    <header class={styles["kawaii-header"]}>
                        <div class={styles["kawaii-logo"]}>
                            <div class={styles["kawaii-logo-icon"]}>
                                <span class="material-symbols-outlined">favorite</span>
                            </div>
                            <h2>My<span>Portfolio</span></h2>
                        </div>

                        <div class={styles["kawaii-nav"]}>
                            <nav class={styles["kawaii-nav-links"]}>
                                <a class={`${styles["kawaii-nav-link"]} ${styles.accent}`} href="#">Home</a>
                                <a class={styles["kawaii-nav-link"]} href="#" data-active="true">Projects</a>
                                <a class={`${styles["kawaii-nav-link"]} ${styles.purple}`} href="#">Blog</a>
                                <a class={`${styles["kawaii-nav-link"]} ${styles.mint}`} href="#">About</a>
                                <a class={`${styles["kawaii-nav-link"]} ${styles.accent}`} href="#">Contact</a>
                            </nav>
                            <ThemeToggle />
                        </div>

                        <button class={styles["mobile-menu-btn"]}>
                            <span class="material-symbols-outlined">menu</span>
                        </button>
                    </header>
                </div>
            </div>

            <main class={styles["kawaii-main"]}>
                <div class={styles["kawaii-content"]}>
                    <div class={styles["kawaii-hero-card"]}>
                        <div class={styles["kawaii-hero-text"]}>
                            <div class={styles["kawaii-badge-wrapper"]}>
                                <span class={styles["kawaii-badge"]}>Showcase</span>
                                <span class={styles["bounce"]}>✨</span>
                            </div>
                            <div class={styles["kawaii-hero"]}>
                                <h1>Kawaii <span>Projects</span></h1>
                            </div>
                            <p class={styles["kawaii-hero-description"]}>
                                Welcome to my cozy corner of the internet! Here are the cute apps, playful games, and web experiments I've created with love. 🌸
                            </p>
                        </div>

                        <div class={styles["kawaii-search-wrapper"]}>

                            <span class={styles["kawaii-search-icon"]}>
                                <span class="material-symbols-outlined">search</span>
                            </span>
                            <input class={styles["kawaii-search-input"]} placeholder="Find something cute..." type="text" />
                        </div>
                    </div>

                    <DeveloperProfile />

                    <div class={styles["kawaii-filters"]}>
                        < For each={categories}>
                            {(cat) => (
                                <button class={`${styles["filter-btn"]} ${cat.active ? styles.active : styles.inactive}`}>
                                    <span class="material-symbols-outlined">{cat.icon}</span>
                                    <span>{cat.name}</span>
                                </button>
                            )}
                        </For>
                    </div>

                    <Grid
                        cols={{ xs: 1, sm: 2, md: 3, lg: 3 }}
                        rows={{
                            xs: projects.length,
                            sm: Math.ceil(projects.length / 2),
                            md: Math.ceil(projects.length / 3),
                            lg: Math.ceil(projects.length / 3),
                        }}
                        spacingX={2}
                        spacingY={2}
                        class={styles["kawaii-grid"]}
                    >
                        <For each={projects}>
                            {(project) => (
                                <a href={project.link || "#"} class={styles["kawaii-card"]}>
                                    <div class={styles["dashed-border"]}></div>
                                    <div class={styles["card-image-wrapper"]}>
                                        <div class={styles["card-image"]} style={{ "background-image": `url("${project.image}")` }}></div>
                                        <div class={styles["card-overlay"]}></div>
                                        <div class={`${styles["card-tag"]} ${styles[project.tagClass]}`}>
                                            <span class="material-symbols-outlined">{project.tagIcon}</span>
                                            {project.tag}
                                        </div>
                                    </div>

                                    <div class={styles["card-content"]}>
                                        <div class={styles["card-title-row"]}>
                                            <p class={styles["card-title"]}>{project.title}</p>
                                            <div class={styles["card-arrow"]}>
                                                <span class="material-symbols-outlined">arrow_outward</span>
                                            </div>
                                        </div>
                                        <p class={styles["card-description"]}>{project.description}</p>
                                        <div class={styles["card-tech-stack"]}>
                                            <For each={project.stack}>
                                                {(tech) => (
                                                    <span class={`${styles["tech-pill"]} ${styles[tech.class]}`}>{tech.name}</span>
                                                )}
                                            </For>
                                        </div>
                                    </div>
                                </a>
                            )}
                        </For>
                    </Grid>

                    <div class={styles["kawaii-pagination-row"]}>
                        <div class={styles["kawaii-pagination-wrapper"]}>
                            <button class={styles["pagination-btn"]} disabled>
                                <span class="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button class={`${styles["pagination-btn"]} ${styles.active}`}>1</button>
                            <button class={styles["pagination-btn"]}>2</button>
                            <button class={styles["pagination-btn"]}>3</button>
                            <span class={styles["pagination-dots"]}>...</span>
                            <button class={styles["pagination-btn"]}>8</button>
                            <button class={styles["pagination-btn"]}>
                                <span class="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main >

            <footer class={styles["kawaii-footer"]}>
                <div class={styles["footer-wave"]}></div>
                <div class={styles["kawaii-container"]}>
                    <div class={styles["footer-content"]}>
                        <div class={styles["footer-info"]}>
                            <div class={styles["footer-brand"]}>
                                <span class="material-symbols-outlined">favorite</span>
                                <span>KawaiiPortfolio</span>
                            </div>
                            <p class={styles["footer-copy"]}>© 2024 Made with <span>♥</span> & marshmallows.</p>
                        </div>

                        <div class={styles["footer-socials"]}>
                            <a class={`${styles["social-link"]} ${styles.twitter}`} href="#">
                                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </a>
                            <a class={`${styles["social-link"]} ${styles.github}`} href="#">
                                <svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                            </a>
                            <a class={`${styles["social-link"]} ${styles.linkedin}`} href="#">
                                <svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>

                        <CubeWidget width={200} height={200} />

                    </div>
                </div>
            </footer>
        </div >
    );
};

