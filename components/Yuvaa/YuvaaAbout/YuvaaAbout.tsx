import React from "react";

interface descriptionsListProps {
  description: string;
}

const YuvaaAbout = ({
  image,
  imageHeight,
  imageWidth,
  title,
  descriptionsList,
  backgroundColor,
  titleColor,
  descriptionColor,
  lineColor,
  heroBackgroundColor,
  heroDescription,
  heroTitle,
  heroTextColor
}: {
  title: string;
  heroDescription: string;
  heroTitle: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  descriptionsList?: descriptionsListProps[];
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  lineColor: string;
  heroBackgroundColor: string;
  heroTextColor:string,
}) => {
  return (
    <main className="flex-grow bg-white text-black" style={{ backgroundColor }}>
      {/* Hero Section */}
      <section
        className="py-16 px-4 bg-gray-50"
        style={{ backgroundColor: heroBackgroundColor }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: heroTextColor }}>
            {heroTitle}
          </h1>
          <div
            className="w-24 h-1 bg-[#20B2AA] mx-auto mb-6"
            style={{ backgroundColor: lineColor }}
          ></div> 
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ color: heroTextColor }}
          >
            {heroDescription}
          </p>
        </div>
      </section>
      <section
        className="py-16 px-4 lg:px-20 bg-gray-50"
        style={{ backgroundColor }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1
                className="text-4xl font-bold mb-4"
                style={{ color: titleColor }}
              >
                {title}
              </h1>
              <div
                className="w-24 h-1 bg-[#20B2AA] mb-6"
                style={{ backgroundColor: lineColor }}
              ></div>
              {Array.isArray(descriptionsList) &&
              descriptionsList.length > 0 ? (
                descriptionsList.map((each, index) => (
                  <p
                    className="text-gray-600 mb-6"
                    key={index}
                    style={{ color: descriptionColor }}
                  >
                    {each.description}
                  </p>
                ))
              ) : (
                <p
                  className="text-gray-600 mb-6 italic"
                  style={{ color: descriptionColor }}
                >
                  No descriptions available.
                </p>
              )}
            </div>
            <div className="md:w-1/2">
              <img
                src={image}
                alt="Workout at home"
                className="w-full aspect-square rounded-3xl shadow-lg object-cover"
                style={{ width: imageWidth, height: imageHeight }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default YuvaaAbout;
