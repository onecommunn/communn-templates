// Card.tsx
import React from 'react';
import styles from './ImageCard.module.css';
import { ImageCardProps } from '../../../lib/types/type';


export const ImageCard: React.FC<ImageCardProps> = ({ src, alt, height = '300px', width = '100%' }) => {
    return (
        <div className={styles.imageCard} style={{ height, width }}>
            <img src={src} alt={alt} className={styles.image} />
        </div>
    );
};
