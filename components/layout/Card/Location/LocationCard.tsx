import React, { useState } from 'react';
import { LocationCardProps, LocationCardPropsArray } from '../../../../lib/types/type';
import styles from './LocationCard.module.css';




export const LocationCard: React.FC<LocationCardPropsArray> = ({ contactInfo, onLocationSelect }) => {
    const [selectedLocationIndex, setSelectedLocationIndex] = useState<number | null>(null);

    const handleLocationClick = (location: LocationCardProps, index: number) => {
        setSelectedLocationIndex(index);
        onLocationSelect(location); // Send selected location back to parent
    };

    return (
        <div className={styles.locationContainer}>
            {contactInfo.map((location, index) => (
                <div
                    key={index}
                    className={`${styles.location} ${selectedLocationIndex === index ? styles.selected : ''}`}
                    onClick={() => handleLocationClick(location, index)}
                    style={{
                        backgroundImage: selectedLocationIndex === index ? 'url(./logo/Selector.svg)' : 'none',
                    }}
                >
                    <div className={styles.card} style={{ width: 'auto', height: 'auto' }}>
                        <div className={styles.textContainer}>
                            {location.city && <h2>{location.city}</h2>}
                            {location.address && <p>{location.address}</p>}
                            {location.pinCode && <p>{location.pinCode}</p>}
                            {location.phone && <p>{location.phone}</p>}
                            {location.email && <p>{location.email}</p>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
