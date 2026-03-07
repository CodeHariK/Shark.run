import { Component, For } from 'solid-js';
import styles from './Foodly.module.css';

const FoodlyOrders: Component<{ id?: string }> = (props) => {

    const orders = [
        {
            table: 'A4',
            tableStyle: styles.tableBadgeReady,
            name: 'Ariel Hikmat',
            details: 'Order #925 / Dine In',
            status: 'Ready',
            statusClass: styles.statusReady,
            statusIcon: <span class={styles.statusDot}></span>,
            statusSubtext: 'Ready to serve',
            date: 'Wed, July 12, 2023',
            time: '06:12 PM',
            items: [
                { name: 'Scrambled eggs with toast', qty: 1, price: '$16.99' },
                { name: 'Smoked Salmon Bagel', qty: 1, price: '$18.49' },
                { name: 'Belgian Waffles', qty: 2, price: '$38.98' },
                { name: 'Classic Lemonade', qty: 1, price: '$12.49' },
            ],
            total: '$87.34',
        },
        {
            table: 'B2',
            tableStyle: styles.tableBadgeReady,
            name: 'Denis Freeman',
            details: 'Order #921 / Dine In',
            status: 'In Progress',
            statusClass: styles.statusProgress,
            statusIcon: <svg style={{ width: '0.75rem', height: '0.75rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
            statusSubtext: 'Cooking Now',
            date: 'Wed, July 12, 2023',
            time: '06:18 PM',
            items: [
                { name: 'Classic Cheeseburger', qty: 1, price: '$10.99' },
                { name: 'Fish and Chips', qty: 2, price: '$34.00' },
                { name: 'Greek Gyro Plate', qty: 1, price: '$13.99' },
            ],
            total: '$57.87',
        },
        {
            table: 'TA',
            tableStyle: styles.tableBadgeProgress,
            name: 'Morgan Cox',
            details: 'Order #916 / Takeaway',
            status: 'In Progress',
            statusClass: styles.statusProgress,
            statusIcon: <svg style={{ width: '0.75rem', height: '0.75rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
            statusSubtext: 'In the Kitchen',
            date: 'Wed, July 12, 2023',
            time: '06:19 PM',
            items: [
                { name: 'Vegetarian Pad Thai', qty: 1, price: '$16.99' },
                { name: 'Shrimp Tacos', qty: 2, price: '$19.49' },
                { name: 'Belgian Waffles', qty: 1, price: '$38.98' },
            ],
            extraItems: '+2 more items',
            total: '$86.96',
        },
        {
            table: 'A9',
            tableStyle: styles.tableBadgeReady,
            name: 'Maja Becker',
            details: 'Order #912 / Dine In',
            status: 'Completed',
            statusClass: styles.statusCompleted,
            statusIcon: <svg style={{ width: '0.75rem', height: '0.75rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>,
            statusSubtext: 'Waiting for Payment',
            date: 'Wed, July 12, 2023',
            time: '05:32 PM',
            items: [
                { name: 'Feta Stuffed Mushrooms', qty: 1, price: '$18.99' },
                { name: 'Lobster Ravioli', qty: 2, price: '$17.99' },
                { name: 'Thai Coconut Curry', qty: 2, price: '$14.49' },
            ],
            extraItems: '+4 more items',
            total: '$98.34',
            opacity: '0.9',
        },
    ];

    return (
        <section id={props.id} class={styles.contentArea} style={{ "border-top": "1px solid var(--gray-100)", "margin-top": "4rem", "padding-top": "2rem" }}>

            <div style={{ padding: '0 2.5rem' }}>
                <h1 class={styles.pageTitle}>Orders History</h1>
                <p class={styles.dateText}>Portfolio View - Recent Activity</p>
            </div>

            <div class={styles.filterBar} style={{ 'margin-top': '2rem' }}>
                <div class={styles.filterTabs}>
                    <button class={styles.tabBtn}>All</button>
                    <button class={styles.tabBtnActive}>On Process</button>
                    <button class={styles.tabBtn}>Completed</button>
                </div>

                <div class={styles.searchActions}>
                    <button class={styles.iconBtn}>
                        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                        </svg>
                    </button>
                    <div class={styles.searchBox}>
                        <input
                            type="text"
                            class={styles.searchInput}
                            placeholder="Search a name, order, etc"
                        />
                        <svg class={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div class={`${styles.ordersScrollArea} ${styles.customScrollbar}`}>
                <div class={styles.ordersGrid}>

                    <For each={orders}>
                        {(order) => (
                            <article class={styles.orderCard} style={{ opacity: order.opacity || '1' }}>

                                <div class={styles.orderHeader}>
                                    <div class={styles.orderInfo}>
                                        <div class={`${styles.tableBadge} ${order.tableStyle}`}>{order.table}</div>
                                        <div>
                                            <h3 class={styles.customerName}>{order.name}</h3>
                                            <p class={styles.orderDetailsText}>{order.details}</p>
                                        </div>
                                    </div>

                                    <div class={styles.statusContainer}>
                                        <span class={`${styles.statusPill} ${order.statusClass}`}>
                                            {order.statusIcon} {order.status}
                                        </span>
                                        <p class={styles.statusSubtext}>{order.statusSubtext}</p>
                                    </div>
                                </div>

                                <div class={styles.dateTimeRow}>
                                    <span>{order.date}</span>
                                    <span>{order.time}</span>
                                </div>

                                <div class={styles.itemsList}>
                                    <div class={styles.itemRowHeader}>
                                        <span style={{ width: '50%' }}>Items</span>
                                        <span class={styles.itemQty}>Qty</span>
                                        <span class={styles.itemPrice}>Price</span>
                                    </div>

                                    <For each={order.items}>
                                        {(item) => (
                                            <div class={styles.itemRow}>
                                                <span class={styles.itemName}>{item.name}</span>
                                                <span class={styles.itemQty}>{item.qty}</span>
                                                <span class={styles.itemPrice}>{item.price}</span>
                                            </div>
                                        )}
                                    </For>

                                    {order.extraItems && (
                                        <p class={styles.moreItemsText}>{order.extraItems}</p>
                                    )}
                                </div>

                                <div class={styles.totalRow}>
                                    <span class={styles.totalLabel}>Total</span>
                                    <span class={styles.totalAmount}>{order.total}</span>
                                </div>

                                <div class={styles.actionButtons}>
                                    <button class={styles.btnDetails}>See Details</button>
                                    <button class={styles.btnPay}>Pay Bills</button>
                                </div>

                            </article>
                        )}
                    </For>

                </div>
            </div>

        </section>
    );
};

export default FoodlyOrders;