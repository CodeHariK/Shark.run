
import { Component, onMount } from 'solid-js';
import styles from './BadgeHunt.module.css';

const BadgeHunt: Component = () => {
    // Check for system dark mode natively
    onMount(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('night');
        }
    });

    const earnedBadges = [
        {
            title: 'Candy Corn Cadet',
            rarity: 'Common',
            rarityColor: '#f97316', // orange-500
            gradient: 'linear-gradient(to top right, #facc15, #f97316)', // yellow-400 to orange-500
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAeKkWUXWyl6jUdL7DbFfXZegUVuJoMyz-pSHXGqt23s-64hmDqoYRd57utbjno9lBa1HULCqMNBWdsHWiNTU95KBy3b5n8Ljd539AcyIdj69cBJY5tFFRPehvYQBT8ft4jGG4_tZgSUzuziqXBC3FwE7xwDq0Rz51B2XoZOjCmAKCTBZisfm1fkqthrRqDfAVAK-I4t13V9datHl0C-2pEGO0eQcaLy2pjdLvmapWP72Cp97MKjaSL4hRJeL1vTwj9_m5yPJ5vr4a',
            desc: '"The sweetest hunter in town! Awarded for finding your first 5 treats."',
            date: 'Earned Oct 12',
        },
        {
            title: 'Spooky Spider',
            rarity: 'Uncommon',
            rarityColor: 'var(--c-primary)',
            gradient: 'linear-gradient(to top right, #334155, #0f172a)', // slate-700 to slate-900
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiR3sMNWox8W3AgUNjxH7Vya09lBbKEtBBJcvfkK9uj6-gQTBPsUzn_bu_iruoEznSaIY6tkRQyhcYrl67LU_LO3Ki4ORMh7-OsB3mhRZPu9XADTOErM-3DxJRpTcXfnFdaHd_8h0WTsbGS1TCerX18LdSH9UczInFuhawz1pWm-JDNe2ZnLcJD30S2i9DMizms8XBw9YDG3mkk5rz9Yvp86LpwDxH8xLJMhY1oYCk8ss0Lnq0Bmt9C1BSiB9i5aFp_k6XJKu-f1L-',
            desc: '"Eight legs, zero scares. You\'ve navigated the trickiest webs!"',
            date: 'Earned Oct 15',
        },
        {
            title: 'Midnight Owl',
            rarity: 'Rare',
            rarityColor: '#818cf8', // indigo-400
            gradient: 'linear-gradient(to top right, #3730a3, #581c87)', // indigo-800 to purple-900
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAquIOYDy388POiY4MVzdfGW7vPdvctbd7sE7Ei1ncbi1BeeJ2yJ9OatOYSCxzjOo0XXPLOwjuF6g5c8Idwq5MqMVhleh8PwvxEDvrtoriDU6HuV-AqbAwqlGsWc8Em3u55OVsW7isv_H4JzOtACb_BKP4ysULS1hAhAqTQZoWf2XNcuzyXlUE1lxxTgUqpkb4Hyh0s5NRLgIZtml0jSIvPWw_h6flI15N7i8yX9qAsJBvov51E9piq7bpcdKUQmHNvkIpFDvyibRcv',
            desc: '"Wise watcher of the night. Found all treats after midnight!"',
            date: 'Earned Oct 20',
        },
    ];

    const lockedBadges = [
        { title: 'Ghostly Guide', icon: 'mist', req: 'Complete 5 hunts' },
        { title: 'Pumpkin Pal', icon: 'potted_plant', req: 'Find 10 pumpkins' },
        { title: 'Batty Buddy', icon: 'dark_mode', req: 'Fly 5 miles' },
    ];

    const emptySlots = [1, 2, 3];

    return (
        <div class={styles.appWrapper}>

            {/* Navigation */}
            <header class={styles.header}>
                <div class={styles.headerLeft}>
                    <div class={styles.brand}>
                        <div class={styles.brandIcon}>
                            <span class={styles.materialIcon}>auto_awesome</span>
                        </div>
                        <h2 class={styles.brandTitle}>Candy Hunt</h2>
                    </div>
                    <nav class={styles.nav}>
                        <a href="#" class={styles.navLink}>Home</a>
                        <a href="#" class={styles.navLinkActive}>My Badges</a>
                        <a href="#" class={styles.navLink}>Leaderboard</a>
                        <a href="#" class={styles.navLink}>Shop</a>
                    </nav>
                </div>

                <div class={styles.headerRight}>
                    <div class={styles.searchContainer}>
                        <div class={styles.searchBox}>
                            <div class={styles.searchIconWrapper}>
                                <span class={styles.materialIcon} style={{ "font-size": "20px" }}>search</span>
                            </div>
                            <input
                                type="text"
                                class={styles.searchInput}
                                placeholder="Search badges..."
                            />
                        </div>
                    </div>
                    <div class={styles.actionGroup}>
                        <button class={styles.notifyBtn}>
                            <span class={styles.materialIcon}>notifications</span>
                        </button>
                        <div class={styles.avatarWrapper}>
                            <div
                                class={styles.avatar}
                                style={{ "background-image": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfjctdbE8_ftTM1dKJqTytPeUpRqMLhHjF6_d1XFMPHJ-9beoU4KN3nOtqkQ9D9DsFz1_MgfZYc6wGeMGeF_K6IL4CaAm3hce3EMLjo2py8QGzzx3FEwxz4XbOlxTFnS-weN91xNqGNMx_p2v4bjMV6wpqEBbijb17ZlqSOb1O9YH58O5bLbOZlgR5uYgzs3I1TqiLUQ3fZ939g_aHO4fYan-eFTo4uEJrPMcGmYRH_YxfYcAV0J78xZzEcc7lAZ9d1r8Tn7DfirBm')" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </header>

            <main class={styles.mainContainer}>

                {/* Hero Section */}
                <div class={styles.hero}>
                    <div class={styles.heroText}>
                        <h1 class={styles.heroTitle}>
                            Happy <span>Haunting!</span>
                        </h1>
                        <p class={styles.heroDesc}>
                            Complete challenges to unlock adorable spooky badges and fill your collector's sash!
                        </p>
                        <div class={styles.heroStats}>
                            <div class={styles.statPill}>
                                <span class={styles.materialIcon} style={{ color: "var(--c-primary)" }}>military_tech</span>
                                <span class={styles.statTextPrimary}>3 / 12 Collected</span>
                            </div>
                            <div class={styles.statPill}>
                                <span class={styles.materialIcon} style={{ color: "#f97316" }}>local_fire_department</span>
                                <span class={styles.statTextSecondary}>5 Day Streak</span>
                            </div>
                        </div>
                    </div>

                    <div class={styles.heroImageWrapper}>
                        <div class={styles.heroCircle}>
                            <div
                                class={styles.heroImage}
                                style={{ "background-image": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0HySQ45uZR8nGR3JHKE5WbRkw51WC8YsMkDomIV7D15wPHGYi4Of3j4MCozDQIz00A1DofIMdgVc4qB0s7JsEiS4ETfCVjeFUuO9c1j72KnKQXLc22HfS3Q5KTJEEGIeyBgHoNnVhOQYtCdbJqJWB3GUS35EknX314hEBi8aG_s8MYZbVhbuYiEUlRPpfBHeYid-y3H7lFZV9jGQ50Ewv7bzEFprqSi2jzpPQ7CEr_BLN-zZIdd66qRKf9nZck0iaIOVWQQAwxdrU')" }}
                            ></div>
                            <span class={`${styles.materialIcon} ${styles.starIcon}`}>star</span>
                            <span class={`${styles.materialIcon} ${styles.batIcon}`}>pest_control_rodent</span>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div class={styles.filtersRow}>
                    <div class={styles.filterTabs}>
                        <button class={styles.tabBtnActive}>All Badges</button>
                        <button class={styles.tabBtn}>Earned</button>
                        <button class={styles.tabBtn}>Locked</button>
                    </div>
                    <div class={styles.sortBox}>
                        <span>Sort by:</span>
                        <select class={styles.sortSelect}>
                            <option>Rarity</option>
                            <option>Recent</option>
                            <option>Alphabetical</option>
                        </select>
                    </div>
                </div>

                {/* Badges Grid */}
                <div class={styles.badgeGrid}>

                    {/* Earned Badges */}
                    {earnedBadges.map(badge => (
                        <div class={styles.badgeCard}>
                            <div class={styles.badgeIconWrapper}>
                                <div class={styles.badge3d} style={{ background: badge.gradient }}>
                                    <div class={styles.badgeImage} style={{ "background-image": `url('${badge.image}')` }}></div>
                                </div>
                                <div class={styles.checkIcon}>
                                    <span class={styles.materialIcon}>check</span>
                                </div>
                            </div>
                            <h3 class={styles.badgeTitle}>{badge.title}</h3>
                            <span class={styles.badgeRarity} style={{ color: badge.rarityColor }}>{badge.rarity}</span>

                            <div class={styles.hoverInfo}>
                                <p class={styles.hoverDesc}>{badge.desc}</p>
                                <div class={styles.hoverDate}>{badge.date}</div>
                            </div>
                        </div>
                    ))}

                    {/* Locked Badges */}
                    {lockedBadges.map(badge => (
                        <div class={styles.badgeCardLocked}>
                            <div class={styles.lockedIconWrapper}>
                                <div class={styles.lockedCircle}>
                                    <span class={styles.materialIcon}>{badge.icon}</span>
                                </div>
                                <div class={styles.lockedOverlay}>
                                    <span class={styles.materialIcon}>lock</span>
                                </div>
                            </div>
                            <h3 class={styles.lockedTitle}>{badge.title}</h3>
                            <span class={styles.lockedReq}>{badge.req}</span>
                        </div>
                    ))}

                    {/* Empty Placeholder Slots */}
                    {emptySlots.map(() => (
                        <div class={styles.badgeCardLocked} style={{ "border-color": "transparent" }}>
                            <div class={styles.placeholderBox}>
                                <div class={styles.lockedCircle}>
                                    <span class={styles.materialIcon}>question_mark</span>
                                </div>
                            </div>
                            <div class={styles.placeholderBar1}></div>
                            <div class={styles.placeholderBar2}></div>
                        </div>
                    ))}

                </div>

                {/* Footer CTA */}
                <div class={styles.ctaSection}>
                    <h2 class={styles.ctaTitle}>Want more badges?</h2>
                    <p class={styles.ctaDesc}>
                        New limited-edition Halloween badges are added every Friday. Keep hunting to complete your collection!
                    </p>
                    <button class={styles.ctaBtn}>
                        <span class={styles.materialIcon}>explore</span>
                        Start New Hunt
                    </button>
                </div>

            </main>

            <footer class={styles.footer}>
                <p>© 2024 Candy Hunt App. Stay spooky!</p>
            </footer>

        </div>
    );
};

export default BadgeHunt;