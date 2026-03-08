import { Component, For, Show } from 'solid-js';
import styles from './FoodlyLeftPanel.module.css';

interface NavLink {
    icon: string;
    label: string;
    active: boolean;
    href?: string;
}

interface FoodlyLeftPanelProps {
    brandName?: string;
    brandSubtitle?: string;
    brandIcon?: string;
    navLinks: NavLink[];
    showUserCard?: boolean;
    userName?: string;
    userRole?: string;
    userAvatar?: string;
    showHelpCard?: boolean;
    helpTitle?: string;
    helpText?: string;
    helpButtonText?: string;
    onHelpClick?: () => void;
}

const FoodlyLeftPanel: Component<FoodlyLeftPanelProps> = (props) => {
    return (
        <aside class={styles.sidebar}>
            <Show when={props.brandName}>
                <div class={styles.brandArea}>
                    <div class={styles.brandIcon}>
                        <span class={styles.materialIcon}>{props.brandIcon || 'restaurant'}</span>
                    </div>
                    <div class={styles.brandText}>
                        <h1 class={styles.brandTitle}>{props.brandName}</h1>
                        <p class={styles.brandSubtitle}>{props.brandSubtitle}</p>
                    </div>
                </div>
            </Show>

            <nav class={styles.navMenu}>
                <For each={props.navLinks}>
                    {(link) => (
                        <a
                            href={link.href || "#"}
                            class={link.active ? styles.navLinkActive : styles.navLink}
                        >
                            <span class={styles.materialIcon}>{link.icon}</span>
                            <span class={styles.navText}>{link.label}</span>
                        </a>
                    )}
                </For>
            </nav>

            <Show when={props.showHelpCard}>
                <div class={styles.helpCenter}>
                    <div class={styles.helpCard}>
                        <p class={styles.helpTitle}>{props.helpTitle || 'Help Center'}</p>
                        <p class={styles.helpText}>{props.helpText || 'Need assistance?'}</p>
                        <button class={styles.helpBtn} onClick={props.onHelpClick}>
                            {props.helpButtonText || 'Contact Support'}
                        </button>
                    </div>
                </div>
            </Show>

            <Show when={props.showUserCard}>
                <div class={styles.userProfile}>
                    <div class={styles.userCard}>
                        <img
                            class={styles.userAvatar}
                            src={props.userAvatar || ''}
                            alt={props.userName || 'User'}
                        />
                        <div class={styles.userInfo}>
                            <p class={styles.userName}>{props.userName || 'User Name'}</p>
                            <p class={styles.userRole}>{props.userRole || 'Role'}</p>
                        </div>
                    </div>
                </div>
            </Show>
        </aside>
    );
};

export default FoodlyLeftPanel;
