import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";
import Image from "next/image";

interface FeatureData {
      steps?: string;
      title: string;
      description: string;
      image: HeaderLogo;
  };
const ContentImage = ({featureData}:{featureData:FeatureData[]}) => {
    return (
      <div className="flex flex-col items-center text-center p-4 md:px-24">
        <h2 className="text-[#2A53A2] text-xl md:text-2xl font-bold pb-2">
          How It Works—It’s Super Simple!
        </h2>
        <p className="text-[#1A2D4C] text-sm md:text-base font-bold leading-7">
          Start managing your business in less than 30 minutes
        </p>
        {featureData.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center md:h-[85vh] space-y-6 md:space-y-0 md:space-x-10 py-8`}
          >
            <div
              className={`w-full md:w-1/2 flex justify-center`}
            >
              <Image src={feature.image} width={600} height={600} alt={feature.title} className="" />
            </div>
            <div className="w-full md:w-1/2 p-4 bg-white  text-left">
              <h3 className="text-[#A5A5A5] text-lg md:text-2xl font-bold pb-2 font-communn">
                {feature.steps}
              </h3>
              <h3 className="text-[#2A53A2] text-lg md:text-2xl font-bold pb-2 font-communn">
                {feature.title}
              </h3>
              <p className="text-[#1A2D4C] text-sm md:text-base leading-7 font-communn">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ContentImage;
  