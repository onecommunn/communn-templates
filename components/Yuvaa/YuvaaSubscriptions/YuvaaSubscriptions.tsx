import { ChevronDown, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import YuvaaHeader from "../YuvaaHeader/YuvaaHeader";

const PaymentScheduleItem = ({
  date,
  amount,
  status,
  isSelected,
  onSelect,
}: {
  date: string;
  amount: string;
  status: "paid" | "unpaid";
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

const YuvaaSubscriptions = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedPayments, setSelectedPayments] = useState<number[]>([]);

  const paymentSchedule = [
    { date: "29 May 2025", amount: "1", status: "unpaid" as const },
    { date: "29 Jun 2025", amount: "1", status: "unpaid" as const },
    { date: "29 Jul 2025", amount: "1", status: "unpaid" as const },
    { date: "29 Aug 2025", amount: "1", status: "unpaid" as const },
    { date: "29 Sept 2025", amount: "1", status: "unpaid" as const },
    { date: "29 Oct 2025", amount: "1", status: "unpaid" as const },
    { date: "29 Nov 2025", amount: "1", status: "unpaid" as const },
    { date: "29 Dec 2025", amount: "1", status: "unpaid" as const },
    { date: "29 Jan 2026", amount: "1", status: "unpaid" as const },
    { date: "01 Mar 2026", amount: "1", status: "unpaid" as const },
    { date: "01 Apr 2026", amount: "1", status: "unpaid" as const },
  ];

  const tabs = ["All", "Paid", "Unpaid"];

  const toggleSelectPayment = (index: number) => {
    setSelectedPayments((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isPayButtonEnabled = selectedPayments.length > 0;

  return (
    <main className="flex-grow bg-white">
      <div className="mx-auto px-4 py-8 md:px-20">
        <div className="bg-white rounded-lg shadow-sm border mb-6 ">
          <div
            className="flex items-center justify-between p-6 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 flex-grow text-black">
              <div>
                <div className="text-sm text-gray-500 mb-1">Plan Name</div>
                <div className="font-medium">Personal Yoga Training</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Plan Type</div>
                <div className="font-medium">Month</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Price</div>
                <div className="font-medium">₹1 / 1 Month</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Start Date</div>
                <div className="font-medium">2025-05-29</div>
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

              {/* <div className="flex space-x-1 mb-6">
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
                      {tab}
                    </button>
                  ))}
                </div> */}

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {paymentSchedule.map((payment, index) => {
                  const isVisible =
                    activeTab === "All" ||
                    payment.status === activeTab.toLowerCase();
                  if (!isVisible) return null;

                  return (
                    <PaymentScheduleItem
                      key={index}
                      date={payment.date}
                      amount={payment.amount}
                      status={payment.status}
                      isSelected={selectedPayments.includes(index)}
                      onSelect={() => toggleSelectPayment(index)}
                    />
                  );
                })}
              </div>

              <div className="flex items-center justify-between mt-8 pt-4 border-t">
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Breakdown
                </button>
                <button
                  className={`px-6 py-2 rounded-md text-white ${
                    isPayButtonEnabled
                      ? "bg-[#FF6347] hover:bg-[#e54b30]"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  disabled={!isPayButtonEnabled}
                >
                  Pay ₹{selectedPayments.length}
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
