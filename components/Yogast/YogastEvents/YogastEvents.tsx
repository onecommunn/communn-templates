import { useCommunity } from "@/app/hooks/useCommunity";
import { Event } from "@/app/models/event.model";
import { getEvents } from "@/app/services/eventService";
import { Button } from "@/components/Ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";

// const events = [
//   {
//     title: "Weekend Yoga Retreat",
//     date: "March 15-17, 2024",
//     time: "Friday 6:00 PM - Sunday 4:00 PM",
//     location: "Mountain View Retreat Center",
//     description:
//       "Join us for a transformative weekend retreat in nature. Includes meals, accommodation, and guided yoga sessions.",
//     price: "$299",
//     image:
//       "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     title: "Meditation Workshop",
//     date: "February 28, 2024",
//     time: "2:00 PM - 5:00 PM",
//     location: "Yogast Studio",
//     description:
//       "Learn various meditation techniques to deepen your practice and find inner peace.",
//     price: "$45",
//     image:
//       "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     title: "Prenatal Yoga Series",
//     date: "Starting March 5, 2024",
//     time: "Every Tuesday 10:00 AM",
//     location: "Yogast Studio",
//     description:
//       "6-week series designed specifically for expecting mothers. Support your body through pregnancy.",
//     price: "$120 (6 sessions)",
//     image:
//       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     title: "Yoga & Sound Healing",
//     date: "March 22, 2024",
//     time: "7:00 PM - 9:00 PM",
//     location: "Yogast Studio",
//     description:
//       "Experience the healing power of sound combined with gentle yoga movements and deep relaxation.",
//     price: "$35",
//     image:
//       "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
//   },
// ];

const YogastEvents = () => {
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

  return (
    <main className="flex-grow">
      <section className="bg-[#FF5E14] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Upcoming Events
          </h1>
          <p className="max-w-2xl mx-auto">
            Join our special workshops, retreats, and community events to deepen
            your yoga journey
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-[#FDF6EF] rounded-lg overflow-hidden shadow-md"
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
                  <h3 className="text-xl font-bold text-[#FF5E14] mb-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-[#FF6347]" />
                      <span>{`${event?.availability[0]?.day} to ${
                        event?.availability[event?.availability.length - 1]?.day
                      }`}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-[#FF6347]" />
                      <span>
                        {event?.availability[0]?.availableTimes[0]?.startTime}{" "}
                        to {event?.availability[0]?.availableTimes[0]?.endTime}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2 text-[#FF6347]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#FF5E14]">
                      {event?.pricing != null && `₹${event.pricing}`}
                    </span>
                    <Button className="bg-[#FF5E14] hover:bg-orange-600 text-white rounded-full">
                      Register Now
                    </Button>
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
