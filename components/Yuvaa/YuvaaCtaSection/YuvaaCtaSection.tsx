import React from "react";

interface YuvaaCtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundColor: string;
  sectionBackgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  buttonTextColor: string;
  buttonBackgroundColor: string;
  lineColor:string
}

const YuvaaCtaSection = ({
  title,
  description,
  buttonText,
  backgroundColor,
  sectionBackgroundColor,
  titleColor,
  descriptionColor,
  buttonBackgroundColor,
  buttonTextColor,
  lineColor
}: YuvaaCtaSectionProps) => {
  return (
    <section className="py-16 px-4 lg:px-20 bg-[#20B2AA] text-white" style={{backgroundColor:backgroundColor}}>
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg" style={{backgroundColor:sectionBackgroundColor}}>
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2" style={{color:titleColor}}>
              {title}
            </h2>
            <div className="w-24 h-1 bg-[#20B2AA] mx-auto mb-6" style={{backgroundColor:lineColor}}></div>
            <p className="text-gray-600 mb-8" style={{color:descriptionColor}}>
             {description}
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#FF6347] cursor-pointer text-white rounded-md px-4 py-2" style={{color:buttonTextColor,backgroundColor:buttonBackgroundColor}}>
             {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YuvaaCtaSection;
