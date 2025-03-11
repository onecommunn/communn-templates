"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";


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
  link: string;
}

const EcomHero = ({ slides }: { slides: CarouselSlide[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 }
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.link} className="w-full flex-shrink-0">
              <Image
                src={slide.imageUrl}
                alt={`Slide ${index}`}
                className="w-full object-contain"
                width={360}
                height={360}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EcomHero;
