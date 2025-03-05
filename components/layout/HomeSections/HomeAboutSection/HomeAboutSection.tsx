// AboutSection.tsx

import React from 'react';
import styles from './HomeAboutSection.module.css';
import { HomeAboutSectionProps } from '../../../../lib/types/type'

export const HomeAboutSection: React.FC<HomeAboutSectionProps> = ({
  title,
  name,
  description,
  video,
  ButtonUrl,
  onContactClick
}) => {
  const handleContactClick = () => {
    if (ButtonUrl) {
      window.open(ButtonUrl, "_blank"); // Open in a new tab
    } else if (onContactClick) {
      onContactClick()
    }
  }
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}>{description}</p>
            <div>
              <button className={styles.contactButton} onClick={handleContactClick}>
                Contact Now →
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.circle}>
              <video
                className={styles.video}
                src={video}
                autoPlay
                loop
                muted
              />
            </div>
            <img
              src="./logo/sun.svg"
              alt="Sun illustration"
              className={styles.sunImage}
            />
            <img
              src="./logo/leaf.svg"
              alt="Leaf illustration"
              className={styles.leafImage}
            />

          </div>
        </div>
      </div>
    );
  };
