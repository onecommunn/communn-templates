import { AuthContext } from "@/app/contexts/Auth.context";
import { usePlans } from "@/app/hooks/usePlan";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import { Check } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "sonner";

const renderDescription = (
  event: string,
  title: string,
  MAX_PREVIEW_CHARS: number,
) => {
  const desc = event ?? "";
  const shouldTruncate = desc.length > MAX_PREVIEW_CHARS;

  if (!shouldTruncate) {
    return <p className="text-white mb-4">{desc}</p>;
  }

  return (
    <div className="mb-2">
      <p className="text-white  line-clamp-3">{desc}</p>
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

interface Features {
  feature: string;
}

const YogastPricingCard = ({
  title,
  price,
  period,
  description,
  features,
  //   isPopular = false,
  //   buttonColor,
  //   cardSecondaryColors,
  //   cardPrimaryColor,
  //   cardBackgroundColor,
  //   iconsColor,
  //   isUserSubscribed,
  planId,
  communityId,
  subscribers,
  //   nextDueDate,
  isSubscribedCommunity,
  fetchPlans,
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: Features[];
  //   isPopular?: boolean;
  //   cardBackgroundColor: string;
  //   buttonColor: string;
  //   cardSecondaryColors: string;
  //   cardPrimaryColor: string;
  //   iconsColor: string;
  //   isUserSubscribed?: boolean;
  planId: string;
  communityId: string;
  subscribers: { _id: string }[];
  //   nextDueDate: string;
  isSubscribedCommunity?: boolean;
  fetchPlans?: () => void;
}) => {
  const authContext = useContext(AuthContext);
  const userId = authContext?.user?.id;
  const isLoggedIn = !!userId;
  const MAX_PREVIEW_CHARS = 150;

  const { joinToPublicCommunity } = usePlans();

  const isSubscribed =
    isLoggedIn && subscribers?.some((sub) => sub._id === userId);

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
    <div className="bg-[#FF5E14] rounded-lg overflow-hidden text-white flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="font-bold text-xl mb-4 capitalize">{title}</h3>
        {renderDescription(description, title, MAX_PREVIEW_CHARS)}
        <ul className="space-y-2 mb-6">
          {features?.map((feature, index) => (
            <li key={index} className="text-sm flex items-start">
              <Check className="mr-2 h-5 w-5 text-white flex-shrink-0 mt-0.5" />
              {feature.feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 border-t border-white/20">
        <div className="font-bold text-xl mb-4">
          ${price} <span className="text-sm font-normal">/ {period}</span>
        </div>

        {!isLoggedIn ? (
          <Link href="/login">
            <button
              //   style={
              //     {
              //       "--bg-color": buttonColor,
              //       "--text-color": cardBackgroundColor,
              //     } as React.CSSProperties
              //   }
              className="w-full py-3 cursor-pointer rounded-md bg-[var(--text-color)] border border-[var(--bg-color)] text-[var(--bg-color)]"
            >
              Login to Subscribe
            </button>
          </Link>
        ) : !isSubscribedCommunity ? (
          <Dialog>
            <DialogTrigger asChild>
              <button
                // style={
                //   {
                //     "--bg-color": buttonColor,
                //     "--text-color": cardBackgroundColor,
                //   } as React.CSSProperties
                // }
                className="w-full py-3 cursor-pointer rounded-md bg-[var(--text-color)] border border-[var(--bg-color)] text-[var(--bg-color)]"
              >
                Join Community
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Join Community</DialogTitle>
              <DialogDescription className="text-gray-700">
                You're not a member of this community yet. Would you like to
                join now?
              </DialogDescription>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 bg-[#FF5E14] text-white rounded-md"
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
              // style={
              //   {
              //     "--bg-color": buttonColor,
              //     "--text-color": cardBackgroundColor,
              //   } as React.CSSProperties
              // }
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
    </div>
  );
};

export default YogastPricingCard;
