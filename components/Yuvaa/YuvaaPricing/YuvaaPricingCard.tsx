
import { AuthContext } from "@/app/contexts/Auth.context";
import { ISubscribers } from "@/app/models/plan.model";
import { Check } from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from 'react-redux';

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
  nextDueDate
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
  communityId: string
  subscribers: { _id: string }[];
  nextDueDate: string,
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
  const [mounted, setMounted] = useState(false);
  // console.log(userId, "loggedInUserData");

  const isSubscribed = subscribers?.some(sub => sub._id === userId);



  // Log context value changes
  useEffect(() => {

  }, [authContext.user, authContext.isAuthenticated, authContext.loading]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`bg-white rounded-lg flex flex-col justify-between shadow-lg p-8 border ${isPopular ? "border-[var(--border-color)]" : "border-transparent"} relative`}
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
        <p
          className="text-gray-600 mb-6"
          style={{ color: cardSecondaryColors }}
        >
          {description.length > 100 ? description?.slice(0, 100) + "..." : description}
        </p>
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


      {authContext.isAuthenticated ? (
        <Link href={`/subscriptions/?planid=${planId}&communityid=${communityId}`}>
          <button
            style={
              {
                "--bg-color": buttonColor,
                "--text-color": cardBackgroundColor,
              } as React.CSSProperties
            }
            className={`w-full py-3 rounded-md ${isSubscribed
              ? "bg-[var(--bg-color)] hover:bg-[var(--bg-color)]-dark text-[var(--text-color)]"
              : "bg-[var(--text-color)] border border-[var(--bg-color)] text-[var(--bg-color)]"
              }`}
          >
            {isSubscribed ? "Subscribed" : "Subscribe"}
          </button>
        </Link>
      ) : (
        <Link href="/auto-login">
          <button
            style={
              {
                "--bg-color": buttonColor,
                "--text-color": cardBackgroundColor,
              } as React.CSSProperties
            }
            className={`w-full py-3 rounded-md ${isSubscribed
              ? "bg-[var(--bg-color)] hover:bg-[var(--bg-color)]-dark text-[var(--text-color)]"
              : "bg-[var(--text-color)] border border-[var(--bg-color)] text-[var(--bg-color)]"
              }`}
          >
            Subscribe
          </button>
        </Link>
      )}
    </div>
  );
};

export default YuvaaPricingCard;
