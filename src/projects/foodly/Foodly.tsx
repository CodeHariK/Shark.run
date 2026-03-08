import { Component } from 'solid-js';
import FoodlyOrders from './FoodlyOrders';
import OrderScreen from './OrderScreen';
import FoodDetail from './FoodDetail';
import FoodlySplash from './FoodlySplash';
import FoodlyLogin from './FoodlyLogin';
import FoodlyHome from './FoodlyHome';
import FoodlyPOS from './FoodlyPOS.module';
import FoodlyInvoices from './FoodlyInvoices';
import OrderReceipt from './OrderReceipt';
import FoodlyDashboard from './FoodlyDashboard';

import styles from './Foodly.module.css';
import themeStyles from './FoodlyTheme.module.css';
import { ThemeToggle } from 'solgaleo';
import { FoodlyMenuSection } from './FoodMenuSection';

const Foodly: Component = () => {

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div class={`${styles.foodlyWrapper} ${themeStyles.foodlyTheme}`} style={{ "overflow-y": "auto", height: "100vh" }}>
            <div class={styles.appContainer} style={{ "flex-direction": "column", "gap": "4rem", "padding": "2rem" }}>

                {/* Global Unified Header */}
                <header class={styles.header} style={{ "width": "100%", "padding": "1.5rem 1rem", "z-index": "100", "background": "var(--bg-main)", "position": "sticky", "top": "0", "border-radius": "20px", "box-shadow": "var(--shadow-lg)" }}>
                    <div class={styles.logo}>FOODLY</div>

                    <nav class={styles.navBar}>
                        <a href="#splash" class={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo('splash'); }}>Splash</a>
                        <a href="#login" class={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo('login'); }}>Login</a>
                        <a href="#home" class={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a>
                        <a href="#pos" class={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo('pos'); }}>POS</a>
                        <a href="#invoices" class={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo('invoices'); }}>Invoices</a>
                        <a href="#receipt" class={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo('receipt'); }}>Receipt</a>
                        <a href="#dashboard" class={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo('dashboard'); }}>Dashboard</a>
                        <a href="#detail" class={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo('detail'); }}>Detail</a>
                        <a href="#order" class={styles.navLink} onClick={(e) => { e.preventDefault(); scrollTo('order'); }}>Order</a>
                    </nav>

                    <div class={styles.headerActions}>
                        <ThemeToggle />
                    </div>
                </header>

                <div class={styles.stackedSection} id="menu">
                    <div class={styles.sectionAboutHeader}>
                        <h2 class={styles.sectionAboutTitle}>Menu Explorer</h2>
                        <p class={styles.sectionAboutDesc}>Browse our curated selection of gourmet dishes with real-time availability and dynamic pricing.</p>
                    </div>
                    <FoodlyMenuSection />
                </div>

                <div class={styles.stackedSection} id="orders">
                    <div class={styles.sectionAboutHeader}>
                        <h2 class={styles.sectionAboutTitle}>Active Orders</h2>
                        <p class={styles.sectionAboutDesc}>Track your current orders through every stage of the culinary process, from preparation to delivery.</p>
                    </div>
                    <FoodlyOrders />
                </div>

                <div class={styles.stackedSection} id="splash">
                    <div class={styles.sectionAboutHeader}>
                        <h2 class={styles.sectionAboutTitle}>Welcome Experience</h2>
                        <p class={styles.sectionAboutDesc}>The initial touchpoint for new users, featuring our brand story and core value propositions.</p>
                    </div>
                    <FoodlySplash />
                </div>

                <div class={styles.stackedSection} id="login">
                    <div class={styles.sectionAboutHeader}>
                        <h2 class={styles.sectionAboutTitle}>Secure Access</h2>
                        <p class={styles.sectionAboutDesc}>Unified authentication system managing user profiles, preferences, and secure payment methods.</p>
                    </div>
                    <FoodlyLogin />
                </div>

                <div class={styles.stackedSection} id="home">
                    <div class={styles.sectionAboutHeader}>
                        <h2 class={styles.sectionAboutTitle}>Discovery Portal</h2>
                        <p class={styles.sectionAboutDesc}>The central hub for consumers to discover new flavors and trending gourmet spots in their area.</p>
                    </div>
                    <FoodlyHome />
                </div>

                <div class={styles.stackedSection} id="pos">
                    <div class={styles.sectionAboutHeader}>
                        <h2 class={styles.sectionAboutTitle}>Operations Hub (POS)</h2>
                        <p class={styles.sectionAboutDesc}>High-performance interface for kitchen staff and front-of-house operations to manage high-volume orders.</p>
                    </div>
                    <FoodlyPOS />
                </div>

                <div class={styles.stackedSection} id="invoices">
                    <div class={styles.sectionAboutHeader}>
                        <h2 class={styles.sectionAboutTitle}>Financial Ledger</h2>
                        <p class={styles.sectionAboutDesc}>Comprehensive billing and invoice management for business owners and catering clients.</p>
                    </div>
                    <FoodlyInvoices />
                </div>

                <div class={styles.stackedSection} id="receipt">
                    <div class={styles.sectionAboutHeader}>
                        <h2 class={styles.sectionAboutTitle}>Transaction Records</h2>
                        <p class={styles.sectionAboutDesc}>Digital receipts and transaction history for clear financial records and easy re-ordering.</p>
                    </div>
                    <OrderReceipt />
                </div>

                <div class={styles.stackedSection} id="dashboard">
                    <div class={styles.sectionAboutHeader}>
                        <h2 class={styles.sectionAboutTitle}>Business Intelligence</h2>
                        <p class={styles.sectionAboutDesc}>Real-time analytics and performance metrics to help restaurant owners make data-driven decisions.</p>
                    </div>
                    <FoodlyDashboard />
                </div>

                <div class={styles.stackedSection} id="detail">
                    <div class={styles.sectionAboutHeader}>
                        <h2 class={styles.sectionAboutTitle}>Product Showcase</h2>
                        <p class={styles.sectionAboutDesc}>Deep dives into individual dishes, featuring full ingredient lists, nutritional facts, and pairings.</p>
                    </div>
                    <FoodDetail />
                </div>

                <div class={styles.stackedSection} id="order">
                    <div class={styles.sectionAboutHeader}>
                        <h2 class={styles.sectionAboutTitle}>Checkout & Finalization</h2>
                        <p class={styles.sectionAboutDesc}>Streamlined final step to confirm order details, apply promos, and initiate preparation.</p>
                    </div>
                    <OrderScreen />
                </div>

            </div>
        </div>
    );
}


export default Foodly;