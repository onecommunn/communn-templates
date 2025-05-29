"use client";

import { usePlans } from "@/app/hooks/usePlan";
import { ChevronDown } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PaymentScheduleItem = ({
  date,
  amount,
  status,
  isSelected,
  onSelect,
}: {
  date: string;
  amount: string;
  status: string;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  const isDisabled = status === "paid";

  return (
    <div
      onClick={() => !isDisabled && onSelect()}
      className={`flex flex-col items-center space-y-2 cursor-pointer ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <div className="text-sm text-gray-600">{date}</div>
      <div
        className={`w-24 md:w-28 h-10 rounded-2xl border-2 flex items-center justify-center text-sm font-medium ${
          status === "paid"
            ? "border-teal bg-teal text-white"
            : isSelected
              ? "border-blue-500 bg-blue-100 text-blue-700"
              : "border-gray-300 bg-white text-gray-600"
        }`}
      >
        ₹{amount}
      </div>
      <div
        className={`text-xs ${
          status === "paid" ? "text-teal" : "text-red-500"
        }`}
      >
        {status === "paid" ? "Paid" : "Not Paid"}
      </div>
    </div>
  );
};

interface Sequences {
  _id: string;
  previousStatus: string;
  startDate: string;
  status: string;
}

interface Plan {
  name: string;
  duration: string;
  startDate: string;
  interval: string;
  pricing: string;
}

const YuvaaSubscriptions = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedPayments, setSelectedPayments] = useState<number[]>([]);
  const [subscriptionId, setSubscriptionId] = useState<string>("");
  const [placePrice, setPlacePrice] = useState<string>("0");
  const [sequencesList, setSequencesList] = useState<Sequences[]>([]);
  const [plan, setPlan] = useState<Plan>();
  const [isLoading, setIsLoading] = useState(false);

  const planId = "67d3ecabad5e57b8d6aaef08";
  const communityId = "677e1c869f13316e61af6a6e";


  const searchParams = useSearchParams();
  const planId1 = searchParams.get("planid");

  const { createSubscriptionSequencesByPlanAndCommunityId, getSequencesById } =
    usePlans();

  const handleCreateSubscription = async () => {
    try {
      const response: any =
        await createSubscriptionSequencesByPlanAndCommunityId(
          planId,
          communityId,
          planId
        );
      setPlan(response.subscription.plan);
      setSubscriptionId(response.subscription._id);
    } catch (error) {
      console.error("Error creating subscription:", error);
    }
  };

  const handlegetSequencesById = async () => {
    try {
      const response: any = await getSequencesById(subscriptionId, planId);
      setPlacePrice(response?.pricing || "0");
      setSequencesList(response?.sequences || []);
    } catch (error) {
      console.error("Error fetching sequences:", error);
    }
  };

  useEffect(() => {
    handleCreateSubscription();
  }, []);

  useEffect(() => {
    if (subscriptionId) {
      handlegetSequencesById();
    }
  }, [subscriptionId]);

  const toggleSelectPayment = (index: number) => {
    setSelectedPayments((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const totalAmount = selectedPayments.length * parseFloat(placePrice || "0");

  const tabs = ["All", "PAID", "NOT_PAID"];

  const selectAllUnpaid = () => {
    const unpaidIndexes = sequencesList
      .map((item, index) => (item.status === "Not Paid" ? index : null))
      .filter((index): index is number => index !== null);
    setSelectedPayments(unpaidIndexes);
  };

  const formatStatus = (status: string) => {
    return status
      .toLowerCase() // "not_paid"
      .split("_") // ["not", "paid"]
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // ["Not", "Paid"]
      .join(" "); // "Not Paid"
  };

  return (
    <main className="flex-grow bg-white">
      <div className="mx-auto px-4 py-8 md:px-20">
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div
            className="flex items-center justify-between p-6 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 flex-grow text-black">
              <div>
                <div className="text-sm text-gray-500 mb-1">Plan Name</div>
                <div className="font-medium">{plan?.name}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Plan Type</div>
                <div className="font-medium capitalize">
                  {plan?.duration.toLowerCase()}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Price</div>
                <div className="font-medium capitalize">
                  ₹{plan?.pricing} / {plan?.duration.toLowerCase()}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Start Date</div>
                <div className="font-medium">
                  {plan?.startDate
                    ? new Date(plan.startDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "N/A"}
                </div>
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transform transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>

          {isExpanded && (
            <div className="border-t px-6 pb-6">
              <h3 className="text-lg font-semibold mb-6 mt-4 text-black">
                Payment Schedule
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    {formatStatus(tab)}
                  </button>
                ))}
                <button
                  onClick={selectAllUnpaid}
                  className="ml-auto px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm text-black"
                >
                  Select All Unpaid
                </button>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {sequencesList.map((payment, index) => {
                  const isVisible =
                    activeTab === "All" || payment.previousStatus === activeTab;
                  if (!isVisible) return null;
                  return (
                    <PaymentScheduleItem
                      key={payment._id}
                      date={
                        payment?.startDate
                          ? new Date(payment.startDate).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )
                          : "N/A"
                      }
                      amount={placePrice}
                      status={payment.status}
                      isSelected={selectedPayments.includes(index)}
                      onSelect={() => toggleSelectPayment(index)}
                    />
                  );
                })}
              </div>

              <div className="flex items-center justify-end mt-8 pt-4 border-t">
                <button
                  className={`px-6 py-2 rounded-md text-white ${
                    totalAmount > 0
                      ? "bg-[#FF6347] hover:bg-[#e54b30]"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  disabled={totalAmount === 0}
                >
                  Pay ₹{totalAmount.toFixed(2)}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default YuvaaSubscriptions;
