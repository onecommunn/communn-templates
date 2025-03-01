"use client";
import * as React from "react";

const YogaPromoBanner: React.FC = () => {
  return (
    <article className="flex flex-col grow items-start px-20 pt-72 pb-36 w-full rounded-3xl bg-stone-400 text-zinc-800 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[348px]">
        <h2 className="text-7xl max-md:text-4xl">
          Yoga Poses
          <br />
          Your Body
        </h2>
        <p className="self-start mt-4 ml-2.5 text-2xl leading-none">
          To Boost Your Productivity
        </p>
      </div>
    </article>
  );
};

export default YogaPromoBanner;
