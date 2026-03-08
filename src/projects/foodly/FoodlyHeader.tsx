import { Component, Show } from 'solid-js';
import styles from './FoodlyHeader.module.css';

interface FoodlyHeaderProps {
    brandName?: string;
    stationName?: string;
    searchPlaceholder?: string;
    showSearch?: boolean;
    userName?: string;
    userRole?: string;
    userAvatar?: string;
    showNotifications?: boolean;
    showSettings?: boolean;
    showHelp?: boolean;
}

const FoodlyHeader: Component<FoodlyHeaderProps> = (props) => {
    return (
        <header class={styles.header}>
            <div class={styles.headerLeft}>
                <div class={styles.brand}>
                    <span class={styles.brandIcon}>restaurant</span>
                    <h2 class={styles.brandTitle}>{props.brandName || 'Foodly'}</h2>
                </div>
                <Show when={props.stationName}>
                    <div class={styles.stationTag}>
                        <span class={styles.stationDot}></span>
                        <span class={styles.stationText}>{props.stationName}</span>
                    </div>
                </Show>
            </div>

            <Show when={props.showSearch !== false}>
                <div class={styles.headerCenter}>
                    <div class={styles.searchWrap}>
                        <span class={styles.searchIcon}>search</span>
                        <input
                            class={styles.searchInput}
                            type="text"
                            placeholder={props.searchPlaceholder || "Search..."}
                        />
                    </div>
                </div>
            </Show>

            <div class={styles.headerRight}>
                <Show when={props.showNotifications !== false}>
                    <button class={styles.iconBtn}>
                        <span class={styles.materialIcon}>notifications</span>
                        <span class={styles.notifyBadge}></span>
                    </button>
                </Show>

                <Show when={props.showHelp}>
                    <button class={styles.iconBtn}>
                        <span class={styles.materialIcon}>help</span>
                    </button>
                </Show>

                <Show when={props.showSettings}>
                    <button class={styles.iconBtn}>
                        <span class={styles.materialIcon}>settings</span>
                    </button>
                </Show>

                <div class={styles.headerDivider}></div>

                <div class={styles.userWrap}>
                    <div class={styles.userInfo}>
                        <p class={styles.userName}>{props.userName || 'User Name'}</p>
                        <p class={styles.userRole}>{props.userRole || 'Role'}</p>
                    </div>
                    <div
                        class={styles.userAvatar}
                        style={{ "background-image": `url('${props.userAvatar || ''}')` }}
                    ></div>
                </div>
            </div>
        </header>
    );
};

export default FoodlyHeader;
