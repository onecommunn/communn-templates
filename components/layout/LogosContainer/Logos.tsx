// Logos.tsx
import React from "react";
import Styles from "./Logos.module.css";
import { LogoProps } from "../../../lib/types/type";

//"header-logos flex justify-center items-center space-x-8 mb-12

export const Logos: React.FC<LogoProps> = ({ Logos }) => {
  return (
    <div className="flex items-center justify-center w-fullmy-5">
      <div className="grid grid-cols-5 gap-10 w-full mx-auto">
        {Logos.map((logo, index) => (
          <div className="flex items-center justify-center"   key={index}>
            <img
              className="h-[75px] w-[200px]"
           
              src={logo.src}
              alt={logo.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
