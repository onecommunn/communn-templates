import React, { useState } from "react";
import { motion } from "framer-motion";

const YuvaaHeroSection = ({
  titleText,
  description,
  buttonText,
  backgroundColor,
  titleTextColor,
  descriptionColor,
  buttonBackgroundColor,
  buttonTextColor,
  heroImage,
  imageHeight,
  imageWidth,
}: {
  titleText: string;
  description: string;
  buttonText: string;
  backgroundColor: string;
  titleTextColor: string;
  descriptionColor: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  heroImage: string;
  imageWidth: number;
  imageHeight: number;
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", email);
    setEmail("");
  };

  return (
    <section
      className="py-12 md:py-20 px-4 lg:px-20 text-black relative overflow-hidden"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-14">
          
          {/* Animated Text */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{ color: titleTextColor }}
            >
              {titleText}
            </h1>
            <p
              className="text-gray-600 mb-8 max-w-full"
              style={{ color: descriptionColor }}
            >
              {description}
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                type="submit"
                className="py-3 px-6 rounded-md cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: buttonBackgroundColor,
                  color: buttonTextColor,
                }}
              >
                {buttonText}
              </button>
            </form>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src={heroImage}
              alt="Hero"
              height={imageHeight}
              width={imageWidth}
              className="rounded-3xl shadow-lg"
            />
            <div
              className="absolute -top-8 -right-8 w-12 h-12 rounded-full opacity-70"
              style={{ backgroundColor: buttonBackgroundColor }}
            />
            <div
              className="absolute -left-6 bottom-1/3 w-8 h-8 rounded-full opacity-70"
              style={{ backgroundColor: buttonBackgroundColor }}
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default YuvaaHeroSection;
