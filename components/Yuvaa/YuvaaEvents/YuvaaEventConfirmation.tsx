import { Event } from "@/app/models/event.model";
import { getEventById } from "@/app/services/eventService";
import { Button } from "@/components/Ui/button";
import { Card, CardContent } from "@/components/Ui/CustomCard";
import {
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { formatTime } from "./YuvaaEventDetails";

const YuvaaEventConfirmation = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const eventId = searchParams.get("eventId");
  const [isLoading, setIsLoading] = useState(true);
  const [eventData, setEventData] = useState<Event | null>(null);


  console.log(eventId)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchEventInfo = async () => {
      try {
        if (!eventId) {
          router.push("/events");
          return;
        }

        const res: any = await getEventById(eventId);
        if (res?.events) {
          setEventData(res.events);
        } else {
          toast.warning("Event not found");
        }
      } catch (error) {
        console.error("Error fetching event:", error);
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventInfo();
  }, [eventId, router]);

  const availability = eventData?.availability?.[0];
  const times = availability?.availableTimes?.[0];

  if (isLoading) {
    return (
      <main className="flex-grow py-20 px-4 text-center text-gray-600 text-lg">
        Loading event details...
      </main>
    );
  }

  if (!eventData) {
    return (
      <main className="flex-grow py-20 px-4 text-center text-red-500 text-lg">
        Event not found or has been removed.
      </main>
    );
  }

  return (
    <main className="flex-grow py-8 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-lg text-gray-600">
            Your event booking has been successfully confirmed. We're excited to
            see you there!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Event Details */}
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Event Details
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-[#20B2AA] mb-2">
                    {eventData.title}
                  </h3>
                  <p className="text-2xl font-bold text-[#FF6347]">
                    ₹{eventData.pricing}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {availability?.day && (
                    <div className="flex items-center gap-3 text-gray-600 bg-black/4 p-2 rounded-md">
                      <Calendar className="w-5 h-5 text-[#FF6347]" />
                      <span>{availability?.day}</span>
                    </div>
                  )}

                  {times?.startTime && times?.endTime && (
                    <div className="flex items-center gap-3 text-gray-600 bg-black/4 p-2 rounded-md">
                      <Clock className="w-5 h-5 text-[#FF6347]" />
                      <span>
                        {`${formatTime(times.startTime)} - ${formatTime(times.endTime)}`}
                      </span>
                    </div>
                  )}

                  {eventData.location && (
                    <div className="flex items-center gap-3 text-gray-600 bg-black/4 p-2 rounded-md">
                      <MapPin className="w-5 h-5 text-[#FF6347]" />
                      <span>{eventData.location}</span>
                    </div>
                  )}

                  {eventData.hostedBy && (
                    <div className="flex items-center gap-3 text-gray-600 bg-black/4 p-2 rounded-md">
                      <User className="w-5 h-5 text-[#FF6347]" />
                      <span>{eventData.hostedBy}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Information */}
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Your Information
              </h2>

              {/* <div className="space-y-4">
                {userName && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <User className="w-5 h-5 text-[#FF6347]" />
                    <span>{userName}</span>
                  </div>
                )}

                {userEmail && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-[#FF6347]" />
                    <span>{userEmail}</span>
                  </div>
                )}

                {userMobile && (
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-[#FF6347]" />
                    <span>{userMobile}</span>
                  </div>
                )}
              </div> */}

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-800">
                  <strong>Confirmation sent!</strong> We've sent a confirmation
                  email to your registered email address with all the event
                  details.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="bg-white shadow-sm mt-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              What's Next?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-[#20B2AA]/10 bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-[#20B2AA]" />
                </div>
                <h3 className="font-semibold mb-2">Check Your Email</h3>
                <p className="text-sm text-gray-600">
                  Look for our confirmation email with event details and joining
                  instructions.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#FF6347]/10 bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-[#FF6347]" />
                </div>
                <h3 className="font-semibold mb-2">Add to Calendar</h3>
                <p className="text-sm text-gray-600">
                  Save the date in your calendar so you don't miss this amazing
                  event.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#20B2AA]/10 bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-[#20B2AA]" />
                </div>
                <h3 className="font-semibold mb-2">Join the Community</h3>
                <p className="text-sm text-gray-600">
                  Connect with other participants and share your yoga journey.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-8">
          <Link href={"/events"}>
            <Button
              variant="outline"
              className="border-[#FF6347] text-[#FF6347] hover:bg-[#FF6347] hover:text-white"
            >
              Browse More Events
            </Button>
          </Link>
          <Link href={"/"}>
            <Button
              onClick={() => router.replace("/")}
              className="bg-[#20B2AA] hover:bg-[#20B2AA]-dark text-white"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default YuvaaEventConfirmation;
