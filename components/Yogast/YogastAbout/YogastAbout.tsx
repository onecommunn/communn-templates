import React from "react";

interface Information {
  title: string;
  description: string;
}

const YogastAbout = ({title,SubTitle,Information,headerBackgroundColor,headertitleTextColor,backgroundColor,titleTextColor,textColor}: {
  title: string;
  SubTitle: string;
  Information: Information[];
  headerBackgroundColor:string,
  headertitleTextColor:string,
  backgroundColor:string,
  titleTextColor:string,
  textColor:string
}) => {
  return (
    <main className="flex-grow">
      <section className="py-16" style={{backgroundColor:headerBackgroundColor,color:headertitleTextColor}}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About Yogast
          </h1>
          <p className="max-w-2xl mx-auto">
            Our journey, mission, and commitment to wellness
          </p>
        </div>
      </section>

      <section className="py-16" style={{backgroundColor:backgroundColor}}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {Information?.map((each, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-6" style={{color:titleTextColor}}>
                  {each.title}
                </h2>
                <p className="mb-6 text-black" style={{color:textColor}}>
                  {each.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default YogastAbout;
