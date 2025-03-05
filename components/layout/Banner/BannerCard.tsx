// Banner.tsx
import React from 'react';
import styles from './BannerCard.module.css';
import { Banner } from '../../../lib/types/type';


const BannerCard: React.FC<Banner> = ({ title, subtitle, buttonText, description, link }) => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.subtitle}>{subtitle}</h2>
                    {link ? (
                        <a href={link} className={styles.button}>
                            {buttonText}     <svg
                                width="25"
                                height="9"
                                viewBox="0 0 25 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ paddingLeft: "5px" }}
                            >
                                <path
                                    d="M24.3536 4.85355C24.5488 4.65829 24.5488 4.34171 24.3536 4.14645L21.1716 0.964466C20.9763 0.769204 20.6597 0.769204 20.4645 0.964466C20.2692 1.15973 20.2692 1.47631 20.4645 1.67157L23.2929 4.5L20.4645 7.32843C20.2692 7.52369 20.2692 7.84027 20.4645 8.03553C20.6597 8.2308 20.9763 8.2308 21.1716 8.03553L24.3536 4.85355ZM0 5H24V4H0V5Z"
                                    fill="#27282C"
                                />
                            </svg>
                        </a>
                    ) : (
                        <button className={styles.button}>{buttonText}     <svg
                            width="25"
                            height="9"
                            viewBox="0 0 25 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ paddingLeft: "5px" }}
                        >
                            <path
                                d="M24.3536 4.85355C24.5488 4.65829 24.5488 4.34171 24.3536 4.14645L21.1716 0.964466C20.9763 0.769204 20.6597 0.769204 20.4645 0.964466C20.2692 1.15973 20.2692 1.47631 20.4645 1.67157L23.2929 4.5L20.4645 7.32843C20.2692 7.52369 20.2692 7.84027 20.4645 8.03553C20.6597 8.2308 20.9763 8.2308 21.1716 8.03553L24.3536 4.85355ZM0 5H24V4H0V5Z"
                                fill="#27282C"
                                className={styles.path}
                            />
                        </svg></button>
                    )}
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.imagePlaceholder}></div>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;
