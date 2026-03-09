import { Component, onMount } from 'solid-js';
import styles from './FitnessApp.module.css';
import ProjectHeader from '../../components/ProjectHeader';

// Reusable Sub-components for Device Chrome
const StatusBar = (props: { dark?: boolean }) => (
    <div class={`${styles.statusBar} ${props.dark ? styles.statusBarDark : ''}`}>
        <span>9:41</span>
        <div class={styles.statusIcons}>
            <svg class={styles.iconSmall} fill="currentColor" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"></path></svg>
            <svg class={styles.iconSmall} fill="currentColor" viewBox="0 0 24 24"><path d="M11.5 20h1v1h-1zM11.5 18h1v1h-1zM11.5 16h1v1h-1zM11.5 14h1v1h-1z"></path></svg>
            <div class={styles.batteryWrap}><div class={styles.batteryFill}></div></div>
        </div>
    </div>
);

const BottomNav = (props: { activeTab: string }) => {
    const tabs = [
        { id: 'home', label: 'Home', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path> },
        { id: 'progress', label: 'Search', icon: <><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></> },
        { id: 'tracking', label: 'Library', icon: <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> },
        { id: 'details', label: 'Settings', icon: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon> }
    ];

    return (
        <nav class={styles.bottomNav}>
            {tabs.map(tab => (
                <div class={`${styles.navItem} ${props.activeTab === tab.id ? styles.navItemActive : ''}`}>
                    <svg class={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        {tab.icon}
                    </svg>
                    <span class={styles.navLabel}>{tab.label}</span>
                </div>
            ))}
            <div class={styles.homeIndicatorWrap}></div>
        </nav>
    );
};

const FitnessApp: Component = () => {

    // Theme Initialization
    onMount(() => {
        if (
            localStorage.getItem("theme") === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("night");
        } else {
            document.documentElement.classList.remove("night");
        }
    });

    const toggleTheme = () => {
        if (document.documentElement.classList.contains("night")) {
            document.documentElement.classList.remove("night");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("night");
            localStorage.setItem("theme", "dark");
        }
    };

    // Mock Images
    const imgMap = "https://plus.unsplash.com/premium_photo-1681488098851-e3913f3b1908?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const imgRunner = "https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const imgAvatar1 = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop";
    const imgAvatar2 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop";
    const imgAvatar3 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop";

    return (
        <div class={styles.portfolioWrapper}>

            {/* Global Portfolio Header */}
            <header class={styles.portfolioHeader}>
                <ProjectHeader />
                <h1 class={styles.portfolioTitle}>Fitness App UI Portfolio</h1>
                <button class={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle Theme">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                    Night Mode
                </button>
            </header>

            {/* Screens Container */}
            <main class={styles.screensContainer}>

                {/* SCREEN 1: HOME */}
                <section class={styles.screenSection}>
                    <div class={styles.screenInfo}>
                        <h2 class={styles.screenTitle}>Home Dashboard</h2>
                        <p class={styles.screenDesc}>Overview of daily activities, upcoming plans, and quick access to active workouts.</p>
                    </div>
                    <div class={styles.device}>
                        <StatusBar />
                        <div class={styles.screenContent}>
                            <div class={styles.homeHeader}>
                                <div>
                                    <h1 class={styles.greeting}>Hi, Jonathan</h1>
                                    <p class={styles.subGreeting}>What's your plan for today?</p>
                                </div>
                                <button class={styles.notifBtn}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                    <span class={styles.notifBadge}></span>
                                </button>
                            </div>

                            <div class={styles.carouselSection}>
                                <div class={styles.heroCard}>
                                    <img src={imgRunner} class={styles.heroCardImg} alt="Running" />
                                    <div class={styles.heroCardOverlay}>
                                        <h2 class={styles.heroCardTitle}>Run with<br />Coach Justin</h2>
                                        <p class={styles.heroCardMeta}>6:40 / km  •  52 mins</p>
                                    </div>
                                </div>
                                <div class={styles.heroCard}>
                                    <img src={imgMap} class={styles.heroCardImg} alt="Map" />
                                    <div class={styles.heroCardOverlay}>
                                        <h2 class={styles.heroCardTitle}>Strength<br />Session</h2>
                                        <p class={styles.heroCardMeta}>30 mins  •  182 kcal</p>
                                    </div>
                                </div>
                            </div>

                            <div class={styles.activitySection}>
                                <h3 class={styles.activityHeader}>Yesterday</h3>
                                <div class={styles.statsRow}>
                                    <div class={styles.statItem}>
                                        <span class={styles.statLabel}>Steps</span>
                                        <span class={styles.statValue}>21,898</span>
                                    </div>
                                    <div class={styles.statItem}>
                                        <span class={styles.statLabel}>Distance (km)</span>
                                        <span class={styles.statValue}>17.5</span>
                                    </div>
                                </div>

                                <div class={styles.activityList}>
                                    <div class={styles.activityCard}>
                                        <div class={styles.activityLeft}>
                                            <div class={styles.activityIconBox} style={{ "background-color": "var(--c-accent)" }}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                                            </div>
                                            <div>
                                                <h4 class={styles.activityTitle}>Strength Session</h4>
                                                <p class={styles.activityMeta}>30 mins • 182 kcal</p>
                                            </div>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </div>

                                    <div class={styles.activityCard}>
                                        <div class={styles.activityLeft}>
                                            <div class={styles.activityIconBox} style={{ "background-color": "var(--c-primary)", "color": "white" }}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                                            </div>
                                            <div>
                                                <h4 class={styles.activityTitle}>Yogyakarta Running</h4>
                                                <p class={styles.activityMeta}>24:14 • 3.53 km • 215 kcal</p>
                                            </div>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BottomNav activeTab="home" />
                    </div>
                </section>

                {/* SCREEN 2: PROGRESS */}
                <section class={styles.screenSection}>
                    <div class={styles.screenInfo}>
                        <h2 class={styles.screenTitle}>Progress & Leaderboard</h2>
                        <p class={styles.screenDesc}>Tracking monthly goals and comparing progress with community participants.</p>
                    </div>
                    <div class={styles.device}>
                        <div class={`${styles.screenContent} ${styles.progressBg}`}>
                            <StatusBar dark />
                            <div class={styles.headerTop}>
                                <button class={`${styles.backBtn} ${styles.backBtnDark}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                </button>
                                <div>
                                    <h1 class={`${styles.appHeaderTitle} ${styles.appHeaderTitleDark}`}>End March</h1>
                                    <p class={styles.appHeaderSubtitleDark}>160 KM Challenge</p>
                                </div>
                            </div>

                            <div class={styles.progressTop}>
                                <p class={styles.progressLabel}>YOUR PROGRESS</p>
                                <p class={styles.progressSub}>Since 20 days ago</p>
                                <div class={styles.progressScoreRow}>
                                    <h2 class={styles.progressScore}>152 / 160</h2>
                                </div>
                                <div class={styles.progressBarTrack}>
                                    <div class={styles.progressBarFill} style={{ width: "85%" }}></div>
                                </div>
                            </div>

                            <div class={styles.participantsSheet}>
                                <div class={styles.tabs}>
                                    <div class={`${styles.tab} ${styles.tabActive}`}>Participants (25)</div>
                                    <div class={styles.tab}>Details</div>
                                </div>
                                <div class={styles.userList}>
                                    {[
                                        { rank: "01.", name: "Budi Santoso", score: "154,80 KM", img: imgAvatar1 },
                                        { rank: "02.", name: "Jane Smith", score: "152,87 KM", img: imgAvatar2 },
                                        { rank: "03.", name: "Thomas Speed", score: "151,24 KM", img: imgAvatar3 },
                                        { rank: "04.", name: "Andy William", score: "150,94 KM", img: imgAvatar1 },
                                        { rank: "05.", name: "You", score: "149,13 KM", img: imgAvatar2 },
                                    ].map(u => (
                                        <div class={styles.userRow}>
                                            <div class={styles.userLeft}>
                                                <span class={styles.userRank}>{u.rank}</span>
                                                <img src={u.img} class={styles.userAvatar} alt={u.name} />
                                                <p class={styles.userName}>{u.name}</p>
                                            </div>
                                            <p class={styles.userScore}>{u.score}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <BottomNav activeTab="progress" />
                    </div>
                </section>

                {/* SCREEN 3: MAP / TRACKING */}
                <section class={styles.screenSection}>
                    <div class={styles.screenInfo}>
                        <h2 class={styles.screenTitle}>Live Tracking</h2>
                        <p class={styles.screenDesc}>Interactive map interface for route planning and active run tracking.</p>
                    </div>
                    <div class={styles.device}>
                        <div class={`${styles.screenContent} ${styles.mapScreen}`}>
                            <StatusBar />
                            <img src={imgMap} class={styles.mapBackground} alt="Map View" />
                            <div class={styles.mapGradient}></div>

                            <div class={styles.mapUI}>
                                <div>{/* Spacer to push button down */}</div>
                                <div class={styles.goBtnWrap}>
                                    <h2 class={styles.readyText}>ARE YOU<br />READY?</h2>
                                    <button class={styles.goBtn}>GO!</button>
                                </div>
                            </div>
                        </div>
                        <BottomNav activeTab="tracking" />
                    </div>
                </section>

                {/* SCREEN 4: RUN DETAILS */}
                <section class={styles.screenSection}>
                    <div class={styles.screenInfo}>
                        <h2 class={styles.screenTitle}>Run Details</h2>
                        <p class={styles.screenDesc}>Comprehensive post-run statistics including pace, time, and elevation.</p>
                    </div>
                    <div class={styles.device}>
                        <div class={`${styles.screenContent} ${styles.detailsScreen}`}>
                            <StatusBar dark />
                            <img src={imgRunner} class={styles.detailsBg} alt="Running" />
                            <div class={styles.detailsGradient}></div>

                            <div class={styles.detailsUI}>
                                <div class={styles.headerTop}>
                                    <button class={`${styles.backBtn} ${styles.backBtnDark}`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                    </button>
                                    <div>
                                        <h1 class={`${styles.appHeaderTitle} ${styles.appHeaderTitleDark}`}>Run</h1>
                                        <p class={styles.appHeaderSubtitleDark}>Monday - March 23</p>
                                    </div>
                                    <div class={styles.activityIconBox} style={{ "background-color": "var(--bg-device)", color: "var(--text-main)", "margin-left": "auto", width: "40px", height: "40px" }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                    </div>
                                </div>

                                <div class={styles.bigStatBlock}>
                                    <h2 class={styles.bigStatValue}>4,91</h2>
                                    <p class={styles.bigStatLabel}>Kilometers</p>
                                </div>

                                <div class={styles.detailCardWrapper}>
                                    <div class={styles.detailCard}>
                                        <div class={styles.metricRow}>
                                            <div class={styles.metricLeft}>
                                                <svg class={styles.metricIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                <span class={styles.metricLabel}>Time</span>
                                            </div>
                                            <span class={styles.metricVal}>44:58</span>
                                        </div>
                                        <div class={styles.metricRow}>
                                            <div class={styles.metricLeft}>
                                                <svg class={styles.metricIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                                <span class={styles.metricLabel}>Avg Pace</span>
                                            </div>
                                            <span class={styles.metricVal}>9'09"</span>
                                        </div>
                                        <div class={styles.metricRow}>
                                            <div class={styles.metricLeft}>
                                                <svg class={styles.metricIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-1.6-.4-3.2.2-4 1.5l5.5 5.5-3.6 3.6-2.5-.5L0 17l4.5 1.5L6 22l.7-1.3-.5-2.5 3.6-3.6 5.5 5.5c1.3-.8 1.9-2.4 1.5-4z"></path></svg>
                                                <span class={styles.metricLabel}>Calories</span>
                                            </div>
                                            <span class={styles.metricVal}>308</span>
                                        </div>
                                        <div class={styles.metricRow}>
                                            <div class={styles.metricLeft}>
                                                <svg class={styles.metricIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                                <span class={styles.metricLabel}>Elevation Gain</span>
                                            </div>
                                            <span class={styles.metricVal}>23 m</span>
                                        </div>

                                        <button class={styles.shareBtn}>
                                            Share Run
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <BottomNav activeTab="details" />
                    </div>
                </section>

            </main>
        </div>
    );
};

export default FitnessApp;
