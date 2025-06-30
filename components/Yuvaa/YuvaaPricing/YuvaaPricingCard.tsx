import { AuthContext } from "@/app/contexts/Auth.context";
import { useCommunity } from "@/app/hooks/useCommunity";
import { usePlans } from "@/app/hooks/usePlan";
import { ISubscribers } from "@/app/models/plan.model";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import { Check } from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

interface Features {
  feature: string;
}

const YuvaaPricingCard = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  buttonColor,
  cardSecondaryColors,
  cardPrimaryColor,
  cardBackgroundColor,
  iconsColor,
  isUserSubscribed,
  planId,
  communityId,
  subscribers,
  nextDueDate,
  isSubscribedCommunity,
  fetchPlans,
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: Features[];
  isPopular?: boolean;
  cardBackgroundColor: string;
  buttonColor: string;
  cardSecondaryColors: string;
  cardPrimaryColor: string;
  iconsColor: string;
  isUserSubscribed?: boolean;
  planId: string;
  communityId: string;
  subscribers: { _id: string }[];
  nextDueDate: string;
  isSubscribedCommunity?: boolean;
  fetchPlans?: () => void;
}) => {
  // const router = useRouter()

  // const handleNavigate = () => {
  //   router.push({
  //     pathname: '/subscriptions',
  //     query: { planId },
  //   })
  // }

  // const loggedInUserData = useSelector((state: any) => state?.loggedInUser);
  // const userId = loggedInUserData?.user?.id
  // console.log(userId, "loggedInUserData");

  const authContext = useContext(AuthContext);
  const userId = authContext?.user?.id;
  const isLoggedIn = !!userId;
  const [mounted, setMounted] = useState(false);
  const MAX_PREVIEW_CHARS = 150;

  const { joinToPublicCommunity } = usePlans();

  // Only consider isSubscribed if the user is logged in
  const isSubscribed =
    isLoggedIn && subscribers?.some((sub) => sub._id === userId);

  // Debug logs
  useEffect(() => {
    // console.log("AuthContext Loaded");
    // console.log("authContext.user:", authContext?.user);
    // console.log("userId:", userId);
    // console.log("authContext.isAuthenticated:", authContext?.isAuthenticated);
    // console.log("authContext.loading:", authContext?.loading);
    // console.log("Subscribers:", subscribers);
    // console.log("isSubscribed:", isSubscribed);
  }, [
    authContext?.user,
    authContext?.isAuthenticated,
    authContext?.loading,
    subscribers,
  ]);

  // Mark component as mounted (for hydration safety)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Optional: don't render if auth state is loading or component not mounted
  if (authContext?.loading || !mounted) return null;

  // console.log(communityId)

  const renderDescription = (event: string, title: string) => {
    const desc = event ?? "";
    const shouldTruncate = desc.length > MAX_PREVIEW_CHARS;

    if (!shouldTruncate) {
      return <p className="text-gray-600 mb-4">{desc}</p>;
    }

    return (
      <div className="mb-2">
        <p className="text-gray-600  line-clamp-3">{desc}</p>
        <Dialog>
          <DialogTrigger className="text-sm font-medium text-blue-600 hover:underline focus:outline-none cursor-pointer">
            Read more
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogTitle className="capitalize">{title}</DialogTitle>
            <DialogDescription className="whitespace-pre-wrap text-base text-gray-700">
              {desc}
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    );
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

  return (
    <div
      className={`bg-white rounded-lg flex h-full flex-col justify-between shadow-lg p-8 border ${isPopular ? "border-[var(--border-color)]" : "border-transparent"} relative`}
      style={{ "--border-color": buttonColor } as React.CSSProperties}
    >
      <div>
        <h3
          className="text-2xl font-bold mb-2 capitalize"
          style={{ color: cardPrimaryColor }}
        >
          {title.length > 25 ? description?.slice(0, 25) + "..." : title}
        </h3>
        <div className="flex items-end mb-4">
          <span
            className="text-4xl font-bold"
            style={{ color: cardPrimaryColor }}
          >
            ₹{price}
          </span>
          <span
            className="text-gray-500 ml-1 capitalize"
            style={{ color: cardSecondaryColors }}
          >
            / {period}
          </span>
        </div>
        {renderDescription(description, title)}
        <ul className="mb-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check
                className="mr-2 h-5 w-5 text-[#20B2AA] flex-shrink-0 mt-0.5"
                style={{ color: iconsColor }}
              />
              <span style={{ color: cardPrimaryColor }}>{feature.feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {!isLoggedIn ? (
        <Link href="/login">
          <button
            style={
              {
                "--bg-color": buttonColor,
                "--text-color": cardBackgroundColor,
              } as React.CSSProperties
            }
            className="w-full py-3 cursor-pointer rounded-md bg-[var(--text-color)] border border-[var(--bg-color)] text-[var(--bg-color)]"
          >
            Login to Subscribe
          </button>
        </Link>
      ) : !isSubscribedCommunity ? (
        <Dialog>
          <DialogTrigger asChild>
            <button
              style={
                {
                  "--bg-color": buttonColor,
                  "--text-color": cardBackgroundColor,
                } as React.CSSProperties
              }
              className="w-full py-3 cursor-pointer rounded-md bg-[var(--text-color)] border border-[var(--bg-color)] text-[var(--bg-color)]"
            >
              Join Community
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Join Community</DialogTitle>
            <DialogDescription className="text-gray-700">
              You're not a member of this community yet. Would you like to join
              now?
            </DialogDescription>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => handleClickJoin(communityId)}
                disabled={isSubscribed}
              >
                Confirm Join
              </button>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Link
          href={`/subscriptions/?planid=${planId}&communityid=${communityId}`}
        >
          <button
            style={
              {
                "--bg-color": buttonColor,
                "--text-color": cardBackgroundColor,
              } as React.CSSProperties
            }
            className={`w-full py-3 cursor-pointer rounded-md ${
              isSubscribed
                ? "bg-[var(--bg-color)] text-[var(--text-color)]"
                : "bg-[var(--text-color)] border border-[var(--bg-color)] text-[var(--bg-color)]"
            }`}
          >
            {isSubscribed ? "Subscribed" : "Subscribe"}
          </button>
        </Link>
      )}
    </div>
  );
};

export default YuvaaPricingCard;
