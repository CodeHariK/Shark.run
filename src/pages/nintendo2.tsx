import { For, Component } from 'solid-js';
import styles from './nintendo2.module.css';

const Nintendo2: Component = () => {
    const techStacks = [
        { name: 'React Framework™', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxeSwjVGavNoSngKbxuY891P46R8SHAoqDZP_vIpKTlU8jbRlKNu4fZYKJhk2Kg_krMmmSSnCdoLfl2vR31qKvaWUxvbdJlUWbiUTnFqDhl3t5bzc_VRmNsVcJbtnPMbGMhZizBy9JTfbovzPe3SV4yNQWPnB1b1FIKkgQxM5OXfS824xAwlJyKmOKz4e02jLNt9Jh4JdCIP_yZnYeYl25oiJaBTLrfZx-cJkvPiv12DKdZVgD-lQl2z8e9qTFBPEq3QzTzGBTxoXH' },
        { name: 'Rust Systems™', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOK7U3nV-cj5BJEJ3R1MM3gASeyKilm2Xnkbgxj7KFcBRHB_WSfGfknvosel2Mm5Ms7kFxvCs1_G_MmZhpqEHFgaQEOcxfucc4mHy9ww2ZdWSvHM7pYgkP9jdNFgIjuWN-zH0sq5cIT-nYT4TauKWdVC8vGFRH9lkqwtKPHfKbSrzJk7InefrdZyN4vPo0M2heaGlN09-1pXXy40dPcb_469FV6ZgUYDNWuSo7AcioXUsrPha9hAz4nGike-WrEa_rn1w6EQE4SonI' },
        { name: 'Node.js Engine™', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7PLTzN7bA1L-WUGfyjFnhTo5DsLGfmQPX6Ai3QbWTyPMEJXPpdKNnPU0uKZBJmnHREMBLwTf6yqQwMTwt_OlhfFV_HeSWZ-QbI71PIGkOF4J4xRepufRY_bdj6l7b6pRh45IoL70Se3U0t56A4SJOx76JrC9QpMEm7ESO-5OlNu_3kF9ZO_eCwy9w4X_LadR6acOmMTxz-AusCrWvpPc3uh0MS1caPRybf3TTYf_41pTzJ-HuZUjxyeVkGZ3IHbm7XGirda8xzO_i' },
        { name: 'Python AI™', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOuxehLLGTQWAy4Pe1RNvNfp1WYGnbfzSRdeqpDKVwG_tVEIGNLeTJ87oZvM2CFiNqmPsIpC9Urj4SRZcrXTDLOc_e1UWUxh7TDrALiCj-YcAB88B69ulVUrztrWpPS07-U8WGg3RBsZQo5x6U87ZKv8qqhhWh6EljzhSQbp8qTeABwRxdulfJq3iLe8ppIDqr-AxW9cfsNiCFYBm_lT-x9GXkczCtlwF42Yy8HR6997J8LFQJnyEN475FyLIK2ipbjwXNyFtB0Ufl' },
        { name: 'Golang Micro™', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDopAPVRHaz7YE72caD--vX1jPURjvFU_WoexCjvUz9BYqhN5_j2ih7tT9Pg6rXWKEvI2HRg6FZQl9BNkwzSVrKX9OsSr2APljIE9CkzMeXr7vI4_MzSK0ty9lFtCozKhAmo3l53xV2QMfLjZJv8SYsLBfJMNqqSmAWRno7arxG2AFP7fP_spQNO3xKPR9c7Gi4bv9E05O213wYmeEmflzshgW9yDPXx-GEpNw6c_Pcp-OX1HE0G3DOd0QF5RbwIFdqQtyPlJK7DZUF' },
        { name: 'Docker Cloud™', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKlE4YbmO1lKrWg5QwplnRXO2RbFFJKvU0MWW2nd4j7vavdizPOc7liydGryQLk40JwvhEkiK9NOQjlJTExuXEo0jNhrKHuwVGgQ5ypDf-u_i5jS-ngcJQ6uTEHYArWPA5tgriZLQ6-5IV_9u4E_fypUEeThFvSnfY_NysDsrtQ2uNhCEBuezthCKjKVNANgEvtXic1tfLaZ0-qmzlP9sa2LoTkuNo4o-Y860_snawJSgQXJo6eAucpy1vrtAJPZkFvdOyzRkXHbL7' },
    ];

    const mainArticles = [
        {
            date: '03/15/26',
            title: 'Announcing the DevTools expansion pack for modern workflows',
            excerpt: 'We\'ve spent the last six months rebuilding our internal tooling suite from the ground up. Today, we\'re making the "Core Suite" open source for everyone to experience the speed of optimized V8 execution.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnMNiHpUzLIzfCkjIi4y6l1vyQSOla7suQ2ehBpqe8UBVhkMMJAJmEdbMaCrRbPHAuNaPIehhsAGh0TvRMoOQAF2SiFLpuGT4tfijTyyneA6-SOktVXK9vk-StYSxJUKQB22Qh_3lEhMR-NW9TyhwPYgNwAuwdq_0YBy3gvLK1LATI4_ncm33LyG66jots1MTZYSleEbBtRl67r3m5GH9EnlbYX1PnyJiFgyB_g6R3rYs-ZRJMuSbyj-lDrTu6s3g_UuWRsGxW9E_c',
            featured: true
        },
        {
            date: '03/12/26',
            title: 'Is TypeScript 6.0 really the "Golden Era" of type safety?',
            excerpt: 'The latest update to the world\'s favorite superset brings incredible performance gains to the compiler. In our latest benchmark tests, we saw project build times drop by nearly 40%...',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPnIqTWPZyfS5ATgVt-U364dHkPjxzd1As_tU0rAf7Ouci_s4XJ-qchxQ14aYFfPdll3jOX3asgSo2DKv-4EijtZJE1V42eN953_X-r-eX9uTG3xKGhBUqZMtcsIy_b67KLKyH0U280JCmiFVkTyXTLaTvy6l-x2ZinNUypI_sJmergfcPGrQPx_PoAmBtwRofLryy1uNb0Uol_FRtZMY3KpgRH1HE-tisA6ZMggLIrhFaR9PiRubKsFi7ZU-twRyh5lzdV1W9pAK4',
            featured: false
        }
    ];

    const subArticles = [
        { date: '03/10/26', title: '10 CSS tricks to master the modern layout engine', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOSz8wkY70vTqkOJbjRiI5be9nekC9CVkpsSoD99JQPL3ykYSWvIrpHdfUEBZe7WJkxfzSlJoFISaYKcKRYRQ7_Js-VfW-FRLYNmdlfq0X0NV4yqyJcr11zhykA8I1xIo-AVPzzFUerZGLpd_OYyuX9gb7ugZmUycFJx_fWqnvhnFx06_9qQoZizXM81Q6oJMbBmclpUJuXw70A_9wMpHHu2qJk222IfnHReKHkMrNIvz9_CzmrcnBHiAw0SXYBCIMdkdTBJUNUi-4' },
        { date: '03/08/26', title: 'Database migrations made easy with our new CLI tool', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6XKaX_kG152G-R08eN1ZMOxuEB7b9LbXVo-zhQ8hWe7fjJpLFhrXufaeqGPwXT-UNfHL4muFdNYaOdFT2TZZ_XOggFncQeWhr-G7H1eq33T1ZkVULa6jcNOR9Nh0pnshrOTwaJFRUXizsmBkBzy45FR-aYZELbwVJC4xP4btsUtj224QG8ixMhzNtoBjuw7uZ0cczkBFlgdmTRBiRNJmx5Jwz_j3bPQGDWj8sBoYDku8si4vLyM5miX77V7gUNyy_FVzFLlRmUqp9' },
        { date: '03/05/26', title: "A designer's guide to frontend performance optimization", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4r2XCt35VAwZMK60Eo9SsayepU5eHK9fBlZLIPCPFiH4NnXIHr3pvOK43W30Eg4e_Tk2zRoPZbQZUi_8uKt5cVTeN99Xdryq5lAh1MVk56Iaj_xdGlHKAVf8BQrR7TPCtvYtt9_pjV71Kj9V9UQaO10XojPPg9dwBosUJZlc4M_kVVnl8-lkVDpNwmzNq0C7XrL8wLtsorEpCxp7iYx_G6R14Vc5SJbS3J-HtZwcVF4GHveJ0wWe_zpkDSJW5w7CbBzbbC1vrdXj' },
        { date: '03/01/26', title: 'Monthly Recap: How we reached 1M developer downloads', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCipfRK8V7yE82F5bl0_HcGDXozkJhvVFr6DkadI7vjtpTu6lL3pgBrNFB--B9zwFG1JYyNiyaqBk4XTNTJCEk9mLOEoVbzi-_HoWIeUjcfWHOZR549TIDpGJXtMBrohMAUp9WJCwVsOLhP8YVjtmUdbkw5EjnZ9Gx7KSwbCIXPFaXaRvvYpUZ4zpwttjC2zPNMyIlcIi_HAxDx8WjkfxwpttdAe3h-u8PKcVaAn7OPNPAjA_r_a_tR70rfHniBJbmRWb2EB0ltfXXW' },
    ];

    return (
        <div class={styles["nintendo2-page-wrapper"]}>
            <header class={styles["header"]}>
                <div class={`${styles["container"]} ${styles["header-content"]}`}>
                    <div class={styles["header-left"]}>
                        <a href="#" class={styles["logo-box"]}>
                            <span class={styles["logo-text"]}>DEV</span>
                        </a>
                        <nav class={styles["nav-links"]}>
                            <a href="#" class={styles["nav-link"]}><span class="material-icons">explore</span> Explore</a>
                            <a href="#" class={`${styles["nav-link"]} ${styles["active"]}`}><span class="material-icons" style={{ color: "var(--primary)" }}>newspaper</span> News</a>
                            <a href="#" class={styles["nav-link"]}><span class="material-icons">code</span> Projects</a>
                        </nav>
                    </div>
                    <div class={styles["header-right"]}>
                        <button class={styles["icon-btn"]}>
                            <span class="material-icons">search</span>
                        </button>
                        <button class={styles["btn-primary"]}>
                            <span class="material-icons" style={{ "font-size": '14px' }}>login</span> Connect
                        </button>
                    </div>
                </div>
            </header>

            <section class={styles["container"]}>
                <div class={`${styles["hero"]} ${styles["nintendo-red-gradient"]}`}>
                    <img class={styles["hero-img"]} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ4ttvpSe2_sr-45OcgLi1CWUQ9UaCGyiDpb5KIGrjuCtliMIZCshoY7ioZKVgwYSqP1XnfTw5Lv1B13vNTiPtIsBKilzFOednjisMTYOYYFASpxksu521s954iKL5nra36tnWhrctuhdj4MwYRaAKnB7Os8kn4NpAsTwgReTfXMfcXOToXUo1y6Mpx4QqOyR4kaUQu05RiJt6ZqfBlrirRMns0cHF-syoakgR7b4Fwbm8LE4n6SuB5CX9_G3OJ7JBJRJAr8FhTsYW" alt="Tech Setup Banner" />
                    <div class={styles["hero-content"]}>
                        <span class={styles["hero-badge"]}>LATEST UPDATE</span>
                        <h1 class={styles["hero-title"]}>DEV LOG #42:<br />THE NEXT GEN ENGINE</h1>
                        <p class={styles["hero-desc"]}>Deep diving into the new architecture powering our upcoming high-performance web applications.</p>
                        <button class={styles["btn-white"]}>Read the Log</button>
                    </div>
                </div>
            </section>

            <section class={styles["container"]} style={{ "margin-top": '3rem' }}>
                <div class={styles["section-header"]}>
                    <h2 class={styles["section-title"]}>Browse by Stack</h2>
                    <a href="#" class={styles["view-all"]}>
                        View all stacks <span class="material-icons" style={{ "font-size": '14px' }}>chevron_right</span>
                    </a>
                </div>
                <div class={styles["stack-grid"]}>
                    <For each={techStacks}>
                        {(stack) => (
                            <a href="#" class={styles["stack-item"]}>
                                <div class={styles["stack-circle"]}>
                                    <img src={stack.img} alt={stack.name} />
                                </div>
                                <span class={styles["stack-name"]}>{stack.name}</span>
                            </a>
                        )}
                    </For>
                </div>
            </section>

            <main class={styles["container"]} style={{ "margin-top": '4rem', "margin-bottom": '6rem' }}>
                <h2 class={styles["section-title"]} style={{ "margin-bottom": '2rem', "border-bottom": '1px solid var(--border-light)', "padding-bottom": '1rem' }}>Latest News</h2>

                <div class={styles["news-main-grid"]}>
                    <For each={mainArticles}>
                        {(article) => (
                            <article class={styles["article-card"]}>
                                <div class={`${styles["article-img-box"]} ${styles["aspect-nintendo"]}`}>
                                    <img src={article.img} alt="Article thumbnail" />
                                    {article.featured && <span class={styles["hero-badge"]} style={{ position: 'absolute', top: '1rem', left: '1rem', margin: '0' }}>FEATURED</span>}
                                </div>
                                <div class={styles["article-meta"]}>
                                    <span class="material-icons" style={{ color: 'var(--primary)', "font-size": '14px' }}>square</span>
                                    <span class={styles["article-date"]}>{article.date}</span>
                                </div>
                                <h3 class={styles["article-title-lg"]}>{article.title}</h3>
                                <p class={styles["article-excerpt"]}>{article.excerpt}</p>
                                <a href="#" class={styles["read-more"]}>Read more</a>
                            </article>
                        )}
                    </For>
                </div>

                <div class={styles["news-sub-grid"]}>
                    <For each={subArticles}>
                        {(article) => (
                            <article class={styles["article-card"]}>
                                <div class={`${styles["article-img-box"]} ${styles["aspect-nintendo"]}`}>
                                    <img src={article.img} alt="Code snippet" />
                                </div>
                                <div class={styles["article-meta"]}>
                                    <span class="material-icons" style={{ color: 'var(--primary)', "font-size": '14px' }}>square</span>
                                    <span class={styles["article-date"]}>{article.date}</span>
                                </div>
                                <h4 class={styles["article-title-sm"]}>{article.title}</h4>
                                <a href="#" class={`${styles["read-more"]} ${styles["read-more-sm"]}`}>Read more</a>
                            </article>
                        )}
                    </For>
                </div>

                <div class={styles["btn-container"]}>
                    <button class={`${styles["btn-primary"]} ${styles["lg"]}`}>
                        <span class="material-icons">list</span> See all news articles
                    </button>
                </div>
            </main>

            <section class={styles["promo-section"]}>
                <div class={`${styles["container"]} ${styles["promo-wrapper"]}`}>
                    <div class={styles["promo-content"]}>
                        <div class={styles["promo-tag"]}>
                            <span class="material-icons" style={{ "font-size": '14px' }}>notifications</span> NEW RELEASES
                        </div>
                        <h2 class={styles["promo-title"]}>DEV UPDATES ON THE GO!</h2>
                        <p class={styles["promo-desc"]}>Download the DevLog mobile app to get notified on new tutorials, stack updates, and security patches.</p>
                        <div class={styles["promo-apps"]}>
                            <img class={styles["app-badge"]} src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9SSnbTOiKuOIZflPLQhRM9wHZnRnQlCKz1XR5RqZNRW1G-dZw4VS5vBgdG2VKcpfw4X2o_PwROjuVi7GrCmPnmivzcTZoNp8O2LPfXqx43pH1JOKaaqmGMwlTBKu-U8WtS2CFXBdaDFZp697WG3kJ3KfuQtaNNo-VmJGVDnznFJhsTUhRhDCOW4kZ0JU2LJN5WdSjRMX6a7Amj-acpLQ0kycFRcjpnle5t_vxURhaoSdScPNgM0FIPgr8hdqP8SycRW1ssnl8as1s" alt="App Store" />
                            <img class={styles["app-badge"]} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOM-U_cJ0dmlP2rtMrY7Uc0lODXtALyRn-xz6McsNhkSoJt26x4qm_NZGnU5SIqsXH9vfd8t6_iHkwWv1sKe0TFR4s7WKTteB6eHcAJ4B05FOPhqYSzLCsYukoK62Txczg_S5BGrsu7JON1bwVnlVlvH37MYFHX21tgjk2sXdGw3hz4NnpgY6gBEkAycxhjHhRzFuQmQE5_vljvos08r8Oz_mQYOuKqWAgrJDO3ZN9XJwB9qOz4l2hBdE8mFBMKJzLa81J0sV__CcX" alt="Google Play" />
                        </div>
                    </div>
                    <div class={styles["promo-phones"]}>
                        <img class={`${styles["phone-img"]} ${styles["phone-1"]}`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0PmcTJLzdY38G9I2fzBw-xPwx5J3aW2HsI4Su3AMOt6TE7CWFa-kynad6UWYNMnkhvgkiFDSBx_w0JF8oZQ1ir65D1-oUyzMXn2tM8KChFBlBJBcVsfIbSoSsK6n-yc8vLZPc0WyCESF1JGL1v_UHfyqTPVL7DtqHbu0BxLvKTwkNPRvpjFlsKnbC9WRxXSOe9Zdv9tmFwcLBsqgdsj-ZykmnVdI_EGLfWM84wWfIt66ro41IVVkFSo5ytNERBGSi2k_fpOsR8g1C" alt="Phone App" />
                        <img class={`${styles["phone-img"]} ${styles["phone-2"]}`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0GDuvNRuulPgsweJeFIAMfP5rTBEto5QzwCYNcfV3Qu-7KjpUb-LxHqY1poA0U3Nzue4KLrDv7pvqNMbQH67JHoGJHBoeFYhWRqKPwVtKhSbdO7u6hHVq7OIu6Bx_ebINPyH8LYtdoptxU7XX8vqll4gGxNdqORQ75SMn8M3X4HaAoKUrDkoKDg8MzEoV-xIztjWQyHQparWDBagOE4YFV8Y2Dw3C9JTnnefVQKJGj285ytHE0G3npU9O1XzCAYWcYbBG8fUVrW6A" alt="Phone App 2" />
                    </div>
                </div>
                <span class={`material-icons ${styles["promo-bg-icon"]}`}>code</span>
            </section>

            <footer class={styles["footer"]}>
                <div class={styles["container"]}>
                    <div class={styles["footer-top"]}>
                        <div class={styles["footer-logo"]}>
                            <span>Developer Hub</span>
                        </div>
                        <div class={styles["footer-social"]}>
                            <a href="#"><span class="material-icons">facebook</span></a>
                            <a href="#"><span class="material-icons">terminal</span></a>
                            <a href="#"><span class="material-icons">public</span></a>
                            <a href="#"><span class="material-icons">smart_display</span></a>
                        </div>
                    </div>

                    <div class={styles["footer-grid"]}>
                        <div class={styles["footer-col"]}>
                            <h5>About Hub</h5>
                            <ul class={styles["footer-list"]}>
                                <li><a href="#">Our Mission</a></li>
                                <li><a href="#">Core Team</a></li>
                                <li><a href="#">Press Kit</a></li>
                                <li><a href="#">Brand Guidelines</a></li>
                            </ul>
                        </div>
                        <div class={styles["footer-col"]}>
                            <h5>Resources</h5>
                            <ul class={styles["footer-list"]}>
                                <li><a href="#">API Documentation</a></li>
                                <li><a href="#">Status Page</a></li>
                                <li><a href="#">Security Updates</a></li>
                                <li><a href="#">Community Discord</a></li>
                            </ul>
                        </div>
                        <div class={styles["footer-col"]}>
                            <h5>Stack Library</h5>
                            <ul class={styles["footer-list"]}>
                                <li><a href="#">Frontend Kits</a></li>
                                <li><a href="#">Backend Modules</a></li>
                                <li><a href="#">Database Schemas</a></li>
                                <li><a href="#">DevOps Scripts</a></li>
                            </ul>
                        </div>
                        <div class={styles["footer-col"]}>
                            <h5>Support</h5>
                            <ul class={styles["footer-list"]}>
                                <li><a href="#">Contact Support</a></li>
                                <li><a href="#">Bug Bounty</a></li>
                                <li><a href="#">Sponsorships</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class={styles["footer-bottom"]}>
                        <p>© 2024 Developer Hub Inc. Portfolio inspired by high-energy design systems.</p>
                        <div class={styles["footer-legal"]}>
                            <a href="#">Contact us</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#" class={styles["lang"]}><span class="material-icons">language</span> English (US)</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Nintendo2;