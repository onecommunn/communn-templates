import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import YuvaaServiceCard from "./YuvaaServiceCard";
import { getCommunityData } from "@/app/services/communityService";

const YuvaaServicesSection = ({
  title,
  description,
  //servicesList,
  titleColor,
  descriptionColor,
  lineColor,
  navigationBackgroundColor,
  navigationIconsColor,
  serviceTitleColor,
  ratingStarsColor,
  ctaTextColor,
  reviewCountColor,
  backgroundColor,
  cardBackgroundColor,
}: {
  title: string;
  description: string;
  //servicesList?: ServicesList[]; // allow undefined
  titleColor: string;
  descriptionColor: string;
  lineColor: string;
  navigationIconsColor: string;
  navigationBackgroundColor: string;
  serviceTitleColor: string;
  ratingStarsColor: string;
  ctaTextColor: string;
  reviewCountColor: string;
  backgroundColor: string;
  cardBackgroundColor: string;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [servicesList, setServicesList] = useState<any[]>([]);

  const slideNext = () => {
    if (servicesList && currentSlide < servicesList.length - 3) {
      setCurrentSlide(currentSlide + 1);
      sliderRef.current?.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  const slidePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      sliderRef.current?.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const getServicesList = async () => {
    try {
      const communityData: any = await getCommunityData(
        window.location.hostname
      );
      return communityData?.community.services || [];
    } catch (error) {
      console.error("Error fetching services list:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchServicesList = async () => {
      const services = await getServicesList();
      setServicesList(services);
    };

    fetchServicesList();
  }, []);


  return (
    <section
      className="py-16 px-4 lg:px-20 bg-gray-50 text-black"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: titleColor }}
          >
            {title}
          </h2>
          <div
            className="w-24 h-1 mb-6 mt-2 mx-auto"
            style={{ backgroundColor: lineColor }}
          ></div>
          <p
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
            style={{ color: descriptionColor }}
          >
            {description}
          </p>
        </div>

        {servicesList.length < 4 ? (
          <div
            className={`text-center mb-8 grid gap-6 ${
              servicesList.length === 1
                ? "grid-cols-1"
                : servicesList.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
            }`}
          >
            {servicesList.map((service, index) => (
              <YuvaaServiceCard
                key={index}
                image={service.image}
                imageWidth={service.imageWidth}
                imageHeight={service.imageHeight}
                title={service.title}
                ctaText={service.ctaText}
                rating={service.rating}
                reviewCount={service.reviewCount}
                cardBackgroundColor={cardBackgroundColor}
                serviceTitleColor={serviceTitleColor}
                ratingStarsColor={ratingStarsColor}
                ctaTextColor={ctaTextColor}
                reviewCountColor={reviewCountColor}
              />
            ))}
          </div>
        ) : servicesList && servicesList.length > 0 ? (
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full"
              onClick={slidePrev}
              disabled={currentSlide === 0}
              style={{
                backgroundColor: navigationBackgroundColor,
                color: navigationIconsColor,
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <div
              ref={sliderRef}
              className="flex overflow-x-auto hide-scrollbar gap-6 py-4 px-8"
              style={{ scrollBehavior: "smooth" }}
            >
              {servicesList.map((service, index) => (
                <div key={index} className="min-w-[300px] max-w-[300px]">
                  <YuvaaServiceCard
                    image={service.image}
                    imageWidth={service.imageWidth}
                    imageHeight={service.imageHeight}
                    title={service.title}
                    ctaText={service.ctaText}
                    rating={service.rating}
                    reviewCount={service.reviewCount}
                    cardBackgroundColor={cardBackgroundColor}
                    serviceTitleColor={serviceTitleColor}
                    ratingStarsColor={ratingStarsColor}
                    ctaTextColor={ctaTextColor}
                    reviewCountColor={reviewCountColor}
                  />
                </div>
              ))}
            </div>

            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full"
              onClick={slideNext}
              disabled={currentSlide >= servicesList.length - 3}
              style={{
                backgroundColor: navigationBackgroundColor,
                color: navigationIconsColor,
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        ) : (
          <p
            className="text-center text-lg"
            style={{ color: descriptionColor }}
          >
            No services available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default YuvaaServicesSection;
