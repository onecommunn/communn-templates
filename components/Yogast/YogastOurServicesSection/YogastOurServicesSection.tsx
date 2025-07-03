import { useCommunity } from "@/app/hooks/useCommunity";
import { Service } from "@/app/models/service.model";
import { getServices } from "@/app/services/ServicesService";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import { Award, Clock, Heart, Users } from "lucide-react";
import React, { useEffect, useState } from "react";

const renderDescription = (event: string, title: string) => {
  const desc = event ?? "";
  const MAX_PREVIEW_CHARS = 150;
  const shouldTruncate = desc.length > MAX_PREVIEW_CHARS;

  if (!shouldTruncate) {
    return <p className="text-gray-600 mb-4">{desc}</p>;
  }

  return (
    <div className="mb-2 h-full">
      <p className="text-gray-600  line-clamp-3">{desc}</p>
      <Dialog>
        <DialogTrigger className="text-sm font-medium text-blue-600 hover:underline focus:outline-none cursor-pointer">
          Read more
        </DialogTrigger>
        <DialogContent className="max-w-lg">
          <DialogTitle className="capitalize">{title}</DialogTitle>
          <DialogDescription className="whitespace-pre-wrap text-base text-gray-700">
            {desc}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="aspect-16/9">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-bold text-xl text-gray-800 mb-3">
          {service.title}
        </h3>
        {renderDescription(service.description, service.title)}
      </div>
    </div>
  );
};

const YogastOurServicesSection = () => {
  const [servicesList, setServicesList] = useState<Service[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);

  const { communityId } = useCommunity();

  const fetchServices = async () => {
    try {
      setIsLoading(true);
      const response: any = await getServices(communityId);
      setServicesList(response.services || []);
    } catch (error) {
      console.error("Error fetching services:", error);
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

  if (!Array.isArray(servicesList) || servicesList.length === 0) return null;

  return (
    <section className="bg-[#FDF6EF] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-[#FF5E14] text-3xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Discover our comprehensive range of yoga services designed to meet
            your wellness needs and support your journey to better health and
            inner peace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {servicesList.map((service, index) => (
            <ServiceCard service={service} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogastOurServicesSection;
