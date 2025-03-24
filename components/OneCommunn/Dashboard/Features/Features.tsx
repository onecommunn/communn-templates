import { HeaderLogo } from '@/lib/types/Header/HeaderLogo';
import Image from 'next/image';
import React from 'react';

interface FeaturesProps {
  featureData: {
    title: string;
    description: string;
    image: HeaderLogo;
  }[];
  features: {
    title: string;
    description: string;
    image: HeaderLogo;
  }[];
  banner1: HeaderLogo;
  banner2: HeaderLogo;
  sectionTitle: string;
  sectionSubTitle: string;
  sectionHeading: string;
}

const Features: React.FC<FeaturesProps> = ({
  features,
  featureData,
  banner1,
  banner2,
  sectionTitle,
  sectionSubTitle,
  sectionHeading,
}) => {
  return (
    <>
      <div
        className="bg-cover bg-center flex items-start justify-center overflow-hidden h-[90vh] md:h-[100vh] mt-[-3rem]"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-[#2952A2] font-bold mt-40 md:mt-40 text-[20px] md:text-[30px] text-center font-montserrat"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {sectionTitle}
          </h1>
          <h2
            className="text-[#3B9B7F] font-bold text-[20px] md:text-[30px] text-center font-montserrat"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {sectionSubTitle}
          </h2>
          <button
            className="bg-black text-white font-montserrat capitalize rounded-lg text-center px-6 py-3 mt-10 md:mt-5 hover:bg-[#50A1CA] transition-colors"
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={() => window.open("https://admin.onecommunn.com/", "_blank")}
          >
            Get Started for free
          </button>
        </div>
      </div>
      <div className="bg-transparent h-fit mt-[-40rem] md:mt-[-25rem]">
        <Image
          src={banner1}
          alt="Background Image"
          className="w-full h-full object-cover relative mt-[35rem] md:mt-0"
          data-aos="fade-up"
          data-aos-duration="1000"
          width={800}
          height={800}
        />
      </div>
      <div className="mt-10 md:mt-20">
   50     <h2
          className="text-[#2A53A2] text-[25px] md:text-[30px] font-montserrat font-bold text-center pb-2 px-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {sectionHeading}
        </h2>
      </div>
      {/* Features Start */}
      <div className="flex flex-row justify-center items-center mx-10  md:mx-24 pt-5 md:pt-10 pb-5 md:pb-10 mb-5 rounded-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="col-span-1 rounded-2xl shadow-md">
              <div className="pt-7 pb-7 pl-4 pr-4 rounded-[15px] flex flex-col items-center justify-center">
                <Image src={feature.image} alt="" className="w-[35%]" width={500} height={500}/>
                <h3 className="font-montserrat text-[17px] font-bold p-1 text-center text-[#2952A2]">
                  {feature.title}
                </h3>
                <p className="font-montserrat text-[14px] text-black p-1 text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Features End */}

      {/* Features Data Start */}
      {featureData.map((feature, index) => (
        <div
          key={index}
          className="flex justify-center items-center h-fit md:h-[85vh]"
        >
          <div className="flex flex-col">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-24 gap-4 md:gap-14 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`col-span-1 m-2 md:m-0 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <Image
                  src={feature.image}
                  alt=""
                  className="w-full"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  width={500}
                  height={500}
                />
              </div>
              <div className={`col-span-1  flex items-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="ml-2 pt-0 md:pt-6 pb-0 md:pb-6 bg-white rounded-[15px]">
                  <div className="p-2   shadow-none">
                    <h3
                      className="text-[#2A53A2] text-[18px] md:text-[24px] font-montserrat font-bold pb-2"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="font-montserrat text-[#1A2D4C] text-[13px] md:text-[16px] leading-[30px]"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Features Data End */}
    </>
  );
};

export default Features;