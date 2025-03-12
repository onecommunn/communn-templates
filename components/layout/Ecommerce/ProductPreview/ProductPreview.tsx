import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";
import Link from "next/link";
import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Heart } from "lucide-react";

interface Product {
  title: string;
  subtitle?: string;
  price: number;
  discountPrice: number;
  path: string;
  image: HeaderLogo;
}

const ProductPreview = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.path}`} className="group">
      <div data-testid="product-wrapper">
        <Thumbnail images={product.image} size="full" />
        <div className="flex flex-col txt-compact-medium mt-4 justify-between">
          <div className="flex items-start justify-between">
            <div className="flex flex-col  max-w-fit">
              <p
                className="text-ui-fg-subtle truncate w-full max-w-[230px] text-gray-600"
                data-testid="product-title"
              >
                {product.title}
              </p>

              <p
                className="text-ui-fg-subtle text-xs text-gray-400"
                data-testid="product-subtitle"
              >
                {product.subtitle}
              </p>
            </div>
            <Heart size={18} color="#606471" />
          </div>
          <div className="flex items-center gap-x-2">
            <p className="line-through text-gray-400 font-medium text-sm">
              ₹{`${product.price}.00`}
            </p>

            <p className="text-black text-sm">₹{`${product.discountPrice}.00`}</p>
          </div>

          <div className="flex items-center gap-x-2"></div>
        </div>
      </div>
    </Link>
  );
};

export default ProductPreview;
