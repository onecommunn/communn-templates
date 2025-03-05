"use client";

import React, { useState } from "react";
import AddToCartOverlay from "./AddToCartOverlay";

interface GalleryItemProps {
  price: string;
  name: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ price, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="w-[331px] max-md:w-[calc(50%_-_10px)] max-sm:w-full">
      <div
        className="relative mb-4 rounded-xl bg-[#A3B18A] h-[468px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && <AddToCartOverlay />}
      </div>
      <p className="mb-1.5 text-sm text-center text-zinc-800 tracking-[3.36px]">
        $ {price}
      </p>
      <h2 className="text-2xl leading-8 text-center text-zinc-800">{name}</h2>
    </article>
  );
};

export default GalleryItem;
