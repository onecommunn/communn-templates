"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


interface ImageProp {
  src: string;
  alt: string;
  width: number;
  height: number;
  logoText: string;
  showLogoText: boolean;
}

interface CarouselSlide {
  imageUrl: ImageProp;
  link:string
}

interface CustomDotProps {
  onClick?: () => void;
  active?: boolean;
}

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
  return (
    <button
      className={`h-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110 
        ${
          active
            ? "w-8 bg-white shadow-lg"
            : "w-2 bg-white/40 hover:bg-white/60"
        }`}
      onClick={onClick}
    />
  );
};

const EcomHero = ({ slides }: { slides: CarouselSlide[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  return (
    <div className="relative">
      <Carousel
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        centerMode={false}
        arrows={false}
        className=""
        containerClass="container"
        customDot={<CustomDot />}
        dotListClass="gap-3"
        draggable
        focusOnSelect={false}
        infinite
        autoPlay
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        afterChange={(prevSlide) => setCurrentSlide(prevSlide)}
      >
        {slides.map((slide, index) => (
          <Link href={slide.link} key={index} className="w-full flex-shrink-0">
            <Image
              src={slide.imageUrl}
              alt={`Slide ${index}`}
              className="w-full object-contain"
              width={360}
              height={360}
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default EcomHero;
