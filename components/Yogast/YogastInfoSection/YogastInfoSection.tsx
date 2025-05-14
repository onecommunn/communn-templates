import React from "react";

interface DescriptionsList {
  Description: string;
}

const YogastInfoSection = ({
  Image,
  width,
  height,
  Title,
  DescriptionsList,
  ButtonText,
  backgroundColor,
  buttonBackgroundColor,
  textColor
}: {
  Image: string;
  width: number;
  height: number;
  Title: string;
  DescriptionsList: DescriptionsList[];
  ButtonText: string;
  backgroundColor:string,
  buttonBackgroundColor:string,
  textColor:string
}) => {
  return (
    <div className="w-full py-16" style={{backgroundColor:backgroundColor}}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Image Placeholder */}
          <div className="w-full md:w-1/3">
            <div className="relative h-64 w-full rounded-r-3xl overflow-hidden">
              <img
                src={
                  Image ??
                  "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                }
                alt="Woman practicing yoga"
                className="w-full h-full object-cover"
                width={width}
                height={height}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-4" style={{color:buttonBackgroundColor}}>{Title}</h2>
            <div className="space-y-4 mb-6" style={{color:textColor}}>
              {DescriptionsList?.map((each,index) => (
                <p key={index}>
                  {each.Description}
                </p>
              ))}
            </div>
            <button className="text-white rounded-full px-6 py-2" style={{backgroundColor:buttonBackgroundColor}}>
             {ButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogastInfoSection;
