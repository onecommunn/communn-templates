import { Check } from "lucide-react";
import React from "react";
import YuvaaPricingCard from "./YuvaaPricingCard";

interface Features {
  feature: string;
}

interface PricingListProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: Features[];
  isPopular?: boolean;
}

interface YuvaaPricingProps {
  title: string;
  description: string;
  pricingList?: PricingListProps[]; // made optional
  backgroundColor: string;
  heroBackgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  lineColor: string;
  cardBackgroundColor: string;
  cardPrimaryColor: string;
  cardSecondaryColors: string;
  buttonColor: string;
  iconsColor: string;
}

const YuvaaPricing = ({
  title,
  description,
  pricingList,
  backgroundColor,
  heroBackgroundColor,
  titleColor,
  descriptionColor,
  lineColor,
  cardBackgroundColor,
  cardPrimaryColor,
  cardSecondaryColors,
  buttonColor,
  iconsColor,
}: YuvaaPricingProps) => {
  return (
    <main
      className="flex-grow bg-white text-black"
      style={{ backgroundColor: backgroundColor }}
    >
      {/* Hero Section */}
      <section
        className="py-16 px-4 bg-gray-50"
        style={{ backgroundColor: heroBackgroundColor }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: titleColor }}>
            {title}
          </h1>
          <div
            className="w-24 h-1 bg-[#20B2AA] mx-auto mb-6"
            style={{ backgroundColor: lineColor }}
          ></div>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ color: descriptionColor }}
          >
            {description}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {Array.isArray(pricingList) && pricingList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingList.map((plan, index) => (
                <YuvaaPricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  period={plan.period}
                  description={plan.description}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  cardBackgroundColor={cardBackgroundColor}
                  cardPrimaryColor={cardPrimaryColor}
                  cardSecondaryColors={cardSecondaryColors}
                  buttonColor={buttonColor}
                  iconsColor={iconsColor}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 italic" style={{ color: descriptionColor }}>
              No pricing plans available at the moment.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default YuvaaPricing;
