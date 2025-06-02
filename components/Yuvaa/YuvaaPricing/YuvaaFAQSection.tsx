import { getCommunityData } from "@/app/services/communityService";
import React, { useEffect } from "react";

interface QuestionsListProps {
    question:string,
    answer:string
}

interface YuvaaFAQSectionProps {
    title:string,
    questionsList:QuestionsListProps[];
    backgroundColor:string,
    titleColor:string,
    cardBackgroundColor:string,
    questionColor:string,
    answerColor:string
}

const YuvaaFAQSection = ({title,questionsList,backgroundColor,cardBackgroundColor,titleColor,questionColor,answerColor}:YuvaaFAQSectionProps) => {
  const [FAQList, setFAQList] = React.useState<QuestionsListProps[]>([]);
  const getFaqList = async () => {
      try {
        const communityData: any = await getCommunityData(
          window.location.hostname
        );
        return communityData?.community.faq || [];
      } catch (error) {
        console.error("Error fetching FAQ list:", error);
        return [];
      }
    };
  
    useEffect(() => {
      const fetchServicesList = async () => {
        const services = await getFaqList();
        setFAQList(services);
      };
  
      fetchServicesList();
    }, []);
  
  return (
    <section className="py-16 px-4 bg-gray-50 text-black" style={{backgroundColor:backgroundColor}}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{color:titleColor}}>
          {title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {FAQList?.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm" style={{backgroundColor:cardBackgroundColor}}>
              <h3 className="text-xl font-semibold mb-2" style={{color:questionColor}}>{faq.question}</h3>
              <p className="text-gray-600" style={{color:answerColor}}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YuvaaFAQSection;
