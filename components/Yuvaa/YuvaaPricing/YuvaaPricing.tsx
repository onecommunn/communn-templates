"use client";

import { Check } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import YuvaaPricingCard from "./YuvaaPricingCard";
import { usePlans } from "@/app/hooks/usePlan";
import { TrainingPlan } from "@/app/models/plan.model";
import { AuthContext } from "@/app/contexts/Auth.context";
import { getCommunityData } from "@/app/services/communityService";
import { Skeleton } from "@/components/Ui/skeleton";

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
  nextDueDate: string;
}

interface YuvaaPricingProps {
  title: string;
  description: string;
  pricingList?: PricingListProps[];
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

const fadeScaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

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
  const { getPlansList, getCommunityPlansListAuth } = usePlans();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [plans, setPlans] = useState<TrainingPlan[]>([]);

  const [communityId, setCommunityId] = useState<string>("");

  const getCommunityId = async () => {
    try {
      const communityData: any = await getCommunityData(
        window.location.hostname
      );
      setCommunityId(communityData?.community?._id || "");
      return communityData?.community._id || "";
    } catch (error) {
      console.error("Error fetching community ID:", error);
      return "";
    }
  };

  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext?.isAuthenticated;

  function capitalizeFirstLetter(str: string) {
    if (!str) {
      return ""; // Handle empty strings
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  useEffect(() => {
    const fetchCommunityId = async () => {
      const id = await getCommunityId();
      setCommunityId(id);
    };
    fetchCommunityId();
  }, []); // Run only once on mount

  useEffect(() => {
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
          setPlans(response);
        } else if (response?.data && Array.isArray(response.data)) {
          setPlans(response.data as TrainingPlan[]);
        } else {
          setPlans([]);
        }
      } catch (error) {
        console.error("Failed to fetch plans:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, [communityId, isAuthenticated]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-4 lg:px-20">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border rounded-lg overflow-hidden shadow-sm p-4 space-y-4"
          >
            <Skeleton className="h-48 w-full rounded-md" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex justify-between items-center">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-10 w-24 rounded-md" />
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

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
                  <motion.div
                    key={plan._id || index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="rounded-lg h-fit"
                  >
                    <YuvaaPricingCard
                      planId={plan._id}
                      title={plan.name}
                      price={plan.pricing || `${plan.totalPlanValue}`}
                      period={`${plan.interval} ${capitalizeFirstLetter(
                        plan.duration
                      )}`}
                      description={plan.description || plan.summary}
                      features={features}
                      cardBackgroundColor={cardBackgroundColor}
                      cardPrimaryColor={cardPrimaryColor}
                      cardSecondaryColors={cardSecondaryColors}
                      buttonColor={buttonColor}
                      iconsColor={iconsColor}
                      isUserSubscribed={plan.isUserSubscribed}
                      communityId={plan?.community}
                      subscribers={plan?.subscribers}
                      nextDueDate={plan?.nextDueDate}
                    />
                  </motion.div>
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
