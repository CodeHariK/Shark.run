import { Component } from 'solid-js';
import styles from './haunting_hero.module.css';
import { IconCart, IconCheck, IconGhost, IconSkull } from 'solgaleo';

const HauntingHero: Component = () => {
    return (
        <div class={styles.pageWrapper}>
            <nav class={styles.nav}>
                <div class={styles.logoContainer}>
                    <i class={`fa-solid fa-bat ${styles.logoIcon}`}></i>
                    <span class={styles.logoText}>mysterylogo</span>
                </div>
                <div class={styles.navLinks}>
                    <a class={styles.navLink} href="#">Home</a>
                    <a class={styles.navLink} href="#">Events</a>
                    <a class={styles.navLink} href="#">Gallery</a>
                    <button class={styles.bookBtn}>Book Now</button>
                </div>
                <button class={styles.mobileMenuBtn}>
                    <i class="fa-solid fa-bars"></i>
                </button>
            </nav>

            <main class={styles.main}>
                <div class={styles.heroCard}>
                    <div class={styles.heroLeft}>
                        {/* Abstract Web Background */}
                        <div class={styles.heroPatternLeft}>
                            <svg class={styles.svgFill} viewBox="0 0 100 100">
                                <path
                                    d="M0,0 Q50,5 100,0 M10,0 Q50,15 90,0 M20,0 Q50,25 80,0 M30,0 Q50,35 70,0 M0,0 L10,100 M0,0 L30,90 M0,0 L50,80 M0,0 L70,70 M0,0 L90,50"
                                    fill="none" stroke="currentColor" stroke-width="0.5"></path>
                            </svg>
                        </div>

                        <div style={{ "margin-bottom": "1.5rem" }}>
                            <i class={`fa-solid fa-bat ${styles.batIconHero}`}></i>
                            <h1 class={styles.heroTitle}>
                                Happy <br />
                                <span class={styles.italic}>Haunting</span>
                            </h1>
                        </div>

                        <p class={styles.heroDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>

                        <div class={styles.featuresList}>
                            <div class={styles.featureRow}>
                                <div class={`${styles.iconCircle} ${styles.secondaryBg}`}>
                                    <IconGhost fill style={{ "font-size": "1rem" }} />
                                </div>
                                <span class={styles.featureText}>Spooky Tours</span>
                            </div>
                            <div class={styles.featureRow}>
                                <div class={`${styles.iconCircle} ${styles.primaryBg}`}>
                                    <i class="fa-solid fa-candy-cane" style={{ "font-size": "0.875rem" }}></i>
                                </div>
                                <span class={styles.featureText}>Trick or Treat Events</span>
                            </div>
                        </div>

                        <div class={styles.btnGroup}>
                            <button class={styles.btnActionPrimary}>Get Tickets</button>
                            <button class={styles.btnActionSecondary}>Learn More</button>
                        </div>

                        {/* Abstract Shape Background */}
                        <div class={styles.heroPatternBottom}>
                            <svg height="150" viewBox="0 0 100 100" width="120">
                                <path
                                    d="M40,100 L40,60 C30,50 20,60 10,50 C15,40 25,45 30,35 C25,25 35,20 40,30 C45,20 55,20 60,30 C65,20 75,25 70,35 C75,45 85,40 90,50 C80,60 70,50 60,60 L60,100 Z">
                                </path>
                            </svg>
                        </div>
                    </div>

                    <div class={styles.heroRight}>
                        <div class={styles.heroCircleBg}></div>

                        {/* Spiderman-like Web Pattern */}
                        <div class={styles.heroSpiderWeb}>
                            <svg class={styles.svgWH} viewBox="0 0 100 100">
                                <path
                                    d="M50,100 L50,80 C60,70 70,90 80,80 C70,70 60,60 70,50 L80,40 M50,80 C40,70 30,90 20,80 C30,70 40,60 30,50 L20,40 M50,100 L50,20"
                                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"></path>
                                <path d="M50,40 L60,30 M50,60 L30,50" fill="none" stroke="currentColor" stroke-width="3"></path>
                            </svg>
                        </div>

                        {/* Top Web Intersection */}
                        <div class={styles.heroGrid}>
                            <svg class={`${styles.svgWH} ${styles.svgStroke}`} fill="none"
                                stroke-width="0.5" viewBox="0 0 100 100">
                                <path
                                    d="M50,0 L50,50 M0,0 L50,50 M100,0 L50,50 M20,0 Q50,20 80,0 M30,10 Q50,30 70,10 M40,20 Q50,35 60,20">
                                </path>
                            </svg>
                        </div>

                        {/* The Ghost Drawing */}
                        <div class={styles.heroIllustration}>
                            <svg class={styles.svgWH} viewBox="0 0 200 240">
                                <path
                                    d="M100,20 C50,20 20,60 20,120 C20,180 40,220 100,220 C160,220 180,180 180,120 C180,60 150,20 100,20 Z"
                                    fill="#FFFFFF"></path>
                                <g fill="#1a1a1a">
                                    <ellipse cx="80" cy="80" rx="8" ry="12" transform="rotate(-10 80 80)"></ellipse>
                                    <ellipse cx="120" cy="80" rx="8" ry="12" transform="rotate(10 120 80)"></ellipse>
                                    <path d="M85,110 Q100,125 115,110" fill="none" stroke="#1a1a1a" stroke-linecap="round"
                                        stroke-width="3"></path>
                                    <line stroke="#1a1a1a" stroke-width="2" x1="90" x2="90" y1="112" y2="120"></line>
                                    <line stroke="#1a1a1a" stroke-width="2" x1="100" x2="100" y1="116" y2="124"></line>
                                    <line stroke="#1a1a1a" stroke-width="2" x1="110" x2="110" y1="112" y2="120"></line>
                                </g>
                                <path d="M50,140 Q30,160 50,180" fill="none" stroke="#FFFFFF" stroke-linecap="round"
                                    stroke-width="25"></path>
                                <path d="M150,140 Q170,160 150,180" fill="none" stroke="#FFFFFF" stroke-linecap="round"
                                    stroke-width="25"></path>
                                <path d="M60,150 L140,150 L130,200 C130,210 70,210 70,200 Z" fill="#5DAFA9"></path>
                                <path d="M60,150 Q100,200 140,150" fill="none" opacity="0.5" stroke="#333" stroke-width="2">
                                </path>
                                <ellipse cx="55" cy="175" fill="#E88C5D" rx="15" ry="12" transform="rotate(-20)"></ellipse>
                                <ellipse cx="145" cy="175" fill="#E88C5D" rx="15" ry="12" transform="rotate(20)"></ellipse>
                                <circle cx="80" cy="140" fill="#FF9F43" r="10" stroke="#333" stroke-width="1"></circle>
                                <circle cx="80" cy="140" fill="none" r="6" stroke="#FFF" stroke-width="2"></circle>
                                <rect fill="#333" height="25" transform="rotate(15)" width="10" x="95" y="125"></rect>
                                <rect fill="none" height="25" stroke="#FFF" stroke-width="1" transform="rotate(15)" width="10"
                                    x="95" y="125"></rect>
                                <circle cx="120" cy="138" fill="#FF6B6B" r="12" stroke="#333" stroke-width="1"></circle>
                                <circle cx="120" cy="138" fill="none" r="8" stroke="#FFF" stroke-width="2"></circle>
                            </svg>
                        </div>

                        {/* Floating Skull */}
                        <div class={styles.floatingSkull}>
                            <IconSkull className={`${styles.skullIcon}`} fill />
                        </div>
                    </div>

                    {/* Hero Footer Strip */}
                    <div class={styles.heroFooterCard}>
                        <div class={styles.footerLeft}>
                            <IconCart />
                            <span>www.mysteryweb.com</span>
                        </div>
                        <div class={styles.footerRight}>
                            <a class={styles.socialIcon} href="#"><IconCheck /></a>
                            <a class={styles.socialIcon} href="#"><IconCheck /></a>
                            <a class={styles.socialIcon} href="#"><IconCheck /></a>
                            <span class={styles.footerText}>Lorem Ipsum</span>
                        </div>
                    </div>
                </div>

                {/* Feature Grid Below */}
                <div class={styles.infoGrid}>
                    <div class={styles.infoCard}>
                        <div class={styles.iconBox}>
                            <i class={`fa-solid fa-location-dot ${styles.primaryColor}`} style={{ "font-size": "1.25rem" }}></i>
                        </div>
                        <h3 class={styles.infoTitle}>Local, Street, City</h3>
                        <p class={styles.infoDesc}>Start at 10pm. Join us for a night of frights and delights.</p>
                        <a class={styles.infoLink} href="#">View Map →</a>
                    </div>

                    <div class={styles.infoCard}>
                        <div class={styles.iconBox}>
                            <i class={`fa-solid fa-utensils ${styles.secondaryColor}`} style={{ "font-size": "1.25rem" }}></i>
                        </div>
                        <h3 class={styles.infoTitle}>Eat, Drink, &amp; Be Scary</h3>
                        <p class={styles.infoDesc}>Full buffet of ghoulish treats and witches brew available.</p>
                        <a class={styles.infoLink} href="#">View Menu →</a>
                    </div>

                    <div class={styles.infoCard}>
                        <div class={styles.iconBox}>
                            <i class="fa-solid fa-calendar-days" style={{ "font-size": "1.25rem" }}></i>
                        </div>
                        <h3 class={styles.infoTitle}>31 October 2023</h3>
                        <p class={styles.infoDesc}>Mark your calendars for the biggest haunt of the year.</p>
                        <a class={styles.infoLink} href="#">Add to Calendar →</a>
                    </div>
                </div>
            </main >

            <footer class={styles.footer}>
                <p>© 2023 Mystery Logo Inc. All rights reserved. Beware of ghosts.</p>
            </footer>
        </div >
    );
};

export default HauntingHero;