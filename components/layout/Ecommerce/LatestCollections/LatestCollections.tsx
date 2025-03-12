"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CollectionPreview from "./CollectionPreview";
import { Autoplay, Pagination } from "swiper/modules";
import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";

interface collectionsImages{
    text:string,
    imageUrl:HeaderLogo,
    path:string
}

const LatestCollections = ({collectionsImages}:{collectionsImages:collectionsImages[]}) => {
  const collectionsImagesList = [
    {
      id: "1",
      name: "Oversized Joggers",
      imageUrl:
        "https://images.bewakoof.com/uploads/grid/app/Oversized-Joggers-Both-1739651307.jpg",
      path: "/categories/oversized-Joggers",
    },
    {
      id: "2",
      name: "Graphic Printed Oversized T-shirts",
      imageUrl:
        "https://images.bewakoof.com/uploads/grid/app/Graphic-printed-oversized-t-shirts-Both-1739651307.jpg",
      path: "/graphic-printed-oversized-t-shirts",
    },
    {
      id: "3",
      name: "Trendy Jeans",
      imageUrl:
        "https://images.bewakoof.com/uploads/grid/app/Trendy-Jeans-Both-1739651351.jpg",
      path: "/trendy-Jeans",
    },
    {
      id: "4",
      name: "Pants",
      imageUrl:
        "https://images.bewakoof.com/uploads/grid/app/Pants-Both-1739651308.jpg",
      path: "/pants",
    },
    {
      id: "5",
      name: "Pyjamas",
      imageUrl:
        "https://images.bewakoof.com/uploads/grid/app/Pyjamas-Both-1739651349.jpg",
      path: "/pyjamas",
    },
    {
      id: "6",
      name: "Plus size T-shirts",
      imageUrl:
        "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Plus-size--9--1739421800.jpg",
      path: "/plus-size-t-shirts",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">Latest Collections</h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },     // Mobile: 2 items
          464: { slidesPerView: 3 },    // Tablet: 3 items
          768: { slidesPerView: 4 },    // Desktop: 4 items
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        {collectionsImages.map((collection,index) => (
          <SwiperSlide key={index}>
            <CollectionPreview collection={collection} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestCollections;
