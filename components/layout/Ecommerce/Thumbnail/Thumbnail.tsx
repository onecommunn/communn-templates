import Image from "next/image";
import React from "react";
import PlaceholderImage from "./PlaceholderImage";
import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";

type ThumbnailProps = {
  thumbnail?: string | null;
  // TODO: Fix image typings
  images?: HeaderLogo;
  size?: "small" | "medium" | "large" | "full" | "square";
  isFeatured?: boolean;
  className?: string;
  "data-testid"?: string;
};

const ImageOrPlaceholder = ({
  image,
  size,
}: Pick<ThumbnailProps, "size"> & { image?: HeaderLogo }) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className={`absolute inset-0 object-cover ${size === "full" ? "object-top" : "object-center"}`}
      draggable={false}
      quality={50}
      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
      fill
    />
  ) : (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center">
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  );
};

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = "small",
  isFeatured,
  className = "",
}) => {

  const containerClasses = [
    "relative",
    "w-full",
    "overflow-hidden",
    "p-4",
    "transition-shadow",
    "ease-in-out",
    "duration-150",
    className, // Additional classes passed via props
    isFeatured
      ? "h-[390px] object-cover object-center"
      : !isFeatured && size !== "square"
      ? "h-[380px] object-cover object-center"
      : "",
    size === "square" ? "md:h-[120px] h-[100px] min-w-[85px] aspect-[1/1]" : "",
    size === "small" ? "w-[180px]" : "",
    size === "medium" ? "w-[290px]" : "",
    size === "large" ? "w-[440px]" : "",
    size === "full" ? "w-full object-cover" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${containerClasses} rounded-lg `} >
      <ImageOrPlaceholder image={images} size={size} />
    </div>
  );
};

export default Thumbnail;
