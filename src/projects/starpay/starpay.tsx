import { Component } from 'solid-js';
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


export default Starpay;

