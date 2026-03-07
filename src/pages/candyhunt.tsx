import { Component } from 'solid-js';
import styles from './candyhunt.module.css';

const CandyHunt: Component = () => {
    return (
        <div class={styles.wrapper}>
            {/* Navigation */}
            <nav class={styles.nav}>
                <div class={styles.navLogo}>
                    <i class={`fa-solid fa-ghost ${styles.navLogoIcon}`}></i>
                    <span class={`${styles.fontDisplay} ${styles.navLogoText}`}>candyhunt</span>
                </div>
                <div class={styles.navLinks}>
                    <a href="#" class={styles.navLink}>Home</a>
                    <a href="#" class={styles.navLink}>Map</a>
                    <a href="#" class={styles.navLink}>Leaderboard</a>
                    <a href="#" class={styles.navLink}>Prizes</a>
                    <button class={styles.navBtn}>Sign In</button>
                </div>
                <button class={styles.mobileBtn}>
                    <i class="fa-solid fa-bars"></i>
                </button>
            </nav>

            {/* Main Content */}
            <main class={styles.container} style={{ "padding-top": "2rem" }}>

                {/* Hero Section */}
                <section class={styles.hero}>
                    <div class={styles.heroLeft}>
                        <div class={styles.heroTitleContainer}>
                            <h1 class={`${styles.fontDisplay} ${styles.heroTitle}`}>
                                <span class={styles.spikyText} style={{ display: 'block' }}>Happy</span>
                                <span class={styles.heroSubtitle}>Haunting</span>
                            </h1>
                        </div>
                        <p class={styles.heroDesc}>
                            The spookiest season is here! Join our neighborhood-wide quest for the sweetest treasures hidden in plain sight.
                        </p>
                        <div style={{ display: "flex" }}>
                            <button class={`${styles.btnPrimaryLg} ${styles.fontDisplay}`}>
                                START HUNTING!
                            </button>
                        </div>
                    </div>

                    <div class={styles.heroRight}>
                        <div class={styles.heroGradient}></div>
                        <div class={styles.heroSvgWrapper}>
                            <svg class="w-full h-full" style={{ "filter": "drop-shadow(0 25px 25px rgba(0,0,0,0.15))" }} viewBox="0 0 200 240">
                                <path d="M100,20 C50,20 20,60 20,120 C20,180 40,220 100,220 C160,220 180,180 180,120 C180,60 150,20 100,20 Z" fill="#FFFFFF"></path>
                                <g fill="#212121">
                                    <ellipse cx="75" cy="85" rx="10" ry="14" transform="rotate(-5 75 85)"></ellipse>
                                    <ellipse cx="125" cy="85" rx="10" ry="14" transform="rotate(5 125 85)"></ellipse>
                                    <circle cx="78" cy="82" fill="white" r="3"></circle>
                                    <circle cx="128" cy="82" fill="white" r="3"></circle>
                                    <path d="M85,115 Q100,135 115,115" fill="none" stroke="#212121" stroke-linecap="round" stroke-width="4"></path>
                                </g>
                                <path d="M50,140 Q30,160 50,180" fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-width="28"></path>
                                <path d="M150,140 Q170,160 150,180" fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-width="28"></path>
                                <path d="M60,150 L140,150 L135,205 C135,215 65,215 65,205 Z" fill="#5DAFA9"></path>
                                <path d="M62,152 Q100,100 138,152" fill="none" stroke="#333" stroke-width="3"></path>
                                <circle cx="110" cy="135" fill="#E74C3C" r="10"></circle>
                                <rect fill="#F1C40F" height="15" rx="2" width="10" x="85" y="135"></rect>
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Interactive Map Section */}
                <section class={styles.sectionContainer}>
                    <h2 class={`${styles.fontDisplay} ${styles.sectionTitle}`}>The Great Candy Hunt</h2>
                    <div class={styles.mapContainer}>
                        <svg class={styles.mapSvg} fill="none" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-50 500 C 200 500, 300 200, 600 200 S 900 600, 1250 500" fill="none" stroke="#EAD7C3" stroke-linecap="round" stroke-width="80"></path>
                            <path d="M600 200 V 0" fill="none" stroke="#EAD7C3" stroke-linecap="round" stroke-width="60"></path>
                            <path d="M300 350 H 0" fill="none" stroke="#EAD7C3" stroke-linecap="round" stroke-width="60"></path>
                            <path d="M900 400 H 1200" fill="none" stroke="#EAD7C3" stroke-linecap="round" stroke-width="60"></path>
                            <g transform="translate(150, 120)">
                                <rect fill="#6B5B95" height="100" rx="8" width="120" x="0" y="40"></rect>
                                <path d="M-10 40 L60 -10 L130 40 Z" fill="#4B3B75"></path>
                                <rect fill="#FFB74D" height="50" rx="4" width="30" x="45" y="90"></rect>
                                <rect fill="#FFF176" height="25" rx="2" width="25" x="20" y="60"></rect>
                                <rect fill="#FFF176" height="25" rx="2" width="25" x="75" y="60"></rect>
                            </g>
                            <g transform="translate(850, 150)">
                                <rect fill="#5DAFA9" height="120" rx="8" width="140" x="0" y="40"></rect>
                                <path d="M-15 40 L70 -20 L155 40 Z" fill="#3D8F89"></path>
                                <rect fill="#FBBF94" height="60" rx="4" width="30" x="55" y="100"></rect>
                                <rect fill="#FFF176" height="30" rx="2" width="30" x="25" y="65"></rect>
                                <rect fill="#FFF176" height="30" rx="2" width="30" x="85" y="65"></rect>
                            </g>
                            <g transform="translate(480, 420)">
                                <rect fill="#E88C5D" height="140" rx="8" width="160" x="0" y="40"></rect>
                                <path d="M-20 40 L80 -30 L180 40 Z" fill="#C86C3D"></path>
                                <rect fill="#212121" height="70" rx="4" width="30" x="65" y="110"></rect>
                                <rect fill="#FFF176" height="35" rx="2" width="35" x="25" y="65"></rect>
                                <rect fill="#FFF176" height="35" rx="2" width="35" x="100" y="65"></rect>
                            </g>
                            <g transform="translate(100, 450)">
                                <circle cx="20" cy="20" fill="#FF9800" r="15"></circle>
                                <rect fill="#4CAF50" height="10" rx="2" width="6" x="17" y="0"></rect>
                                <circle cx="50" cy="25" fill="#F57C00" r="18"></circle>
                                <rect fill="#4CAF50" height="10" rx="2" width="6" x="47" y="2"></rect>
                            </g>
                            <g transform="translate(1000, 500)">
                                <circle cx="20" cy="20" fill="#FF9800" r="15"></circle>
                                <rect fill="#4CAF50" height="10" rx="2" width="6" x="17" y="0"></rect>
                            </g>
                        </svg>

                        <div style={{ position: "absolute", inset: 0, "pointer-events": "none" }}>
                            {/* Map Icons & Tooltips */}
                            <div class={styles.candyIcon} style={{ top: "25%", left: "20%" }}>
                                <div class={styles.candyTooltip}>🍬 Sugar Rush +50!</div>
                                <span class={`material-symbols-outlined ${styles.candyBadge}`} style={{ color: "#fb923c", "border-color": "#fed7aa" }}>keyboard_double_arrow_up</span>
                            </div>
                            <div class={styles.candyIcon} style={{ top: "30%", right: "20%" }}>
                                <div class={styles.candyTooltip}>🍭 Mystery Box Unlocked!</div>
                                <span class={`material-symbols-outlined ${styles.candyBadge}`} style={{ color: "#14b8a6", "border-color": "#99f6e4" }}>icecream</span>
                            </div>
                            <div class={styles.candyIcon} style={{ bottom: "20%", left: "45%" }}>
                                <div class={styles.candyTooltip}>🍫 Golden Ticket!</div>
                                <span class={`material-symbols-outlined ${styles.candyBadge}`} style={{ color: "var(--c-primary)", "border-color": "var(--c-primary)" }}>restaurant</span>
                            </div>
                            <div class={styles.candyIcon} style={{ top: "10%", left: "48%" }}>
                                <div class={styles.candyTooltip}>🎃 Jack's Secret Vault</div>
                                <span class={`material-symbols-outlined ${styles.candyBadge}`} style={{ color: "#ea580c", "border-color": "#fdba74" }}>nutrition</span>
                            </div>
                        </div>

                        {/* Map Overlays */}
                        <div class={styles.scorePanel}>
                            <div class={styles.scoreCard}>
                                <div style={{ display: "flex", "flex-direction": "column" }}>
                                    <span class={styles.scoreLabel}>Current Score</span>
                                    <span class={`${styles.fontDisplay} ${styles.scoreValue}`}>1,240 XP</span>
                                </div>
                                <div style={{ height: "2rem", width: "2px", "background-color": "#e5e7eb" }}></div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ width: "2rem", height: "2rem", "border-radius": "9999px", "background-color": "var(--c-primary)", border: "2px solid #fff", "margin-right": "-8px" }}></div>
                                    <div style={{ width: "2rem", height: "2rem", "border-radius": "9999px", "background-color": "var(--c-secondary)", border: "2px solid #fff", "margin-right": "-8px", "z-index": "1" }}></div>
                                    <div style={{ width: "2rem", height: "2rem", "border-radius": "9999px", "background-color": "var(--c-charcoal)", border: "2px solid #fff", "z-index": "2", display: "flex", "align-items": "center", "justify-content": "center", color: "white", "font-size": "10px" }}>+5</div>
                                </div>
                            </div>
                        </div>

                        <button class={styles.filterBtn}>
                            <span class="material-symbols-outlined">filter_list</span>
                        </button>
                    </div>
                </section>

                {/* Leaderboard Section */}
                <section class={styles.sectionContainer}>
                    <h2 class={`${styles.fontDisplay} ${styles.sectionTitle}`}>Top Ghoul Hunters</h2>
                    <div class={styles.leaderboardWrapper}>
                        <div class={styles.leaderboardLeft}>
                            <div class={styles.leaderboardHeader}>
                                <h3 class={`${styles.fontDisplay} ${styles.leaderboardTitle}`}>
                                    <i class="fa-solid fa-crown"></i> The Leaderboard
                                </h3>
                            </div>
                            <div class={styles.leaderList}>
                                {/* Item 1 */}
                                <div class={`${styles.leaderItem} ${styles.leaderItem1}`}>
                                    <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
                                        <span class={`${styles.fontDisplay} ${styles.leaderRank} ${styles.leaderRank1}`}>#1</span>
                                        <div class={styles.leaderAvatar}>👻</div>
                                        <span class={styles.leaderName}>Casper_99</span>
                                    </div>
                                    <div class={`${styles.leaderScoreBox} ${styles.leaderScoreBox1}`}>
                                        <i class="fa-solid fa-candy-cane" style={{ color: "var(--c-primary)" }}></i>
                                        <span class={`${styles.fontDisplay} ${styles.leaderScore}`}>4,850</span>
                                    </div>
                                </div>
                                {/* Other Items */}
                                {[
                                    { rank: 2, icon: '🐈‍⬛', name: 'Midnight_Prowler', score: '4,210' },
                                    { rank: 3, icon: '🎃', name: 'JackOLantern', score: '3,980' },
                                    { rank: 4, icon: '🦇', name: 'Belfry_Bat', score: '3,420' },
                                    { rank: 5, icon: '🧙‍♀️', name: 'Broomsticks', score: '3,110' },
                                ].map(ghoul => (
                                    <div class={`${styles.leaderItem} ${styles.leaderItemRest}`}>
                                        <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
                                            <span class={`${styles.fontDisplay} ${styles.leaderRank} ${styles.leaderRankRest}`}>#{ghoul.rank}</span>
                                            <div class={styles.leaderAvatar} style={{ border: "1px solid #e5e7eb" }}>{ghoul.icon}</div>
                                            <span class={styles.leaderName}>{ghoul.name}</span>
                                        </div>
                                        <div class={styles.leaderScoreBox}>
                                            <i class="fa-solid fa-candy-cane" style={{ color: "var(--c-primary)" }}></i>
                                            <span class={`${styles.fontDisplay} ${styles.leaderScore}`}>{ghoul.score}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div class={styles.leaderboardRight}>
                            <div style={{ width: "100%", "max-width": "280px" }}>
                                <svg class={styles.pumpkinTrophyGlow} style={{ "filter": "drop-shadow(0 25px 25px rgba(0,0,0,0.15))" }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <rect fill="#212121" height="20" rx="10" width="100" x="50" y="160"></rect>
                                    <rect fill="#212121" height="30" width="40" x="80" y="140"></rect>
                                    <ellipse cx="100" cy="90" fill="#FBBF94" rx="70" ry="60"></ellipse>
                                    <ellipse cx="100" cy="90" fill="#E88C5D" rx="45" ry="60"></ellipse>
                                    <ellipse cx="100" cy="90" fill="#FBBF94" rx="20" ry="60"></ellipse>
                                    <path d="M90 35 Q100 20 115 35" fill="none" stroke="#4CAF50" stroke-linecap="round" stroke-width="12"></path>
                                    <path d="M65 80 L80 65 L95 80 Z M105 80 L120 65 L135 80 Z" fill="#FFF176"></path>
                                    <path d="M70 110 Q100 135 130 110 Q100 120 70 110" fill="#FFF176"></path>
                                    <path d="M30 90 Q15 60 30 40" fill="none" stroke="#212121" stroke-linecap="round" stroke-width="10"></path>
                                    <path d="M170 90 Q185 60 170 40" fill="none" stroke="#212121" stroke-linecap="round" stroke-width="10"></path>
                                </svg>
                            </div>
                            <div style={{ "margin-top": "2rem", "text-align": "center" }}>
                                <h4 class={styles.fontDisplay} style={{ "font-size": "2.25rem", color: "var(--text-main)", "margin-bottom": "0.5rem" }}>Grand Prize</h4>
                                <p style={{ color: "var(--text-muted)", "font-weight": "500", "font-style": "italic" }}>The Golden Jack Trophy</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Prize Gallery Section */}
                <section class={styles.gallerySection}>
                    <div style={{ "max-width": "72rem", margin: "0 auto" }}>
                        <div style={{ "text-align": "center", "margin-bottom": "4rem" }}>
                            <h2 class={`${styles.fontDisplay} ${styles.sectionTitle}`} style={{ "margin-bottom": "1rem" }}>Prize Gallery</h2>
                            <p style={{ color: "var(--text-muted)", "font-weight": "500", "font-size": "1.125rem" }}>Exchange your hard-earned candy for spooky treasures!</p>
                        </div>

                        <div class={styles.prizeGrid}>
                            <div class={styles.prizeCard} style={{ "border-color": "transparent" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--c-primary)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                                <div class={styles.prizeBox} style={{ "background-color": "rgba(251, 191, 148, 0.1)" }}>
                                    <i class={`fa-solid fa-gift ${styles.mysteryBoxFloat}`} style={{ "font-size": "3.75rem", color: "var(--c-primary)" }}></i>
                                    <div class={styles.prizeOverlay}>
                                        <span class={styles.fontDisplay} style={{ color: "var(--c-charcoal)", "font-size": "1.25rem" }}>OPEN ME?</span>
                                    </div>
                                </div>
                                <h4 style={{ "font-weight": "bold", "font-size": "1.25rem", "margin-bottom": "0.5rem" }}>Mystery Box</h4>
                                <div style={{ "background-color": "rgba(251, 191, 148, 0.2)", padding: "0.25rem 0.75rem", "border-radius": "9999px", color: "var(--c-primary)", "font-weight": "bold", "font-size": "0.875rem" }}>100 Candy</div>
                            </div>

                            <div class={styles.prizeCard} style={{ "border-color": "transparent" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fb923c'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                                <div class={styles.prizeBox} style={{ "background-color": "#fff7ed" }}>
                                    <svg style={{ width: "6rem", height: "6rem" }} viewBox="0 0 100 100">
                                        <circle cx="50" cy="55" fill="#FBBF94" r="35"></circle>
                                        <path d="M45 20 Q50 10 55 20" fill="none" stroke="#4CAF50" stroke-linecap="round" stroke-width="6"></path>
                                        <path d="M35 50 L42 42 L50 50 L58 42 L65 50" fill="none" stroke="#212121" stroke-width="4"></path>
                                        <path d="M35 70 Q50 85 65 70 Q50 75 35 70" fill="#FFF176"></path>
                                        <circle cx="50" cy="55" fill="url(#lamp-glow)" opacity="0.4" r="35"></circle>
                                        <defs>
                                            <radialGradient id="lamp-glow">
                                                <stop offset="0%" stop-color="#FFF176"></stop>
                                                <stop offset="100%" stop-color="transparent"></stop>
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <h4 style={{ "font-weight": "bold", "font-size": "1.25rem", "margin-bottom": "0.5rem", "text-align": "center", "line-height": "1.25" }}>Glowing Jack-o-lamp</h4>
                                <div style={{ "background-color": "#ffedd5", padding: "0.25rem 0.75rem", "border-radius": "9999px", color: "#ea580c", "font-weight": "bold", "font-size": "0.875rem" }}>500 Candy</div>
                            </div>

                            <div class={styles.prizeCard} style={{ "border-color": "transparent" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--c-secondary)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                                <div class={styles.prizeBox} style={{ "background-color": "#f0fdfa" }}>
                                    <div style={{ position: "absolute", transform: "rotate(12deg)", width: "4rem", height: "4rem", "background-color": "white", "box-shadow": "0 1px 2px 0 rgba(0,0,0,0.05)", "border-radius": "0.5rem", display: "flex", "align-items": "center", "justify-content": "center", "font-size": "1.5rem", border: "1px solid #ccfbf1" }}>👻</div>
                                    <div style={{ position: "absolute", transform: "rotate(-6deg) translate(1rem, 0.5rem)", width: "4rem", height: "4rem", "background-color": "white", "box-shadow": "0 1px 2px 0 rgba(0,0,0,0.05)", "border-radius": "0.5rem", display: "flex", "align-items": "center", "justify-content": "center", "font-size": "1.5rem", border: "1px solid #ccfbf1" }}>🍬</div>
                                    <div style={{ position: "absolute", transform: "rotate(45deg) translate(-1rem, -1rem)", width: "4rem", height: "4rem", "background-color": "white", "box-shadow": "0 1px 2px 0 rgba(0,0,0,0.05)", "border-radius": "0.5rem", display: "flex", "align-items": "center", "justify-content": "center", "font-size": "1.5rem", border: "1px solid #ccfbf1" }}>🦇</div>
                                </div>
                                <h4 style={{ "font-weight": "bold", "font-size": "1.25rem", "margin-bottom": "0.5rem", "text-align": "center", "line-height": "1.25" }}>Spooky Sticker Pack</h4>
                                <div style={{ "background-color": "#ccfbf1", padding: "0.25rem 0.75rem", "border-radius": "9999px", color: "#0d9488", "font-weight": "bold", "font-size": "0.875rem" }}>250 Candy</div>
                            </div>

                            <div class={styles.prizeCard} style={{ "border-color": "transparent" }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#c084fc'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                                <div class={styles.prizeBox} style={{ "background-color": "#faf5ff" }}>
                                    <svg style={{ width: "6rem", height: "6rem" }} viewBox="0 0 100 100">
                                        <path d="M20 50 Q50 20 80 50" fill="none" stroke="#212121" stroke-linecap="round" stroke-width="4"></path>
                                        <path d="M10 40 Q5 30 15 25 Q20 35 25 40 Z" fill="#212121"></path>
                                        <path d="M90 40 Q95 30 85 25 Q80 35 75 40 Z" fill="#212121"></path>
                                        <path d="M15 35 Q10 45 20 50" fill="none" stroke="#212121" stroke-width="2"></path>
                                        <path d="M85 35 Q90 45 80 50" fill="none" stroke="#212121" stroke-width="2"></path>
                                    </svg>
                                </div>
                                <h4 style={{ "font-weight": "bold", "font-size": "1.25rem", "margin-bottom": "0.5rem", "text-align": "center", "line-height": "1.25" }}>Bat-wing Headband</h4>
                                <div style={{ "background-color": "#f3e8ff", padding: "0.25rem 0.75rem", "border-radius": "9999px", color: "#9333ea", "font-weight": "bold", "font-size": "0.875rem" }}>750 Candy</div>
                            </div>
                        </div>

                        <div style={{ display: "flex", "justify-content": "center" }}>
                            <button class={`${styles.btnPrimaryLg} ${styles.fontDisplay} ${styles.animBounceSubtle}`}>
                                <i class="fa-solid fa-cart-shopping"></i> REDEEM POINTS
                            </button>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section class={styles.formSection}>
                    <div class={styles.formFlex}>
                        <div class={styles.formTextCol}>
                            <h2 class={styles.fontDisplay} style={{ "font-size": "3.75rem", color: "var(--text-main)", "line-height": "0.9", "margin-bottom": "2rem" }}>
                                Ready for a <span style={{ color: "var(--c-secondary)" }}>Spooktacular</span> Adventure?
                            </h2>
                            <div style={{ display: "none", position: "absolute", bottom: "0", right: "-6rem", "z-index": "20" }} class="lg:block">
                                <svg class={styles.animBounceSubtle} style={{ width: "12rem", height: "12rem", "filter": "drop-shadow(0 20px 13px rgba(0,0,0,0.15))" }} viewBox="0 0 100 100">
                                    <path d="M20 80 Q50 95 80 80 L80 60 Q50 70 20 60 Z" fill="#1A1A1A"></path>
                                    <path d="M30 60 L20 30 L40 50 Z M70 60 L80 30 L60 50 Z" fill="#1A1A1A"></path>
                                    <circle cx="40" cy="70" fill="#C0FF00" r="4"></circle>
                                    <circle cx="60" cy="70" fill="#C0FF00" r="4"></circle>
                                    <path d="M45 78 Q50 82 55 78" fill="none" stroke="#FF9999" stroke-linecap="round" stroke-width="2"></path>
                                    <path d="M15 50 L85 50 L50 10 Z" fill="#4B3B75"></path>
                                    <rect fill="#4B3B75" height="8" rx="4" width="70" x="15" y="45"></rect>
                                    <rect fill="#FFB74D" height="8" width="20" x="40" y="45"></rect>
                                </svg>
                            </div>
                        </div>

                        <div class={styles.formCardCol}>
                            <div class={styles.formCard}>
                                <h3 class={styles.fontDisplay} style={{ "font-size": "1.875rem", "margin-bottom": "2rem", color: "var(--text-main)" }}>Join the Hunt</h3>
                                <form style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
                                    <div>
                                        <label style={{ display: "block", "font-weight": "bold", "margin-bottom": "0.5rem", color: "var(--text-muted)", "margin-left": "0.5rem" }}>Ghoul Name</label>
                                        <input class={styles.formInput} placeholder="e.g. ScaryLarry99" type="text" />
                                    </div>
                                    <div>
                                        <label style={{ display: "block", "font-weight": "bold", "margin-bottom": "0.5rem", color: "var(--text-muted)", "margin-left": "0.5rem" }}>Bat-mail Address</label>
                                        <input class={styles.formInput} placeholder="vampire@belfry.com" type="email" />
                                    </div>
                                    <button class={`${styles.btnNeon} ${styles.fontDisplay}`} type="button">
                                        Start Hunting!
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Grid Section */}
                <div class={styles.featureGrid}>
                    <div class={styles.featureCard} style={{ "border-color": "var(--c-primary)" }}>
                        <div class={styles.featureIconBox} style={{ "background-color": "#ffedd5" }}>
                            <i class="fa-solid fa-map-location-dot" style={{ color: "var(--c-primary)", "font-size": "1.5rem" }}></i>
                        </div>
                        <h3 class={styles.fontDisplay} style={{ "font-size": "1.5rem", "margin-bottom": "0.75rem", color: "var(--text-main)" }}>Live Tracking</h3>
                        <p style={{ color: "var(--text-muted)", "font-size": "0.875rem", "line-height": "1.625", "margin-bottom": "1.5rem" }}>See where the candies are appearing in real-time across your local neighborhood.</p>
                        <a href="#" style={{ display: "inline-flex", "align-items": "center", gap: "0.5rem", "font-weight": "900", "font-size": "0.875rem", color: "var(--text-main)", "text-transform": "uppercase", "letter-spacing": "0.05em", "text-decoration": "none" }}>
                            Explore <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                    <div class={styles.featureCard} style={{ "border-color": "var(--c-secondary)" }}>
                        <div class={styles.featureIconBox} style={{ "background-color": "#ccfbf1" }}>
                            <i class="fa-solid fa-trophy" style={{ color: "var(--c-secondary)", "font-size": "1.5rem" }}></i>
                        </div>
                        <h3 class={styles.fontDisplay} style={{ "font-size": "1.5rem", "margin-bottom": "0.75rem", color: "var(--text-main)" }}>Sweet Rewards</h3>
                        <p style={{ color: "var(--text-muted)", "font-size": "0.875rem", "line-height": "1.625", "margin-bottom": "1.5rem" }}>Collect points to unlock exclusive digital badges and real-world treat coupons.</p>
                        <a href="#" style={{ display: "inline-flex", "align-items": "center", gap: "0.5rem", "font-weight": "900", "font-size": "0.875rem", color: "var(--text-main)", "text-transform": "uppercase", "letter-spacing": "0.05em", "text-decoration": "none" }}>
                            Prizes <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                    <div class={styles.featureCard} style={{ "border-color": "var(--c-charcoal)" }}>
                        <div class={styles.featureIconBox} style={{ "background-color": "#f3f4f6" }}>
                            <i class="fa-solid fa-people-group" style={{ color: "var(--c-charcoal)", "font-size": "1.5rem" }}></i>
                        </div>
                        <h3 class={styles.fontDisplay} style={{ "font-size": "1.5rem", "margin-bottom": "0.75rem", color: "var(--text-main)" }}>Squad Goals</h3>
                        <p style={{ color: "var(--text-muted)", "font-size": "0.875rem", "line-height": "1.625", "margin-bottom": "1.5rem" }}>Create a hunting party with friends and compete against other neighborhood teams.</p>
                        <a href="#" style={{ display: "inline-flex", "align-items": "center", gap: "0.5rem", "font-weight": "900", "font-size": "0.875rem", color: "var(--text-main)", "text-transform": "uppercase", "letter-spacing": "0.05em", "text-decoration": "none" }}>
                            Join Team <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer class={styles.footer}>
                <div class={styles.footerContent}>
                    <div style={{ display: "flex", "align-items": "center", gap: "1rem", "margin-bottom": "2rem" }}>
                        <i class="fa-solid fa-ghost" style={{ color: "var(--c-primary)", "font-size": "2.25rem" }}></i>
                        <span class={styles.fontDisplay} style={{ "font-size": "1.875rem", "letter-spacing": "0.1em" }}>CANDYHUNT</span>
                    </div>
                    <div style={{ display: "flex", gap: "2rem", "margin-bottom": "3rem" }}>
                        <a href="#" class={styles.ghostIcon}><i class="fa-brands fa-youtube" style={{ "font-size": "1.25rem" }}></i></a>
                        <a href="#" class={styles.ghostIcon}><i class="fa-brands fa-twitter" style={{ "font-size": "1.25rem" }}></i></a>
                        <a href="#" class={styles.ghostIcon}><i class="fa-brands fa-instagram" style={{ "font-size": "1.25rem" }}></i></a>
                    </div>
                    <p style={{ color: "#6b7280", "font-size": "0.875rem", "font-weight": "500", "border-top": "1px solid #374151", "padding-top": "2rem", width: "100%", "text-align": "center" }}>
                        © 2023 Candy Hunt Interactive. All rights reserved. <span style={{ color: "var(--c-primary)", "font-style": "italic", "margin-left": "0.5rem" }}>Don't forget your bucket!</span>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default CandyHunt;