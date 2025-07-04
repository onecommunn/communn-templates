import { useCommunity } from "@/app/hooks/useCommunity";
import { Event } from "@/app/models/event.model";
import { getEvents } from "@/app/services/eventService";
import { Button } from "@/components/Ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import { Skeleton } from "@/components/Ui/skeleton";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const YogastEvents = ({
  heroTitle,
  heroDescription,
  primaryBackground,
  secondaryBackground,
  primaryTextColor,
  secondaryTextColor,
}: {
  heroTitle: string;
  heroDescription: string;
  primaryBackground: string;
  secondaryBackground: string;
  primaryTextColor: string;
  secondaryTextColor: string;
}) => {
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
      return (
        <p className="text-gray-600 mb-4" style={{ color: secondaryTextColor }}>
          {desc}
        </p>
      );
    }

    return (
      <div className="mb-2">
        <p
          className="text-gray-600 line-clamp-3"
          style={{ color: secondaryTextColor }}
        >
          {desc}
        </p>
        <Dialog>
          <DialogTrigger className="text-sm font-medium text-blue-600 hover:underline focus:outline-none cursor-pointer">
            Read more
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="capitalize">{event?.title}</DialogTitle>
            </DialogHeader>
            <DialogDescription
              className="whitespace-pre-wrap text-base text-gray-700"
              style={{ color: secondaryTextColor }}
            >
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
    <main className="flex-grow">
      <section
        className="bg-[#FF5E14] text-white py-16"
        style={{
          backgroundColor: primaryBackground,
          color: secondaryBackground,
        }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {heroTitle}
          </h1>
          <p className="max-w-2xl mx-auto">{heroDescription}</p>
        </div>
      </section>

      <section
        className="py-16 bg-white"
        style={{
          backgroundColor: secondaryBackground,
        }}
      >
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-[#FDF6EF] rounded-lg overflow-hidden shadow-md"
                style={{
                  backgroundColor: secondaryBackground,
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={
                      event?.coverImage?.value ||
                      "https://upload-community-files-new.s3.ap-south-1.amazonaws.com/undefined/Default%20Events.png"
                    }
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-[#FF5E14] mb-2"
                    style={{
                      color: primaryBackground,
                    }}
                  >
                    {event.title}
                  </h3>
                  {renderEventsDescription(event)}
                  <div
                    className="space-y-2 mb-4"
                    style={{ color: primaryTextColor }}
                  >
                    <div className="flex items-center text-gray-600">
                      <Calendar
                        className="w-4 h-4 mr-2 text-[#FF6347]"
                        color={primaryBackground}
                      />
                      <span>{`${event?.availability[0]?.day} to ${
                        event?.availability[event?.availability.length - 1]?.day
                      }`}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock
                        className="w-4 h-4 mr-2 text-[#FF6347]"
                        color={primaryBackground}
                      />
                      <span>
                        {event?.availability[0]?.availableTimes[0]?.startTime}{" "}
                        to {event?.availability[0]?.availableTimes[0]?.endTime}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin
                        size={16}
                        className="mr-2 text-[#FF6347]"
                        color={primaryBackground}
                      />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span
                      className="text-2xl font-bold text-[#FF5E14]"
                      style={{
                        color: primaryBackground,
                      }}
                    >
                      {event?.pricing != null && `₹${event.pricing}`}
                    </span>
                    {/* <Button className="bg-[#FF5E14] hover:bg-orange-600 text-white rounded-full">
                      Register Now
                    </Button> */}
                    {(() => {
                      const availability = event?.availability;
                      const end = availability?.[availability.length - 1]?.day;

                      const isBookable = (() => {
                        if (!end) return false;
                        const today = new Date().setHours(0, 0, 0, 0);
                        const endDate = new Date(end).setHours(0, 0, 0, 0);
                        return today <= endDate;
                      })();

                      return isBookable ? (
                        <Link href={`/event-details?eventid=${event._id}`}>
                          <button
                            className="bg-[#FF5E14] hover:bg-orange-600 cursor-pointer text-white rounded-full px-6 py-2 transition-colors"
                            style={{
                              backgroundColor: primaryBackground,
                              color: secondaryBackground,
                            }}
                          >
                            Book Now
                          </button>
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="bg-gray-300 text-gray-600 cursor-not-allowed rounded-full px-6 py-2"
                          title="This event has already ended"
                        >
                          Booking Closed
                        </button>
                      );
                    })()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default YogastEvents;
