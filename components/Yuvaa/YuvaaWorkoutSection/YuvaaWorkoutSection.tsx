import React from "react";

const YuvaaWorkoutSection = ({
  title,
  ImageUrl,
  description,
  buttonText,
  backgroundColor,
  titleColor,
  descriptionColor,
  buttonTextColor,
  buttonBackgroundColor,
  lineColor,
  imageHeight,
  imageWidth
}: {
  ImageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  buttonTextColor: string;
  buttonBackgroundColor: string;
  lineColor: string;
  imageWidth:number,
  imageHeight:number
}) => {
  return (
    <section className="py-16 px-4 lg:px-20 bg-white text-black" style={{backgroundColor:backgroundColor}}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={ImageUrl}
              alt="Workout at home"
              className="w-full aspect-square rounded-3xl shadow-lg object-cover"
              style={{width:imageWidth,height:imageHeight}}
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{color:titleColor}}>
              {title}
            </h2>
            <div className="w-24 h-1 bg-[#20B2AA] mb-6" style={{backgroundColor:lineColor}}></div>
            <p className="text-gray-600 mb-8" style={{color:descriptionColor}}>
              {description}
            </p>
            <button className="bg-[#FF6347] text-white px-4 rounded-md py-2" style={{backgroundColor:buttonBackgroundColor,color:buttonTextColor}}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YuvaaWorkoutSection;
