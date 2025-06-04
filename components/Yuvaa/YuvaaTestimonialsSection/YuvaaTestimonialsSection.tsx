import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import YuvaaTestimonialCard from "./YuvaaTestimonialCard";

interface TestimonialsList {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

interface YuvaaTestimonialsSectionProps {
  title: string;
  testimonialsList: TestimonialsList[];
  backgroundColor: string;
  titleColor: string;
  cardBackgroundColor: string;
  quoteColor: string;
  userTextColor: string;
  roleColor: string;
  ratingStarsColor: string;
  avatarBackgroundColor: string;
  avatarTextColor: string;
  navigationIconsColor: string;
  navigationBackgroundColor: string;
  onHoverNavigationIconsColor: string;
  onHoverNavigationBackgroundColor: string;
}

const YuvaaTestimonialsSection = ({
  title,
  testimonialsList,
  backgroundColor,
  titleColor,
  cardBackgroundColor,
  quoteColor,
  userTextColor,
  ratingStarsColor,
  roleColor,
  avatarTextColor,
  avatarBackgroundColor,
  navigationBackgroundColor,
  navigationIconsColor,
  onHoverNavigationBackgroundColor,
  onHoverNavigationIconsColor,
}: YuvaaTestimonialsSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidePrev = () => {
    setCurrentSlide((prev) =>
      prev > 0 ? prev - 1 : testimonialsList.length - 1
    );
  };

  const slideNext = () => {
    setCurrentSlide((prev) =>
      prev < testimonialsList.length - 1 ? prev + 1 : 0
    );
  };

  const visibleTestimonials = [
    testimonialsList[currentSlide],
    testimonialsList[(currentSlide + 1) % testimonialsList.length],
    testimonialsList[(currentSlide + 2) % testimonialsList.length],
  ];

  return (
    <section
      className="py-16 px-4 lg:px-20"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: titleColor }}
        >
          {title}
        </h2>

        {visibleTestimonials?.length > 0 ? (
          <div className="relative">
            {/* Desktop View */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {visibleTestimonials.map((testimonial, index) => (
                <YuvaaTestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  rating={testimonial.rating}
                  cardBackgroundColor={cardBackgroundColor}
                  quoteColor={quoteColor}
                  userTextColor={userTextColor}
                  roleColor={roleColor}
                  ratingStarsColor={ratingStarsColor}
                  avatarBackgroundColor={avatarBackgroundColor}
                  avatarTextColor={avatarTextColor}
                   primaryColor={navigationBackgroundColor}
                />
              ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
              <YuvaaTestimonialCard
                quote={testimonialsList[currentSlide].quote}
                name={testimonialsList[currentSlide].name}
                role={testimonialsList[currentSlide].role}
                rating={testimonialsList[currentSlide].rating}
                cardBackgroundColor={cardBackgroundColor}
                quoteColor={quoteColor}
                userTextColor={userTextColor}
                roleColor={roleColor}
                ratingStarsColor={ratingStarsColor}
                avatarBackgroundColor={avatarBackgroundColor}
                avatarTextColor={avatarTextColor}
                primaryColor={navigationBackgroundColor}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 gap-2">
              <button
                onClick={slidePrev}
                className="p-2 rounded-md transition-colors cursor-pointer"
                style={{
                  backgroundColor: navigationBackgroundColor,
                  color: navigationIconsColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    onHoverNavigationBackgroundColor;
                  e.currentTarget.style.color = onHoverNavigationIconsColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    navigationBackgroundColor;
                  e.currentTarget.style.color = navigationIconsColor;
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={slideNext}
                className="p-2 rounded-md cursor-pointer transition-colors hover:text-[var(--hover-color)] text-[var(--color)] bg-[var(--bgColor)] hover:bg-[var(--hover-bgColor)]"
                style={
                  {
                    "--hover-color": onHoverNavigationIconsColor,
                    "--color": navigationIconsColor,
                    "--bgColor": navigationBackgroundColor,
                    "--hover-bgColor": onHoverNavigationBackgroundColor,
                  } as React.CSSProperties
                }
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No testimonials available.
          </p>
        )}
      </div>
    </section>
  );
};

export default YuvaaTestimonialsSection;
