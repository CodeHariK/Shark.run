import { Component, For } from 'solid-js';
import { Grid } from "../../../solgaleo/src/ui/grid";
import './kawaii.css';

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
            title: 'TaskFlow App',
            description: 'A super cute productivity tool designed for remote teams to manage workflows efficiently.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO8KlEXxAYarYwP9xJGAudrqOkxydMtZx0rCHTu69PZbB30bSSwxjkIfW8aL6kAij9FmwJlFYN-5_iyw5o04nA49lZlFBv9MC-VEOW_NSkdUcZc9LSbCgpInRWZVpfWybii2GcH0gyPd96jzJBX9xAMxeraH_gtg82oiPCbkQW0fc6uH0S-pyDNnGvWAbiIRJkYgaXipWYSKKu568iKvjyO5HmaTVeHw1l9kX8MF-YjxEqDjWB0hkY_2rylkTIqOLstz8iCjvfHZQh',
            tag: 'Web App',
            tagClass: 'web-app',
            tagIcon: 'cloud',
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
            title: 'Weather Dashboard',
            description: 'Real-time weather data visualization using OpenWeatherMap API with interactive charts.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGELU2Z1R0lC3ygwCMX1q_GtXGga6t_OgE5axYQJgGbxgNs-LawSqONbdogX6l7rJcEgIwX44xF5AdNjSIICGfaf7KEtu0w-m3RRCaJS0aycgke1rZNTSg01V5Jfyvm4Nd2kp-bYNPaCNmOl_9LtY-NTKiAbrCU5c9PM4oB1PPmIamCqY2CKBQBmnK-l8z-haCJraemG2UgY4sUsyAYTSg74J14fCujIJluRrv-vH5tvhrW6ct9fJ6rU3icIYiN5Qc_mCjqsqZTCGi',
            tag: 'Web App',
            tagClass: 'web-app',
            tagIcon: 'sunny',
            overlayClass: 'kawaii-accent',
            stack: [
                { name: 'Vue.js', class: 'tech-vue' },
                { name: 'Chart.js', class: 'tech-chartjs' },
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
        <div class="kawaii-page">
            <div class="kawaii-header-wrapper">
                <div class="kawaii-container">
                    <header class="kawaii-header">
                        <div class="kawaii-logo">
                            <div class="kawaii-logo-icon">
                                <span class="material-symbols-outlined">favorite</span>
                            </div>
                            <h2>My<span>Portfolio</span></h2>
                        </div>

                        <div class="kawaii-nav">
                            <nav class="kawaii-nav-links">
                                <a class="kawaii-nav-link accent" href="#">Home</a>
                                <a class="kawaii-nav-link" href="#" data-active="true">Projects</a>
                                <a class="kawaii-nav-link purple" href="#">Blog</a>
                                <a class="kawaii-nav-link mint" href="#">About</a>
                                <a class="kawaii-nav-link accent" href="#">Contact</a>
                            </nav>
                            <button class="bubbly-btn">
                                <span class="btn-icon-text">
                                    <span class="material-symbols-outlined">download</span> Resume
                                </span>
                            </button>
                        </div>

                        <button class="mobile-menu-btn">
                            <span class="material-symbols-outlined">menu</span>
                        </button>
                    </header>
                </div>
            </div>

            <main class="kawaii-main">
                <div class="kawaii-content">
                    <div class="kawaii-hero-card">
                        <div class="kawaii-hero-text">
                            <div class="kawaii-badge-wrapper">
                                <span class="kawaii-badge">Showcase</span>
                                <span class="bounce">✨</span>
                            </div>
                            <div class="kawaii-hero">
                                <h1>Kawaii <span>Projects</span></h1>
                            </div>
                            <p class="kawaii-hero-description">
                                Welcome to my cozy corner of the internet! Here are the cute apps, playful games, and web experiments I've created with love. 🌸
                            </p>
                        </div>

                        <div class="kawaii-search-wrapper">
                            <span class="kawaii-search-icon">
                                <span class="material-symbols-outlined">search</span>
                            </span>
                            <input class="kawaii-search-input" placeholder="Find something cute..." type="text" />
                        </div>
                    </div>

                    <div class="kawaii-filters">
                        <For each={categories}>
                            {(cat) => (
                                <button class={`filter-btn ${cat.active ? 'active' : 'inactive'}`}>
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
                        class="kawaii-grid"
                    >
                        <For each={projects}>
                            {(project) => (
                                <div class="kawaii-card">
                                    <div class="dashed-border"></div>
                                    <div class="card-image-wrapper">
                                        <div class="card-image" style={{ "background-image": `url("${project.image}")` }}></div>
                                        <div class={`card-overlay`}></div>
                                        <div class={`card-tag ${project.tagClass}`}>
                                            <span class="material-symbols-outlined">{project.tagIcon}</span>
                                            {project.tag}
                                        </div>
                                    </div>

                                    <div class="card-content">
                                        <div class="card-title-row">
                                            <p class="card-title">{project.title}</p>
                                            <div class="card-arrow">
                                                <span class="material-symbols-outlined">arrow_outward</span>
                                            </div>
                                        </div>
                                        <p class="card-description">{project.description}</p>
                                        <div class="card-tech-stack">
                                            <For each={project.stack}>
                                                {(tech) => (
                                                    <span class={`tech-pill ${tech.class}`}>{tech.name}</span>
                                                )}
                                            </For>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </For>
                    </Grid>

                    <div class="kawaii-pagination-row">
                        <div class="kawaii-pagination-wrapper">
                            <button class="pagination-btn" disabled>
                                <span class="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button class="pagination-btn active">1</button>
                            <button class="pagination-btn">2</button>
                            <button class="pagination-btn">3</button>
                            <span class="pagination-dots">...</span>
                            <button class="pagination-btn">8</button>
                            <button class="pagination-btn">
                                <span class="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main >

            <footer class="kawaii-footer">
                <div class="footer-wave"></div>
                <div class="kawaii-container">
                    <div class="footer-content">
                        <div class="footer-info">
                            <div class="footer-brand">
                                <span class="material-symbols-outlined">favorite</span>
                                <span>KawaiiPortfolio</span>
                            </div>
                            <p class="footer-copy">© 2024 Made with <span>♥</span> & marshmallows.</p>
                        </div>

                        <div class="footer-socials">
                            <a class="social-link twitter" href="#">
                                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </a>
                            <a class="social-link github" href="#">
                                <svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                            </a>
                            <a class="social-link linkedin" href="#">
                                <svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
};

export default Kawaii;
