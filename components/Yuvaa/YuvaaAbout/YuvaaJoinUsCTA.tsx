import React from "react";

interface YuvaaJoinUsCTAProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
}

const YuvaaJoinUsCTA = ({
  title,
  description,
  buttonText,
  backgroundColor,
  titleColor,
  descriptionColor,
  buttonBackgroundColor,
  buttonTextColor,
}: YuvaaJoinUsCTAProps) => {
  return (
    <section
      className="py-16 px-4 bg-gray-50 text-black"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6" style={{ color: titleColor }}>
          {title}
        </h2>
        <p
          className="text-gray-600 max-w-2xl mx-auto mb-8"
          style={{ color: descriptionColor }}
        >
          {description}
        </p>
        <button
          className="bg-[#FF6347] cursor-pointer text-white px-8 py-3 rounded-md"
          style={{
            color: buttonTextColor,
            backgroundColor: buttonBackgroundColor,
          }}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default YuvaaJoinUsCTA;
