import React from "react";
import YogastPricingSection from "../YogastPricingSection/YogastPricingSection";

interface Features {
  feature: string;
}
interface PlansList {
  title: string;
  price: string;
  features: Features[];
  ButtonText: string;
}

interface QuestionsListProps {
  Question: string;
  Answer: string;
}

const YogastPricing = ({
  Title,
  SubTitle,
  PriceListSectionSubTitle,
  PriceListSectionTitle,
  PlansList,
  FaqTitle,
  QuestionsList,
  headerBackgroundColor,
  headerTitleColor,
  pricingBackgroundColor,
  pricingButtonBackgroundColor,
  pricingTextColor,
  pricingcardBackgroundColor,
  FaqBackgroundColor,
  questionTextColor,
  answerTextColor
}: {
  PlansList: PlansList[];
  Title: string;
  SubTitle: string;
  PriceListSectionTitle: string;
  PriceListSectionSubTitle: string;
  FaqTitle: string;
  QuestionsList: QuestionsListProps[];
  headerBackgroundColor:string,
  headerTitleColor:string,
  pricingBackgroundColor:string,
  pricingcardBackgroundColor:string,
  pricingTextColor:string,
  pricingButtonBackgroundColor:string,
  FaqBackgroundColor:string,
  questionTextColor:string,
  answerTextColor:string
}) => {
  return (
    <main className="flex-grow">
      <section className="py-16" style={{backgroundColor:headerBackgroundColor,color:headerTitleColor}}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {Title}
          </h1>
          <p className="max-w-2xl mx-auto">{SubTitle}</p>
        </div>
      </section>

      <YogastPricingSection
        Title={PriceListSectionTitle}
        Description={PriceListSectionSubTitle}
        PlansList={PlansList}
        backgroundColor={pricingBackgroundColor}
        cardBackgroundColor={pricingcardBackgroundColor}
        textColor={pricingTextColor}
        buttonBackgroundColor={pricingButtonBackgroundColor}
      />
      

      <section className="py-16" style={{backgroundColor:FaqBackgroundColor}}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{color:headerBackgroundColor}}>
              {FaqTitle}
            </h2>

            <div className="space-y-6">
              {QuestionsList?.map((each, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium mb-2" style={{color:questionTextColor}}>
                    {each.Question}
                  </h3>
                  <p style={{color:answerTextColor}}>{each.Answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default YogastPricing;
