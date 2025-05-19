import {
  Activity,
  Brain,
  Coffee,
  Heart,
  Moon,
  Shield,
  Stethoscope,
  Sun,
  Wind,
} from "lucide-react";
import React from "react";
import YuvaaFeatureCard from "../YuvaaFeaturesSection/YuvaaFeatureCard";

interface FeaturesListProps {
  icon: string;
  size: number;
  featureTitle: string;
  fertureDescription: string;
}

interface YuvaaFeaturesProps {
  title: string;
  description: string;
  featuresList?: FeaturesListProps[];
  cardBackgroundColor: string;
  iconColor: string;
  featureTitleColor: string;
  fertureDescriptionColor: string;
  iconBackgroundColor: string;
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  lineColor: string;
  heroBackgroundColor:string
}

const YuvaaFeatures = ({
  featuresList,
  cardBackgroundColor,
  iconColor,
  iconBackgroundColor,
  featureTitleColor,
  fertureDescriptionColor,
  backgroundColor,
  titleColor,
  descriptionColor,
  title,
  description,
  lineColor,
  heroBackgroundColor
}: YuvaaFeaturesProps) => {
  return (
    <main className="flex-grow bg-white text-black" style={{ backgroundColor }}>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-50" style={{ backgroundColor:heroBackgroundColor }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: titleColor }}>{title}</h1>
          <div className="w-24 h-1 bg-[#20B2AA] mx-auto mb-6" style={{ backgroundColor: lineColor }}></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6" style={{ color: descriptionColor }}>
            {description}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {Array.isArray(featuresList) && featuresList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresList.map((feature, index) => (
                <YuvaaFeatureCard
                  key={index}
                  icon={feature.icon}
                  size={feature.size}
                  title={feature.featureTitle}
                  description={feature.fertureDescription}
                  cardBackgroundColor={cardBackgroundColor}
                  iconColor={iconColor}
                  featureTitleColor={featureTitleColor}
                  fertureDescriptionColor={fertureDescriptionColor}
                  iconBackgroundColor={iconBackgroundColor}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 italic" style={{ color: descriptionColor }}>
              No features available at the moment.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default YuvaaFeatures;
