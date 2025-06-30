import React, { useContext, useEffect, useState } from "react";
import { usePlans } from "@/app/hooks/usePlan";
import { TrainingPlan } from "@/app/models/plan.model";
import { useCommunity } from "@/app/hooks/useCommunity";
import { AuthContext } from "@/app/contexts/Auth.context";
import YogastPricingSection from "../YogastPricingSection/YogastPricingSection";
import YogastPricingCard from "./YogastPricingCard";

interface Features {
  feature: string;
}
interface PlansList {
  title: string;
  price: string;
  features: Features[];
  ButtonText: string;
}

interface QuestionsListProps {
  Question: string;
  Answer: string;
}

const YogastPricing = ({
  Title,
  SubTitle,
  PriceListSectionSubTitle,
  PriceListSectionTitle,
  PlansList,
  FaqTitle,
  QuestionsList,
  headerBackgroundColor,
  headerTitleColor,
  pricingBackgroundColor,
  pricingButtonBackgroundColor,
  pricingTextColor,
  pricingcardBackgroundColor,
  FaqBackgroundColor,
  questionTextColor,
  answerTextColor,
}: {
  PlansList: PlansList[];
  Title: string;
  SubTitle: string;
  PriceListSectionTitle: string;
  PriceListSectionSubTitle: string;
  FaqTitle: string;
  QuestionsList: QuestionsListProps[];
  headerBackgroundColor: string;
  headerTitleColor: string;
  pricingBackgroundColor: string;
  pricingcardBackgroundColor: string;
  pricingTextColor: string;
  pricingButtonBackgroundColor: string;
  FaqBackgroundColor: string;
  questionTextColor: string;
  answerTextColor: string;
}) => {
  const { getPlansList, getCommunityPlansListAuth } = usePlans();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [plans, setPlans] = useState<TrainingPlan[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { communityId } = useCommunity();

  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext?.isAuthenticated;

  function capitalizeFirstLetter(str: string) {
    if (!str) {
      return ""; // Handle empty strings
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const fetchPlans = async () => {
    if (!communityId) return;

    try {
      setIsLoading(true);
      let response;
      if (isAuthenticated) {
        response = await getCommunityPlansListAuth(communityId);
      } else {
        response = await getPlansList(communityId);
      }

      if (Array.isArray(response)) {
        setPlans(response as TrainingPlan[]);
      } else if (
        response &&
        typeof response === "object" &&
        "myPlans" in response &&
        Array.isArray((response as any).myPlans)
      ) {
        setPlans((response as any).myPlans as TrainingPlan[]);
        setIsSubscribed((response as any).isSubscribedCommunity);
      } else {
        setPlans([]);
      }
    } catch (error) {
      console.error("Failed to fetch plans:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, [communityId, isAuthenticated]);

  if (isLoading) {
    return (
      <div className="w-full text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section
        className="py-16"
        style={{
          backgroundColor: headerBackgroundColor,
          color: headerTitleColor,
        }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {Title}
          </h1>
          <p className="max-w-2xl mx-auto">{SubTitle}</p>
        </div>
      </section>

      <section className="py-16 px-4 lg:px-20">
        <div className="container mx-auto">
          {plans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => {
                const features: Features[] = [
                  {
                    feature: `Duration: ${plan.interval} ${capitalizeFirstLetter(
                      plan.duration
                    )}`,
                  },
                  { feature: `Subscribers: ${plan.subscribers?.length || 0}` },
                  {
                    feature: `Next Due: ${
                      plan?.nextDueDate ? plan.nextDueDate : "No Dues"
                    }`,
                  },
                  {
                    feature: `Status: ${
                      !plan?.nextDueDate
                        ? "Not Subscribed"
                        : new Date(plan.nextDueDate) >= new Date()
                          ? "Active"
                          : "Expired"
                    }`,
                  },
                ];

                return (
                  <div className="rounded-lg" key={plan._id}>
                    <YogastPricingCard
                      title={plan.name}
                      price={plan.pricing || `${plan.totalPlanValue}`}
                      period={`${plan.interval} ${capitalizeFirstLetter(
                        plan.duration
                      )}`}
                      features={features}
                      description={plan.description || plan.summary}
                      isSubscribedCommunity={isSubscribed}
                      subscribers={plan?.subscribers}
                      communityId={communityId}
                      fetchPlans={fetchPlans}
                      planId={plan._id}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-gray-500 italic">
              No pricing plans available at the moment.
            </p>
          )}
        </div>
      </section>

      <YogastPricingSection
        Title={PriceListSectionTitle}
        Description={PriceListSectionSubTitle}
        PlansList={PlansList}
        backgroundColor={pricingBackgroundColor}
        cardBackgroundColor={pricingcardBackgroundColor}
        textColor={pricingTextColor}
        buttonBackgroundColor={pricingButtonBackgroundColor}
      />

      {/* faq section */}
      <section
        className="py-16"
        style={{ backgroundColor: FaqBackgroundColor }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl font-bold mb-6 text-center"
              style={{ color: headerBackgroundColor }}
            >
              {FaqTitle}
            </h2>

            <div className="space-y-6">
              {QuestionsList?.map((each, index) => (
                <div key={index}>
                  <h3
                    className="text-lg font-medium mb-2"
                    style={{ color: questionTextColor }}
                  >
                    {each.Question}
                  </h3>
                  <p style={{ color: answerTextColor }}>{each.Answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default YogastPricing;
