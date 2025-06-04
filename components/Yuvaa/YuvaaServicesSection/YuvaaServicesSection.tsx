import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import YuvaaServiceCard from "./YuvaaServiceCard";
import { getCommunityData } from "@/app/services/communityService";
import { useCommunity } from "@/app/hooks/useCommunity";
import { Service } from "@/app/models/service.model";
import { getServices } from "@/app/services/ServicesService";

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
  const [servicesList, setServicesList] = useState<Service[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);

  const { communityId } = useCommunity();

  const fetchServices = async () => {
    try {
      setIsLoading(true);
      const response: any = await getServices(communityId);
      setServicesList(response.services || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      setServicesList([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (communityId) {
      fetchServices();
    }
  }, [communityId]);

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

  if (isloading) {
    return (
      <div className="col-span-full text-center text-gray-500 text-lg w-full">
        Loading Services...
      </div>
    );
  }

  if (!Array.isArray(servicesList) || servicesList.length === 0) return null;

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
                title={service.title}
                description={service.description}
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
            <div
              ref={sliderRef}
              className="flex overflow-x-auto hide-scrollbar gap-6 py-4 px-8"
              style={{ scrollBehavior: "smooth" }}
            >
              {servicesList.map((service, index) => (
                <div key={index} className="min-w-[300px] max-w-[300px]">
                  <YuvaaServiceCard
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    cardBackgroundColor={cardBackgroundColor}
                    serviceTitleColor={serviceTitleColor}
                    ratingStarsColor={ratingStarsColor}
                    ctaTextColor={ctaTextColor}
                    reviewCountColor={reviewCountColor}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 gap-2">
              <button
                onClick={slidePrev}
                disabled={currentSlide === 0}
                className="p-2 rounded-md transition-colors"
                style={{
                  backgroundColor: navigationBackgroundColor,
                  color: navigationIconsColor,
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={slideNext}
                disabled={currentSlide >= servicesList.length - 3}
                className="p-2 rounded-md transition-colors text-[var(--color)] bg-[var(--bgColor)]"
                style={
                  {
                    "--color": navigationIconsColor,
                    "--bgColor": navigationBackgroundColor,
                  } as React.CSSProperties
                }
              >
                <ChevronRight size={20} />
              </button>
            </div>
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
