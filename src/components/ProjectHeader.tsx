import { Component } from 'solid-js';
import { A } from '@solidjs/router';
import styles from './ProjectHeader.module.css';

const ProjectHeader: Component = () => {
    return (
        <header class={styles.header}>
            <A href="/" class={styles.homeLink}>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class={styles.homeIcon}
                >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span class={styles.homeText}>Home</span>
            </A>
        </header>
    );
};

export default ProjectHeader;
