import React from 'react';
import styles from './TherapistGrid.module.css';
import { TherapistCard } from '../TherapistCard/TherapistCard';
import { TherapistProps } from '../../../lib/types/type';

export const TherapistGrid: React.FC<TherapistProps> = ({ Therapist, onSelectTherapist }) => {
    return (
        <div className={styles.therapistGrid}>
            {Therapist.map((therapist, index) => (
                <TherapistCard
                    key={index}
                    name={therapist.name}
                    title={therapist.title!}
                    image={therapist.image!}
                    isFeatured={therapist.isFeatured || false}
                    onClick={() => onSelectTherapist?.(therapist)}
                />
            ))}
        </div>
    );
};
