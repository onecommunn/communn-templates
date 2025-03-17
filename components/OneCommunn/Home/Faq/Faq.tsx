"use client";

import { useState } from "react";

interface FaqData {
  question: string;
  answer: string;
}

export const Faq = ({ faqData }: { faqData: FaqData[] }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange = (panel: string) => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <div className="mt-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="bg-gray-200 rounded-lg p-6 mt-2 md:mx-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {faqData?.map((item, index) => (
            <div key={index} className="w-full">
              <div
                className="bg-white rounded-lg shadow-md cursor-pointer p-4 mb-4 min-h-22 flex items-center flex-wrap"
                onClick={() => handleAccordionChange(`panel${index}`)}
              >
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-lg font-semibold text-black text-left flex-1 ">
                    {item.question}
                  </h3>
                  {/* <span className="text-white text-xl bg-blue-600 flex items-center justify-center rounded-sm h-[16px] w-[16px]">
                    {expanded === `panel${index}` ? "−" : "+"}
                  </span> */}
                  <span
                    className={`text-white text-xl bg-[#2a53a2] flex items-center justify-center rounded-sm h-[18px] w-[18px] transform transition-transform duration-200 ease-in-out ${
                      expanded === `panel${index}` ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {expanded === `panel${index}` ? "−" : "+"}
                  </span>
                </div>
                {expanded === `panel${index}` && (
                  <p className="mt-2 text-gray-700 text-left w-[90%] ">
                    {item.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
