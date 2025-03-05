// AboutSection.tsx
import React from 'react';
import styles from './AboutSection.module.css';
import { AboutSectionProps } from '../../../lib/types/type';



const featuresArray: AboutSectionProps['features'] = [
    {
        icon: './logo/stress-relife.svg', // Replace with the actual path
        title: 'Stress Relief',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        icon: './logo/calm-mind.svg', // Replace with the actual path
        title: 'Calm Mind',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        icon: './logo/life-style.svg', // Replace with the actual path
        title: 'Life Style',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        icon: './logo/healty-body.svg', // Replace with the actual path
        title: 'Healthy Body',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
];

export const AboutSection: React.FC<AboutSectionProps> = ({heading, subHeading, features = featuresArray, buttonText}) => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.textSection}>
                <h3 className={styles.h3}>{subHeading}</h3>
                <h2 className={styles.h2}>{heading}</h2>
                <div className={styles.features}>
                    {features.map((feature, index) => (
                        <div className={styles.feature} key={index}>
                            <img src={feature.icon} alt={feature.title} className={styles.icon} />
                            <div>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.appointmentButton}>{buttonText}</button>
            </div>
            <div className={styles.graphicSection}>
                <div className={styles.circleTop}>
                    <div className={styles.playButton}></div>
                </div>
                <div className={styles.leafIllustartions}>
                    <img src="./logo/leaf.svg" alt="" />
                </div>
            </div>

        </section>
    );
};
