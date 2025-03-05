import React from 'react';
import styles from './TherapistCard.module.css';
import { TherapistCardProps } from '../../../lib/types/type';

export const TherapistCard: React.FC<TherapistCardProps> = ({ name, title, image, isFeatured, onClick }) => {
    return (
        <div 
            className={`${styles.therapistCard} ${isFeatured ? styles.featured : ''}`} 
            onClick={onClick}
        >
            <img 
                src={image || "https://placehold.co/300x300"} 
                alt={`Profile of ${name}`} 
                className={styles.therapistImage} 
            />
            {isFeatured && <span className={styles.featuredBadge}>Featured</span>}

            <h3 className={styles.therapistName}>{name}</h3>
            <p className={styles.therapistRole}>{title}</p>
        </div>
    );
};
