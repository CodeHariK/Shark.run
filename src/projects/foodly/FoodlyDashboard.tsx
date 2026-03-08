import { Component, For } from 'solid-js';
import styles from './FoodlyDashboard.module.css';
import FoodlyHeader from './FoodlyHeader';
import FoodlyLeftPanel from './FoodlyLeftPanel';

const FoodlyDashboard: Component = () => {

    const navLinks = [
        { icon: 'dashboard', label: 'Dashboard', active: true },
        { icon: 'shopping_bag', label: 'Orders', active: false },
        { icon: 'restaurant_menu', label: 'Menu', active: false },
        { icon: 'group', label: 'Staff', active: false },
        { icon: 'bar_chart', label: 'Reports', active: false },
    ];

    const metrics = [
        // ... (lines 15-46)
        {
            title: 'Total Revenue',
            value: '$42,850.00',
            icon: 'payments',
            trend: '12.5%',
            trendUp: true,
            trendTextClass: styles.textEmerald,
        },
        {
            title: 'Total Orders',
            value: '1,240',
            icon: 'receipt_long',
            trend: '2.4%',
            trendUp: false,
            trendTextClass: styles.textRose,
        },
        {
            title: 'Avg Order Value',
            value: '$34.56',
            icon: 'shopping_cart',
            trend: '5.2%',
            trendUp: true,
            trendTextClass: styles.textEmerald,
        },
        {
            title: 'Satisfaction',
            value: '4.8/5.0',
            icon: 'star',
            trend: '0.3%',
            trendUp: true,
            trendTextClass: styles.textEmerald,
        },
    ];

    const categories = [
        { name: 'Burgers & Wraps', percentage: '42%', fillClass: styles.barFillPrimary },
        { name: 'Pizza & Pasta', percentage: '28%', fillClass: styles.barFillPrimary70 },
        { name: 'Salads & Healthy', percentage: '18%', fillClass: styles.barFillPrimary50 },
        { name: 'Beverages', percentage: '12%', fillClass: styles.barFillPrimary30 },
    ];

    const orders = [
        // ... (lines 57-96)
        {
            id: '#ORD-9421',
            initials: 'SM',
            name: 'Sarah Miller',
            items: '4x Classic Burger, 2x Large Fries...',
            time: '12:45 PM',
            amount: '$124.50',
            status: 'Completed',
            statusClass: styles.statusCompleted,
        },
        {
            id: '#ORD-9420',
            initials: 'JD',
            name: 'James Dalton',
            items: '1x Party Pizza Box, 4x Soda',
            time: '12:38 PM',
            amount: '$89.20',
            status: 'Processing',
            statusClass: styles.statusProcessing,
        },
        {
            id: '#ORD-9419',
            initials: 'AK',
            name: 'Anaya Khan',
            items: '2x Family Steak Meal, 1x Red Wine',
            time: '12:20 PM',
            amount: '$156.00',
            status: 'Completed',
            statusClass: styles.statusCompleted,
        },
        {
            id: '#ORD-9418',
            initials: 'BW',
            name: 'Ben Walker',
            items: '5x Deluxe Salads, 5x Fresh Juice',
            time: '11:55 AM',
            amount: '$112.75',
            status: 'Pending',
            statusClass: styles.statusPending,
        },
    ];

    return (
        <div class={styles.appWrapper}>

            <FoodlyLeftPanel
                brandName="Foodly"
                brandSubtitle="Admin Portal"
                navLinks={navLinks}
                showUserCard={true}
                userName="Alex Rivera"
                userRole="General Manager"
                userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBpXZBAly7EmGDWRdVRfQ-LDgfzaiMU-RX5qOS8NATqS1x7v_SwJLxnuL5KXFm_Kh8r46RV3Rngsyefsgt6_33pmJnwSZbJxBbN-toUmZT17EDAgtfa4wx3Ayth43_RfXeCLavkN9sOzSzcyNWm0149N-7seuF9ZwlsV0wKw9irZa9NU4cIhF-G-sk4md5lR29_hG-JTWevAO-STBeyyOrS0OygFLK3ZtA8fqmQKAPkktunFEbEr2z78ZY1ZKeuyMkgGyXPszRUeUgu"
            />

            {/* Main Content Area */}
            <main class={styles.mainArea}>

                <FoodlyHeader
                    brandName="Foodly"
                    showSearch={true}
                    searchPlaceholder="Search for orders, staff, or reports..."
                    showNotifications={true}
                    showHelp={true}
                    userName="Alex Rivera"
                    userRole="General Manager"
                    userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBpXZBAly7EmGDWRdVRfQ-LDgfzaiMU-RX5qOS8NATqS1x7v_SwJLxnuL5KXFm_Kh8r46RV3Rngsyefsgt6_33pmJnwSZbJxBbN-toUmZT17EDAgtfa4wx3Ayth43_RfXeCLavkN9sOzSzcyNWm0149N-7seuF9ZwlsV0wKw9irZa9NU4cIhF-G-sk4md5lR29_hG-JTWevAO-STBeyyOrS0OygFLK3ZtA8fqmQKAPkktunFEbEr2z78ZY1ZKeuyMkgGyXPszRUeUgu"
                />


                {/* Content Body */}
                <div class={styles.contentPad}>

                    {/* Page Title */}
                    <div class={styles.pageHeaderRow}>
                        <div>
                            <h2 class={styles.pageTitle}>Reports & Analytics</h2>
                            <p class={styles.pageSubtitle}>Detailed performance overview of your restaurant operations.</p>
                        </div>
                        <div class={styles.actionBtns}>
                            <button class={styles.btnSecondary}>
                                <span class={`${styles.materialIcon} ${styles.btnIcon}`}>calendar_today</span>
                                Last 30 Days
                            </button>
                            <button class={styles.btnPrimary}>
                                <span class={`${styles.materialIcon} ${styles.btnIcon}`}>file_download</span>
                                Export Data
                            </button>
                        </div>
                    </div>

                    {/* Metric Cards */}
                    <div class={styles.metricsGrid}>
                        <For each={metrics}>
                            {(metric) => (
                                <div class={styles.metricCard}>
                                    <div class={styles.metricHeader}>
                                        <div class={styles.metricIcon}>
                                            <span class={styles.materialIcon}>{metric.icon}</span>
                                        </div>
                                        <span class={`${styles.metricTrend} ${metric.trendTextClass}`}>
                                            <span class={`${styles.materialIcon} ${styles.trendIcon}`}>
                                                {metric.trendUp ? 'arrow_upward' : 'arrow_downward'}
                                            </span>
                                            {metric.trend}
                                        </span>
                                    </div>
                                    <p class={styles.metricLabel}>{metric.title}</p>
                                    <p class={styles.metricValue}>{metric.value}</p>
                                </div>
                            )}
                        </For>
                    </div>

                    {/* Charts Section */}
                    <div class={styles.chartsGrid}>

                        {/* Line Chart */}
                        <div class={styles.chartCardLg}>
                            <div class={styles.chartHeader}>
                                <div>
                                    <h3 class={styles.chartTitle}>Revenue Over Time</h3>
                                    <p class={styles.chartSubtitle}>Daily revenue performance for the current month</p>
                                </div>
                                <select class={styles.chartSelect}>
                                    <option>This Month</option>
                                    <option>Last Month</option>
                                </select>
                            </div>
                            <div class={styles.chartGraphic}>
                                <svg style={{ width: '100%', height: '100%', overflow: 'visible' }} viewBox="0 0 500 150">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                                            <stop offset="0%" style={{ "stop-color": "rgba(255, 59, 48, 0.2)", "stop-opacity": "1" }}></stop>
                                            <stop offset="100%" style={{ "stop-color": "rgba(255, 59, 48, 0)", "stop-opacity": "1" }}></stop>
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,130 C50,110 100,120 150,80 C200,40 250,110 300,60 C350,10 400,50 450,20 L500,40 L500,150 L0,150 Z" fill="url(#grad1)"></path>
                                    <path d="M0,130 C50,110 100,120 150,80 C200,40 250,110 300,60 C350,10 400,50 450,20 L500,40" fill="none" stroke="#FF3B30" stroke-linecap="round" stroke-width="3"></path>
                                    <circle cx="150" cy="80" fill="#FF3B30" r="5" stroke="white" stroke-width="2"></circle>
                                    <circle cx="350" cy="10" fill="#FF3B30" r="5" stroke="white" stroke-width="2"></circle>
                                </svg>
                                <div class={styles.chartXAxis}>
                                    <span>Week 1</span>
                                    <span>Week 2</span>
                                    <span>Week 3</span>
                                    <span>Week 4</span>
                                </div>
                            </div>
                        </div>

                        {/* Bar Chart */}
                        <div class={styles.chartCardSm}>
                            <h3 class={styles.chartTitle} style={{ "margin-bottom": "1.5rem" }}>Top Selling Categories</h3>
                            <div class={styles.barList}>
                                <For each={categories}>
                                    {(cat) => (
                                        <div class={styles.barItem}>
                                            <div class={styles.barHeader}>
                                                <span class={styles.barLabel}>{cat.name}</span>
                                                <span class={styles.barValue}>{cat.percentage}</span>
                                            </div>
                                            <div class={styles.barTrack}>
                                                <div class={cat.fillClass} style={{ width: cat.percentage }}></div>
                                            </div>
                                        </div>
                                    )}
                                </For>
                            </div>
                            <button class={styles.viewReportBtn}>
                                View Full Report
                            </button>
                        </div>

                    </div>

                    {/* Recent Orders Table */}
                    <div class={styles.tableContainer}>
                        <div class={styles.tableHeaderRow}>
                            <h3 class={styles.tableTitle}>Recent High-Value Orders</h3>
                            <button class={styles.viewAllLink}>View All Orders</button>
                        </div>

                        <div class={styles.tableOverflow}>
                            <table class={styles.table}>
                                <thead>
                                    <tr>
                                        <th class={styles.th}>Order ID</th>
                                        <th class={styles.th}>Customer</th>
                                        <th class={styles.th}>Items</th>
                                        <th class={styles.th}>Time</th>
                                        <th class={`${styles.th} ${styles.thRight}`}>Amount</th>
                                        <th class={`${styles.th} ${styles.thCenter}`}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <For each={orders}>
                                        {(order) => (
                                            <tr class={styles.tr}>
                                                <td class={styles.td}>
                                                    <p class={styles.tdId}>{order.id}</p>
                                                </td>
                                                <td class={styles.td}>
                                                    <div class={styles.custWrap}>
                                                        <div class={styles.custInitials}>{order.initials}</div>
                                                        <p class={styles.custName}>{order.name}</p>
                                                    </div>
                                                </td>
                                                <td class={styles.td}>
                                                    <p class={styles.tdItems}>{order.items}</p>
                                                </td>
                                                <td class={styles.td}>
                                                    <p class={styles.tdTime}>{order.time}</p>
                                                </td>
                                                <td class={styles.td}>
                                                    <p class={styles.tdAmount}>{order.amount}</p>
                                                </td>
                                                <td class={`${styles.td} ${styles.tdStatus}`}>
                                                    <span class={`${styles.statusPill} ${order.statusClass}`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        )}
                                    </For>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <footer class={styles.footer}>
                    <p>© 2024 Foodly Restaurant Management System. All rights reserved.</p>
                    <div class={styles.footerLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </footer>

            </main>
        </div>
    );
};

export default FoodlyDashboard;