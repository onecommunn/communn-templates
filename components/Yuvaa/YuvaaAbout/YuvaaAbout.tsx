import React from "react";
import { motion } from "framer-motion";

interface descriptionsListProps {
  description: string;
}

const YuvaaAbout = ({
  image,
  imageHeight,
  imageWidth,
  title,
  descriptionsList,
  backgroundColor,
  titleColor,
  descriptionColor,
  lineColor,
  heroBackgroundColor,
  heroDescription,
  heroTitle,
  heroTextColor,
}: {
  title: string;
  heroDescription: string;
  heroTitle: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  descriptionsList?: descriptionsListProps[];
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  lineColor: string;
  heroBackgroundColor: string;
  heroTextColor: string;
}) => {
  return (
    <main className="flex-grow text-black" style={{ backgroundColor }}>
      {/* Hero Section */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: heroBackgroundColor }}
      >
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl font-bold mb-4"
            style={{ color: heroTextColor }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {heroTitle}
          </motion.h1>
          <motion.div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: lineColor }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ color: heroTextColor }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {heroDescription}
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 lg:px-20" style={{ backgroundColor }}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h1
                className="text-4xl font-bold mb-4"
                style={{ color: titleColor }}
              >
                {title}
              </h1>
              <div
                className="w-24 h-1 mb-6"
                style={{ backgroundColor: lineColor }}
              ></div>

              {Array.isArray(descriptionsList) && descriptionsList.length > 0 ? (
                descriptionsList.map((each, index) => (
                  <motion.p
                    key={index}
                    className="text-gray-600 mb-6"
                    style={{ color: descriptionColor }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {each.description}
                  </motion.p>
                ))
              ) : (
                <motion.p
                  className="text-gray-600 mb-6 italic"
                  style={{ color: descriptionColor }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  No descriptions available.
                </motion.p>
              )}
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={image}
                alt="Workout at home"
                className="w-full aspect-square rounded-3xl shadow-lg object-cover"
                style={{ width: imageWidth, height: imageHeight }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default YuvaaAbout;
