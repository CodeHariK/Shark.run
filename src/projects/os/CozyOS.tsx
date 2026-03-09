import { createSignal, onMount, onCleanup, Component } from 'solid-js';
import styles from './CozyOS.module.css';
import ProjectHeader from '../../components/ProjectHeader';

const CozyOS: Component = () => {
    const [time, setTime] = createSignal<string>('12:00 PM');
    const [date, setDate] = createSignal<string>('Friday, Oct 24');

    // Track last tap for mobile double-tap logic
    let lastTap = 0;

    const updateClock = () => {
        const now = new Date();
        setTime(
            now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
            })
        );
        setDate(
            now.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric',
            })
        );
    };

    onMount(() => {
        updateClock();
        const intervalId = setInterval(updateClock, 1000);
        onCleanup(() => clearInterval(intervalId));
    });

    const handleInteraction = (label: string) => {
        alert(`Opening ${label}...`);
    };

    const handleTouchEnd = (label: string) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 500 && tapLength > 0) {
            handleInteraction(label);
        }
        lastTap = currentTime;
    };

    return (
        <main class={styles.desktopContainer}>
            <ProjectHeader />

            {/* Desktop Icons Area */}
            <section class={styles.desktopIcons} aria-label="desktop-file-system">

                {/* Journal Icon */}
                <button
                    class={styles.desktopIconBtn}
                    onDblClick={() => handleInteraction('Journal')}
                    onTouchEnd={() => handleTouchEnd('Journal')}
                >
                    <a href="/cozyfeed">
                        <div class={`${styles.iconBox} ${styles.journalBox}`}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            </svg>
                        </div>
                    </a>
                    <span class={styles.iconLabel}>Journal</span>
                </button>

                {/* Library Icon */}
                <button
                    class={styles.desktopIconBtn}
                    onDblClick={() => handleInteraction('Library')}
                    onTouchEnd={() => handleTouchEnd('Library')}
                >
                    <div class={`${styles.iconBox} ${styles.libraryBox}`}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <span class={styles.iconLabel}>Library</span>
                </button>

                {/* Studio Icon */}
                <button
                    class={styles.desktopIconBtn}
                    onDblClick={() => handleInteraction('Studio')}
                    onTouchEnd={() => handleTouchEnd('Studio')}
                >
                    <div class={`${styles.iconBox} ${styles.studioBox}`}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                        </svg>
                    </div>
                    <span class={styles.iconLabel}>Studio</span>
                </button>
            </section>

            {/* Floating Taskbar */}
            <nav class={styles.taskbar} aria-label="floating-taskbar">
                <div class={`${styles.glassEffect} ${styles.taskbarInner}`}>

                    {/* File Explorer */}
                    <div class={styles.taskbarIconWrapper} title="Files">
                        <div class={`${styles.taskbarIcon} ${styles.filesIcon}`}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                        </div>
                        <div class={styles.taskbarTooltip}>Files</div>
                    </div>

                    {/* Browser */}
                    <div class={styles.taskbarIconWrapper} title="Browser">
                        <div class={`${styles.taskbarIcon} ${styles.webIcon}`}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                            </svg>
                        </div>
                        <div class={styles.taskbarTooltip}>Web</div>
                    </div>

                    {/* Music Player */}
                    <div class={styles.taskbarIconWrapper} title="Music">
                        <div class={`${styles.taskbarIcon} ${styles.audioIcon}`}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                            </svg>
                        </div>
                        <div class={styles.taskbarTooltip}>Audio</div>
                    </div>

                    {/* Separator */}
                    <div class={styles.taskbarSeparator}></div>

                    {/* Settings */}
                    <div class={styles.taskbarIconWrapper} title="Settings">
                        <div class={`${styles.taskbarIcon} ${styles.systemIcon}`}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <div class={styles.taskbarTooltip}>System</div>
                    </div>
                </div>
            </nav>

            {/* System Tray */}
            <aside class={styles.systemTray} aria-label="system-tray">

                {/* Weather Widget */}
                <div class={`${styles.glassEffect} ${styles.weatherWidget}`}>
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                    </svg>
                    <span class={styles.weatherTemp}>72°F</span>
                </div>

                {/* Clock */}
                <div class={styles.clockContainer}>
                    <span class={styles.timeText}>{time()}</span>
                    <span class={styles.dateText}>{date()}</span>
                </div>
            </aside>
        </main>
    );
};

export default CozyOS;