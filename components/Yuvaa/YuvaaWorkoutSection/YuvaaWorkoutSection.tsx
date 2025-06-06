import React from "react";
import { motion } from "framer-motion";

const YuvaaWorkoutSection = ({
  title,
  ImageUrl,
  description,
  buttonText,
  backgroundColor,
  titleColor,
  descriptionColor,
  buttonTextColor,
  buttonBackgroundColor,
  lineColor,
  imageHeight,
  imageWidth,
}: {
  ImageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  buttonTextColor: string;
  buttonBackgroundColor: string;
  lineColor: string;
  imageWidth: number;
  imageHeight: number;
}) => {
  return (
    <section
      className="py-16 px-4 lg:px-20 bg-white text-black"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={ImageUrl}
              alt="Workout at home"
              className="w-full aspect-square rounded-3xl shadow-lg object-cover"
              style={{ width: imageWidth, height: imageHeight }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: titleColor }}
            >
              {title}
            </h2>
            <motion.div
              className="w-24 h-1 mb-6"
              style={{ backgroundColor: lineColor }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <p
              className="text-gray-600 mb-8"
              style={{ color: descriptionColor }}
            >
              {description}
            </p>
            <motion.button
              className="cursor-pointer px-4 rounded-md py-2"
              style={{
                backgroundColor: buttonBackgroundColor,
                color: buttonTextColor,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonText}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YuvaaWorkoutSection;
