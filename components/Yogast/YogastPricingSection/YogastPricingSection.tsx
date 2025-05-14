import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  features: Features[];
  isPopular?: boolean;
  ButtonText: string;
  backgroundColor: string;
  textColor: string;
  buttonBackgroundColor: string;
}

interface Features {
  feature: string;
}
interface PlansList {
  title: string;
  price: string;
  features: Features[];
  ButtonText: string;
}

const PricingCard = ({
  title,
  price,
  features,
  ButtonText,
  backgroundColor,
  textColor,
  buttonBackgroundColor,
}: PricingCardProps) => {
  return (
    <div
      className="bg-[#FF5E14] rounded-lg overflow-hidden text-white flex flex-col"
      style={{ backgroundColor: backgroundColor,color:textColor }}
    >
      <div className="p-6 flex-grow">
        <h3 className="font-bold text-xl mb-4">{title}</h3>
        <ul className="space-y-2 mb-6">
          {features?.map((feature, index) => (
            <li key={index} className="text-sm flex items-start">
              <span className="mr-2">•</span>
              {feature.feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 border-t border-white/20">
        <div className="font-bold text-xl mb-4">
          ${price} <span className="text-sm font-normal">/ Month</span>
        </div>
        <button className="text-white  w-full border rounded-lg py-2" style={{backgroundColor:buttonBackgroundColor,borderColor:buttonBackgroundColor,color:textColor}}>
          {ButtonText}
        </button>
      </div>
    </div>
  );
};

const YogastPricingSection = ({
  Title,
  Description,
  PlansList,
  backgroundColor,
  cardBackgroundColor,
  textColor,
  buttonBackgroundColor,
}: {
  Title: string;
  Description: string;
  PlansList: PlansList[];
  backgroundColor: string;
  cardBackgroundColor: string;
  textColor: string;
  buttonBackgroundColor: string;
}) => {
  return (
    <section className="py-16" style={{ backgroundColor: backgroundColor, }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2
            className="text-3xl font-bold mb-2"
            style={{ color: cardBackgroundColor }}
          >
            {Title}
          </h2>
          <p className="text-gray-600 text-sm" style={{ color: textColor }}>
            {Description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PlansList?.map((each, index) => (
            <PricingCard
              key={index}
              title={each.title}
              price={each.price}
              features={each.features}
              ButtonText={each.ButtonText}
              backgroundColor={cardBackgroundColor}
              textColor={backgroundColor}
              buttonBackgroundColor={buttonBackgroundColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogastPricingSection;
