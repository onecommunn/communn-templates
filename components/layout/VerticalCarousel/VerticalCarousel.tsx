import React, { useEffect, useState } from 'react';
import styles from './VerticalCarousel.module.css';
import { VerticalCarouselProps } from '../../lib/types/type';

export const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
  banners,
  interval = 200000,
  showControls = true,
  autoSlide = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle automatic banner changes
  useEffect(() => {
    if (!autoSlide && !isMobile) return;

    const changeBanner = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(changeBanner); // Cleanup on unmount
  }, [banners.length, interval, autoSlide, isMobile]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleButtonClick = (btnLink: string | undefined) => {
    if (btnLink) window.open(btnLink, '_blank');
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselItems}>
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className={styles.textContainer}>
              {banner.heading && <h2 className={styles.title} style={{ color: 'white' }}>{banner.heading}</h2>}
              {banner.subheading && (
                <p className={styles.subtitle} style={{ color: 'white' }}>{banner.subheading}</p>
              )}
              {banner.BtnText && (
                <button
                  onClick={() => handleButtonClick(banner.BtnLink)}
                  className={`${styles.actionButton} actionButton`}
                >
                  {banner.BtnText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {showControls && !isMobile && (
        <div className={styles.pagination}>
          <div className={styles.lineContainer}>
            <div className={styles.line}>
              <button
                className={styles.NavigationArrowBtn}
                onClick={goToPrevSlide}
              >
                <svg
                  width="19"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9.48523L9.48528 0.999948L17.9706 9.48523"
                    stroke="#fff"
                  />
                </svg>
              </button>

              <div className={styles.pager}>
                {/* Current slide index (displayed as 1-based index) */}
                {String(currentIndex + 1).padStart(2, '0')}
              </div>

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
                  stroke="#fff"
                />
              </svg>

              <div className={styles.pager}>
                {/* Next slide index (with wrapping) */}
                {String((currentIndex + 2 > banners.length ? 1 : currentIndex + 2)).padStart(2, '0')}
              </div>

              <button
                className={styles.NavigationArrowBtn}
                onClick={goToNextSlide}
              >
                <svg
                  width="19"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9707 0.485229L9.48542 8.97051L1.00014 0.485229"
                    stroke="#fff"
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
