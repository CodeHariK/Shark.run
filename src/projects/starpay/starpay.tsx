import { Component, For } from 'solid-js';
import styles from './starpay.module.css';
import ProjectHeader from '../../components/ProjectHeader';

const Starpay = () => {
    return (
        <div class={styles.pageContainer}>
            <ProjectHeader />
            <PhoneFrame title="Onboarding Screen">
                <img src="/starpay/Onboarding.svg" class={styles.screenImage} title="Onboarding" />
            </PhoneFrame>

            <PhoneFrame title="Home Screen">
                <img src="/starpay/Home screen.svg" class={styles.screenImage} title="Home" />
            </PhoneFrame>

            <PhoneFrame title="Statistic Screen">
                <img src="/starpay/Statistic screen.svg" class={styles.screenImage} title="Statistic" />
            </PhoneFrame>

            <PhoneFrame title="Transfer Screen">
                <img src="/starpay/Transfer screen.svg" class={styles.screenImage} title="Transfer" />
            </PhoneFrame>
        </div>
    );
};

const PhoneFrame: Component<{ title: string, children: any }> = (props) => {
    return (
        <div class={styles.phoneWrapper}>
            <h2 class={styles.screenTitle}>{props.title}</h2>
            <div class={styles.iphone16}>
                <div class={styles.innerScreen}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

const HomeScreen: Component = () => {
    const transactions = [
        { id: 1, title: 'Spotify', category: 'Music Subscription', amount: 15.99, date: 'Today', type: 'expense' },
        { id: 2, title: 'H&M', category: 'Clothing Shop', amount: 85.00, date: 'Today', type: 'expense' },
        { id: 3, title: 'Gym', category: 'Monthly Pass', amount: 45.00, date: 'Yesterday', type: 'expense' },
        { id: 4, title: 'Uber', category: 'Transport', amount: 22.50, date: 'Yesterday', type: 'expense' },
    ];

    return (
        <div class={styles.homescreen}>
            {/* Header */}
            <header class={styles.header}>
                <div class={styles.userProfile}>
                    <div class={styles.avatar}>
                        <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Antigravity" alt="User Avatar" />
                    </div>
                    <div class={styles.greeting}>
                        <span class={styles.greetingLabel}>Good morning,</span>
                        <span class={styles.userName}>Antigravity</span>
                    </div>
                </div>
                <button class={styles.notificationBtn} aria-label="Notifications">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                </button>
            </header>

            {/* Cards Section */}
            <section class={styles.cardsContainer}>
                <div class={`${styles.card} ${styles.cardBalance}`}>
                    <div>
                        <span class={styles.cardLabel}>Total Balance</span>
                        <div class={styles.cardAmount}>41,000.00</div>
                    </div>
                    <div>
                        <span class={styles.cardNumber}>**** **** **** 4501</span>
                    </div>
                </div>
                <div class={`${styles.card} ${styles.cardVisa}`}>
                    <div>
                        <span class={styles.cardLabel}>Visa Card</span>
                        <div class={styles.cardAmount}>12,400.50</div>
                    </div>
                    <div>
                        <span class={styles.cardNumber}>**** **** **** 8820</span>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section class={styles.quickActions}>
                <div class={styles.actionItem}>
                    <div class={`${styles.actionIcon} ${styles.primary}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </div>
                    <span class={styles.actionLabel}>Add</span>
                </div>
                <div class={styles.actionItem}>
                    <div class={styles.actionIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                    </div>
                    <span class={styles.actionLabel}>Transfer</span>
                </div>
                <div class={styles.actionItem}>
                    <div class={styles.actionIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="6" width="20" height="12" rx="2" />
                            <path d="M12 12V12" />
                        </svg>
                    </div>
                    <span class={styles.actionLabel}>Withdraw</span>
                </div>
                <div class={styles.actionItem}>
                    <div class={styles.actionIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2v20M5 12h14" />
                        </svg>
                    </div>
                    <span class={styles.actionLabel}>Pay</span>
                </div>
            </section>

            {/* Transactions Section */}
            <section class={styles.transactionsSection}>
                <div class={styles.sectionHeader}>
                    <span class={styles.sectionTitle}>Transactions</span>
                    <span class={styles.viewAll}>View all</span>
                </div>

                <div class={styles.transactionList}>
                    <h3 class={styles.transactionDate}>Today</h3>
                    <For each={transactions.filter(t => t.date === 'Today')}>
                        {(item) => (
                            <div class={styles.transactionItem}>
                                <div class={styles.transInfo}>
                                    <div class={styles.transIcon}>
                                        {/* Simplified Icons */}
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="12" y1="8" x2="12" y2="12" />
                                            <line x1="12" y1="16" x2="12.01" y2="16" />
                                        </svg>
                                    </div>
                                    <div class={styles.transDetails}>
                                        <span class={styles.transTitle}>{item.title}</span>
                                        <span class={styles.transCategory}>{item.category}</span>
                                    </div>
                                </div>
                                <span class={`${styles.transAmount} ${styles[item.type]}`}>
                                    {item.amount.toFixed(2)}
                                </span>
                            </div>
                        )}
                    </For>

                    <h3 class={styles.transactionDate}>Yesterday</h3>
                    <For each={transactions.filter(t => t.date === 'Yesterday')}>
                        {(item) => (
                            <div class={styles.transactionItem}>
                                <div class={styles.transInfo}>
                                    <div class={styles.transIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </div>
                                    <div class={styles.transDetails}>
                                        <span class={styles.transTitle}>{item.title}</span>
                                        <span class={styles.transCategory}>{item.category}</span>
                                    </div>
                                </div>
                                <span class={`${styles.transAmount} ${styles[item.type]}`}>
                                    {item.amount.toFixed(2)}
                                </span>
                            </div>
                        )}
                    </For>
                </div>
            </section>
        </div>
    );
};

const Onboarding: Component = () => {
    return (
        <div class={styles.onboarding}>
            <div class={styles.gradient} />

            <div class={styles.content}>
                <div class={styles.illustrationContainer}>
                    {/* Using a high-quality financial illustration */}
                    <img
                        src="https://img.freepik.com/free-vector/global-money-transfer-isometric-template_1284-52618.jpg?t=st=1741517400~exp=1741521000~hmac=6b93af9c9a6c9a6c9a6c9a6c9a6c9a6c9a6c9a6c9a6c9a6c9a6c9a6c9a6c9a6c"
                        alt="Global Money Transfer"
                        class={styles.illustration}
                    />
                </div>

                <div class={styles.textSection}>
                    <h1 class={styles.title}>Smart way <br /> to pay</h1>
                    <p class={styles.subtitle}>
                        The easiest and fastest way to <br /> manage your finance
                    </p>
                </div>

                <div class={styles.footer}>
                    <button class={styles.getStartedBtn}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};



export default Starpay;

