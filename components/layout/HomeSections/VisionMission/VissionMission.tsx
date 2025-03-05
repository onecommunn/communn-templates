// VisionMission/VisionMission.tsx
import React from "react";
import styles from "./VisionMission.module.css";
import { VisionMissionProps } from "../../../../lib/types/type";

export const VisionMission: React.FC<VisionMissionProps> = ({
  vision,
  mission,
  instructorName,
  yogaType,
  schedule,
  appointmentLink,
  onBookAppointment,
}) => {
  const handleAppointmentClick = () => {
    if (appointmentLink) {
      window.open(appointmentLink, "_blank"); // Open in a new tab
    } else if (onBookAppointment) {
      onBookAppointment(); // Fallback to onContactClick if no link is provided
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Left Section - Vision and Mission */}
        <div className={styles.left}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Vision</h2>
            <p className={styles.text}>{vision}</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Mission</h2>
            <p className={styles.text}>{mission}</p>
            <button className={styles.button} onClick={handleAppointmentClick}>
              <span className={styles.buttonText}>Book Appointment</span>
              <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>

        {/* Right Section - Instructor Info */}
        <div className={styles.instructorSection}>
          <div className={styles.instructorContainer}>
            <p className={styles.instructorLabel}>Instructor</p>
            <h2 className={styles.instructorName}>{yogaType}</h2>
            <p className={styles.text}>
              Duis aute irure dolor in reprehend voluptate velit esse cillum.
            </p>
            <div className={styles.iconText}>
              <i className="far fa-calendar-alt" />
              <span>{schedule}</span>
            </div>
            <div className={styles.iconText}>
              <i className="far fa-user" />
              <span>
                Trainer - <span style={{ color: "#ffff" }}>{instructorName}</span>
              </span>
            </div>
            <div className={styles.circle}>
              <svg
                className={styles.svgIcon}
                width="119"
                height="108"
                viewBox="0 0 119 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 106.847C12.1564 95.6905 18.1822 101.716 29.3386 90.56C40.495 79.4036 34.4692 73.3777 45.6256 62.2213C56.782 51.0649 62.8078 57.0908 73.9642 45.9344C85.1206 34.778 79.0948 28.7521 90.2512 17.5957C101.408 6.43933 107.433 12.4652 118.59 1.30877"
                  stroke="#27282C"
                  strokeMiterlimit="10"
                />
              </svg>

              <svg
                className={styles.svgIcon}
                width="119"
                height="108"
                viewBox="0 0 119 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 106.847C12.1564 95.6905 18.1822 101.716 29.3386 90.56C40.495 79.4036 34.4692 73.3777 45.6256 62.2213C56.782 51.0649 62.8078 57.0908 73.9642 45.9344C85.1206 34.778 79.0948 28.7521 90.2512 17.5957C101.408 6.43933 107.433 12.4652 118.59 1.30877"
                  stroke="#27282C"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

