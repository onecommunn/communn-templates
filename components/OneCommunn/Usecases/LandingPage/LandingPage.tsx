import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";
import Image from "next/image";
import React from "react";

interface UseCasesProps {
  pageSubTitle?: string;
  pageDescription?: string;
  banner1?: HeaderLogo;
  banner2?: HeaderLogo;
  banner3?: HeaderLogo;
  banner4?: HeaderLogo;
  featureData: {
    title: string;
    description: string;
    image: HeaderLogo;
    list1?: string;
    list2?: string;
    list3?: string;
  }[];
  bonus?: string;
  bonusFirstHeading?: string;
  bonusSubheading?: string;
  bonusHeading1?: string;
  bonusHeading2?: string;
  bonusHeading3?: string;
  bonusDescription?: string;
  bonusDescription1?: string;
  bonusDescription2?: string;
  bonusDescription3?: string;
  bonusImage?: HeaderLogo;
  onClick: () => void;
}

const LandingPage: React.FC<UseCasesProps> = ({
  featureData,
  banner1,
  banner2,
  banner3,
  banner4,
  pageDescription,
  pageSubTitle,
  bonus,
  bonusFirstHeading,
  bonusSubheading,
  bonusHeading1,
  bonusHeading2,
  bonusHeading3,
  bonusDescription,
  bonusDescription1,
  bonusDescription2,
  bonusDescription3,
  bonusImage,
  onClick,
}) => {
  return (
    <div>
      <div className="flex items-center h-fit md:h-[110vh] justify-between md:flex-row flex-col">
        <div className="w-full md:w-7/12 p-4 md:pl-10 md:pb-6 bg-white text-center md:text-left">
          <div className="md:p-24 p-10 space-y-4">
            <h1
              className="text-[#2A53A2] text-xl md:text-3xl font-bold font-montserrat"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {pageSubTitle}
            </h1>
            <p
              className="text-[#1A2D4C] text-sm md:text-base leading-relaxed font-montserrat md:mr-20"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {pageDescription}
            </p>
            <a href="#form" className="inline-block">
              <button
                className="bg-[#2952A2] text-white px-6 py-3 rounded-lg font-montserrat hover:bg-[#1a3a7a] transition-colors"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Book a demo
              </button>
            </a>
          </div>
        </div>
        <div className="md:w-[40%] w-full">
          <Image
            src={banner1 || ""}
            alt="Hero"
            width={1200}
            height={1200}
            className="mt-10"
          />
        </div>
      </div>
      {/* Features Section */}
      {featureData.map((feature, index) => (
        <div
          key={index}
          className="w-full flex justify-center items-center my-10"
        >
          <div className="w-full max-w-7xl mx-4">
            <div
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 bg-white p-4 rounded-lg">
                <h3
                  className="text-[#2A53A2] text-lg md:text-2xl font-bold font-montserrat mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {feature.title}
                </h3>
                <p className="text-[#1A2D4C] text-sm md:text-base leading-relaxed font-montserrat mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {[feature.list1, feature.list2, feature.list3].map(
                    (item, i) =>
                      item && (
                        <li
                          key={i}
                          className="text-[#1A2D4C] text-sm md:text-base ml-4 font-montserrat"
                          data-aos="fade-up"
                          data-aos-duration="900"
                        >
                          - {item}
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}

<div className="w-full flex justify-center items-center h-fit md:h-[85vh] my-10">
        <div className="w-full max-w-7xl mx-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Text Content */}
            <div className="w-full md:w-1/2 bg-white p-4 rounded-lg">
              <h3 className="text-[#2A53A2] text-lg md:text-2xl font-bold font-montserrat mb-4">
                {bonus}
              </h3>
              <p className="text-[#1A2D4C] text-sm md:text-base font-medium font-montserrat mb-4">
                {bonusSubheading}
              </p>
              <h4 className="text-[#2A53A2] text-base font-bold font-montserrat mb-2">
                {bonusFirstHeading}
              </h4>
              <p className="text-[#1A2D4C] text-sm md:text-base font-montserrat mb-4">
                {bonusDescription}
              </p>
              
              {[bonusHeading1, bonusHeading2, bonusHeading3].map((heading, index) => (
                <div key={index} className="mb-4">
                  <span className="text-[#2A53A2] text-sm md:text-base font-medium font-montserrat">
                    {heading}
                  </span>{' '}
                  <span className="text-[#1A2D4C] text-sm md:text-base font-montserrat">
                    {[bonusDescription1, bonusDescription2, bonusDescription3][index]}
                  </span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={bonusImage || ''}
                alt="Bonus"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default LandingPage;
