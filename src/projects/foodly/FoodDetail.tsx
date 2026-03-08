import { Component, For } from 'solid-js';
import styles from './FoodDetail.module.css';

const FoodDetail: Component = () => {
    const categories = [
        { name: 'Pasta', active: true },
        { name: 'Salad', active: false },
        { name: 'Seafood', active: false },
        { name: 'Soups', active: false },
    ];

    const sizes = [
        { label: '380g', active: true },
        { label: '480g', active: false },
        { label: '560g', active: false },
    ];

    const ingredients = [
        { name: 'Cheese', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjL11-xHZkKuApKsKGGCnAEX6jZABbGgts17pGVLz9O1w8_22JGJPMDH-9pzN_lUts2DAEacVAAw2aQK7OaeD1lxdObGcdi_jdfsu7Dr-qWIqxGSciFblfu2w8n2CmeKf4RkQ8PFiqrV5dBcR7vWmVQGMJMZAzNnN8XfkR3RfYfTpS9EcEtNIF5OkUlGHDmOHOzeHnVWoYilh7f-amLZl3lxKXwGDYSecLEbIcAJKyU2DAiJHWiuccJCp_8qonwA7EOFc3dNqX_32z', active: true },
        { name: 'Tomato', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnTBxauljBNxidd3ZOMpIkb3SvlHpVa0jDjxz-4a2cJTWx6yyAaj-8vUED9072aFHpK5F_I-01eNhAPZv43HSHGn62dYIiTUvoYvODsWBJB4FWYf2y9SAOSzcwMr4o1D54bwk5oSBboU83A3Z8z-2fe8piul5qISzk4lQDobRip_TjNm94QTb1wxjJcm6S5r514cYO18ruT3EL3JU130eYhWzW_TChjpG4iXeEgnBBomY4n_wGVyBUdkpfEKX1LvQ8UOCwKbttc8Bc', active: true },
        { name: 'Herbs', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDve-Z5SZ0QTgDYaPVVNzRRqCSymnQ_qk6Qzxx5D9ZcuWLvhDMGOi6xz9dEBudBkzUrAW16VYr6YkDXr0i-3S2VuEwECiiPKdgCW_ZQkX7E9lJQj6785lNTCu-xCqmXil8eYfVS8PZU80KYBnZBGaR2r4aiOMGc30i2qd7u_Ryen8-aGMwSAE6k7e1Rwx3nl2PGELrfy_ArTTTgKrFRDRjjChA9GjwasHZWyZaUQgXO3bufX5DoMfd_VMgpzvbe8ioPafhB7WNa-qRs', active: true },
        { name: 'Chili', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAARMBrkvjGBoHOhgCtyX-3V4MHYUvkFY49WlXF7OEf3AaLCuqiMSlkVUx3WmJJTeEmIF9FH_-2lnOrVp8RsWbVvqHVTx8NlvVPWc3OWzGhYITLcE9HpKTAvyT87eXlKEbbrO0QWzK2VE8n6_QumgYCCUwrW-jhfnoEQ4GnkJvWfIxso3-DLp6oWAYHu9oYmjKy9uAXvhaZiPiW1V7YXfka3lN6oC_RJsBxvx0CjZgQgGaNaLnnAfwlUw2vOQo3ycM8Wjyp1hSzblyi', active: false },
    ];

    return (
        <div class={styles.wrapper}>
            {/* Mobile Device Container (iPhone 16: 393x852) */}
            <main class={styles.deviceContainer}>

                {/* Status Bar */}
                <div class={styles.statusBar}>
                    <span class={styles.timeText}>9:41</span>
                    <div class={styles.statusIcons}>
                        <svg class={styles.iconSmall} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21l-12-18h24z"></path>
                        </svg>
                        <svg class={styles.iconSmall} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <div class={styles.batteryWrap}>
                            <div class={styles.batteryLevel}></div>
                        </div>
                    </div>
                </div>

                {/* Header Navigation */}
                <header class={styles.topNav}>
                    <h1 class={styles.navTitle}>Meal Category</h1>
                    <button class={styles.navBtn}>
                        <svg class={styles.navBtnIcon} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                            <line x1="21" x2="7" y1="10" y2="10"></line>
                            <line x1="21" x2="3" y1="6" y2="6"></line>
                            <line x1="21" x2="3" y1="14" y2="14"></line>
                            <line x1="21" x2="7" y1="18" y2="18"></line>
                        </svg>
                    </button>
                </header>

                {/* Category Tabs */}
                <nav class={styles.categoryNav}>
                    <For each={categories}>
                        {(cat) => (
                            <button class={cat.active ? styles.catBtnActive : styles.catBtn}>
                                {cat.name}
                            </button>
                        )}
                    </For>
                </nav>

                {/* Scrollable Main Area */}
                <div class={styles.scrollArea}>

                    {/* Hero Image Section */}
                    <section class={styles.heroSection}>
                        <button class={styles.heroBtnLeft}>
                            <svg class={styles.iconSmall} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            </svg>
                        </button>
                        <button class={styles.heroBtnRight}>
                            <svg class={styles.iconSmall} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            </svg>
                        </button>
                        <div class={styles.heroImgWrap}>
                            <img alt="Rotini Delight Pasta" class={styles.heroImg} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLbQPG_9dt9UldYd_c-9leN5QX0NyrTvIorxrgaFQRh9iRZoZyAJGLaWO_R9UIfbDeknEvlTbPi1w4PdvKKjwCsIKmy9_fkjP_ojZTESk6NiB72Zg_xNGpgPCCCdyZ5Sev1gR5wtRd3KY05wY49NKnaTInJtkV1yeN8ThErnSvldQfRyjXDwiBT5O1gy8zVjtoUFVvshBr12s2dDoHqQ4z3qc8N3nHbxLIZ98OREnzx-X_0ME6BNaXVVfP5sjw1vH6MHHdN-KD8_gV" />
                        </div>
                    </section>

                    {/* Product Info */}
                    <section class={styles.detailsSection}>
                        <h2 class={styles.productTitle}>Rotini Delight</h2>
                        <p class={styles.productDesc}>
                            A vibrant and flavorful pasta dish made with rotini, sun-dried tomatoes, and a rich tomato-based sauce.
                        </p>
                    </section>

                    {/* Size Selection */}
                    <section class={styles.sizeSection}>
                        <h3 class={styles.sectionLabel}>Size</h3>
                        <div class={styles.buttonGroup}>
                            <For each={sizes}>
                                {(size) => (
                                    <button class={size.active ? styles.sizeBtnActive : styles.sizeBtn}>
                                        {size.label}
                                    </button>
                                )}
                            </For>
                        </div>
                    </section>

                    {/* Build Your Meal */}
                    <section class={styles.ingSection}>
                        <h3 class={styles.sectionLabel}>Build Your Meal</h3>
                        <div class={styles.buttonGroup}>
                            <For each={ingredients}>
                                {(ing) => (
                                    <div class={`${styles.ingItem} ${!ing.active ? styles.ingItemInactive : ''}`}>
                                        <img
                                            alt={ing.name}
                                            class={`${styles.ingImg} ${!ing.active ? styles.ingImgInactive : ''}`}
                                            src={ing.img}
                                        />
                                        {ing.active && (
                                            <div class={styles.ingCheck}>
                                                <svg class={styles.ingCheckSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </For>
                        </div>
                    </section>
                </div>

                {/* Bottom Interaction Bar */}
                <footer class={styles.actionBar}>
                    <div class={styles.priceCol}>
                        <span class={styles.priceText}>$4.50</span>
                    </div>
                    <div class={styles.actionRight}>
                        <div class={styles.qtyControl}>
                            <button class={`${styles.qtyBtn} ${styles.qtyBtnMinus}`}>
                                <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                                </svg>
                            </button>
                            <span class={styles.qtyVal}>1</span>
                            <button class={`${styles.qtyBtn} ${styles.qtyBtnPlus}`}>
                                <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 12H4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                                </svg>
                            </button>
                        </div>
                        <button class={styles.addToOrderBtn}>
                            Add to order
                        </button>
                    </div>
                </footer>

                {/* iOS Home Indicator */}
                <div class={styles.homeIndicatorWrap}></div>

            </main>
        </div>
    );
};

export default FoodDetail;