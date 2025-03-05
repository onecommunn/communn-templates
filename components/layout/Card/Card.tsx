// Card.tsx
import React, { ReactNode } from 'react';
import styles from './Card.module.css';
import { CardProps } from '../../../lib/types/type';


interface DynamicCardProps extends CardProps {
    children?: ReactNode; // Allows nested custom content
    backgroundColor?: string; // Optional background color for customization
}

export const Card: React.FC<DynamicCardProps> = ({
    title,
    subtitle,
    descriptions,
    email,
    image,
    alt,
    width = 'auto',
    height = 'auto',
    backgroundColor = '#fff',
    children
}) => {
    return (
        <div className={styles.card} style={{ width, height, backgroundColor }}>
            <div className={styles.imageContainer}>
                <img src={image} alt={alt} height={height} width={width} />
            </div>
            <div className={styles.textContainer}>
                {title && <h2>{title}</h2>}
                {subtitle && <p>{subtitle}</p>}
                {descriptions && <p>{descriptions}</p>}
                {email && <p>{email}</p>}
            </div>
            {children && <div className={styles.childrenContainer}>{children}</div>}
        </div>
    );
};
