import React from "react";
import { motion } from "framer-motion";
import YuvaaFeatureCard from "./YuvaaFeatureCard";

interface FeaturesListProps {
  icon: string;
  size: number;
  featureTitle: string;
  fertureDescription: string;
}

const YuvaaFeaturesSection = ({
  Title,
  description,
  featuresList,
  backgroundColor,
  titleColor,
  descriptionColor,
  cardBackgroundColor,
  iconColor,
  featureTitleColor,
  fertureDescriptionColor,
  iconBackgroundColor,
}: {
  Title: string;
  description: string;
  featuresList: FeaturesListProps[] | undefined;
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  cardBackgroundColor: string;
  iconColor: string;
  featureTitleColor: string;
  fertureDescriptionColor: string;
  iconBackgroundColor: string;
}) => {
  if (!featuresList || featuresList.length === 0) {
    return (
      <section className="py-16 px-4 lg:px-20 text-black" style={{ backgroundColor }}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: titleColor }}>
            {Title}
          </h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: descriptionColor }}>
            {description}
          </p>
          <p className="text-lg" style={{ color: descriptionColor }}>
            No features available at the moment.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 lg:px-20 text-black" style={{ backgroundColor }}>
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: titleColor }}>
            {Title}
          </h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: descriptionColor }}>
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <YuvaaFeatureCard
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YuvaaFeaturesSection;
