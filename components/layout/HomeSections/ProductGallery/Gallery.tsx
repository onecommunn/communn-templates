"use client";

import React from "react";
import { Builder } from "@builder.io/react";
import GalleryHeader from "./GalleryHeader";
import GalleryItem from "./GalleryItem";
import ViewAllButton from "./ViewAllButton";

interface GalleryItem {
  id: number | string;
  price: string;
  name: string;
}

interface GalleryProps {
  items?: GalleryItem[];
  title?: string;
  subtitle?: string;
  viewAllButtonText?: string;
  onViewAllClick?: () => void;
}

const Gallery: React.FC<GalleryProps> = ({
  items = [],
  title = "Gallery",
  subtitle = "Duis aute irure dolor in reprehenderit in voluptate eu fugiat nulla pariatur.",
  viewAllButtonText = "View All",
  onViewAllClick = () => console.log("View All clicked"),
}) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Elsie&family=Poppins:wght@400&display=swap"
        rel="stylesheet"
      />
      <section className="p-5 mx-auto my-0 max-w-[1720px]">
        <GalleryHeader title={title} subtitle={subtitle} />

        <div className="flex flex-wrap gap-6 justify-center mb-10 max-md:gap-5">
          {items.map((item, index) => (
            <div key={index} className="even:mt-14
            ">
              <GalleryItem key={item.id} price={item.price} name={item.name} />
            </div>
          ))}
        </div>

        <ViewAllButton onClick={onViewAllClick} text={viewAllButtonText} />
      </section>
    </>
  );
};

export default Gallery;
