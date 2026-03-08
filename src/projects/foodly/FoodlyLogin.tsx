import { Component, createSignal } from 'solid-js';
import styles from './FoodlyLogin.module.css';

const FoodlyLogin: Component = () => {
    const [showPassword, setShowPassword] = createSignal(false);


    const togglePasswordVisibility = (e: Event) => {
        e.preventDefault();
        setShowPassword(!showPassword());
    };

    return (
        <div class={styles.appWrapper}>
            {/* Mobile Device Container (Exact iPhone 16 Dimensions: 393x852) */}
            <main class={styles.deviceContainer}>

                {/* iOS Status Bar */}
                <header class={styles.statusBar}>
                    <span class={styles.timeText}>9:41</span>
                    <div class={styles.statusIcons}>
                        <svg class={styles.iconSmall} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21l-12-18h24z"></path>
                        </svg>
                        <svg class={styles.iconSmall} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.5 20h1v1h-1zM11.5 18h1v1h-1zM11.5 16h1v1h-1zM11.5 14h1v1h-1z"></path>
                        </svg>
                        <div class={styles.batteryWrap}>
                            <div class={styles.batteryLevel}></div>
                        </div>
                    </div>
                </header>

                {/* Scrollable Main Area */}
                <div class={styles.scrollArea}>

                    {/* Header */}
                    <div class={styles.header}>
                        <div class={styles.backBtn}>
                            <span class={styles.materialIcon}>arrow_back</span>
                        </div>
                        <h2 class={styles.logoTitle}>Foodly</h2>
                    </div>

                    {/* Title Section */}
                    <div class={styles.titleSection}>
                        <h1 class={styles.mainHeading}>Welcome Back</h1>
                        <p class={styles.subHeading}>Enter your credentials to continue</p>
                    </div>

                    {/* Form Area */}
                    <div class={styles.formSection}>
                        <label class={styles.inputGroup}>
                            <p class={styles.inputLabel}>Email Address</p>
                            <input
                                class={styles.inputField}
                                placeholder="name@example.com"
                                type="email"
                            />
                        </label>

                        <label class={styles.inputGroup}>
                            <p class={styles.inputLabel}>Password</p>
                            <div class={styles.inputWrapper}>
                                <input
                                    class={styles.inputField}
                                    placeholder="Enter your password"
                                    type={showPassword() ? "text" : "password"}
                                />
                                <button
                                    class={styles.visibilityBtn}
                                    onClick={togglePasswordVisibility}
                                    type="button"
                                    aria-label="Toggle password visibility"
                                >
                                    <span class={styles.materialIcon}>
                                        {showPassword() ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            </div>
                        </label>

                        <div class={styles.forgotLinkWrap}>
                            <a class={styles.forgotLink} href="#">Forgot Password?</a>
                        </div>
                    </div>

                    {/* Login Button */}
                    <div class={styles.loginBtnWrap}>
                        <button class={styles.loginBtn}>
                            Login
                        </button>
                    </div>

                    {/* Divider */}
                    <div class={styles.dividerWrap}>
                        <div class={styles.dividerLine}></div>
                        <span class={styles.dividerText}>Or login with</span>
                        <div class={styles.dividerLine}></div>
                    </div>

                    {/* Social Login */}
                    <div class={styles.socialGrid}>
                        <button class={styles.socialBtn}>
                            <img
                                alt="Google Logo"
                                class={styles.socialIcon}
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA1TxxgveZv-43q-sFHpErf8aLaYBMscpn_PrMh1gwvSPXe2qN5I1OdRFAC_q_98DkvQnALbcz07P9O1ugKrx_skVXANmE3GqUQ2ctrr3vngFW7GQGQdD7D0d0zsAgDK4UCqG8YMMTORRqoWFWCMMgdfLgYUUTKSHStLB7myr1YBJQ0I4gGbzbXcZ4f94HVfpatTmokelQ39wRdTNRiPxKONw4WwLGCcFIo5PRgUtT1s0xs43g_J2ti-qGs7-gRNG0IhBSqPI3ipMB"
                            />
                            <span class={styles.socialText}>Google</span>
                        </button>
                        <button class={styles.socialBtn}>
                            <span class={`${styles.materialIcon} ${styles.socialIconText}`}>ios</span>
                            <span class={styles.socialText}>Apple</span>
                        </button>
                    </div>

                    {/* Footer */}
                    <div class={styles.footer}>
                        <p class={styles.footerText}>
                            Don't have an account?
                            <a class={styles.signUpLink} href="#">Sign Up</a>
                        </p>
                    </div>

                </div>

                {/* iOS Home Indicator */}
                <div class={styles.homeIndicatorWrap}>
                    <div class={styles.homeIndicator}></div>
                </div>

            </main>
        </div>
    );
};

export default FoodlyLogin;