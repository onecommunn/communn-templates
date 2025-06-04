import { useCommunity } from "@/app/hooks/useCommunity";
import { FAQItem } from "@/app/models/faq.model";
import { getCommunityData } from "@/app/services/communityService";
import { getFAQs } from "@/app/services/fqaService";
import React, { useEffect, useState } from "react";

interface QuestionsListProps {
  question: string;
  answer: string;
}

interface YuvaaFAQSectionProps {
  title: string;
  questionsList: QuestionsListProps[];
  backgroundColor: string;
  titleColor: string;
  cardBackgroundColor: string;
  questionColor: string;
  answerColor: string;
}

const YuvaaFAQSection = ({
  title,
  questionsList,
  backgroundColor,
  cardBackgroundColor,
  titleColor,
  questionColor,
  answerColor,
}: YuvaaFAQSectionProps) => {
  const [FAQList, setFAQList] = useState<FAQItem[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);

  const { communityId } = useCommunity();

  const fetchFAQs = async () => {
    try {
      setIsLoading(true);
      const response: any = await getFAQs(communityId);
      setFAQList(response.faqs || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      setFAQList([]); 
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (communityId) {
      fetchFAQs(); 
    }
  }, [communityId]);

  if (!Array.isArray(FAQList) || FAQList.length === 0) return null;


  return (
    <section
      className="py-16 px-4 bg-gray-50 text-black"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="container mx-auto">
        <h2
          className="text-3xl font-bold mb-12 text-center"
          style={{ color: titleColor }}
        >
          {title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {isloading ? (
            <div className="col-span-full text-center text-gray-500 text-lg w-full">
              Loading Faqs...
            </div>
          ) : FAQList.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No events found.
            </div>
          ) : (
            FAQList?.map((faq, index) => (
              <div
                key={faq?._id}
                className="bg-white p-6 rounded-lg shadow-sm"
                style={{ backgroundColor: cardBackgroundColor }}
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: questionColor }}
                >
                  {faq?.question}
                </h3>
                <p className="text-gray-600" style={{ color: answerColor }}>
                  {faq?.answer}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default YuvaaFAQSection;
