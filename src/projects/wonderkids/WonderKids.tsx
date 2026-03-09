import { Component } from 'solid-js';
import styles from './WonderKids.module.css';
import { ThemeToggle } from 'solgaleo';
import ProjectHeader from '../../components/ProjectHeader';

const WonderKids: Component = () => {
    const imgDog = "https://static.vecteezy.com/system/resources/previews/002/047/580/large_2x/animal-illustration-with-cute-little-dog-vector.jpg";
    const imgPuzzle = "https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-bright-vibrant-violet-isolated-illustration_335657-580.jpg?t=st=1772980606~exp=1772984206~hmac=0c8681061242d9341925c2f507db73adc1d2af05f69e75ca692d88eb42361cff&w=1060";

    return (
        <div class={styles.pageWrapper}>
            <ProjectHeader />

            {/* HEADER */}
            <div class={styles.container}>
                <header class={styles.header}>
                    <a href="#" class={styles.logo}>
                        <svg class={styles.logoIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" />
                        </svg>
                        WonderKids
                    </a>
                    <nav class={styles.nav}>
                        <a href="#" class={`${styles.navLink} ${styles.navLinkActive}`}>Home</a>
                        <a href="#" class={styles.navLink}>Shop</a>
                        <a href="#" class={styles.navLink}>About Us</a>
                        <a href="#" class={styles.navLink}>Contact</a>
                    </nav>
                    <div class={styles.headerActions}>

                        {/* Theme Toggle Button */}
                        <ThemeToggle />

                        <a href="#" class={styles.signIn}>Sign In</a>
                        <button class={styles.contactBtn}>
                            Contact Us
                            <div class={styles.btnIconBox}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </div>
                        </button>
                    </div>
                </header>
            </div>

            {/* HERO SECTION */}
            <div class={styles.container}>
                <section class={styles.hero}>
                    <div class={styles.heroImageLeft} style={{ "background-image": `url('${imgDog}')` }}></div>
                    <div class={styles.heroImageRight} style={{ "background-image": `url('${imgPuzzle}')` }}></div>

                    <h1 class={styles.heroTitle}>
                        The best place to <span class={`${styles.fontAccent} ${styles.textPrimary}`}>learn</span> and <span class={`${styles.fontAccent} ${styles.textYellow}`}>play</span> for kids
                    </h1>
                    <p class={styles.heroDesc}>
                        Discover thousands of fun and interactive learning activities to support your child's growth and learning process.
                    </p>
                    <button class={styles.heroBtn}>
                        Get started
                        <div class={styles.heroBtnIconBox}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </div>
                    </button>
                </section>
            </div>

            {/* INTERACTIVE FEATURES */}
            <div class={styles.container}>
                <section class={styles.features}>
                    <div class={styles.tagsWrap}>
                        <span class={`${styles.tag} ${styles.tagYellow}`}>#enjoy</span>
                        <span class={`${styles.tag} ${styles.tagPurple}`}>#funny</span>
                        <span class={`${styles.tag} ${styles.tagDark}`}>#happy</span>
                    </div>
                    <h2 class={styles.sectionTitle}>
                        Our <span class={`${styles.fontAccent} ${styles.textPrimary}`}>interactive</span> features
                    </h2>

                    <div class={styles.featureGrid}>
                        <div class={`${styles.featureCard} ${styles.featureCardPurple}`}>
                            <div class={styles.cardIconBox}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <div>
                                <h3 class={styles.featureTitle}>Fun <span class={styles.fontAccent}>Quiz</span></h3>
                                <p class={styles.featureDesc}>Test your understanding with a short but fun quizzes!</p>
                            </div>
                        </div>

                        <div class={`${styles.featureCard} ${styles.featureCardDark}`}>
                            <div class={styles.cardIconBox}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                                    <path d="M2 2l7.586 7.586"></path>
                                    <circle cx="11" cy="11" r="2"></circle>
                                </svg>
                            </div>
                            <div>
                                <h3 class={styles.featureTitle}>Creative <span class={styles.fontAccent}>Activities</span></h3>
                                <p class={styles.featureDesc}>Discover enjoyable activities such as coloring, crafting, and science.</p>
                            </div>
                        </div>

                        <div class={`${styles.featureCard} ${styles.featureCardYellow}`}>
                            <div class={styles.cardIconBox}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="6" y1="12" x2="10" y2="12"></line>
                                    <line x1="8" y1="10" x2="8" y2="14"></line>
                                    <line x1="15" y1="13" x2="15.01" y2="13"></line>
                                    <line x1="18" y1="11" x2="18.01" y2="11"></line>
                                    <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                                </svg>
                            </div>
                            <div>
                                <h3 class={styles.featureTitle}>Learn with <span class={styles.fontAccent}>Games</span></h3>
                                <p class={styles.featureDesc}>Learn something new while your kids playing games!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* MATERIALS SECTION */}
            <div class={styles.container}>
                <section class={styles.materials}>
                    <div class={styles.materialsContent}>
                        <h2 class={styles.materialsText}>
                            The learning materials provided are <span class={`${styles.fontAccent} ${styles.textPrimary}`}>enjoyable</span> for children
                        </h2>
                        <p class={styles.materialsDesc}>
                            Don’t worry! Your children will be having a fun time while learning with our materials that are easy to understand.
                        </p>
                        <button class={styles.contactBtn}>
                            Learn More
                            <div class={styles.btnIconBox}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div class={styles.materialsVisuals}>
                        <div class={styles.blobYellow}></div>
                        <div class={styles.blobPurple}></div>
                    </div>
                </section>
            </div>

            {/* TEAM SECTION */}
            <section class={styles.teamSection}>
                <div class={styles.container}>
                    <h2 class={styles.teamIntro}>
                        We aim to help children <span class={`${styles.fontAccent} ${styles.textYellow}`}>discover the joy</span> of <span class={`${styles.fontAccent} ${styles.textYellow}`}>creative</span> learning and grow into well-rounded individuals.
                    </h2>
                    <div class={styles.teamGrid}>
                        {[
                            { name: "Kristin Watson", role: "Science Teacher" },
                            { name: "Jenny Wilson", role: "Drawing Teacher" },
                            { name: "Jacob Jones", role: "Math Teacher" },
                            { name: "Savannah Nguyen", role: "Reading Teacher" }
                        ].map(member => (
                            <div class={styles.teamMember}>
                                <img src={imgDog} alt={member.name} class={styles.memberImg} />
                                <div>
                                    <h4 class={styles.memberName}>{member.name}</h4>
                                    <p class={styles.memberRole}>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BLOG SECTION */}
            <div class={styles.container}>
                <section class={styles.blog}>
                    <div class={styles.blogHeader}>
                        <h2 class={styles.sectionTitle} style={{ margin: 0 }}>
                            Read our <span class={`${styles.fontAccent} ${styles.textPrimary}`}>blog</span>
                        </h2>
                        <button class={styles.contactBtn}>
                            See More
                            <div class={styles.btnIconBox}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </div>
                        </button>
                    </div>

                    <div class={styles.blogGrid}>
                        {[
                            { title: "Learning with Games? Why not?", desc: "Embrace the joy of games to enhance your learning experience!" },
                            { title: "10 Learning Game Ideas", desc: "10 ideas for learning with for your kids to have fun." },
                            { title: "Fun Activities for Kids", desc: "Want to do something outside from your laptop? Here are our recommendations." }
                        ].map(post => (
                            <div class={styles.blogCard}>
                                <img src={imgPuzzle} alt="Blog Post" class={styles.blogImg} />
                                <div class={styles.blogContent}>
                                    <h3 class={styles.blogTitle}>{post.title}</h3>
                                    <p class={styles.blogDesc}>{post.desc}</p>
                                    <a href="#" class={styles.readMore}>
                                        Read More
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* FAQ SECTION */}
            <div class={styles.container}>
                <section class={styles.faq}>
                    <h2 class={styles.faqTitle}>
                        Frequently <span class={`${styles.fontAccent} ${styles.textPrimary}`}>asked</span> questions
                    </h2>
                    <div class={styles.faqList}>
                        {[
                            "What makes WonderKids different from other education platforms?",
                            "How can I access WonderKids?",
                            "What about the security of children's data using this platform?"
                        ].map(q => (
                            <div class={styles.faqItem}>
                                <span>{q}</span>
                                <div class={styles.faqIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* NEWSLETTER SECTION */}
            <div class={styles.container}>
                <section class={styles.newsletter}>
                    <h2 class={styles.newsTitle}>
                        Join our <br />
                        <span class={`${styles.fontAccent} ${styles.textYellow}`}>WonderKids</span> community now
                    </h2>
                    <div class={styles.newsForm}>
                        <input type="text" placeholder="Name" class={styles.newsInput} />
                        <input type="email" placeholder="Email or phone" class={styles.newsInput} />
                        <button class={styles.newsBtn}>Submit</button>
                    </div>
                </section>
            </div>

            {/* FOOTER */}
            <div class={styles.container}>
                <footer class={styles.footer}>
                    <div class={styles.footerInner}>
                        <div class={styles.footerLogo}>
                            <svg class={styles.logoIcon} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" />
                            </svg>
                            WonderKids
                        </div>

                        <div class={styles.footerLinks}>
                            <div class={styles.linkCol}>
                                <a href="#">Home</a>
                                <a href="#">App</a>
                                <a href="#">About</a>
                                <a href="#">People</a>
                            </div>
                            <div class={styles.linkCol}>
                                <a href="#">For school</a>
                                <a href="#">Brain training</a>
                                <a href="#">E-learning</a>
                                <a href="#">Online modules</a>
                            </div>
                            <div class={styles.linkCol}>
                                <a href="#">Media</a>
                                <a href="#">Support Us</a>
                                <a href="#">Contact</a>
                                <a href="#">Places</a>
                            </div>
                        </div>

                        <div class={styles.socials}>
                            {/* Instagram */}
                            <a href="#" class={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" class={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            {/* Twitter */}
                            <a href="#" class={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    );
};

export default WonderKids;