import React from 'react';
import { TimeTableProps } from '../../lib/types/type';
import styles from './TimeTable.module.css'; // Import your modular CSS

const TimeTable: React.FC<TimeTableProps> = ({ TimeTables }) => {
    const handleButtonClick = (link?: string) => {
        if (link && link.length > 0) {
            window.location.href = link; // No array indexing, since link is a string
        }
    };

    return (
        <>
            {TimeTables.map((table, index) => (
                <div className={styles.timeTableContainer} key={index}>
                    <div className={styles.tableCard}>
                        <div className={styles.imagePlaceholder}>
                            <img src="" alt="" />
                        </div>

                        <div className={styles.titleContainer}>
                            <h1 className={styles.title}>{table.title}</h1>
                        </div>

                        <div className={styles.schedule}>
                            <div className={styles.times}>
                                {table.times.map((time, idx) => (
                                    // Access time.time here
                                    <p key={idx} className={styles.time}>{time.time}</p>
                                ))}
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.days}>
                            {table.days.map((day, idx) => (
                                // Access day.day here
                                <p key={idx} className={styles.day}> &#x2713; {day.day}</p>
                            ))}
                        </div>

                        <button
                            className={styles.button}
                            onClick={() => handleButtonClick(table.link)}
                            disabled={!table.link || table.link.length === 0}
                        >
                            {table.buttonText} →
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TimeTable;
