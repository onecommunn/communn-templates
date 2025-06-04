import { cn } from "@/lib/Utils/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

interface TestimonialsList {
  content: string;
  author: string;
  position: string;
}
const YogastTestimonialsSection = ({
  title,
  Description,
  testimonialsList,
  backgroundColor,
  textColor,
  cardBackgroundColor
}: {
  title: string;
  Description: string;
  testimonialsList: TestimonialsList[];
  backgroundColor: string;
  textColor:string;
  cardBackgroundColor:string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsList.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsList.length) % testimonialsList.length
    );
  };
  return (
    <section className="py-16" style={{backgroundColor:backgroundColor}}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2" style={{color:cardBackgroundColor}}>{title}</h2>
          <p className="text-sm" style={{color:textColor}}>{Description}</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="p-8 rounded-lg relative" style={{backgroundColor:cardBackgroundColor,color:backgroundColor}}>
            <div className="absolute top-4 right-4">
              <div className="bg-white/20 rounded-full p-2">
                <span style={{color:backgroundColor}}>❝</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-lg mb-4" style={{color:backgroundColor}}>
                "{testimonialsList[currentIndex].content}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3" style={{backgroundColor:backgroundColor}}></div>
                <div>
                  <div className="font-medium" style={{color:backgroundColor}}>
                    {testimonialsList[currentIndex].author}
                  </div>
                  <div className="text-sm" style={{color:backgroundColor}}>
                    {testimonialsList[currentIndex].position}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={prevTestimonial}
                className="bg-black/20 hover:bg-black/30 rounded-full p-2"
              >
                <ArrowLeft size={18} color={backgroundColor}/>
              </button>

              <div className="flex space-x-2">
                {testimonialsList?.map((_, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "w-2 h-2 rounded-full",
                      currentIndex === idx ? "bg-white" : "bg-white/40"
                    )}
                    onClick={() => setCurrentIndex(idx)}
                  ></div>
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-black/20cursor-pointer hover:bg-black/30 rounded-full p-2"
              >
                <ArrowRight size={18} color={backgroundColor}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogastTestimonialsSection;
