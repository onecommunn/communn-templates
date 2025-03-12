"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductPreview from "../ProductPreview/ProductPreview";
import Link from "next/link";
import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";
import { ArrowUpRight } from "lucide-react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
};

interface CollectionProps {
  title: string;
  path: string;
}

interface Product {
  title: string;
  subtitle?: string;
  price: number;
  discountPrice: number;
  path: string;
  image: HeaderLogo;
}

export default function ProductCarousel({
  collection,
  products,
}: {
  collection: CollectionProps;
  products: Product[];
}) {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4  text-black">
          {collection.title}
        </h1>
      </div>

      <Carousel
        responsive={responsive}
        autoPlaySpeed={3000}
        keyBoardControl
        itemClass="pr-3"
        slidesToSlide={4}
      >
        {products.map((product, index) => (
          <div key={index}>
            <ProductPreview product={product} />
          </div>
        ))}
      </Carousel>
      <div className="text-center pt-2 flex justify-center text-blue-500">
        <Link
          href={`/collections/${collection.path}`}
          className="flex gap-2 items-center group"
        >
          Explore all
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </Link>
      </div>
    </div>
  );
}
