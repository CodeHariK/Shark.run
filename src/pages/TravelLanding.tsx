import { Component } from 'solid-js';
import styles from './TravelLanding.module.css';

const TravelLanding: Component = () => {
    return (
        <div class={styles.pageWrapper}>
            <div class={styles.container}>

                {/* Left Column: Text & CTA */}
                <div class={styles.textSection}>
                    <div class={styles.label}>
                        <span class={styles.starSmall}>✦</span> Travel . Discover
                    </div>
                    <h1 class={styles.heading}>Find your perfect place to experience the city</h1>
                    <p class={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                        imperdiet sed id elementum. Quam vel aliquam sit vulputate.
                    </p>
                    <button class={styles.exploreBtn}>Explore</button>
                </div>

                {/* Center Column: Arch Layout */}
                <div class={styles.archSection}>
                    {/* Decorative SVG Star */}
                    <svg class={styles.starLarge} viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" />
                    </svg>

                    <div class={styles.archWrapper}>
                        <div class={styles.archOutline}></div>
                        <img
                            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop"
                            alt="Japanese Pagoda with Cherry Blossoms"
                            class={styles.archImage}
                        />

                        {/* Floating Card Left */}
                        <div class={`${styles.floatingCard} ${styles.cardLeft}`}>
                            <p class={styles.cardText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        {/* Floating Card Right */}
                        <div class={`${styles.floatingCard} ${styles.cardRight}`}>
                            <p class={styles.cardText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Stacked Gallery */}
                <div class={styles.sideGallery}>
                    <img
                        src="https://images.unsplash.com/photo-1769708526549-05310c4ade1d?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Arched doorway view"
                        class={styles.sideImage}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1767686517955-008667784fd2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Glass ceiling architecture"
                        class={styles.sideImage}
                    />
                    <img
                        src="https://images.unsplash.com/photo-1772630204917-5e649dcb0d68?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Interior pillars"
                        class={styles.sideImage}
                    />
                </div>

                {/* Bottom Row: Stat Boxes */}
                <div class={styles.statsSection}>
                    <div class={`${styles.statBox} ${styles.bgBlue}`}>
                        <span class={styles.statValue}>351K</span>
                        <p class={styles.statText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div class={`${styles.statBox} ${styles.bgOrange}`}>
                        <span class={styles.statValue}>99%</span>
                        <p class={styles.statText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div class={`${styles.statBox} ${styles.bgPink}`}>
                        <span class={styles.statValue}>4.89</span>
                        <p class={styles.statText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TravelLanding;