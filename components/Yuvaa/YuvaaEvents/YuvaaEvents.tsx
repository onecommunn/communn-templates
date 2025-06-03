import { useCommunity } from "@/app/hooks/useCommunity";
import { Event } from "@/app/models/event.model";
import { getEvents } from "@/app/services/eventService";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Ui/CustomCard";
import { Calendar, Clock, MapPin, Star, Users } from "lucide-react";
import React, { use, useEffect, useState } from "react";

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
  //const categories = ["All", "Workshop", "Special Event", "Ceremony"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [events, setEvents] = useState<Event[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);

  const { communityId } = useCommunity();


  const handleClick = (category: string) => {
    setSelectedCategory(category);
  };

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

  return (
    <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="bg-[#20B2AA] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upcoming Events
          </h1>
          <div className="w-24 h-1 bg-[#FF6347] mx-auto mb-6"></div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join our special workshops, retreats, and community events to deepen
            your practice and connect with fellow yogis.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      {/* <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleClick(category)}
                className={
                  selectedCategory === category
                    ? "bg-[#FF6347] text-white px-4 py-2 rounded"
                    : "border border-[#FF6347] text-[#FF6347] hover:text-white hover:bg-[#FF6347] px-4 py-2 rounded"
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Events Grid */}
      <section className="py-16 px-4 bg-gray-50 lg:px-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isloading ? (
              <div className="col-span-full text-center text-gray-500 text-lg w-full">
                Loading events...
              </div>
            ) : events.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 text-lg">
                No events found.
              </div>
            ) : (
              events.map((event) => (
                <Card
                  key={event?._id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={
                        event?.coverImage?.value ||
                        "https://upload-community-files-new.s3.ap-south-1.amazonaws.com/undefined/Default%20Events.png"
                      }
                      alt={event?.coverImage?.label}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {/* <div className="absolute top-4 left-4">
                    <span className="bg-[#FF6347] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div> */}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-[#20B2AA] cap">
                      {event?.title ?? "Untitled Event"}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 mb-4">{event?.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2 text-[#FF6347]" />
                        <span>{`${event?.availability[0]?.day} to ${event?.availability[event?.availability.length - 1]?.day}`}</span>
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
                      {/* <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2 text-[#FF6347]" />
                      <span>{event.spots}</span>
                    </div> */}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-[#20B2AA]">
                        {`₹${event?.pricing ?? "Free"}`}
                      </span>
                      <button className="bg-[#FF6347] hover:bg-[#FF6347]-dark text-white rounded-md px-6 py-2 transition-colors">
                        Book Now
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
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
