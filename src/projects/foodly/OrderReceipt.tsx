import { Component, For } from 'solid-js';
import styles from './OrderReceipt.module.css';

const OrderReceipt: Component = () => {
    const orderItems = [
        {
            name: 'Truffle Burger',
            mods: 'Extra Cheese, No Onions',
            qty: 1,
            price: '$18.00',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApKyKjXsLXgZkIlHAJKJ7uVeUN5kAIIosiXX7TCKF0m0ArWZusgNXQ05DHMM-uu4HM_vwL-Aivp2v9svZm080zP1J3e-68EudwPMcsCwVDOW_z3cTluqRSE_4DZMKJ5wkvHc9Guvxvpd7JPZSoB3BlVKk6YR_3Z1crJt1Li1592WQEBhM3Lw8yDN6JXssxXC98aeo9tAeRVoJsnpV3rdllsF171D1qmVXLHltkr0UxcW98xmp0zJRjSPOiMtKSuzNp5DiC6eVuI3yd'
        },
        {
            name: 'Parmesan Fries',
            mods: 'Large, with Truffle Mayo',
            qty: 1,
            price: '$6.50',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV8oJ6RGdOm_5n4YDF1asXlhX1rOaVgBBu6JAwmjuQ1kMwkmdb5VTyaw6FCS2r0zSIu358u7a32OtIaBwcvJ41JD9MnusIC0H4ZslKYy8Itk9ArhXcUB7LdZrkQ1k_AYPl0L6CfATIQjKqQfjQBIZRfIQRFFWDX0Zy4dbvYxMDnBvmAX1FI7FLzMrGi9Ie6wdMT2CRmuy4wFKSdo54HNWQYb5DWxviJMCMzah9cHUBlVtnPQPYK8HOr5UFoGevt0VXBONKR0pAwSfC'
        },
        {
            name: 'Iced Berry Lemonade',
            mods: 'Less Ice',
            qty: 2,
            price: '$9.00',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7Nl_QWxczD_dpOFQ7Z3i2JmxplNHet7rDbnBngvA4Ak5KlCVgZeJqr8pWK5L9kAR4dHf0uVC_ZkiZbNaarzHffGbfQt33zoOQBjuL_Yr3ZSNp15VGhjKQgfE2MvuYk3bOJy6hZGliICYbqS-0jk3cIXwLCalvH9qVCaG-ehp1ZEBctwU-RX4LegsvLSEXcx3MfADYIxKfp7NYX9UIP1RId0GQtYOHU7z_FBrqsckoFaGUbJX1RLu3gO0boD19Pd8eB3LVLjKC0M2m'
        }
    ];

    // Barcode widths for the mock CSS barcode
    const barWidths = [4, 1, 3, 1, 6, 2, 1, 4, 2, 5, 1, 3, 4, 1, 2, 6, 1, 3, 1, 4];

    return (
        <div class={styles.appWrapper}>
            <div class={styles.mainContainer}>

                {/* Navigation Header */}
                <header class={styles.header}>
                    <div class={styles.headerLeft}>
                        <div class={styles.logoBox}>
                            <span class={styles.materialIcon}>receipt_long</span>
                        </div>
                        <h2 class={styles.headerTitle}>Order Receipt</h2>
                    </div>
                    <div class={styles.headerRight}>
                        <button class={styles.btnSecondary}>
                            <span class={`${styles.materialIcon} ${styles.btnIcon}`}>print</span>
                            <span class={styles.btnText}>Print</span>
                        </button>
                        <button class={styles.btnPrimary}>
                            <span class={`${styles.materialIcon} ${styles.btnIcon}`}>share</span>
                            <span class={styles.btnText}>Share</span>
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <main class={styles.mainContent}>
                    <div class={styles.receiptCard}>

                        {/* Order Status Banner */}
                        <div class={styles.banner}>
                            <div class={styles.bannerLayout}>
                                <div class={styles.bannerLeft}>
                                    <span class={styles.statusLabel}>Order Delivered</span>
                                    <h1 class={styles.orderId}>Order #FDL-88291</h1>
                                    <p class={styles.orderDate}>August 24, 2023 at 6:45 PM</p>
                                </div>
                                <div class={styles.bannerRight}>
                                    <span class={styles.paymentLabel}>Payment Method</span>
                                    <div class={styles.paymentMethod}>
                                        <span class={styles.materialIcon}>credit_card</span>
                                        <span>Visa ending in 4242</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Receipt Content */}
                        <div class={styles.receiptBody}>

                            {/* Merchant & Customer Info */}
                            <div class={styles.infoRow}>
                                <div class={styles.infoBlock}>
                                    <h3 class={styles.infoTitle}>Foodly Gourmet Kitchen</h3>
                                    <p class={styles.infoText}>
                                        123 Culinary Ave, Food District<br />
                                        San Francisco, CA 94103<br />
                                        (555) 012-3456
                                    </p>
                                </div>
                                <div class={`${styles.infoBlock} ${styles.infoBlockRight}`}>
                                    <h4 class={styles.infoTitleDark}>Deliver To</h4>
                                    <p class={styles.infoText}>
                                        Water Will<br />
                                        789 Urban Loft St, Apt 4B<br />
                                        San Francisco, CA 94107
                                    </p>
                                </div>
                            </div>

                            {/* Order Summary Table Header */}
                            <div class={styles.tableHeader}>
                                <div class={styles.colItems}>Items</div>
                                <div class={styles.colQty}>Qty</div>
                                <div class={styles.colPrice}>Price</div>
                            </div>

                            {/* Line Items */}
                            <div class={styles.itemsList}>
                                <For each={orderItems}>
                                    {(item) => (
                                        <div class={styles.itemRow}>
                                            <div class={styles.itemDesc}>
                                                <div
                                                    class={styles.itemImg}
                                                    style={{ "background-image": `url('${item.img}')` }}
                                                ></div>
                                                <div>
                                                    <p class={styles.itemName}>{item.name}</p>
                                                    <p class={styles.itemMods}>{item.mods}</p>
                                                </div>
                                            </div>
                                            <div class={styles.itemQty}>{item.qty}</div>
                                            <div class={styles.itemPriceText}>{item.price}</div>
                                        </div>
                                    )}
                                </For>
                            </div>

                            {/* Totals Section */}
                            <div class={styles.totalsRow}>
                                <div class={styles.noteBoxWrap}>
                                    <div class={styles.noteBox}>
                                        <p class={styles.noteTitle}>
                                            <span class={styles.materialIcon} style={{ "font-size": "18px" }}>redeem</span>
                                            Special Note
                                        </p>
                                        <p class={styles.noteText}>"Please leave the order at the front door and ring the bell. Thank you!"</p>
                                    </div>
                                </div>

                                <div class={styles.calcBox}>
                                    <div class={styles.calcRow}>
                                        <span>Subtotal</span>
                                        <span class={styles.calcVal}>$33.50</span>
                                    </div>
                                    <div class={styles.calcRow}>
                                        <span>Delivery Fee</span>
                                        <span class={styles.calcVal}>$2.99</span>
                                    </div>
                                    <div class={styles.calcRow}>
                                        <span>Tax (8.5%)</span>
                                        <span class={styles.calcVal}>$2.85</span>
                                    </div>
                                    <div class={styles.calcRow}>
                                        <span>Service Tip</span>
                                        <span class={styles.calcVal}>$5.00</span>
                                    </div>
                                    <div class={styles.grandTotalRow}>
                                        <span>Total</span>
                                        <span class={styles.grandTotalVal}>$44.34</span>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div class={styles.receiptFooter}>
                                <div class={styles.cardLogos}>
                                    <div class={styles.cardLogo}>VISA</div>
                                    <div class={styles.cardLogo}>MasterCard</div>
                                </div>
                                <p class={styles.thankYouText}>Thank you for ordering with Foodly! We hope you enjoyed your meal.</p>
                                <div class={styles.footerLinks}>
                                    <a href="#">Support</a>
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">Terms of Service</a>
                                </div>
                            </div>

                        </div>

                        {/* Barcode Visual */}
                        <div class={styles.barcodeSection}>
                            <div class={styles.barcodeWrap}>
                                <div class={styles.barcodeBars}>
                                    <For each={barWidths}>
                                        {(w) => (
                                            <div class={styles.bar} style={{ width: `${w}px` }}></div>
                                        )}
                                    </For>
                                </div>
                            </div>
                            <p class={styles.barcodeNum}>0 123456 789012 3456</p>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default OrderReceipt;