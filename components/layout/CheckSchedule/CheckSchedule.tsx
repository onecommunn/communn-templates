import React from 'react';
import styles from './CheckSchedule.module.css';
import { CheckScheduleProps } from '../../../lib/types/type';



export const CheckSchedule: React.FC<CheckScheduleProps> = ({
    heading,
    description,
    buttonText,
    healedPeople,
    coachingExperience,
    circleText,
    
  }) => {
    return (
        <>
            <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
          <div className={styles.circleTextContainer}>
            <div className={styles.circleText}>{circleText}</div>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>
          <span>{buttonText}</span>
        </button>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{healedPeople}k+</div>
            <div className={styles.statLabel}>People Healed</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{coachingExperience}+</div>
            <div className={styles.statLabel}>Coaching Experience</div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}