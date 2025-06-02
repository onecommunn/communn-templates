import { ChevronRight } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  rating: number;
  reviewCount: number;
  imageHeight:number,
  imageWidth:number,
  cardBackgroundColor:string;
  serviceTitleColor:string,
  ratingStarsColor:string,
  ctaTextColor:string,
  reviewCountColor:string,
  ctaText:string,
}

const YuvaaServiceCard = ({
  image,
  title,
  rating,
  reviewCount,
  imageHeight,
  imageWidth,
  cardBackgroundColor,
  serviceTitleColor,
  ratingStarsColor,
  ctaTextColor,
  reviewCountColor,
}: ServiceCardProps) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="text-yellow-400" style={{color:ratingStarsColor}}>
          {i < Math.floor(rating) ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm text-black" style={{backgroundColor:cardBackgroundColor}}>
      <div className="relative w-full h-48 overflow-hidden">
        <div className="aspect-16/9">
          <img src={image} alt={title} className="w-full h-full object-cover" style={{width:imageWidth,height:imageHeight}}/>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2" style={{color:serviceTitleColor}}>{title}</h3>
        {/* <div className="flex items-center mb-3">
          <div className="flex mr-2">{renderStars()}</div>
          <span className="text-sm text-gray-500" style={{color:reviewCountColor}}>({reviewCount})</span>
        </div> */}
        <div className="flex justify-end">
          <a href="#" className="text-[#FF6347] text-sm flex items-center" style={{color:ctaTextColor}}>
            Join Session <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default YuvaaServiceCard;
