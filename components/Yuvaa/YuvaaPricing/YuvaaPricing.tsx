import { Check } from "lucide-react";
import React, { useEffect, useState } from "react";
import YuvaaPricingCard from "./YuvaaPricingCard";
import { usePlans } from "@/app/hooks/usePlan";
import { TrainingPlan } from "@/app/models/plan.model";

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
  const { getPlansList } = usePlans();

  const [plans, setPlans] = useState<TrainingPlan[]>([]);

  const [community, setCommunity] = useState<string>("");

  const communityId = "677e1c869f13316e61af6a6e";

  console.log(plans, "plans");

  function capitalizeFirstLetter(str: string) {
    if (!str) {
      return ""; // Handle empty strings
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  //console.log(community, 'communnity')

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await getPlansList(communityId);
        if (Array.isArray(response)) {
          setPlans(response);
        } else if (response && Array.isArray(response.data)) {
          setPlans(response.data as TrainingPlan[]);
        } else {
          setPlans([]);
        }
      } catch (error) {
        console.error("Failed to fetch plans:", error);
      }
    };

    fetchPlans();
  }, [getPlansList]);

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
      <section className="py-16 px-4 lg:px-20">
        <div className="container mx-auto">
          {plans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => {
                const features: Features[] = [
                  {
                    feature: `Duration: ${plan.interval} ${capitalizeFirstLetter(plan.duration)}`,
                  },
                  // {
                  //   feature: `Starts on: ${new Date(plan.startDate).toDateString()}`,
                  // },
                  { feature: `Offer: ₹${plan.offerValue}` },
                  {
                    feature: plan.isUserSubscribed
                      ? "Already Subscribed"
                      : "Not Subscribed",
                  },
                  {
                    feature: plan.isSequenceAvailable
                      ? `Has ${plan.totalSequences} Sequences`
                      : "No Sequences",
                  },

                  { feature: `Subscribers: ${plan.subscribers?.length || 0}` },
                ];

                console.log(features, "features");

                return (
                  <YuvaaPricingCard
                    key={plan._id || index}
                    planId={plan._id}
                    title={plan.name}
                    price={plan.pricing || `${plan.totalPlanValue}`}
                    period={`${plan.interval} ${capitalizeFirstLetter(plan.duration)}`}
                    description={plan.description || plan.summary}
                    features={features}
                    //isPopular={parseFloat(plan.pricing || "0") < 1000} // example logic
                    cardBackgroundColor={cardBackgroundColor}
                    cardPrimaryColor={cardPrimaryColor}
                    cardSecondaryColors={cardSecondaryColors}
                    buttonColor={buttonColor}
                    iconsColor={iconsColor}
                    isUserSubscribed={plan.isUserSubscribed}
                  />
                );
              })}
            </div>
          ) : (
            <p
              className="text-center text-gray-500 italic"
              style={{ color: descriptionColor }}
            >
              No pricing plans available at the moment.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default YuvaaPricing;
