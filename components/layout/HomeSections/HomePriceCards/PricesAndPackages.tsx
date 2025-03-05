"use client";
import * as React from "react";
import PricingCard from "./PricingCard";
import { PriceCardProps } from "../../../../lib/types/type";

const PricesAndPackages: React.FC<PriceCardProps> = ({ pricingData }) => {
  return (
    <section className="pb-10 rounded-none max-md:pb-24">
      <div className="flex flex-col items-center px-20 pt-16 w-full bg-stone-300 max-md:px-5 max-md:max-w-full">
        <div className="flex z-10 flex-col items-center mb-0 w-full max-w-[1430px] max-md:mb-2.5 max-md:max-w-full pb-10">
          <h2 className="text-5xl text-center text-zinc-800 max-md:text-4xl">
            Plans
          </h2>
          <p className="mt-11 text-sm leading-loose text-center text-zinc-800 max-md:mt-10 max-md:max-w-full">
            Duis aute irure dolor reprehenderit voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </p>
          <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
              {pricingData.map((item, index) => (
                <div className="max-w-[33%] min-w-fit max-md:ml-0 max-md:w-full h-fit" key={index}>
                  <PricingCard
                    title={item.title}
                    trainingCount={item.trainingCount}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0c435e256a2f6756cad6c96af9da2b40762fb5fe9b50d0404f68e8ae4f4c2684?placeholderIfAbsent=true&apiKey=228d3b2c4554432dbdd1f0f27ee6ba7c"
                    schedule={item.schedule}
                    scheduleIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1465bf4cf2c387e14164a98c435ab426855c7a66211625ba9ea2cffa04329dd0?placeholderIfAbsent=true&apiKey=228d3b2c4554432dbdd1f0f27ee6ba7c"
                    trainer={item.trainer}
                    trainerIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0449f8a0d70523ee4a8a122a5e629a1f5f5db97984b0afdf2f4935c8dc45943e?placeholderIfAbsent=true&apiKey=228d3b2c4554432dbdd1f0f27ee6ba7c"
                    description={item.description}
                    price={item.price}
                    taxInfo={item.includeTax}
                    isHighlighted={item.isHighlighted}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesAndPackages;
