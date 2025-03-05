import React from "react";

interface PricingCardFeatureProps {
  iconSrc?: string;
  text?: string;
  coloredText?: string;
  className?: string;
}

const PricingCardFeature: React.FC<PricingCardFeatureProps> = ({
  iconSrc,
  text,
  coloredText,
  className = "",
}) => {
  return (
    <div className={`flex gap-3 text-sm leading-7 ${className}`}>
      {iconSrc && (
        <img
          src={iconSrc}
          alt=""
          className="object-contain shrink-0 self-start aspect-square w-[21px]"
        />
      )}
      <div className="basis-auto">
        {text}
        {coloredText && (
          <>
            {" "}
            <span style={{ color: "rgba(193,167,140,1)" }}>{coloredText}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default PricingCardFeature;
