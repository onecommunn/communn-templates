"use client";
import React, { useContext, useEffect, useState } from "react";
import CreatorSectionHeader from "../../Components/CreatorSectionHeader";
import { usePlans } from "@/app/hooks/usePlan";
import { TrainingPlan } from "@/app/models/plan.model";
import { getCommunityData } from "@/app/services/communityService";
import { AuthContext } from "@/app/contexts/Auth.context";
import { Card, CardFooter, CardTitle } from "@/components/Ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import { toast } from "sonner";
import { Button } from "@/components/Ui/button";
import CreatorPlansCard from "./CreatorPlansCard";

export function capitalizeWords(text: string): string {
  if (!text) return "";

  return text
    .replace(/_/g, " ") // replace underscores with spaces
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const CreatorPlans = () => {
  const { getPlansList, getCommunityPlansListAuth, joinToPublicCommunity } =
    usePlans();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [plans, setPlans] = useState<TrainingPlan[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext?.isAuthenticated;
  const [communityId, setCommunityId] = useState<string>("");
  const userId = authContext?.user?.id;
  const isLoggedIn = !!userId;

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

  const handleClickJoin = async (id: string) => {
    try {
      await joinToPublicCommunity(id);
      if (fetchPlans) {
        fetchPlans();
      }
      toast.success("Successfully joined the community");
    } catch (error) {
      console.error("Error joining community:", error);
    }
  };

  useEffect(() => {
    const fetchCommunityId = async () => {
      const id = await getCommunityId();
      setCommunityId(id);
    };
    fetchCommunityId();
  }, []); // Run only once on mount

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

  return (
    <section className="py-10 font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <CreatorSectionHeader
          title="Plans"
          description="Discover our comprehensive collection of courses designed to accelerate your personal and professional growth. From mindset transformation to leadership excellence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <CreatorPlansCard
              key={index}
              imageUrl={
                plan?.image?.value ||
                "/assets/creatorCoursesPlaceHolderImage.jpg"
              }
              title={plan.name}
              planId={plan._id}
              description={plan.description || plan.summary}
              price={plan.pricing || `${plan.totalPlanValue}`}
              period={`${plan.interval} ${capitalizeWords(plan.duration)}`}
              communityId={communityId}
              subscribers={plan?.subscribers}
              isSubscribedCommunity={isSubscribed}
              fetchPlans={fetchPlans}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorPlans;
