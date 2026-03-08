import { Component } from 'solid-js';
import styles from './FoodlySplash.module.css';

const FoodlySplash: Component = () => {
    return (
        <div class={styles.wrapper}>
            {/* Mobile Device Container (iPhone 16: 393x852) */}
            <main class={styles.device}>

                {/* Top Branding Section */}
                <section class={styles.topSection}>

                    {/* Status Bar */}
                    <div class={styles.statusBar}>
                        <span>9:41</span>
                        <div class={styles.statusIcons}>
                            <svg class={styles.iconSmall} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21l-12-18h24z"></path>
                            </svg>
                            <svg class={styles.iconSmall} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.5 20h1v1h-1zM11.5 18h1v1h-1zM11.5 16h1v1h-1zM11.5 14h1v1h-1z"></path>
                            </svg>
                            <div class={styles.batteryWrap}>
                                <div class={styles.batteryFill}></div>
                            </div>
                        </div>
                    </div>

                    {/* Logo */}
                    <h1 class={styles.logoText}>FOODLY</h1>

                </section>

                {/* Bottom Interaction Section */}
                <section class={styles.bottomSection}>

                    <div class={styles.textContent}>
                        <h2 class={styles.headline}>
                            <span class={styles.headlineBrand}>Hungry?</span> Get It Fast
                        </h2>
                        <p class={styles.subtext}>
                            Fast, fresh, and just the way you like it!
                        </p>
                    </div>

                    <button class={styles.orderBtn}>
                        <div class={styles.btnLeft}>
                            <div class={styles.btnIconBox}>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                            </div>
                            <span class={styles.btnText}>Order Now</span>
                        </div>

                        <div class={styles.btnArrows}>
                            <svg class={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            <svg class={styles.arrowIconStacked} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            <svg class={styles.arrowIconStacked} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </button>

                    {/* iOS Home Indicator */}
                    <div class={styles.homeIndicator}></div>

                </section>

            </main>
        </div>
    );
};

export default FoodlySplash;