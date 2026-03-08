import { Component, For } from 'solid-js';
import styles from './FoodlyInvoices.module.css';
import FoodlyHeader from './FoodlyHeader';
import FoodlyLeftPanel from './FoodlyLeftPanel';

const FoodlyInvoices: Component = () => {
    const navLinks = [
        { icon: 'dashboard', label: 'Dashboard', active: false },
        { icon: 'description', label: 'Invoices', active: true },
        { icon: 'group', label: 'Customers', active: false },
        { icon: 'inventory_2', label: 'Inventory', active: false },
    ];

    const invoices = [
        // ... (lines 12-58)
        {
            id: '#INV-2041',
            date: 'Oct 24, 2023',
            initials: 'BK',
            customer: 'Burger King Corp.',
            amount: '$1,120.50',
            status: 'Paid',
            statusClass: styles.pillGreen,
        },
        {
            id: '#INV-2042',
            date: 'Oct 25, 2023',
            initials: 'PH',
            customer: 'Pizza Hut Intl.',
            amount: '$854.00',
            status: 'Pending',
            statusClass: styles.pillOrange,
        },
        {
            id: '#INV-2043',
            date: 'Oct 25, 2023',
            initials: 'SW',
            customer: 'Subway Fresh',
            amount: '$45.20',
            status: 'Paid',
            statusClass: styles.pillGreen,
        },
        {
            id: '#INV-2044',
            date: 'Oct 26, 2023',
            initials: 'TB',
            customer: 'Taco Bell',
            amount: '$2,210.00',
            status: 'Overdue',
            statusClass: styles.pillRed,
        },
        {
            id: '#INV-2045',
            date: 'Oct 27, 2023',
            initials: 'KF',
            customer: 'KFC Fried Chicken',
            amount: '$670.30',
            status: 'Paid',
            statusClass: styles.pillGreen,
        },
    ];

    return (
        <div class={styles.appWrapper}>
            <div class={styles.mainLayout}>

                <FoodlyHeader
                    brandName="Foodly Invoices"
                    searchPlaceholder="Search invoices..."
                    userName="Alex Rivera"
                    userRole="Manager"
                    userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuC_zEFDGRWeTKEcixlVfBg8bSR-RPeIMS-zMJnORUqMrxXVEAXB8YV_4V-nv1dTk9H8QVTMbarqn-HvlvpNsY0F7VeTC0_NjUoQTrlSnIvD68ToJUC-ZpMII_72GZQBd5tMdJYwJ6bUxxm4_r74hGkmZXMtUJr5HGskRA77nF8RthjziUqkkTHYo10UvdhF1i_mnlVn7C-LZ-Hb8kc3-_-r1KQeNcW5MJSYNPEOVIAI8JCmb8CfvxzxWA6Fw0pRcvzPVRQem1Hz9PA8"
                    showNotifications={false}
                    showSettings={false}
                />

                {/* Content Layout */}
                <main class={styles.contentLayout}>

                    <FoodlyLeftPanel
                        brandName="Main Kitchen"
                        brandSubtitle="Restaurant ID: #4421"
                        navLinks={navLinks}
                        showUserCard={false}
                        showHelpCard={false}
                    />


                    {/* Main Section */}
                    <section class={styles.mainSection}>

                        <div class={styles.pageHeader}>
                            <div>
                                <h2 class={styles.pageTitle}>Invoice Management</h2>
                                <p class={styles.pageSubtitle}>Track and manage your restaurant billings</p>
                            </div>
                            <button class={styles.createBtn}>
                                <span class={styles.materialIcon}>add</span>
                                <span>Generate Invoice</span>
                            </button>
                        </div>

                        {/* Stats Grid */}
                        <div class={styles.statsGrid}>

                            <div class={styles.statCard}>
                                <div class={styles.statHeader}>
                                    <span class={styles.statLabel}>Total Revenue</span>
                                    <div class={`${styles.statIconBox} ${styles.statIconGreen}`}>
                                        <span class={styles.materialIcon}>trending_up</span>
                                    </div>
                                </div>
                                <p class={styles.statValue}>$42,840.12</p>
                                <p class={`${styles.statTrend} ${styles.trendGreen}`}>
                                    <span class={styles.materialIcon}>arrow_upward</span>
                                    12.5% from last month
                                </p>
                            </div>

                            <div class={styles.statCard}>
                                <div class={styles.statHeader}>
                                    <span class={styles.statLabel}>Pending</span>
                                    <div class={`${styles.statIconBox} ${styles.statIconOrange}`}>
                                        <span class={styles.materialIcon}>schedule</span>
                                    </div>
                                </div>
                                <p class={styles.statValue}>24</p>
                                <p class={`${styles.statTrend} ${styles.trendNeutral}`}>
                                    Requires immediate attention
                                </p>
                            </div>

                            <div class={styles.statCard}>
                                <div class={styles.statHeader}>
                                    <span class={styles.statLabel}>Overdue</span>
                                    <div class={`${styles.statIconBox} ${styles.statIconRed}`}>
                                        <span class={styles.materialIcon}>warning</span>
                                    </div>
                                </div>
                                <p class={styles.statValue}>5</p>
                                <p class={`${styles.statTrend} ${styles.trendRed}`}>
                                    <span class={styles.materialIcon}>arrow_upward</span>
                                    2% increase
                                </p>
                            </div>

                        </div>

                        {/* Table Section */}
                        <div class={styles.tableContainer}>
                            <div class={styles.tableScroll}>
                                <table class={styles.invoiceTable}>
                                    <thead class={styles.thead}>
                                        <tr>
                                            <th class={styles.th}>Invoice ID</th>
                                            <th class={styles.th}>Date</th>
                                            <th class={styles.th}>Customer</th>
                                            <th class={styles.th}>Amount</th>
                                            <th class={styles.th}>Status</th>
                                            <th class={`${styles.th} ${styles.thRight}`}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class={styles.tbody}>
                                        <For each={invoices}>
                                            {(inv) => (
                                                <tr class={styles.tr}>
                                                    <td class={styles.td}>
                                                        <p class={styles.tdId}>{inv.id}</p>
                                                    </td>
                                                    <td class={styles.td}>
                                                        <p class={styles.tdDate}>{inv.date}</p>
                                                    </td>
                                                    <td class={styles.td}>
                                                        <div class={styles.tdCustomer}>
                                                            <div class={styles.custInitials}>{inv.initials}</div>
                                                            <p class={styles.custName}>{inv.customer}</p>
                                                        </div>
                                                    </td>
                                                    <td class={styles.td}>
                                                        <p class={styles.tdAmount}>{inv.amount}</p>
                                                    </td>
                                                    <td class={styles.td}>
                                                        <span class={`${styles.statusPill} ${inv.statusClass}`}>
                                                            {inv.status}
                                                        </span>
                                                    </td>
                                                    <td class={`${styles.td} ${styles.thRight}`}>
                                                        <button class={styles.actionMenuBtn}>
                                                            <span class={styles.materialIcon}>more_vert</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )}
                                        </For>
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div class={styles.pagination}>
                                <p class={styles.pageInfo}>Showing 5 of 45 invoices</p>
                                <div class={styles.pageControls}>
                                    <button class={styles.pageBtn}>Previous</button>
                                    <button class={styles.pageBtnActive}>1</button>
                                    <button class={styles.pageBtn}>2</button>
                                    <button class={styles.pageBtn}>Next</button>
                                </div>
                            </div>
                        </div>

                    </section>
                </main>

            </div>
        </div>
    );
};

export default FoodlyInvoices;