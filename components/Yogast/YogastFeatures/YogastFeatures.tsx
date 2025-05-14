import { Check } from "lucide-react";
import React from "react";

interface FeaturesProps {
  title: string;
  description: string;
}

const YogastFeatures = ({
  title,
  subTitle,
  Features,
  headerBackgroundColor,
  headerTitleColor,
  backgroundColor,
  cardBackgroundColor,
  TitleTextColor,
  TextColor,
}: {
  title: string;
  subTitle: string;
  Features: FeaturesProps[];
  headerBackgroundColor: string;
  headerTitleColor: string;
  backgroundColor: string;
  cardBackgroundColor: string;
  TitleTextColor: string;
  TextColor: string;
}) => {
  return (
    <main className="flex-grow">
      <section
        className="py-16"
        style={{
          backgroundColor: headerBackgroundColor,
          color: headerTitleColor,
        }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="max-w-2xl mx-auto">{subTitle}</p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: backgroundColor }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Features?.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md"
                style={{ backgroundColor: cardBackgroundColor }}
              >
                <div
                  className="p-2 rounded-full inline-block mb-4"
                  style={{
                    backgroundColor: headerBackgroundColor,
                    color: cardBackgroundColor,
                  }}
                >
                  <Check size={20} />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: TitleTextColor }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600" style={{ color: TextColor }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default YogastFeatures;
