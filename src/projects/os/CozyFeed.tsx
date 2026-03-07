import { Component, onMount } from 'solid-js';
import styles from './CozyFeed.module.css';

const CozyFeed: Component = () => {
    // Automatically check for dark mode
    onMount(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('night');
        }
    });

    const moments = [
        {
            user: '@plant_parent',
            time: '2 hours ago',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQaKKevWUsbtCJhnQbLwj9YHLE1FL3DCoKvYF5PqYmnqLN7wN9O8dedJ2SDRtZH_xriBQZyp36Bz0Mgi7eRZHgHrtnRvlPuQV-FvK8Crq6zJ0KE7HZTh_-D8QkuA_-zZCGGT5OMg253hCdEXDUJ_yINdtzU9KLkNE5kRpU0lBnBCdD_4SrBeJRO4NTFPgbwS7FqQay86adtmHH5GAEObuHWa3drAXDSnu-1refBkQ3Y_FsBCBxQOvOCX045w9U2HLAztuSzGmP4KU',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV3S5maTUPejfHDPXOH_fMtB3mKE2iOQ95DL7pho_NgQOhz13kW_WjPv1UoZzb7ju9vz04GX1_-Klf26NLPGl-prmLvgzJ1BBdrolWefFq0LZ5uiSNkBhZaOQgcMIBYUJajZvrGgkvSGq8Vbvym0vLk1okJkvM_eLXHPrNqLQmhsVWl_vfgbZ1qb6apEjzLP1SXX6-EoJb7Fu-zP7GRUNpoxwXqlPU5FKW-xSQWjJM1_X0Ovbr-EYzFQaGv4bMFMq4ncqGSYaSyOA',
            title: 'Morning light through the ferns',
            text: 'The way the sun hits the leaves in the morning makes everything feel so peaceful. Just taking a breath and appreciating the green today.'
        },
        {
            user: '@tea_and_tales',
            time: '5 hours ago',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX_3Wz1V7F6tRNUYowor7EhXu7U3_Zs22fafbFBGAzSPlnlKpkaOmZmqMkNWYfBgRExSucP2ZFH6jZi-WYcuIhNuQAF0ZSh3NiEIw7866pk6OqYK6YWV9A48V3cEsufXVrLjbxpwmIKRqb_0fg0q0NA0lCzxZE5aH1A2niFox898RaJuG8QvQ4MuPtOcSp8HXwFngQ_v5HmYUqMrkVKzE2FCqhUgpX3C-pWoJQKqrX200jRYL9TNJnBrFOrJawUfaUO66t56PZFFo',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZU7mJsc6UTHCMeaBL0ggBZamI769rfXNI3HmaiukzKY4z3OjI143q4_lIOxgMwLxLVOst9x3qR_Tg5YnkmcWPVYc4My6Q-KrbkQ9CX8TQUsS87l-Xrn-nR1AEklmuRPGcCJtGzWuHMGN6r7VTXr-HDYblGqXAIuPCl1V9PzUToDiivT0i9DRZSPdJQreszeFtcUuVP4WUXUQjGqZEysSgYDZ02_rZMugRl6cmHs7J08Vc9uMb5s3XbD3Gqa2GzxUDp_u-K20Rpg',
            title: 'Earl grey and quiet chapters',
            text: "Finally finished the third chapter of my new favorite novel. There's nothing like a rainy Tuesday and a warm mug."
        }
    ];

    const groups = [
        { icon: 'coffee', name: 'Tea Lovers', members: '1.2k', style: styles.groupOrange },
        { icon: 'potted_plant', name: 'Plant Parents', members: '840', style: styles.groupGreen },
        { icon: 'edit_note', name: 'Morning Writers', members: '320', style: styles.groupBlue },
        { icon: 'self_improvement', name: 'Daily Meditators', members: '2.5k', style: styles.groupPurple },
    ];

    return (
        <div class={styles.appWrapper}>

            {/* Sidebar Navigation */}
            <aside class={styles.sidebar}>
                <div class={styles.brandArea}>
                    <div class={styles.brandIcon}>
                        <span class={styles.materialIcon}>filter_vintage</span>
                    </div>
                    <div>
                        <h1 class={styles.brandTitle}>Cozy Community</h1>
                        <p class={styles.brandSubtitle}>Stay Mindful</p>
                    </div>
                </div>

                <nav class={styles.navMenu}>
                    <a href="#" class={styles.navLinkActive}>
                        <span class={styles.materialIcon}>home</span>
                        <span>Feed</span>
                    </a>
                    <a href="#" class={styles.navLink}>
                        <span class={styles.materialIcon}>group</span>
                        <span>Groups</span>
                    </a>
                    <a href="#" class={styles.navLink}>
                        <span class={styles.materialIcon}>chat_bubble</span>
                        <span>Messages</span>
                    </a>
                    <a href="#" class={styles.navLink}>
                        <span class={styles.materialIcon}>explore</span>
                        <span>Discover</span>
                    </a>
                </nav>

                <div class={styles.navBottom}>
                    <button class={styles.newMomentBtn}>
                        <span class={styles.materialIcon} style={{ "font-size": "0.875rem" }}>add</span>
                        <span>New Moment</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main class={styles.mainArea}>

                {/* Header */}
                <header class={styles.header}>
                    <div class={styles.headerLeft}>
                        <span class={styles.materialIcon} style={{ color: "var(--c-primary)" }}>spa</span>
                        <h2 class={styles.headerTitle}>CozyOS</h2>
                    </div>

                    <div class={styles.headerRight}>
                        <div class={styles.searchBox}>
                            <span class={`${styles.materialIcon} ${styles.searchIcon}`}>search</span>
                            <input
                                type="text"
                                class={styles.searchInput}
                                placeholder="Search peace..."
                            />
                        </div>
                        <button class={styles.iconBtn}>
                            <span class={styles.materialIcon}>notifications</span>
                        </button>
                        <div class={styles.avatarBox}>
                            <div
                                class={styles.avatarImg}
                                style={{ "background-image": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYzU6xLRz1S4sSNxtvaSLsxFf0GRBuen3Ym6Ws5X1PAVNst4Y9mu7pRlgFCobigLQnbM13wyfSM55nGAUnfJsj9KsZ5IV8LsXmowu4M2iTIn-a8YbZnVFEm4XvLT23DZyaLqo2tyLWO3kfk_6NoGepn59Nv6rOU4uybdun1_bj68mc8ntI2pWJvcSEcoPtqQYY4mVF2nOZrtMzUL_2UfFmbtRKjdLHMVekAX_Y0sKz4ZidxKL-kdKJO1ZLIhwGeR1ttx_D7vQslkY')" }}
                            ></div>
                        </div>
                    </div>
                </header>

                {/* Scrollable Content Container */}
                <div class={styles.scrollArea}>
                    <div class={styles.contentLayout}>

                        {/* Feed Section */}
                        <div class={styles.feedSection}>

                            {/* Daily Connection Prompt */}
                            <section class={styles.promptCard}>
                                <div
                                    class={styles.promptAvatar}
                                    style={{ "background-image": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwS9lESQKS9O4rTbOdD9YKAZo4Z9EvxqZLjfM09XyTr1PRON5ads2zdAHleJCtsYHOmGzN3tUI2QBnGydPJrxX56YaROnY_6sfrxv1npfX-W3mox1bX_BNOy9rTLotbylSEEMfBRTn0NnVUFKxXRvR2AJBNupbE5G_Fv0Jm8s_rKc09J8LS293_E5DmWY0JffTyOgQdqg-rw1-LNpObCPDdcODB4oeUBCgZ8NRY3B5EhJJzM9yU23Gnnp4qv8Nfax7W-jj4rV8vNY')" }}
                                ></div>
                                <div class={styles.promptBody}>
                                    <h3 class={styles.promptLabel}>Daily Connection</h3>
                                    <textarea
                                        class={styles.promptInput}
                                        rows={2}
                                        placeholder="Share something that made you smile today..."
                                    ></textarea>

                                    <div class={styles.promptActions}>
                                        <div class={styles.promptIcons}>
                                            <button class={styles.promptIconBtn}><span class={styles.materialIcon}>image</span></button>
                                            <button class={styles.promptIconBtn}><span class={styles.materialIcon}>favorite</span></button>
                                            <button class={styles.promptIconBtn}><span class={styles.materialIcon}>eco</span></button>
                                        </div>
                                        <button class={styles.shareBtn}>Share Moment</button>
                                    </div>
                                </div>
                            </section>

                            {/* Cozy Moments Feed */}
                            <div>
                                <h2 class={styles.feedTitle}>
                                    <span class={styles.materialIcon} style={{ color: "var(--c-primary)" }}>auto_awesome</span>
                                    Cozy Moments
                                </h2>

                                <div style={{ display: 'flex', 'flex-direction': 'column', gap: '2rem' }}>
                                    {moments.map(moment => (
                                        <article class={styles.momentCard}>
                                            <div class={styles.momentImageWrapper}>
                                                <div
                                                    class={styles.momentImage}
                                                    style={{ "background-image": `url('${moment.image}')` }}
                                                ></div>
                                                <div class={styles.momentGradient}></div>
                                            </div>

                                            <div class={styles.momentBody}>
                                                <div class={styles.momentMeta}>
                                                    <div class={styles.momentUser}>
                                                        <div
                                                            class={styles.momentUserAvatar}
                                                            style={{ "background-image": `url('${moment.avatar}')` }}
                                                        ></div>
                                                        <div>
                                                            <p class={styles.momentUsername}>{moment.user}</p>
                                                            <p class={styles.momentTime}>{moment.time}</p>
                                                        </div>
                                                    </div>

                                                    <button class={styles.momentLikeBtn}>
                                                        <span class={styles.materialIcon} style={{ "font-size": "0.875rem" }}>favorite</span>
                                                        Love
                                                    </button>
                                                </div>

                                                <h3 class={styles.momentTitle}>{moment.title}</h3>
                                                <p class={styles.momentText}>{moment.text}</p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar: Mindful Groups */}
                        <aside class={styles.rightSidebar}>

                            {/* Groups List */}
                            <section class={styles.groupsCard}>
                                <h3 class={styles.groupsHeader}>
                                    Mindful Groups
                                    <span class={styles.viewAllText}>View all</span>
                                </h3>

                                <div class={styles.groupList}>
                                    {groups.map(group => (
                                        <div class={styles.groupItem}>
                                            <div class={`${styles.groupIconBox} ${group.style}`}>
                                                <span class={styles.materialIcon}>{group.icon}</span>
                                            </div>
                                            <div class={styles.groupInfo}>
                                                <h4 class={styles.groupTitle}>{group.name}</h4>
                                                <p class={styles.groupMembers}>{group.members} members online</p>
                                            </div>
                                            <span class={`${styles.materialIcon} ${styles.groupChevron}`}>chevron_right</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Weekly Inspiration */}
                            <section class={styles.inspireCard}>
                                <span class={`${styles.materialIcon} ${styles.inspireIcon}`}>lightbulb</span>
                                <h4 class={styles.inspireTitle}>Weekly Inspiration</h4>
                                <p class={styles.inspireQuote}>"The soul should always stand ajar, ready to welcome the ecstatic experience."</p>
                                <span class={styles.inspireAuthor}>— Emily Dickinson</span>
                            </section>

                        </aside>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CozyFeed;