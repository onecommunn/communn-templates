// HomeHero.tsx

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./HomeHero.module.css";
import { HomeHeroProps } from "../../../../lib/types/type";

export const HomeHero: React.FC<HomeHeroProps> = ({
  slides,
  autoSlide = false,
  slideInterval = 3000,
  backgroundColor = "#d4cbc2",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Handle screen resize with debounce to avoid unnecessary state updates
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  // Initialize `isMobile` state and set event listener for screen resizing
  useEffect(() => {
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Start the automatic sliding of images if `autoSlide` is enabled
  const startSlideInterval = useCallback(() => {
    if (autoSlide && slides.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, slideInterval);
    }
  }, [autoSlide, slideInterval, slides.length]);
  
  // Stop the auto-slide
  const stopSlideInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Manage slide transitions and clear interval on manual navigation
  useEffect(() => {
    // Start or stop the interval based on conditions
    if (isMobile || autoSlide) {
      startSlideInterval();
    }
    return () => stopSlideInterval();
  }, [isMobile, autoSlide, startSlideInterval]);


  // Navigation handlers
  const goToNextSlide = () => {
    stopSlideInterval(); // Stop interval to prevent conflicts
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startSlideInterval(); // Restart interval after manual change
  };
  
  const goToPrevSlide = () => {
    stopSlideInterval();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startSlideInterval();
  };

  // Destructure current slide data
  const { title, description, contextBtnText, contextBtnLink, propertiesBtnText, propertiesBtnLink, videoTitle, videoLink } =
    slides[currentSlide];

  return (
    <div className={styles.heroContainer} style={{ backgroundColor }}>
      <div className={styles.left}>
        <div className={styles.header}>
          <div className={`${styles.dot} ${styles.lightgreen}`}></div>
          <div className={`${styles.dot} ${styles.green}`}></div>
          <div className={`${styles.dot} ${styles.black}`}>
            <div className={styles.arrow}>
              <button className={styles.shopNowBTN} onClick={() => window.open(propertiesBtnLink)}>
                →
              </button>
              <svg
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.btncircleText}
              >
                <path
                  id="innerCirclePath"
                  d="M48,48 m-45,0 a30,30 0 1,1 90,0 a46,46 0 1,1 -90,0"
                  fill="none"
                />
                <text>
                  <textPath
                    href="#innerCirclePath"
                    startOffset="73%"
                    textAnchor="middle"
                  >
                    {propertiesBtnText}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p>{description}</p>
          <h1>{title}</h1>
          <button
            className={styles.btn}
            onClick={() => window.open(contextBtnLink, "_blank")}
          >
            {contextBtnText} →
          </button>
        </div>
      </div>

      <div className={`${styles.circle} ${styles.lightgreen}`}></div>

      <div className={styles.right}>
        <div className={styles.art}>
          <div className={styles.leaf}>
            <img src="/logo/leaf.svg" alt="leaf" />
          </div>
          <div className={`${styles.oval} ${styles.lightgreen}`}></div>
          <div className={styles.sun}>
            <svg
              className={styles.circleText}
              viewBox="0 0 300 300"
              fill="#000"
            >
              <path
                id="circlePath"
                d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
                fill="none"
              />
              <text>
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {videoTitle}
                </textPath>
              </text>
            </svg>

            {/* Play Button */} 

            <button
              className={styles.videoBtn}
              onClick={() => window.open(videoLink, "_blank")}
            >
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 20L-1.79446e-06 39.0526L-1.28837e-07 0.94744L33 20Z"
                  fill="#27282C"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {!isMobile && (
        <div className={styles.pagination}>
          <div className={styles.lineContainer}>
            <div className={styles.line}>
              {/* Previous Button  */}
              <button className={styles.NavigationArrowBtn} onClick={goToPrevSlide}>
                <svg
                  width="19"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9.48523L9.48528 0.999948L17.9706 9.48523"
                    stroke="#27282C"
                  />
                </svg>
              </button>
              <div className={styles.pager}>
                {String(
                  ((currentSlide - 1 + slides.length) % slides.length) + 1
                ).padStart(2, "0")}
              </div>

              {/* Line Divider  */}
              <svg
                width="1"
                height="73"
                viewBox="0 0 1 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="-0.000122048"
                  x2="0.499997"
                  y2="72.9999"
                  stroke="#27282C"
                />
              </svg>

              {/* Next Button  */}
              <div className={styles.pager}>
                {String(((currentSlide + 1) % slides.length) + 1).padStart(
                  2,
                  "0"
                )}
              </div>
              <button className={styles.NavigationArrowBtn} onClick={goToNextSlide}>
                <svg
                  width="19"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9707 0.485229L9.48542 8.97051L1.00014 0.485229"
                    stroke="#27282C"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

