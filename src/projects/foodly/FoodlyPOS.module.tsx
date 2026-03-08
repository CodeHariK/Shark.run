import { Component, For } from 'solid-js';
import styles from './FoodlyPOS.module.css';
import FoodlyHeader from './FoodlyHeader';
import FoodlyLeftPanel from './FoodlyLeftPanel';

const FoodlyPOS: Component = () => {
    const navLinks = [
        { icon: 'dashboard', label: 'Dashboard', active: false },
        { icon: 'format_list_bulleted', label: 'Orders', active: true },
        { icon: 'menu_book', label: 'Menu Manager', active: false },
        { icon: 'inventory_2', label: 'Inventory', active: false },
        { icon: 'bar_chart', label: 'Reports', active: false },
    ];

    const orders = [
        // ... (lines 14-68)
        {
            id: '#ORD-9921',
            time: '10:30 AM • Dine-in',
            customerName: 'Fire Will',
            customerImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRBnVrqY8xO6J2M1tHj0r8fbmKhtRUhfmY2p9wlMoa3H3YaQocW76y44xHLET_YZmjBzEYbNdmk6-W_UWkgPsj7Ce-fH9mhmx4nwPoxPlgBmTWQLZuAvppf_fSuCcWD8A7EwaDUXCyNAU4nb9De__SaplSZlgAXIWSxIQNcW2kXWzr9aMytvAmY_N9DzLJ42EXZ2Xzgdt-tDQx8w_-quZOzresKSqOXpqt-sc_73JQuuA4d9fLTkAnThYwEIkdAZlj7iU7wzX7A8Tp',
            itemsStr: '2x Spicy Burger, 1x Large Fries, 1x Coke',
            status: 'Preparing',
            statusStyle: styles.statusPrep,
            amount: '$24.50',
            active: true,
        },
        {
            id: '#ORD-9920',
            time: '10:25 AM • Delivery',
            customerName: 'Neo Smith',
            customerImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVDdz8yjtOupWL96O0_8fpV6AKK7DOzfUQxvYxJ6G3Tky6H0wG5_Egqukl97ubSM7ns9jvFlcJE_Ww7n5TQhSG5Wy9arJ16wIHJvkfdGCLdyWZimPUy1ZaevbVxsAc0MhAo1zUzYo15opaS-j-aLt6DFNm9lya5yhE3l6B4m-4MOaMu6WL0Wt6KImTycLf3gnRrChXvatt30Hpn19S3sRJOS306e0yhPHUSOuDoLFxx81MkouH3wPOgcXBfEpDN8NQiL1hhxGICBG',
            itemsStr: '1x Pepperoni Pizza, 2x Soda',
            status: 'Pending',
            statusStyle: styles.statusPend,
            amount: '$18.20',
            active: false,
        },
        {
            id: '#ORD-9919',
            time: '10:15 AM • Pickup',
            customerName: 'Mike Ross',
            customerImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4U755Cwkato8VewtGk_-XckrE7kEYxrSiNbtletttuIs3oFXF-EYF-MS4YlOH8v-0Yy3YZYrU_EmR2yKGHQugYKyMmp6DhxKCX4FCUM40-GRqiQpPQC_zwm0wD3Q1F5NMcOh_O8dc3GwQ4aFBmjfBlXMGkdwvA43MM_FsEwhjvANMOcH2fiCU3NljuAIsOuXWDDhSauj5oqTH40bipYgD2Gru95JJcEFfg9xJrhWT8WH--PxyxHCUmGhFqcMJFP_d-qVdl45rbesA',
            itemsStr: '3x Beef Tacos, 1x Guacamole',
            status: 'Ready',
            statusStyle: styles.statusReady,
            amount: '$15.00',
            active: false,
        },
        {
            id: '#ORD-9918',
            time: '10:05 AM • Dine-in',
            customerName: 'Rachel Zane',
            customerImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd3z0ybLo3N49Z5mYjnx0lHFYYidJZcquHKrh9PkQtPdK1fjkrXz7HJxzVgzGy_OuquA5uoyZu1THu575vIIgqpIXQfQoDWOEnYqF6lmZ2vTVIuwt2b9o3gwTAGkpzCBqTyrwH_Pyhrs7ak7l1JYmOUmbv-9c-n7M5VrWGYwbh39W2ELfFwZXo8KxNF6x2Fu7usg6WTGvZwB-o6xJKMjNMuLwTu_G8tAabhbTbYuNQ6sKmGBvjIQZLwMnxQArRg_C6nFpAAPQFYCNq',
            itemsStr: '1x Caesar Salad, 1x Green Tea',
            status: 'Preparing',
            statusStyle: styles.statusPrep,
            amount: '$12.00',
            active: false,
        },
        {
            id: '#ORD-9917',
            time: '09:55 AM • Delivery',
            customerName: 'Harvey Specter',
            customerImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClHi8rssWYI5vjOx6YA9XIDrOCt4EAO6XU8Va-YklXnUmT1odGuBrCXGDyN_wyCseFFtlzFdjz4vQ416suI5XRdQNU9YIYGSPJWcfkY--Pv0TehiCW5L-nVKS6txygsbS_6Z7C-QpwwZ6ueIoAiua3qe2gfccxRW3Wt6Ulf7B3-5Dp3_73BjHnLo5N6650ND7lREQDviYUDA4uqzgoQ5gxibfpSOFRGCGq_ikYMpCbq2d1Z7yzwNiDxAt-BMol0bFSnHUZw-DrScxk',
            itemsStr: '1x Steak Frites, 1x Red Wine',
            status: 'Completed',
            statusStyle: styles.statusComp,
            amount: '$42.50',
            active: false,
        },
    ];

    const detailItems = [
        { name: 'Spicy Burger', qty: 'x2', price: '$18.00', mods: 'Extra cheese, No onions', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2cx6Rq--EAlOF36cCyjkr22pt4yB_zqzhgovWyLCyEisF_PwomoloKpsGxll8y0aBLpCEnk_YlyoE7q8KBAWXF60s5cM8FQGo-c6mbJvOtI_bQjN_3FGbIlB8oMDtgP63Yv2AMmss6KKbklZ79QyzJGtmUUytUWi8Vby_QuAirZUzQPsvE-w14hqJ2adpUnXRvim1xHz4IlY66ZR9h7ZQ1-HKKbykcnpy9yF-al0V9bLWVml3si5LiUkpdZtOtPTloYlAlzF-9YQ2' },
        { name: 'Large Fries', qty: 'x1', price: '$4.50', mods: 'Waffle cut, Extra salt', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpWpv961Vv7_dHgvu5ALwpnltyWalrllAtfwwtqsoqZu6Uz2sFeYqDPltbN9rPlUWeiEAdbOdfdNufG7G6_9DuJCDNvRJGRiAGhsdoYvP3RHxNlOkg3S7I7pbVgAj7mSfVOy5MOfVU3br-wjCpF05zyjBNVRx5I-TZ-dQruTcNhG-HmJ8y1QNIFU_HlF7ZDNsqEfs7Wx9LGOzQs3Wz39RMVe-3ccZclEPsWk1Kfuv7JAqOUYm55026p3T4_cEjWiQu6nZjD6kw1yyB' },
        { name: 'Coke', qty: 'x1', price: '$2.00', mods: 'Ice included', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5mGNsV1Qoh4Zx9r2lPsFDBYpRA2hDtQ_VVXDBljpNI3b9dRy2ykKG_nx5geyfCIVNIHHm317X8By5Ezlz0qObVD_ODLkCxadERdbVc6CVrcgEv8VN7l1v08-qpLKqYS-_FRZS5lGj3hILn2YL0br9X0LefdIvjHjrOEfVtoQxk9ptXaPBggFrKWAFopCrsgUZ0T6ugCUWh61C5zgcUuJRb9eSO8vZrg9ZtGKcOih6Vzpt6AxZsfpo7IbeFKT7Ez1ISPmpRRUbCVVa' },
    ];

    return (
        <div class={styles.appWrapper}>
            <FoodlyHeader
                brandName="Foodly POS"
                stationName="STATION #04 - MAIN KITCHEN"
                searchPlaceholder="Search orders, customers, or items..."
                userName="Alex Rivera"
                userRole="Manager"
                userAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBUql7sPDD0smwriU36PsL1YJriuelXbR0R_eWzfdF4sSSKQBuo3jZ5n8WWqkVDD71Gwo5ljcpQm3LNkUwARE1IGQ-pvHT4wqJd--yy8lr9qv8Nd4IySyuIreOgJMhdAYBUqpk3LPBI8Y_rZcHpRn9em0HjZyfxyV1I5ZGKMbym1x3q6Yf_Vm9iOLHLoon_h8SY7dTjpxyDSNQqRXEutSHOjKDolS--T5fmn8LRFFfeFimrp0TpHeCrXrVhvAVf7CbjqynAJCBtzyCn"
                showSettings={true}
            />

            {/* Main Body */}
            <div class={styles.bodyLayout}>

                <FoodlyLeftPanel
                    navLinks={navLinks}
                    showHelpCard={true}
                    helpTitle="Help Center"
                    helpText="Need assistance with the POS system?"
                    helpButtonText="Contact Support"
                />


                {/* Center Content */}
                <main class={styles.centerArea}>
                    <div class={styles.pageHeader}>
                        <div>
                            <h1 class={styles.pageTitle}>Active Orders</h1>
                            <p class={styles.pageSubtitle}>Managing 24 orders right now</p>
                        </div>
                        <div class={styles.tabsWrap}>
                            <button class={styles.tabActive}>All Orders</button>
                            <button class={styles.tabInactive}>In Progress</button>
                            <button class={styles.tabInactive}>Completed</button>
                        </div>
                    </div>

                    <div class={styles.tableWrap}>
                        <div class={styles.tableCard}>
                            <table class={styles.orderTable}>
                                <thead>
                                    <tr>
                                        <th class={styles.th}>Order Info</th>
                                        <th class={styles.th}>Customer</th>
                                        <th class={styles.th}>Items</th>
                                        <th class={styles.th}>Status</th>
                                        <th class={`${styles.th} ${styles.thRight}`}>Amount</th>
                                    </tr>
                                </thead>
                                <tbody class={styles.tbody}>
                                    <For each={orders}>
                                        {(order) => (
                                            <tr class={`${styles.tr} ${order.active ? styles.trActive : ''}`}>
                                                <td class={styles.td}>
                                                    <p class={`${styles.orderId} ${order.active ? styles.orderIdActive : ''}`}>
                                                        {order.id}
                                                    </p>
                                                    <p class={styles.orderMeta}>{order.time}</p>
                                                </td>
                                                <td class={styles.td}>
                                                    <div class={styles.customerWrap}>
                                                        <div
                                                            class={styles.customerAvatar}
                                                            style={{ "background-image": `url('${order.customerImg}')` }}
                                                        ></div>
                                                        <p class={styles.customerName}>{order.customerName}</p>
                                                    </div>
                                                </td>
                                                <td class={styles.td}>
                                                    <p class={styles.itemsText}>{order.itemsStr}</p>
                                                </td>
                                                <td class={styles.td}>
                                                    <span class={`${styles.statusPill} ${order.statusStyle}`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td class={`${styles.td} ${styles.amountText}`}>
                                                    {order.amount}
                                                </td>
                                            </tr>
                                        )}
                                    </For>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>

                {/* Right Sidebar (Order Details) */}
                <aside class={styles.sidebarRight}>
                    <div class={styles.detailHeader}>
                        <div class={styles.detailHeaderTop}>
                            <h3 class={styles.detailTitle}>Order Details</h3>
                            <button class={styles.closeBtn}>
                                <span class={styles.materialIcon}>close</span>
                            </button>
                        </div>
                        <div class={styles.detailOrderRow}>
                            <div style={{ flex: 1 }}>
                                <h4 class={styles.detailId}>#ORD-9921</h4>
                                <p class={styles.detailTime}>Placed on Oct 24, 10:30 AM</p>
                            </div>
                            <span class={`${styles.statusPill} ${styles.statusPrep}`}>
                                Preparing
                            </span>
                        </div>
                    </div>

                    <div class={styles.detailScroll}>
                        {/* Customer Info */}
                        <section>
                            <h5 class={styles.sectionHeading}>Customer Information</h5>
                            <div class={styles.customerCard}>
                                <div
                                    class={styles.custDetailAvatar}
                                    style={{ "background-image": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUql7sPDD0smwriU36PsL1YJriuelXbR0R_eWzfdF4sSSKQBuo3jZ5n8WWqkVDD71Gwo5ljcpQm3LNkUwARE1IGQ-pvHT4wqJd--yy8lr9qv8Nd4IySyuIreOgJMhdAYBUqpk3LPBI8Y_rZcHpRn9em0HjZyfxyV1I5ZGKMbym1x3q6Yf_Vm9iOLHLoon_h8SY7dTjpxyDSNQqRXEutSHOjKDolS--T5fmn8LRFFfeFimrp0TpHeCrXrVhvAVf7CbjqynAJCBtzyCn')" }}
                                ></div>
                                <div>
                                    <p class={styles.custDetailName}>Fire will</p>
                                    <p class={styles.custDetailPhone}>+1 (555) 012-3456</p>
                                </div>
                                <button class={styles.callBtn}>
                                    <span class={styles.materialIcon}>phone</span>
                                </button>
                            </div>
                        </section>

                        {/* Order Items */}
                        <section>
                            <h5 class={styles.sectionHeading}>Order Items</h5>
                            <div class={styles.itemsList}>
                                <For each={detailItems}>
                                    {(item) => (
                                        <div class={styles.itemRow}>
                                            <div
                                                class={styles.itemImg}
                                                style={{ "background-image": `url('${item.img}')` }}
                                            ></div>
                                            <div class={styles.itemDetails}>
                                                <div class={styles.itemTop}>
                                                    <p class={styles.itemName}>{item.name} <span class={styles.itemQty}>{item.qty}</span></p>
                                                    <p class={styles.itemPrice}>{item.price}</p>
                                                </div>
                                                <p class={styles.itemMods}>{item.mods}</p>
                                            </div>
                                        </div>
                                    )}
                                </For>
                            </div>
                        </section>

                        {/* Totals */}
                        <section class={styles.totalsSection}>
                            <div class={styles.totalRow}>
                                <span class={styles.totalLabel}>Subtotal</span>
                                <span class={styles.totalVal}>$24.50</span>
                            </div>
                            <div class={styles.totalRow}>
                                <span class={styles.totalLabel}>Tax (0%)</span>
                                <span class={styles.totalVal}>$0.00</span>
                            </div>
                            <div class={styles.grandTotalRow}>
                                <span>Total Amount</span>
                                <span class={styles.grandTotalVal}>$24.50</span>
                            </div>
                        </section>
                    </div>

                    <div class={styles.detailFooter}>
                        <div class={styles.actionGrid}>
                            <button class={styles.actionBtnSmall}>
                                <span class={styles.materialIcon}>print</span>
                                <span class={styles.actionBtnText}>Print Receipt</span>
                            </button>
                            <button class={styles.actionBtnSmall}>
                                <span class={styles.materialIcon}>edit_square</span>
                                <span class={styles.actionBtnText}>Modify Order</span>
                            </button>
                        </div>
                        <button class={styles.readyBtn}>
                            Mark as Ready for Pickup
                            <span class={styles.materialIcon}>chevron_right</span>
                        </button>
                    </div>
                </aside>

            </div>
        </div>
    );
};

export default FoodlyPOS;