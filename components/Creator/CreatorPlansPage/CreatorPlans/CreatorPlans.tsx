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

function capitalizeWords(text: string): string {
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
            <Card
              className="p-0 rounded-xl border-none gap-1 shadow-none"
              key={index}
            >
              {/* image */}
              <div className="rounded-xl overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={
                      plan?.image?.value ||
                      "/assets/creatorCoursesPlaceHolderImage.jpg"
                    }
                    alt={plan?.name || "Plan Image"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
              <CardTitle className="text-[#0C0407] font-semibold text-[20px] font-inter px-2 transform-none mt-1">
                {capitalizeWords(plan.name)}
              </CardTitle>
              <p className="text-[#333333] text-[16px] px-2 line-clamp-2">
                {plan.description || plan.summary}
              </p>
              <CardFooter className="flex flex-row justify-between items-center p-0 px-2 pb-2 mt-2">
                <div className="flex items-center">
                  <span className="text-[16px] font-semibold mr-1">
                    ₹{plan.pricing || `${plan.totalPlanValue}`}
                  </span>
                  <span className="text-[16px] font-semibold">
                    / {`${plan.interval} ${capitalizeWords(plan.duration)}`}
                  </span>
                </div>

                {!isLoggedIn ? (
                  <Link href="/login">
                    <Button>
                      Login to Subscribe
                    </Button>
                  </Link>
                ) : !isSubscribed ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button >
                        Join Community
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>Join Community</DialogTitle>
                      <DialogDescription className="text-gray-700">
                        You're not a member of this community yet. Would you
                        like to join now?
                      </DialogDescription>
                      <div className="mt-4 flex justify-end">
                        <Button
                          onClick={() => handleClickJoin(communityId)}
                          disabled={isSubscribed}
                        >
                          Confirm Join
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Link
                    href={`/subscriptions/?planid=${plan._id}&communityid=${communityId}`}
                  >
                    <Button
                      className={`w-full py-3 cursor-pointer rounded-md ${
                        isSubscribed
                          ? "bg-[var(--bg-color)] text-[var(--text-color)]"
                          : "bg-[var(--text-color)] border border-[var(--bg-color)] text-[var(--bg-color)]"
                      }`}
                    >
                      {isSubscribed ? "Subscribed" : "Subscribe"}
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorPlans;
