import { useCommunity } from "@/app/hooks/useCommunity";
import { Event } from "@/app/models/event.model";
import { getEvents } from "@/app/services/eventService";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Ui/CustomCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import { Skeleton } from "@/components/Ui/skeleton";
import { Calendar, Clock, MapPin, Star, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const YuvaaEvents = ({
  title,
  description,
  primaryBackgroundColor,
  secondaryBackgroundColor,
  primaryTextColor,
}: {
  title: string;
  description: string;
  primaryBackgroundColor: string;
  secondaryBackgroundColor: string;
  primaryTextColor: string;
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [events, setEvents] = useState<Event[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);

  const { communityId } = useCommunity();

  const MAX_PREVIEW_CHARS = 150;

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const response: any = await getEvents(communityId);
      setEvents(response.events);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (communityId) {
      fetchEvents();
    }
  }, [communityId]);

  const renderEventsDescription = (event: Event) => {
    const desc = event?.description ?? "";
    const shouldTruncate = desc.length > MAX_PREVIEW_CHARS;

    if (!shouldTruncate) {
      return <p className="text-gray-600 mb-4">{desc}</p>;
    }

    return (
      <div className="mb-2">
        <p className="text-gray-600 line-clamp-3">{desc}</p>
        <Dialog>
          <DialogTrigger className="text-sm font-medium text-blue-600 hover:underline focus:outline-none cursor-pointer">
            Read more
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="capitalize">{event?.title}</DialogTitle>
            </DialogHeader>
            <DialogDescription className="whitespace-pre-wrap text-base text-gray-700">
              {desc}
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  if (isloading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-4 lg:px-20">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm p-4 space-y-4"
          >
            <Skeleton className="h-48 w-full rounded-md" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex justify-between items-center">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-10 w-24 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (!Array.isArray(events) || events.length === 0) {
    return (
      <div className="text-center w-full h-[80vh] flex items-center justify-center">
        <p>No Events available.</p>
      </div>
    );
  }

  return (
    <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section
        className="bg-[#20B2AA] text-white py-16 px-4"
        style={{ backgroundColor: primaryBackgroundColor }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <div className="w-24 h-1 bg-[#FF6347] mx-auto mb-6"></div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{description}</p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4 bg-gray-50 lg:px-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event?._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="overflow-hidden rounded-lg shadow-md bg-white"
              >
                <Card className="overflow-hidden h-full">
                  <div className="h-48 overflow-hidden relative">
                    <motion.img
                      src={
                        event?.coverImage?.value ||
                        "https://upload-community-files-new.s3.ap-south-1.amazonaws.com/undefined/Default%20Events.png"
                      }
                      alt={event?.coverImage?.label}
                      className="w-full h-full object-cover transition-transform duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  <CardHeader className="pb-1">
                    <CardTitle className="text-xl text-black capitalize">
                      {event?.title ?? "Untitled Event"}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    {renderEventsDescription(event)}

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2 text-[#FF6347]" />
                        <span>{`${event?.availability[0]?.day} to ${
                          event?.availability[event?.availability.length - 1]
                            ?.day
                        }`}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2 text-[#FF6347]" />
                        <span>
                          {event?.availability[0]?.availableTimes[0]?.startTime}{" "}
                          to{" "}
                          {event?.availability[0]?.availableTimes[0]?.endTime}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2 text-[#FF6347]" />
                        <span>{event?.location}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-black">
                        {event?.pricing != null && `₹${event.pricing}`}
                      </span>
                      <Link href={`/event-details?eventid=${event._id}`}>
                        <button className="bg-[#FF6347] cursor-pointer hover:bg-[#FF6347]-dark text-white rounded-md px-6 py-2 transition-colors">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4 bg-white lg:px-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20B2AA] mb-4">
              Join Our Community
            </h2>
            <div className="w-24 h-1 bg-[#FF6347] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with like-minded individuals and build lasting friendships
              through our yoga community events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#20B2AA]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#20B2AA]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Build Connections
              </h3>
              <p className="text-gray-600">
                Meet fellow yoga enthusiasts and build meaningful relationships
                in our welcoming community.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#FF6347]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#FF6347]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Special Experiences
              </h3>
              <p className="text-gray-600">
                Enjoy unique yoga experiences you won't find anywhere else, from
                rooftop sessions to moon ceremonies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#20B2AA]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-[#20B2AA]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Regular Events
              </h3>
              <p className="text-gray-600">
                Never run out of opportunities to grow with our regular
                workshops and special events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default YuvaaEvents;
