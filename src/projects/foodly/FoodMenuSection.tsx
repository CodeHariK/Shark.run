import { Component, For } from "solid-js";
import styles from './Foodly.module.css';

export const FoodlyMenuSection: Component = () => {
    const categories = [
        { name: 'Pasta', active: true },
        { name: 'Salad', active: false },
        { name: 'Seafood', active: false },
        { name: 'Soups', active: false },
        { name: 'Roasted Meats', active: false },
        { name: 'Oven-Baked', active: false },
        { name: 'Plant-Based', active: false },
        { name: 'Rice', active: false },
    ];

    const ingredients = [
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIUgJ-E9lY2Vd1XMTsDV72MEEIKz5dIA1tnBF55dqI4aHDQWrqM-d2vDTu3STPxSL-zOh7MFP6RLWyBXbzmIoMm96tLQOFxWomUQchLwIgfKFJNYwIq3Up1zvGbWlCurfg6emDk6pwZYKRuNE0q3DtM5eCiUSJe4H3Zqc-zqbZk3F-y4nlHNNjB0UeWNSWKiYo4l432bKBtvC-5SXiaHmXcGnUU-OumNh85T9XJsb85OHVAX0fvTn6u1kq_P2o_SE_m5fnQnj_KNE', alt: 'Cheese' },
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFS_1Q3uYVE33iHLzy83TWTUqxAlFQNUVFe76O4VH4VGLNxKCrvPEPggbOj9t-t5Gljhr2tQJNOv1bxQcuXtE7DMFPOc_ANdps2IE_3YPE0egBBRKcgH88wL-cPrZ6KUktog6REfA6KbboU2cZ8_qrHZK50VAyDlOx0MRuCLWMe9ZPxpQoP_LkIW9bmuNYIfRZPWIeU0LOaawfOiIWzY9j-t4iNOs9qBZYlVRnpcrxGq5-A4z-NO5iUuWIt7PZND7JPV_DNbnPvNo', alt: 'Tomato' },
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE8lnVs2IGiKhpYhq_cS05pEExEMsMw_QqDiYfMVYDvYmMP5IF3YHAN6fDy2aWcuUJPXN_d7LQUllErzs6ylietYGVjMiOgGME9kqxoK4HzoSIIFa-VzdZFQcDuqLlYogKfKNxBmhx5KT0PMt2CEvVAI8Txul-hxkkQ7mgIQuTyIPGqmme2eoJIo2fpfEcqxYoB4PA-qsc6iHrEjvT7d7ujEEkLuCV7nRN4l4xZsk9Ds3fdswK6b2JQxux2byah7FskG_IgvYYOwM', alt: 'Herbs' },
    ];

    const pairings = [
        { title: 'Caprese Salad', size: '380g', price: '$3.50', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5eKOjOcPEnTZDm5eCcmPcZdp0-JonUdRiv_2MwSmCfQFtYkN4WvMj6fIhi6SrghBuKm-yh-AIxQHz_1ivQRk2bcgDK4qaQdbmIqzZ5C9-glCgRxnyl_RoL5tPDSUOQ-z4COuT6sQt9xVHzFcZynHWUurnlJfc_9CtUdwjMylvwwp-W_PFba4d9pAyinDSa0sw1wDn3NHCR3kAQ3Kq8EaYohyQFk5kKI5CmXLm0f9LQ_2fEJfjmfjRZjuXrKcIA-x_iksC8Fjx4j4' },
        { title: 'Tomato Sauce', size: '150g', price: '$0.75', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPlZ2-ewATgMw5_PBp8v551VQ2uc1qQpHdXQXLDW9eN6lOgnoZd_AHu8iZQV9ThlJ6HzSUAw_dJT73db2VL8BBe4kclZHAgHj984ilxCc8rZtGoEziJ-3TN2lQ-JvkdQlK527naYlR8M0KtNWkqDSwKxaDCJiraNL30ioRY6dMVpKhXhinOYC9pJiCKboVseTPB0LIgOrkugaABGK0WpsghsebgGZE7V4TGoUzTtutloxkibzeADnU88ZmskatJwZ5LU46W2o2O1k' },
        { title: 'Iced Lemonade', size: '0.200L', price: '$1.50', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7yzHOQb_6LsBZQT1giHCjimivpfSF6ovpFSfC4a1B09XKkAc4DTYoe7Oqkp5Ety_bCfdsOvQ9W42SGahMNt1dqMB1j5IwVnJgbDg-q06BNAXX21_hvxrD30tF-xJJIoTQwCVIwSzEy5LYvpxoc_aYyh6iXOHZw4bXofur5eeZ-HYp86Ye7uOA9igUMSYG9UacOrVi5CCqxbyg93jzm0ftS2iEF4RrkXe0FJV35x8wLXwHed-nqFZSWXFYGf2o5p3_h0ELeH0yv38' },
    ];

    const cartItems = [
        { title: 'Chicken Biryani', size: '380g', price: '$4.50', qty: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTXgHQUcNwhOI9jAKvuWTGG81o_v2R2BcQPR6t6QWonIjykQvsVhkDGN7pQL3p1BFt4dd0vUxmgkdsnIGyX3cPXW3A2wzLvd8RHdT1TPvlOYgK2q8KkowLnTmx3ptWSN00JfZXNuOgAoDqieq_Gu5Wv27PPQPLna7RX66GUF0dKM9CWOqfYSB1m_li7KzchhouT_GEt96yBrUqzRu0i5GxAY-bnQJbl1bnwI2-i4c8vDkzO0Q9zbu3G9hs1u9_7I1GPFZ02lL5iGE' },
        { title: 'Crust Supreme', size: '460g', price: '$5.50', qty: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvcj6xW3Wxt0QNpK-F5kPQwzpWp7urDbJtOy1orS-8ZG4a4B15IPSsdJn0e4v9Q7ANOqkQVgsobFvy5Y5NkJ9VUz8BJBN2hXW7AvVwIcOGjhrdvDjBFWd9HWU6U4svMN5T1L-pABFGVY8zhsHzuTIR9Z8oqWMZs69Re_c1ttrz9hBNqYrkwl28bJSBZimfQN7gxh-cylBUbhpAsuCddUeSdvgmupaSHUV7PbkPubAg63mtFbHrG21fwrneC4i3VPctkhpyJks34C8' },
        { title: 'Gleam Breeze', size: '0.350L', price: '$2.15', qty: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCofkRjz5cX3ZRFRlQPZjicp3mTC0Tp9Z2W9rJzmFrXdcygOHr_AgbeeB5zXlN31hR11Qq_6ggyRxreQ-BVl5u91J1zD90F0AnylVET_NPBgMnLQ92uXSz67YHr2Belild2f-BioEagLppDD9jTGHSSBUnOWT8hv5wRZeJxMa_ekqSke0MIaYRYkNiwXHEEowkCHijS41yX8cmIaxVEDKe3UZb16_6GMmTtZCpshd3MF7JIPTR3Rf4HUdq1YypG95BPbdonErvMn70' },
    ];

    return (
        <div style={{ "display": "flex", "width": "100%", "gap": "2rem" }}>
            {/* Left & Center Content Section */}
            <main class={styles.mainContent}>

                {/* Meal Categories Chips */}
                <section>
                    <div class={styles.catHeader}>
                        <h2 class={styles.catTitle}>Meal Category</h2>
                        <button class={styles.catAction}>
                            <svg class="w-6 h-6" style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <div class={`${styles.catList} ${styles.hideScrollbar}`}>
                        <For each={categories}>
                            {(cat) => (
                                <button class={cat.active ? styles.catPillActive : styles.catPill}>
                                    {cat.name}
                                </button>
                            )}
                        </For>
                    </div>
                </section>

                {/* Hero Item Detail */}
                <section class={styles.hero}>
                    <div class={styles.heroImageWrap}>
                        <img alt="Rotini Delight" class={styles.heroImage} src="https://png.pngtree.com/png-clipart/20250516/original/pngtree-bowl-of-tricolor-pasta-with-vegetables-and-basil-for-italian-food-png-image_21001498.png" />
                    </div>
                    <div class={styles.heroDetails}>
                        <div>
                            <h1 class={styles.heroTitle}>Rotini Delight</h1>
                            <p class={styles.heroDesc}>
                                A vibrant and flavorful pasta dish made with rotini, sun-dried tomatoes, and a rich tomato-based sauce.
                            </p>
                        </div>

                        <div>
                            <p class={styles.label}>Size</p>
                            <div class={styles.sizeGroup}>
                                <button class={styles.sizeBtnActive}>380g</button>
                                <button class={styles.sizeBtn}>480g</button>
                                <button class={styles.sizeBtn}>560g</button>
                            </div>
                        </div>

                        <div>
                            <p class={styles.label}>Build your meal</p>
                            <div class={styles.ingredientGroup}>
                                <For each={ingredients}>
                                    {(ing) => (
                                        <div class={styles.ingredientBox}>
                                            <img alt={ing.alt} class={styles.ingredientImg} src={ing.src} />
                                            <div class={styles.ingredientCheck}>
                                                <svg style={{ width: '0.625rem', height: '0.625rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </For>
                            </div>
                        </div>

                        <div class={styles.actionRow}>
                            <div class={styles.qtyControl}>
                                <button class={styles.qtyBtn}>-</button>
                                <span class={styles.qtyVal}>1</span>
                                <button class={styles.qtyBtn}>+</button>
                            </div>
                            <button class={styles.addToOrder}>
                                <span class={styles.priceTag}>$4.50</span>
                                <span class={styles.addText}>Add to order</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Recommended Pairings */}
                <section class={styles.pairingsSection}>
                    <h3 class={styles.label} style={{ "margin-bottom": '1rem' }}>Recommended Pairings</h3>
                    <div class={styles.pairingsGrid}>
                        <For each={pairings}>
                            {(pairing) => (
                                <div class={styles.pairingCard}>
                                    <img alt={pairing.title} class={styles.pairingImg} src={pairing.img} />
                                    <div class={styles.pairingInfo}>
                                        <h4 class={styles.pairingTitle}>{pairing.title}</h4>
                                        <p class={styles.pairingSize}>{pairing.size}</p>
                                        <p class={styles.pairingPrice}>{pairing.price}</p>
                                    </div>
                                    <button class={styles.addPairingBtn}>
                                        <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </For>
                    </div>
                </section>
            </main>

            {/* Right Sidebar / Order Summary */}
            <aside class={styles.sidebar}>
                <div class={styles.sidebarHeader}>
                    <h2 class={styles.sidebarTitle}>My Order</h2>
                    <span class={styles.sidebarCount}>3 positions</span>
                </div>

                {/* Cart Items List */}
                <div class={`${styles.cartList} ${styles.hideScrollbar}`}>
                    <For each={cartItems}>
                        {(item) => (
                            <div class={styles.cartItem}>
                                <div class={styles.cartImgWrap}>
                                    <img alt={item.title} class={styles.cartImg} src={item.img} />
                                </div>
                                <div class={styles.cartInfo}>
                                    <div>
                                        <h4 class={styles.cartTitle}>{item.title}</h4>
                                        <p class={styles.cartSize}>{item.size}</p>
                                    </div>
                                    <div class={styles.cartRow}>
                                        <span class={styles.cartPrice}>{item.price}</span>
                                        <div class={styles.cartQty}>
                                            <button class={styles.cartQtyBtn}>-</button>
                                            <span class={styles.cartQtyVal}>{item.qty}</span>
                                            <button class={styles.cartQtyBtn}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </For>
                </div>

                {/* Order Summary Footer */}
                <div class={styles.summary}>
                    <div class={styles.promoRow}>
                        <span class={styles.label} style={{ margin: 0 }}>Promocode</span>
                        <div class={styles.promoTag}>
                            <div class={styles.promoIcon}>
                                <svg style={{ width: '0.5rem', height: '0.5rem', color: 'var(--bg-main)' }} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 7H7v6h6V7z"></path>
                                </svg>
                            </div>
                            <span class={styles.promoText}>bato</span>
                            <button class={styles.promoRemove}>
                                <svg style={{ width: '0.75rem', height: '0.75rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class={styles.totals}>
                        <div class={styles.totalRow}>
                            <span class={styles.totalLabel}>Discount</span>
                            <span class={styles.totalVal}>-10%</span>
                        </div>
                        <div class={styles.totalRow}>
                            <span class={styles.totalLabel}>Delivery</span>
                            <span class={`${styles.totalVal} ${styles.uppercase}`}>Free</span>
                        </div>
                        <div class={styles.finalRow}>
                            <span class={styles.finalLabel}>Total</span>
                            <span class={styles.finalVal}>$12.15</span>
                        </div>
                    </div>

                    <button class={styles.confirmBtn}>
                        Confirm Order
                    </button>
                </div>
            </aside>
        </div>
    );
};