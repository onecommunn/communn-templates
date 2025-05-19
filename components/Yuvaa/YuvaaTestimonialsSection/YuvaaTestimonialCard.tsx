import React from "react";
interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  rating:number;
  cardBackgroundColor:string,
  quoteColor:string,
  userTextColor:string,
  roleColor:string,
  ratingStarsColor:string,
  avatarBackgroundColor:string,
  avatarTextColor:string,
  primaryColor:string
}
const YuvaaTestimonialCard = ({
  quote,
  name,
  role,
  avatar,
  rating,
  cardBackgroundColor,
  quoteColor,
  userTextColor,
  roleColor,
  ratingStarsColor,
  avatarBackgroundColor,
  avatarTextColor,
  primaryColor
}: TestimonialCardProps) => {
   const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="text-yellow-400" >
          {i < Math.floor(rating) ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col h-full" style={{backgroundColor:cardBackgroundColor}}>
      <div className="flex mb-4">
        <span className="text-[#FF6347] text-5xl leading-none" style={{color:primaryColor}}>"</span>
      </div>
      <p className="text-gray-600 mb-6 flex-grow" style={{color:quoteColor}}>{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3" style={{backgroundColor:avatarBackgroundColor}}>
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-gray-500" style={{color:avatarTextColor}}>{name.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold" style={{color:userTextColor}}>{name}</h4>
          <p className="text-sm text-gray-500" style={{color:roleColor}}>{role}</p>
        </div>
      </div>
      <div className="flex mt-3">
        <span className="text-yellow-400" style={{color:ratingStarsColor}}>{renderStars()}</span>
      </div>
    </div>
  );
};

export default YuvaaTestimonialCard;
