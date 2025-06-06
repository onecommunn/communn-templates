import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import { ChevronRight } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  cardBackgroundColor: string;
  serviceTitleColor: string;
  ratingStarsColor: string;
  ctaTextColor: string;
  reviewCountColor: string;
  description: string;
}

const YuvaaServiceCard = ({
  image,
  title,
  description,
  cardBackgroundColor,
  serviceTitleColor,
  ratingStarsColor,
  ctaTextColor,
  reviewCountColor,
}: ServiceCardProps) => {
  const MAX_PREVIEW_CHARS = 150;

  const renderDescription = (event:string,title:string) => {
    const desc = event ?? "";
    const shouldTruncate = desc.length > MAX_PREVIEW_CHARS;

    if (!shouldTruncate) {
      return <p className="text-gray-600 mb-4">{desc}</p>;
    }

    return (
      <div className="mb-2">
        <p className="text-gray-600  line-clamp-3">{desc}</p>
        <Dialog>
          <DialogTrigger className="text-sm font-medium text-blue-600 hover:underline focus:outline-none cursor-pointer">
            Read more
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogTitle className="capitalize">{title}</DialogTitle>
            <DialogDescription className="whitespace-pre-wrap text-base text-gray-700">
              {desc}
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-sm text-black"
      style={{ backgroundColor: cardBackgroundColor }}
    >
      <div className="relative w-full overflow-hidden ">
        <div className="aspect-16/9">
          <img src={image} alt={title} className="w-full h-full" />
        </div>
      </div>
      <div className="p-4 text-center">
        <h3
          className="text-xl font-semibold mb-2"
          style={{ color: serviceTitleColor }}
        >
          {title}
        </h3>
        {renderDescription(description,title)}
        {/* <p className="text-gray-600">{description}</p> */}
        {/* <div className="flex items-center mb-3">
          <div className="flex mr-2">{renderStars()}</div>
          <span className="text-sm text-gray-500" style={{color:reviewCountColor}}>({reviewCount})</span>
        </div> */}
        <div className="flex justify-end">
          {/* <a href="#" className="text-[#FF6347] text-sm flex items-center" style={{color:ctaTextColor}}>
            Join Session <ChevronRight size={16} />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default YuvaaServiceCard;
