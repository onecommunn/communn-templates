// BookYoga.tsx
import React, { useState } from "react";
import styles from "./BookYoga.module.css";
import { BookYogaProps } from "../../../../../lib/types/type";

export const BookYoga: React.FC<BookYogaProps> = ({
  heading,
  description,
  contactInfo,
  onEmailSubmit,
}) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setErrorMessage(''); // Clear 
  };



  const handleButtonClick = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      setErrorMessage('Please enter an email address.');
    } else if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address.');
    } else {
      setErrorMessage(''); // Clear the error if the input is valid
      onEmailSubmit(email);
      console.log('Entered email:', email); // You can replace this with your submit logic
    }
  };

  return (
    <div className={styles.BookYogaContainer}>
      <div className={styles.left}>
        <div className={styles.graphicContents}>
          <div className={styles.circleBackground}></div>
          <img className={styles.imgWrapper} src="./Photos/yoga-image.jpeg" alt="Yoga-Imagr" height={427} width={360} />
          <img className={styles.svgWrapper} src="./logo/leaf-outline.svg" alt="leaf-svg" />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.contentContainer}>

          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.description}>{description}</p>


          <div className={styles.EmailContainer}>
            <div className={styles.emailContainer}>
              <input
                type="text"
                value={email}
                onChange={handleInputChange}
                placeholder="email here"
                className={styles.emailInput}
              />
              <button onClick={handleButtonClick} className={styles.submitButton}>
                <img src="./logo/submit.svg" alt="" />
              </button>
            </div>
            {errorMessage && (
              <p className={styles.errorMessage} style={{ color: '#df4a4a', margin: '0px' }}>
                {errorMessage}
              </p>
            )}
          </div>






          <div className={styles.contact}>
            <span > Ph: {contactInfo.phone} </span> | <span>email: {contactInfo.email}</span>
          </div>
          <div className={styles.divider}>
            <img src="./logo/divider.svg" alt="" />
          </div>
          <div className={styles.rectangle}></div>

        </div>


        <img className={styles.svgOverlayImage1} src="./logo/upward-leaf.svg" alt="" />
        <img className={styles.svgOverlayImage2} src="./logo/fill-sun.svg" alt="" />
      </div>
    </div>
  );
};

