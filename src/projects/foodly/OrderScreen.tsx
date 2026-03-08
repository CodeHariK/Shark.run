import { Component, For } from 'solid-js';
import styles from './OrderScreen.module.css';

const OrderScreen: Component = () => {
    const orderItems = [
        {
            name: 'Chicken Biryani',
            weight: '380g',
            price: '$4.50',
            qty: 1,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1xHzfvi2tu3KEgOW3D7wqKKxI0z7WZZjDR0S41QknUghSM5TDFIUl0c5EfuYowAHGy_-JAzLj9MkF3vGfuhcxukqVt0c3m_FzNE9_HlFWasAbRZ8D8nTyVrhH0MydL_qErromZYaa4pm78a1PQoAWMYFMP3uAG5kEAk76x61Q_Q1vcoBFc5bmaRTsZMajBSqSiCNaiJUl8S9a7r2cvVyL3GxFwH44PoJaFgPhzY3k70DY7oJVRGuaWayUOj8Hle51YoXoHwsbjcaQ',
        },
        {
            name: 'Crust Supreme',
            weight: '460g',
            price: '$5.50',
            qty: 1,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1s84JBkluCdh7q1dnMCDFp1-aqsaB04inG-NYDFUbnSYyZbESTLr_9DJtg16g68nvXAMZCkpiqzGlkAQotxICegP_xwl-gG8FQGm4Bi0-pYmUYVAJ9bID5dku7yfSJxvR4q3BMc14OWT1R9wZYusJnIh0n7yQeU8pCvfCcZfvwxruHxGzpjK_eO2bgOUnRhpVzite07Myd-5qiYF5gnLi4e14WCUh-cMbnQfhcJeg6Q-45nTCYGW3jXVpN5t13801v7-Bum_jC-Ud',
        },
        {
            name: 'Gleam Breeze',
            weight: '0.350L',
            price: '$2.15',
            qty: 1,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXgYv_4BLErnOwrHbRhO7WSML_UWgIYiL_W9HVXE3c2ml8-qQ8oO8KDkTafWffVKt64ClX-mLxL-T8a_FiiAgaCpCv_DgTxeJIm3Txo7b01rWjWLHMRW-iSG4VIbMXm_BMx8WhjhLTRCvPjcaIAPI9QtpeaBFrALO9PTViOrnMKsBilE700pt_bBYbG6i6TUovB-kPlnxqUOrqRtrl2utvcKAmNXjbx9RI3UstwwKGU96Cl2r1o1aMW0fKkh2Mu2LLd3-92bcolQNr',
        },
    ];

    return (
        <div class={styles.wrapper}>
            {/* Mobile Device Container (iPhone 16) */}
            <main class={styles.device}>

                {/* Status Bar */}
                <header class={styles.statusBar} data-purpose="status-bar">
                    <span class={styles.time}>9:41</span>
                    <div class={styles.statusIcons}>
                        <svg class={styles.iconSmall} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                        </svg>
                        <svg class={styles.iconSmall} fill="currentColor" viewBox="0 0 20 20">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.266 0 .52.105.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"></path>
                        </svg>
                        <div class={styles.batteryText}>100</div>
                    </div>
                </header>

                {/* App Header */}
                <nav class={styles.nav} data-purpose="app-navigation">
                    <h1 class={styles.logo}>FOODLY</h1>
                    <div class={styles.navActions}>
                        <div class={styles.cartWrap}>
                            <svg class={`${styles.iconMedium} ${styles.iconBrand}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                            </svg>
                            <span class={styles.cartBadge}>2</span>
                        </div>
                        <button class={styles.menuBtn}>
                            <svg class={styles.iconMedium} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Content Area */}
                <div class={styles.content}>
                    <div class={styles.pageHeader}>
                        <h2 class={styles.pageTitle}>My Order</h2>
                        <span class={styles.itemCount}>3 positions</span>
                    </div>

                    {/* Order List Container */}
                    <div class={styles.orderList}>
                        <For each={orderItems}>
                            {(item) => (
                                <div class={styles.orderItem} data-purpose="order-item">
                                    <div class={styles.itemImgWrap}>
                                        <img alt={item.name} class={styles.itemImg} src={item.image} />
                                    </div>
                                    <div class={styles.itemDetails}>
                                        <h3 class={styles.itemName}>{item.name}</h3>
                                        <p class={styles.itemWeight}>{item.weight}</p>
                                        <p class={styles.itemPrice}>{item.price}</p>
                                    </div>
                                    <div class={styles.qtyControl}>
                                        <button class={styles.qtyBtn}>+</button>
                                        <span class={styles.qtyVal}>{item.qty}</span>
                                        <button class={styles.qtyBtn}>-</button>
                                    </div>
                                </div>
                            )}
                        </For>
                    </div>

                    {/* Promo Code Section */}
                    <div class={styles.promoSection} data-purpose="promocode-section">
                        <span class={styles.promoLabel}>PROMOCODE</span>
                        <div class={styles.promoTag}>
                            <svg class={styles.promoIcon} fill="currentColor" viewBox="0 0 20 20">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.266 0 .52.105.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"></path>
                            </svg>
                            <span class={styles.promoText}>bato</span>
                            <button class={styles.promoRemove}>×</button>
                        </div>
                    </div>

                    {/* Price Summary */}
                    <div class={styles.summary} data-purpose="order-summary">
                        <div class={styles.summaryRow}>
                            <span class={styles.summaryLabel}>DISCOUNT</span>
                            <span class={styles.summaryVal}>-10%</span>
                        </div>
                        <div class={styles.summaryRow}>
                            <span class={styles.summaryLabel}>DELIVERY</span>
                            <span class={styles.summaryVal} style={{ "text-transform": "uppercase" }}>FREE</span>
                        </div>
                        <div class={styles.totalRow}>
                            <span class={styles.totalLabel}>TOTAL</span>
                            <span class={styles.totalVal}>$12.15</span>
                        </div>
                    </div>

                    {/* Footer Action */}
                    <div class={styles.actionSection} data-purpose="bottom-action">
                        <button class={styles.confirmBtn}>
                            Confirm Order
                        </button>
                    </div>
                </div>

                {/* Home Indicator */}
                <div class={styles.homeIndicatorWrap}>
                    <div class={styles.homeIndicator}></div>
                </div>

            </main>
        </div>
    );
};

export default OrderScreen;