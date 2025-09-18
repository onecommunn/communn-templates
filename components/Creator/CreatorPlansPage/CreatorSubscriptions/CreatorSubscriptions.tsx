"use client";

import { AuthContext } from "@/app/contexts/Auth.context";
import { usePayment } from "@/app/hooks/usePayments";
import { usePlans } from "@/app/hooks/usePlan";
import { IPaymentList } from "@/app/models/payment.model";
import { ISequences, ISubscribers } from "@/app/models/plan.model";
import { ChevronDown } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import PaymentSuccess from "@/components/Yuvaa/YuvaaSubscriptions/PaymentSuccessPopup";
import PaymentFailure from "@/components/Yuvaa/YuvaaSubscriptions/PaymentFailure";

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

  // console.log(isSelected, "isSelected")

  return (
    <div
      onClick={() => {
        if (status !== "PAID") onSelect();
      }}
      className={`flex flex-col items-center space-y-2 cursor-pointer px-3 py-2 rounded-lg border 
       ${isDisabled
          ? "opacity-50 cursor-not-allowed border-gray-200"
          : isSelected
            ? "border-none bg-blue-50"
            : "border-transparent"
        }`}
    >
      <div className="text-sm text-gray-600">{date}</div>
      <div
        className={`w-24 md:w-28 h-10 rounded-2xl border-2 flex items-center justify-center text-sm font-medium ${status === "PAID"
          ? "border-green-600 text-green-600"
          : isSelected
            ? "border-blue-500 bg-blue-100 text-blue-700"
            : "border-gray-300 bg-white text-gray-600"
          }`}
      >
        ₹{amount}
      </div>
      <div
        className={`text-xs ${status === "PAID" ? "text-green-600" : "text-red-500"
          }`}
      >
        {status === "PAID" ? "Paid" : "Not Paid"}
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


const CreatorSubscriptions = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedPayments, setSelectedPayments] = useState<number[]>([]);
  const [subscriptionId, setSubscriptionId] = useState<string>("");
  const [placePrice, setPlacePrice] = useState<string>("0");
  const [sequencesList, setSequencesList] = useState<Sequences[]>([]);
  const [plan, setPlan] = useState<Plan>();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [community, setCommunity] = useState('');
  const [sequenceId, setSequenceId] = useState<string[]>([]);
  const [payLoading, setPayLoading] = useState(false);
  const [planId, setplanId] = useState('');
  const [selectedAmounts, setSelectedAmounts] = useState<{ id: string; amount: number; startDate: string, courseAmount?: string }[]>([]);
  const [subscriptions, setSubscriptions] = useState<ISubscribers>();
  const [sequences, setSequences] = useState<ISequences[]>([]);

  const authContext = useContext(AuthContext);
  const userId = authContext?.user?.id;



  // console.log(authContext?.user?.id, "authContext")

  useEffect(() => {
  }, [authContext.user, authContext.isAuthenticated, authContext.loading, authContext?.user?.id]);


  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {

  }, [authContext])


  const searchParams = useSearchParams();
  const planID = searchParams.get("planid");

  const communityId = searchParams.get("communityid");

  const { createSubscriptionSequencesByPlanAndCommunityId, getSequencesById } = usePlans();

  const handleCreateSubscription = async () => {
    if (!userId) {
      console.warn("User ID not ready yet");
      return;
    }
    try {
      const response: any =
        await createSubscriptionSequencesByPlanAndCommunityId(
          userId,
          communityId || "",
          planID || ""
        );
      setPlan(response?.subscription?.plan);
      setSubscriptionId(response?.subscription?._id);
    } catch (error) {
      console.error("Error creating subscription:", error);
    }
  };

  const handlegetSequencesById = async () => {
    try {
      const response: any = await getSequencesById(subscriptionId, userId);
      setPlacePrice(response?.pricing || "0");
      setSequencesList(response?.sequences || []);
    } catch (error) {
      console.error("Error fetching sequences:", error);
    }
  };

  useEffect(() => {
    if (
      authContext?.isAuthenticated &&
      !authContext?.loading &&
      userId &&
      communityId &&
      planID
    ) {
      handleCreateSubscription();
    }
  }, [userId, communityId, planID, authContext?.isAuthenticated, authContext?.loading]);


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

  // const totalAmount = selectedPayments.length * parseFloat(placePrice || "0");

  const tabs = ["All", "PAID", "NOT_PAID"];



  const formatStatus = (status: string) => {
    return status
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const [successOpen, setSuccessOpen] = useState(false);
  const [timer, setTimer] = useState(5);
  const [failureOpen, setFailureOpen] = useState(false);
  const [transaction, setTransaction] = useState<IPaymentList>();



  const {
    initiatePaymentByIds,
    getPaymentStatusById,
    updateSequencesPaymentStatus,
  } = usePayment();

  enum PaymentStatus {
    SUCCESS = 'SUCCESS',
    PENDING = 'PENDING',
    FAILED = 'FAILED',
    USERCANCELLED = 'USERCANCELLED',
  }


  const handleSuccessClose = () => {
    setTimer(3);
    setSuccessOpen(false);
  };

  const handleFailureClose = () => {
    setTimer(3);
    setFailureOpen(false);
  };


  const paymentResponse = async (response: any, selectedSequences: any) => {
    try {
      // console.log('💬 FULL PAYMENT RESPONSE:', response);

      const tnxId = response?.transactionId;
      const transaction = response?.transaction as IPaymentList;
      if (transaction) {
        setTransaction(transaction);
      }
      if (response?.url) {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const width = Math.min(1000, screenWidth);
        const height = Math.min(1000, screenHeight);
        const left = (screenWidth - width) / 2;
        const top = (screenHeight - height) / 2;

        const windowRef = window.open(
          response.url,
          `addressbar=no,directories=no,titlebar=no,toolbar=no,location=0,status=no,menubar=no,scrollbars=no,resizable=no, width=${width},height=${height},left=${left},top=${top}`
        );

        const intervalRef = setInterval(async () => {
          const paymentStatus = await getPaymentStatusById(tnxId);
          if (paymentStatus && paymentStatus.length > 0) {
            clearInterval(intervalRef);
            windowRef?.close();
            if (paymentStatus[0]?.status === PaymentStatus.SUCCESS) {
              await updateSequencesPaymentStatus(
                communityId || "",
                selectedSequences
              );
              setSuccessOpen(true);
            } else {
              setFailureOpen(true);
            }
          }
        }, 1000);
      } else {
        console.error('Payment URL not provided in response');
      }
    } catch (error) {
      console.error('An error occurred in paymentResponse:', error);
    }
  };

  const handleClickPay = async (communityId: string, planId: string,) => {
    try {
      setPayLoading(true);
      setCommunity(communityId);
      setplanId(planId);
      const amount = totalAmount.toString();
      const response = await initiatePaymentByIds(
        userId,
        planId,
        sequenceId,
        amount,
      );
      const sequenceIds = selectedAmounts
        ?.filter((item: any) => item?.id)
        .map((item: any) => item.id);
      paymentResponse(response, sequenceIds);
      handlegetSequencesById();
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setPayLoading(false);
    }
  };


  const handleSelectAmount = (
    id: string,
    amount: number,
    startDate: string,
  ) => {
    setSelectedAmounts((prev) => {
      if (prev.some((item) => item.id === id)) {
        const updatedAmounts = prev.filter((item) => item.id !== id);
        const sequenceIds = updatedAmounts.map((item) => item.id);
        setSequenceId(sequenceIds);
        return updatedAmounts;
      } else if (prev.length < 10) {
        const updatedAmounts = [...prev, { id, amount, startDate }];
        const sequenceIds = updatedAmounts.map((item) => item.id);
        setSequenceId(sequenceIds);
        return updatedAmounts;
      }
      return prev;
    });
  };



  const totalAmount = selectedAmounts.reduce(
    (acc, curr) => acc + curr.amount + (Number(subscriptions?.courseAmount) || 0),
    0
  );


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
                  {plan?.duration?.toLowerCase()}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Price</div>
                <div className="font-medium capitalize">
                  ₹{plan?.pricing} / {plan?.duration?.toLowerCase()}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Start Date</div>
                <div className="font-medium">
                  {plan?.startDate
                    ? new Date(plan?.startDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                    : "N/A"}
                </div>
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transform transition-transform ${isExpanded ? "rotate-180" : ""
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
                    className={`px-4 py-2 cursor-pointer rounded-md text-sm font-medium transition-colors ${activeTab === tab
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                      }`}
                  >
                    {formatStatus(tab)}
                  </button>
                ))}

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
                      isSelected={selectedAmounts.some((item) => item.id === payment._id)}
                      onSelect={() => handleSelectAmount(payment._id, Number(placePrice), payment?.startDate)}
                    />
                  );
                })}
              </div>

              <div className="flex items-center justify-end mt-8 pt-4 border-t">
                <button
                  className={`px-6 py-2 cursor-pointer rounded-md text-white 
                    ${totalAmount > 0
                      ? "bg-[#FF6347] hover:bg-[#e54b30]"
                      : "bg-gray-300 cursor-not-allowed"
                    }`}
                  disabled={totalAmount === 0}
                  onClick={() => handleClickPay(communityId || "", planID || "")
                  }
                >
                  Pay ₹{totalAmount.toFixed(2)}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <PaymentSuccess
        txnid={transaction?.txnid || ''}
        open={successOpen}
        amount={transaction?.amount || ''}
        timer={timer}
        onClose={handleSuccessClose}
      />
      <PaymentFailure
        open={failureOpen}
        onClose={handleFailureClose}
        amount={transaction?.amount || ''}
        txnid={transaction?.txnid || ''}
        timer={timer}
      />
    </main>

  );
};

export default CreatorSubscriptions;
