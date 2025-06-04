import React, { useState } from "react";

const YuvaaHeroSection = ({
  titleText,
  description,
  buttonText,
  inputPlaceholderText,
  backgroundColor,
  titleTextColor,
  descriptionColor,
  buttonBackgroundColor,
  buttonTextColor,
  placeholderTextColor,
  inputBorderColor,
  heroImage,
  imageHeight,
  imageWidth
}: {
  titleText: string;
  description: string;
  buttonText: string;
  inputPlaceholderText: string;
  backgroundColor: string;
  titleTextColor: string;
  descriptionColor: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  placeholderTextColor: string;
  inputBorderColor: string;
  heroImage:string,
  imageWidth:number,
  imageHeight:number,
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };
  return (
    <section className="py-12 md:py-20 px-4 lg:px-20 text-black" style={{ backgroundColor: backgroundColor }}>
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-14">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: titleTextColor }}>
              {titleText}
            </h1>
            <p className="text-gray-600 mb-8 max-w-full" style={{ color: descriptionColor }}>
              {description}
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              {/* <input
                type="email"
                placeholder={inputPlaceholderText}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border border-[var(--border-color)] placeholder:text-[var(--placeholder-text-color)] rounded-md flex-grow"
                style={{"--border-color":inputBorderColor,"--placeholder-text-color":placeholderTextColor} as React.CSSProperties}
                required
              />*/}
              <button
                type="submit"
                className="py-3 px-6 rounded-md cursor-pointer"
                style={{backgroundColor:buttonBackgroundColor,color:buttonTextColor}}
              >
                {buttonText}
              </button> 
            </form>
          </div>

          <div className="md:w-1/2 relative">
            <img
              src={heroImage}
              alt="Yoga practice"
              className="rounded-3xl shadow-lg"
              height={imageHeight}
              width={imageWidth}
            />
            {/* Animated circles */}
            <div className="absolute -top-8 -right-8 w-12 h-12 rounded-full opacity-70" style={{ backgroundColor: buttonBackgroundColor }}></div>
            <div className="absolute -left-6 bottom-1/3 w-8 h-8 rounded-full opacity-70" style={{ backgroundColor: buttonBackgroundColor }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YuvaaHeroSection;
