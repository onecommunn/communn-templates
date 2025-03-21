"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ITableContent {
  heading?: string;
  subheading?: string;
  accordionContent: {
    label?: string;
    image?: HeaderLogo;
    title?: string;
    description?: string;
  }[];
}

const LandingTab = (props: ITableContent) => {
  const [expanded, setExpanded] = useState<string | false>("panel0");
  const handleChange = (panel: string) => {
    setExpanded(expanded === panel ? false : panel);
  };

  const router = useRouter();
  const handleClick = () => {
    router.push("/contact-us");
  };

  return (
    <div className="px-4 md:px-20 w-full md:h-[1000px] h-auto">
      {/* Heading Section */}
      <div className="py-4 text-center">
        <h3 className="text-2xl md:text-4xl font-bold text-blue-700">
          {props?.heading}
        </h3>
        <p className="text-gray-800 text-base md:text-base font-medium mt-2">
          {props?.subheading}
        </p>
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 ">
        <div className="hidden md:flex ">
          <TransitionGroup>
            {props?.accordionContent.map((content, index) => (
              <CSSTransition key={index} timeout={500} classNames="fade">
                <div
                  className={expanded === `panel${index}` ? "block" : "hidden"}
                >
                  {content.image && content.title && (
                    <Image
                      src={content.image}
                      alt={content.title}
                      width={800}
                      height={800}
                    />
                  )}
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>

        <div className="w-full">
          {props?.accordionContent.map((content, index) => (
            <div
              key={index}
              className="border-b py-3 cursor-pointer"
              onClick={() => handleChange(`panel${index}`)}
            >
              <div className="flex justify-between items-center">
                <h4
                  className={`text-lg font-bold ${
                    expanded === `panel${index}`
                      ? "text-blue-700"
                      : "text-gray-900"
                  }`}
                >
                  {content.label}
                </h4>
                <span>
                  {expanded === `panel${index}` ? (
                    <ChevronUp color="black" />
                  ) : (
                    <ChevronDown color="black" />
                  )}
                </span>
              </div>
              {expanded === `panel${index}` && (
                <p className="mt-2 text-gray-700 text-sm md:text-base">
                  {content.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden px-7">
        {props?.accordionContent.map((content, index) => (
          <div>
            <h4 className="text-blue-700 text-xl font-bold mt-4">{content.title}</h4>
            <p className="text-gray-700 text-sm md:text-bas my-2">{content.description}</p>
            <div>
              {content.image && content.title && (
                <Image
                  src={content.image}
                  alt={content.title}
                  width={800}
                  height={800}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-10">
        <button
          onClick={handleClick}
          className="bg-black text-white px-5 py-2 text-base rounded-full hover:bg-blue-500 transition font-communn"
        >
          Get A Free Installation Now!
        </button>
        <p className="text-gray-700 mt-2 text-sm md:text-base font-medium">
          Only for early customers
        </p>
      </div>
    </div>
  );
};

export default LandingTab;
