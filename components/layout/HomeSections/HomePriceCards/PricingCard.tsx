import React from "react";
import PricingCardFeature from "./PricingCardFeature";

interface PricingCardProps {
  title?: string;
  trainingCount?: string;
  imageSrc: string;
  schedule?: string;
  scheduleIconSrc: string;
  trainer?: string;
  trainerIconSrc: string;
  description?: string;
  price?: number;
  taxInfo?: string;
  isHighlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  trainingCount,
  imageSrc,
  schedule,
  scheduleIconSrc,
  trainer,
  trainerIconSrc,
  description,
  price,
  taxInfo,
  isHighlighted,
}) => {
  const cardBgColor = isHighlighted ? "bg-stone-400" : "bg-white";
  const textColor = isHighlighted ? "text-black" : "text-zinc-800";

  return (
    <article
      className={`flex flex-col items-start px-20 py-16 mx-auto w-full ${cardBgColor} rounded-xl border border-solid border-[#D4CBC2] ${textColor} max-md:px-5 max-md:mt-5 max-md:max-w-full`}
    >
      <h3 className="text-sm tracking-[3.36px]">{title}</h3>
      <p className="mt-2.5 text-5xl max-md:text-4xl min-w-fit">{trainingCount} Training</p>

      <img
        src={imageSrc}
        alt={`${trainingCount} illustration`}
        className={`object-contain ${
          isHighlighted
            ? "self-center max-w-full w-[284px]"
            : "self-stretch w-full"
        } mt-6 aspect-[250]`}
      />
{/* 
      {isHighlighted ? (
        <p className="self-center mt-12 text-sm leading-7 max-md:mt-10">
          {schedule}
        </p>
      ) : ( */}
        <PricingCardFeature
          iconSrc={scheduleIconSrc}
          text={schedule}
          className="mt-12 max-md:mt-10"
        />
      {/* )} */}

      <PricingCardFeature
        iconSrc={trainerIconSrc}
        text={`Trainer - ${isHighlighted ? trainer : ""}`}
        coloredText={!isHighlighted ? trainer : ""}
        className="mt-4"
      />

      <p
        className={`self-stretch mt-7 text-sm leading-7 ${
          !isHighlighted ? "max-md:mr-2.5" : ""
        }`}
      >
        {description}
      </p>

      <div className={`flex ${isHighlighted ? "gap-1" : "gap-2"} mt-5`}>
        <div className="grow text-5xl max-md:text-4xl min-w-fit">
          <span style={{ fontSize: "36px", lineHeight: "50px" }}>$ </span>
          <span style={{ fontSize: "70px", lineHeight: "81px" }}>
            {price}
          </span>{" "}
        </div>
        <div
          className={`${
            isHighlighted ? "self-end mt-11 max-md:mt-10" : "my-auto"
          } text-sm leading-7 basis-auto`}
        >
          {taxInfo}
        </div>
      </div>

      <button className="flex gap-6 px-7 py-3.5 mt-9 text-sm text-black border border-black border-solid rounded-[30px] tracking-[3.36px] max-md:px-5">
        <span className="basis-auto">Get Started</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/55ee5e561fafb24bd4a800fb5020999ae9b69bfe1507f2bd826183be45c11d4b?placeholderIfAbsent=true&apiKey=228d3b2c4554432dbdd1f0f27ee6ba7c"
          alt="Arrow"
          className="object-contain shrink-0 my-auto aspect-[3.57] stroke-[1px] stroke-zinc-800 w-[25px]"
        />
      </button>
    </article>
  );
};

export default PricingCard;
