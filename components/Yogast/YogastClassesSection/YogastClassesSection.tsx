import { Play } from "lucide-react";
import React from "react";

interface ClassesList {
  Title: string;
  Description: string;
}

const YogaClass = ({
  title,
  description,
  color,
  textColor,
}: {
  title: string;
  description: string;
  color?: string;
  textColor?: string;
}) => {
  return (
    <div
      className={`rounded-lg p-6 text-white relative overflow-hidden w-full`}
      style={{ color: textColor, backgroundColor: color }}
    >
      <div className="absolute right-4 top-4 bg-opacity-20 rounded-full p-2" style={{backgroundColor:textColor}}>
        <Play size={16} className="text-white" color={color} />
      </div>
      <h3 className="font-bold text-lg mt-6 mb-2">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
};

const YogastClassesSection = ({
  Title,
  Description,
  ClassesList,
  backgroundColor,
  textColor,
  BoxbackgroundColor,
}: {
  Title: string;
  ClassesList: ClassesList[];
  Description: string;
  backgroundColor: string;
  textColor: string;
  BoxbackgroundColor: string;
}) => {
  return (
    <section className=" py-16" style={{ backgroundColor: backgroundColor }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2
            className="text-3xl font-bold mb-2"
            style={{ color: BoxbackgroundColor }}
          >
            {Title}
          </h2>
          <p
            className="text-gray-600 text-sm"
            style={{
              color: textColor,
            }}
          >
            {Description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {ClassesList?.map((each, index) => (
            <YogaClass
              key={index}
              title={each.Title}
              description={each.Description}
              color={BoxbackgroundColor}
              textColor={backgroundColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogastClassesSection;
