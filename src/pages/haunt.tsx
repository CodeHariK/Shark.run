import { createSignal, onMount } from "solid-js";
import "./haunt.css";

import { ThemeToggle } from "solgaleo";

function Haunt() {

    return (
        <>
            <div class="theme-toggle">
                <ThemeToggle />
            </div>

            <main class="main-card">
                {/* Top Section */}
                <div class="top-section">
                    <div class="header-wrapper">
                        <span class="material-icons logo-icon">flutter_dash</span>
                        <span class="logo-text">mysterylogo</span>
                    </div>

                    <div class="web-dec-top">
                        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 200 200">
                            <path d="M200 0 L100 100 M200 50 L120 80 M150 0 L120 80 M100 0 L100 60"></path>
                            <path d="M120 80 Q 140 60 160 70 Q 180 40 200 50" fill="none"></path>
                            <path d="M100 60 Q 120 40 150 40" fill="none"></path>
                            <path d="M120 80 Q 110 70 100 60" fill="none"></path>
                        </svg>
                    </div>

                    <div class="hero-grid">
                        <div>
                            <h1 class="hero-title">
                                Happy <br />
                                <span>Halloween</span>
                            </h1>
                        </div>
                        <div class="hero-img-wrapper">
                            <div class="float-animation">
                                <img
                                    alt="Cartoon vampire character floating in the air wearing a cape"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7cTtuU_ZfmwJgbDbXvB-XWV7ajuwb-vdUhocD5hWtvfix7JgB16BeKzzshAXFyGqtEeFcx4n1ZUF6ro6k41tZ6AX5AwoRdK4Y4I1RFfRNnb9vanJWCUL14IAMrcunaiepcvKO8oYHEkqSi9FUSeOdLkaoqQ_REPeoejL7gaNWbHJlU8ka-cbQ2l2aI7mPyTJMYgJ0mZR6OCq7CskXonqU832XmJYm3Qtov3Fc7BB-1TvnQJp_CEsVqXoeSs-CVgBrb_lnMxNR1Y4w"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div class="middle-section">
                    <div class="middle-floating-icons">
                        <span class="material-icons icon-1">east</span>
                        <span class="material-icons icon-2">flutter_dash</span>
                        <span class="material-icons icon-3">flutter_dash</span>
                    </div>

                    <div class="date-badge">
                        <span class="date-text">31 October 2024</span>
                    </div>

                    <div class="middle-grid">
                        <div class="middle-text-col">
                            <h2 class="middle-title">Local, Street, City</h2>
                            <p class="middle-subtitle">Start at 10pm.</p>
                            <p class="middle-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div class="hidden sm:block"></div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div class="bottom-section">
                    <div class="bottom-grid">
                        <div class="bottom-text-col">
                            <h3 class="bottom-title">Eat, Drink, & Scared</h3>
                            <p class="bottom-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div class="features-list">
                                <div class="feature-item">
                                    <span class="material-icons feature-icon">fingerprint</span>
                                    <span class="feature-text">Lorem Ipsum</span>
                                </div>
                                <div class="feature-item">
                                    <span class="material-icons feature-icon">fingerprint</span>
                                    <span class="feature-text">Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>

                        <div class="bottom-img-wrapper">
                            <img
                                class="skull-img"
                                alt="Cute cartoon skull icon"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCtp7AkSg_GUrVxqY6m7j0LLdBpQZ11VlhEvLOshC0bq_boF-XLeKMIROlWkxrGKW6wZaD3sVmJfZdpWItqHVZsrKfpmONoI6EIVOt_XZKGbVHKZUHJ8dS7RqSAvL_zZ25mYWqnkcLhy7StGAiBsOMVU9_V4IgME-kqMwg8xYY33-WaUoTGykFnJ2bc1tgKd79CscuSqupevUyaobeXJvC2-3w2nMFckq0C6-IiOe0IkO9R8j44yldno0kAp-opKrmLbqNBXKk2_zK"
                            />
                            <div class="web-dec-bottom">
                                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 200 200">
                                    <path d="M200 0 L100 100 M200 50 L120 80 M150 0 L120 80 M100 0 L100 60"></path>
                                    <path d="M120 80 Q 140 60 160 70 Q 180 40 200 50" fill="none"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer class="footer">
                    <div class="footer-left">
                        <span class="material-icons footer-icon">language</span>
                        <span>loremipsum.com</span>
                    </div>
                    <div class="footer-right">
                        <a href="#"><i class="material-icons footer-icon">play_circle</i></a>
                        <a href="#"><i class="material-icons footer-icon">flutter_dash</i></a>
                        <a href="#"><i class="material-icons footer-icon">camera_alt</i></a>
                        <span class="footer-brand">Lorem Ipsum</span>
                    </div>
                </footer>
            </main>
        </>
    );
}

export default Haunt;