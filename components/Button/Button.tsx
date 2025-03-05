"use client";
import * as React from "react";

interface ContactButtonProps {
  text?: string;
  width?: string;
  height?: string;
  keepArrow?:boolean
}

/**
 * ContactButton component that displays a styled button with text and an arrow.
 * The button has responsive design for different screen sizes and proper accessibility.
 * Now supports dynamic width and height through props.
 */
function ContactButton({
  text = "Contact Now",
  width,
  height,
  keepArrow,
}: ContactButtonProps) {
  // Base styles that will always be applied
  const baseStyles =
    "inline-flex gap-6 items-center rounded-3xl border border-solid transition-all cursor-pointer border-zinc-800 duration-[0.3s] ease-[ease] hover:bg-zinc-800 hover:text-white group";

  // Responsive padding styles (will be overridden if width/height are provided)
  const responsiveStyles =
    "px-7 py-3.5 max-md:px-6 max-md:py-3 max-sm:justify-center max-sm:px-5 max-sm:py-2.5 max-sm:w-full";

  // Custom styles based on props
  const customStyles = [];
  if (width) customStyles.push(`w-[${width}]`);
  if (height) customStyles.push(`h-[${height}]`);

  // Combine all styles
  const buttonStyles = [
    baseStyles,
    width || height ? "" : responsiveStyles,
    ...customStyles,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={`${buttonStyles} flex items-center justify-around`}
      aria-label={text}
      type="button"
      style={{
        width: width || "",
        height: height || "",
      }}
    >
      <span className="text-sm tracking-wider text-zinc-800 max-md:text-sm max-sm:text-xs group-hover:text-white transition-colors duration-[0.3s] ease-[ease]">
        {text}
      </span>
      <span
        className="text-xl text-zinc-800 group-hover:text-white transition-colors duration-[0.3s] ease-[ease]"
        aria-hidden="true"
      >
        →
      </span>
    </button>
  );
}

export default ContactButton;
