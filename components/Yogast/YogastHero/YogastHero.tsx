import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const YogastHero = ({
  HeroImage,
  Title,
  Description,
  Button1Text,
  Button2Text,
  FacebookLink,
  TwitterLink,
  LinkedinLink,
  InstagramLink,
  backgroundColor,
  textColor
}: {
  HeroImage: string;
  Title: string;
  Description: string;
  Button1Text: string;
  Button2Text: string;
  FacebookLink: string;
  InstagramLink: string;
  LinkedinLink: string;
  TwitterLink: string;
  backgroundColor:string;
  textColor:string;
}) => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left Content - Orange Background */}
        <div className="w-full md:w-1/2 text-white py-16 md:py-32 px-6 md:px-12" style={{backgroundColor:backgroundColor,color:textColor}}>
          <div className="max-w-lg mx-auto md:ml-auto md:mr-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {Title}
            </h1>
            <p className="text-sm md:text-base opacity-85 mb-8">
              {Description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-2  rounded-full font-medium" style={{backgroundColor:textColor,color:backgroundColor}}>
                {Button1Text}
              </button>
              <button className="border-white text-white  rounded-full border px-6 py-2" style={{color:textColor,borderColor:textColor}}>
                {Button2Text}
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Gray Background with Mobile App Preview */}
        <div className="w-full md:w-1/2 bg-[#E5E5E5] flex items-center justify-center py-16 md:py-0 relative">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={HeroImage}
              alt="Woman practicing yoga"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Orange Circle Navigation */}
          <div className="absolute right-6 flex flex-col gap-2">
            {FacebookLink && (
              <Link href={FacebookLink} className="w-10 h-10 flex items-center justify-center rounded-full" style={{backgroundColor:backgroundColor,color:textColor}}>
                <Facebook />
              </Link>
            )}
            {TwitterLink && (
              <Link href={TwitterLink} className="w-10 h-10 flex items-center justify-center rounded-full" style={{backgroundColor:backgroundColor,color:textColor}}>
                <Twitter />
              </Link>
            )}
            {LinkedinLink && (
              <Link href={LinkedinLink} className="w-10 h-10 flex items-center justify-center rounded-full" style={{backgroundColor:backgroundColor,color:textColor}}>
                <Linkedin />
              </Link>
            )}
             {InstagramLink && (
              <Link href={InstagramLink} className="w-10 h-10 flex items-center justify-center rounded-full" style={{backgroundColor:backgroundColor,color:textColor}}>
                <Instagram />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogastHero;
