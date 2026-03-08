import { Component, For } from 'solid-js';
import styles from './FoodlyHome.module.css';

const FoodlyHome: Component = () => {

    const categories = [
        { id: 1, name: 'Pizza', icon: 'local_pizza', active: true },
        { id: 2, name: 'Burgers', icon: 'lunch_dining', active: false },
        { id: 3, name: 'Sushi', icon: 'set_meal', active: false },
        { id: 4, name: 'Salads', icon: 'eco', active: false },
        { id: 5, name: 'Desserts', icon: 'icecream', active: false },
    ];

    const restaurants = [
        {
            id: 1,
            name: 'Artisanal Pizza Co.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqLHgGwbSWbttSEyuYAaOO3m_8r1WQVp-jTJTF3ffHOuvTFxD1JA6ugtM9PzlcQrT5ey-dMVXF7F2oOA_puGeOvrTMOtJOgmPsNIngyWN1gFkBdZSLh1F4I2AJsh3XZPNKZrHQIWZ_Q7AKZovpw5sz7wEcduu0egCWnBar9iRO8sbc1qXdICGjSs2M7EXWTkRRNUKmzKGwepxmf9AuwfkrCGceJQouoeMVxdq1xEyd8XkWqbz1W9kOuEcHtsN5LYuKB74Gbwn9muc4',
            time: '20-30 min',
            rating: '4.8',
            tags: 'Italian • Pizza • $$',
            delivery: 'Free Delivery',
            isFreeDelivery: true,
            favorite: true,
        },
        {
            id: 2,
            name: 'The Burger Shack',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrE-luzTPDE-BGDNhGzmcGCsllzldxJQE8X3-plJH8afMTb5o0cNy2luNILaIq5Reev75bhR7x8XZKIQtHlaGg-aelZJayIu-5BgnbCEI6ia9Z6Ck3zFRcc99zicoi4sTFQYP5mo-ruN_In0UcVvXLuQpEPMVxJDp-Kk1JIs1CVUYbYcKoQV4zpYoto0mQ1J3JhdR2E17g5cdfkfmIDMkP7u7GszQNhIznH0OkXOaNSe4vvlwOZRoGTas5F1crW7KOs5wkBR3i7xos',
            time: '15-25 min',
            rating: '4.5',
            tags: 'American • Burgers • $',
            delivery: '$2.99 Delivery',
            isFreeDelivery: false,
            favorite: false,
        },
        {
            id: 3,
            name: 'Miso Zen Sushi',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjKQmd4u-FDwtw2KWASH6Unir3CvJz6_Hkjay4BC_TVKUQXq_0qJTj4wJGnx7hJvDsGZ6-GM2c7Y67OF4mp_wGZEiLQp71mh9MjAOtXKMOq6v5Q6-w2wKAGLeL7Y9_6quio_qt_eiPjtX81AzKnWtDGC2aGejC696xwRYNJY1qqVnKojy95Lpey0JJRwxJ4XNoik5KrBbaVlE0L2ZavlK8I9EzwqZlNku9NDWVtOzYibqvOVZBujzs5BMXWMCrIiHJn1fOH5CssDt8',
            time: '30-45 min',
            rating: '4.9',
            tags: 'Japanese • Sushi • $$$',
            delivery: 'Free Delivery',
            isFreeDelivery: true,
            favorite: false,
        },
    ];

    const navItems = [
        { icon: 'home', label: 'Home', active: true },
        { icon: 'explore', label: 'Browse', active: false },
        { icon: 'receipt_long', label: 'Orders', active: false },
        { icon: 'person', label: 'Profile', active: false },
    ];

    return (
        <div class={styles.wrapper}>
            {/* Mobile Device Container (iPhone 16: 393x852) */}
            <main class={styles.deviceContainer}>

                {/* iOS Status Bar */}
                <header class={styles.statusBar}>
                    <span class={styles.timeText}>9:41</span>
                    <div class={styles.statusIcons}>
                        <svg class={styles.iconSmall} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21l-12-18h24z"></path>
                        </svg>
                        <svg class={styles.iconSmall} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.5 20h1v1h-1zM11.5 18h1v1h-1zM11.5 16h1v1h-1zM11.5 14h1v1h-1z"></path>
                        </svg>
                        <div class={styles.batteryWrap}>
                            <div class={styles.batteryLevel}></div>
                        </div>
                    </div>
                </header>

                {/* App Header */}
                <header class={styles.header}>
                    <div class={styles.headerLeft}>
                        <div class={styles.avatarWrap}>
                            <div
                                class={styles.avatarImg}
                                style={{ "background-image": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDmKunDjpf7rJQui6J_6dYCQ7_V7VtD8GuT1UhmLU5w86VOJwA0xNfqVv4gf-haMbnb3rsUZKQ56Qu0TOAaP7G7g5A5OGyGPxMSF66TjrHD5ojP81sdRXk2mGjhWOnRY1TEgSRaKSqgvRgvsceJIngvsisw3vGlxW65H0g0WFejEkOiBTAQxA396pCZYUJixUCGjhNDQqMrgpQZhbswsSvROMhdmAQcIHRqIb_YnVCjLlU_Hrk0Z0FdQaayHVpEgQh2frKrU8X6E2p')" }}
                            ></div>
                        </div>
                        <div class={styles.locationCol}>
                            <span class={styles.deliverLabel}>Deliver to</span>
                            <div class={styles.locationRow}>
                                <span class={styles.locationText}>New York, NY</span>
                                <span class={`${styles.materialIcon} ${styles.locationIcon}`}>keyboard_arrow_down</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class={styles.basketBtn}>
                            <span class={styles.materialIcon}>shopping_basket</span>
                            <span class={styles.basketBadge}>3</span>
                        </button>
                    </div>
                </header>

                {/* Scrollable Content Area */}
                <div class={`${styles.scrollContent} ${styles.hideScrollbar}`}>

                    {/* Search Bar */}
                    <div class={styles.searchSection}>
                        <label style={{ width: '100%', display: 'flex', 'flex-direction': 'column' }}>
                            <div class={styles.searchBox}>
                                <div class={styles.searchIconWrap}>
                                    <span class={styles.materialIcon}>search</span>
                                </div>
                                <input
                                    class={styles.searchInput}
                                    placeholder="Search for restaurants or dishes"
                                />
                                <div class={styles.filterIconWrap}>
                                    <span class={styles.materialIcon}>tune</span>
                                </div>
                            </div>
                        </label>
                    </div>

                    {/* Horizontal Categories */}
                    <div class={`${styles.categoryList} ${styles.hideScrollbar}`}>
                        <For each={categories}>
                            {(cat) => (
                                <div class={styles.categoryItem}>
                                    <div class={cat.active ? styles.catIconBoxActive : styles.catIconBox}>
                                        <span class={styles.materialIcon}>{cat.icon}</span>
                                    </div>
                                    <p class={cat.active ? styles.catLabelActive : styles.catLabel}>{cat.name}</p>
                                </div>
                            )}
                        </For>
                    </div>

                    {/* Section Title */}
                    <div class={styles.sectionHeader}>
                        <h2 class={styles.sectionTitle}>Popular Near You</h2>
                        <button class={styles.seeAllBtn}>See All</button>
                    </div>

                    {/* Restaurant Cards */}
                    <div class={styles.restaurantList}>
                        <For each={restaurants}>
                            {(rest) => (
                                <div class={styles.restCard}>
                                    <div class={styles.restImageWrap}>
                                        <div
                                            class={styles.restImage}
                                            style={{ "background-image": `url('${rest.image}')` }}
                                        ></div>
                                        <button class={styles.favBtn}>
                                            <span class={`${styles.materialIcon} ${rest.favorite ? styles.favIconActive : styles.favIcon}`}>
                                                favorite
                                            </span>
                                        </button>
                                        <div class={styles.timeBadge}>{rest.time}</div>
                                    </div>

                                    <div class={styles.restInfo}>
                                        <div class={styles.restHeader}>
                                            <h3 class={styles.restTitle}>{rest.name}</h3>
                                            <div class={styles.ratingBadge}>
                                                <span class={`${styles.materialIcon} ${styles.materialIconFilled} ${styles.ratingIcon}`}>star</span>
                                                <span class={styles.ratingText}>{rest.rating}</span>
                                            </div>
                                        </div>
                                        <div class={styles.restMeta}>
                                            <span>{rest.tags}</span>
                                            <span class={styles.dot}></span>
                                            <span class={rest.isFreeDelivery ? styles.deliveryPrimary : styles.deliverySecondary}>
                                                {rest.delivery}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </For>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <nav class={styles.bottomNav}>
                    <div class={styles.navContainer}>
                        <For each={navItems}>
                            {(item) => (
                                <a href="#" class={item.active ? styles.navItemActive : styles.navItem}>
                                    <span class={`${styles.materialIcon} ${item.active ? styles.materialIconFilled : ''}`}>
                                        {item.icon}
                                    </span>
                                    <span class={styles.navLabel}>{item.label}</span>
                                </a>
                            )}
                        </For>
                    </div>
                </nav>

                {/* iOS Home Indicator */}
                <div class={styles.homeIndicatorWrap}></div>

            </main>
        </div>
    );
};

export default FoodlyHome;