import { Event } from "@/app/models/event.model";
import { getEventById } from "@/app/services/eventService";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const renderDescription = (event: string, title: string) => {
  const desc = event ?? "";
  const MAX_PREVIEW_CHARS = 150;
  const shouldTruncate = desc.length > MAX_PREVIEW_CHARS;

  if (!shouldTruncate) {
    return <p className="text-gray-600 mb-4">{desc}</p>;
  }

  return (
    <div className="mb-2">
      <p className="text-gray-600  line-clamp-3">{desc}</p>
      <Dialog>
        <DialogTrigger className="text-md font-medium text-blue-600 hover:underline focus:outline-none cursor-pointer">
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

const YuvaaEventDetails = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventid");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventData, setEventData] = useState<Event>();

  console.log(eventData);

  useEffect(() => {
    fetchEventInfo();
  }, []);

  const fetchEventInfo = async () => {
    try {
      setIsLoading(true);
      if (eventId) {
        const res: any = await getEventById(eventId);
        if (res) {
          setEventData(res?.events);
        }
      } else {
        router.push("/events");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.mobile) {
      toast.info("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Your booking has been submitted successfully!");
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTime = (time24:string) => {
    const [hours, minutes] = time24.split(":");
    const date = new Date();
    date.setHours(+hours);
    date.setMinutes(+minutes);
    return date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (!eventData) {
    return <></>;
  }

  return (
    <main className="flex-grow py-8 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Details */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={eventData.coverImage.value}
                  alt={eventData.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {eventData.title}
                </h1>
                <p className="text-3xl font-bold text-teal mt-2">
                  ₹{eventData.pricing}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-5 h-5 text-coral" />
                <span>{eventData.availability[0].day}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-5 h-5 text-coral" />
                <span>{`${formatTime(eventData.availability[0].availableTimes[0].startTime)} - ${formatTime(eventData.availability[0].availableTimes[0].endTime)}`}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-coral" />
                <span>{eventData.location}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <User className="w-5 h-5 text-coral" />
                <span>By - {eventData.hostedBy}</span>
              </div>
            </div>

            <div>
              {/* <p className="text-gray-700 leading-relaxed">
                {eventData.description}
              </p> */}
              {renderDescription(eventData.description, eventData.title)}
              {/* <button className="text-coral hover:text-coral-dark font-medium mt-2">
                Show More
              </button> */}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Enter Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border p-2 px-3"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email ID
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email ID *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border p-2 px-3"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mobile No
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Mobile No *"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border p-2 px-3"
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-lg font-medium cursor-pointer"
              >
                {isSubmitting ? "Processing..." : "Proceed To Payment"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default YuvaaEventDetails;
