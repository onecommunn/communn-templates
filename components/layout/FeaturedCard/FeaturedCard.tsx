import React from 'react';
import styles from './FeaturedCard.module.css';
import { FeaturedCardProps } from '../../../lib/types/type';


export const FeaturedCard: React.FC<FeaturedCardProps> = ({ name, title, description, image, socialLinks }) => {
    return (
        <div className={styles.featuredCard}>
            <div className={styles.illustration1}>
                <img className={styles.illustration1} src="./logo/Frame.svg" alt="" />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.imageContainer}>
                    <img src={image} alt={`Profile of ${name}`} className={styles.profileImage} />
                </div>
                <div className={styles.details}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.role}>{title}</p>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.socialIcons}>
                        <i className={styles.icon}>{socialLinks.fb}</i>
                        <i className={styles.icon}>{socialLinks.tw}</i>
                        <i className={styles.icon}>{socialLinks.yu}</i>
                        <i className={styles.icon}>{socialLinks.in}</i>
                    </div>
                    <button className={styles.chatButton}>Let's Chat</button>
                </div>
            </div>
            <div className={styles.illustration2}>
                <img className={styles.illustration2} src="./logo/Frame2.svg" alt="" />
            </div>
        </div>
    );
};
