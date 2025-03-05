import React from 'react';
import styles from './hero.module.css';
import { HeroProps } from '../../lib/types/type';

export const Hero: React.FC<HeroProps> = ({ title, backgroundColor }) => {
    return (
        <>
            <section className={styles.heroSection} style={{ backgroundColor: backgroundColor }}>
                <h1 className={styles.heroTitle}>{title}</h1>
                <p className={styles.breadcrumb}>Home • {title}</p>
                <div className={styles.illustrationContainer}>
                
                    <img
                        src="/logo/left.svg"
                        alt="Leaf Illustration 1"
                        className={styles.illustration1}
                    />
                    <img
                        src="/logo/right.svg"
                        alt="Leaf Illustration 2"
                        className={styles.illustration2}
                    />
                </div>
            </section>
        </>
    );
};