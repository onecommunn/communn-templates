import { Event } from "@/app/models/event.model";
import { freeEventsNoAuth, getEventById, getPaymentStatusByIdNoAuth, paymentEventsNoAuth } from "@/app/services/eventService";
import { Button } from "@/components/Ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Ui/CustomCard";
import { Input } from "@/components/Ui/input";
import {
  ArrowLeft,
  Calendar,
  Clock,
  LoaderCircle,
  MapPin,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export const formatTime = (time24: string) => {
  if (!time24) return "--:--";
  const [hours, minutes] = time24.split(":");
  const date = new Date();
  date.setHours(+hours || 0);
  date.setMinutes(+minutes || 0);
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};


export enum PaymentStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

const YogastEventDetails = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const eventId = searchParams.get("eventid");

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventData, setEventData] = useState<Event | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [transactionAmount, setTransactionAmount] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);

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

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!formData.name || !formData.email || !formData.phoneNumber) {
        toast.info("Please fill in all required fields");
        return;
      }
  
      console.log(formData);
      try {
        setIsSubmitting(true);
        await new Promise((res) => setTimeout(res, 1000)); // Simulated API call
        toast.success("Your booking has been submitted successfully!");
        router.push("/events");
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    };
  
    const handleFreeEventBook = async (
      eventId: string,
      name: string,
      email: string,
      phoneNumber: string,
      communityId: string
    ) => {
      setIsLoading(true);
      setFormData((prevState) => ({
        ...prevState,
        name,
        email,
        phoneNumber,
      }));
      try {
        const response: any = await freeEventsNoAuth(
          eventId,
          name,
          email,
          phoneNumber,
          communityId
        );
        if (response.status === 201) {
          toast.success("Event booked successfully! 🎉 ");
          // const url = `/event-confirmation/?event-title=${eventData?.title
          //   .trim()
          //   .toLowerCase()
          //   .replace(/\s+/g, "-")}/${eventData?._id}`;
          const url = `/event-confirmation`;
          router.push(url);
        } else if (response?.status === 500) {
          toast.error("Event already booked or bad request");
          toast.error(response.data?.message || "Event already booked");
        }
      } catch (error: any) {
        console.error("Error booking event:", error.response?.data || error);
        toast.error(error.response?.data?.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleRequestEventBook = async (
      eventId: string,
      name: string,
      email: string,
      phoneNumber: string,
      communityId: string
    ) => {
      setIsLoading(true);
      setFormData((prevState) => ({
        ...prevState,
        name,
        email,
        phoneNumber,
      }));
      try {
        const response: any = await freeEventsNoAuth(
          eventId,
          name,
          email,
          phoneNumber,
          communityId
        );
        if (response.status === 201) {
          toast.success(
            "Event request submitted successfully! 🎉 We will update you soon "
          );
          // const url = `/event-confirmation/${eventData?.title
          //   .trim()
          //   .toLowerCase()
          //   .replace(/\s+/g, "-")}/${eventData?._id}`;
          const url = `/event-confirmation`;
          router.push(url);
        } else if (response?.status === 500) {
          console.warn("Event already booked or bad request.");
          toast.info(response.data?.message || "Event already booked");
        }
      } catch (error: any) {
        console.error("Error booking event:", error.response?.data || error);
        toast.error(error.response?.data?.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleProceedToPayment = async (
      eventId: string,
      name: string,
      email: string,
      phoneNumber: string,
      amount: string,
      commId: string
    ) => {
      setIsLoading(true);
      setFormData((prevState) => ({
        ...prevState,
        name,
        email,
        phoneNumber,
      }));
  
      try {
        const response: any = await paymentEventsNoAuth(
          eventId,
          name,
          email,
          phoneNumber,
          amount,
          commId
        );
        const responseData = response?.data;
        if (responseData?.url) {
          const { transactionId, url } = responseData;
          const screenWidth = window.screen.width;
          const screenHeight = window.screen.height;
          const width = Math.min(1000, screenWidth);
          const height = Math.min(1000, screenHeight);
          const left = (screenWidth - width) / 2;
          const top = (screenHeight - height) / 2;
          const windowRef = window.open(
            url,
            "paymentWindow",
            `width=${width},height=${height},left=${left},top=${top},resizable=no`
          );
          const intervalRef = setInterval(async () => {
            try {
              const paymentStatus =
                await getPaymentStatusByIdNoAuth(transactionId);
              setTransactionAmount(paymentStatus[0]?.amount);
              if (paymentStatus && paymentStatus.length > 0) {
                clearInterval(intervalRef);
                windowRef?.close();
                if (paymentStatus[0]?.status === PaymentStatus.SUCCESS) {
                  setSuccessOpen(true);
                } else {
                  setFailureOpen(true);
                }
              }
            } catch (statusError) {
              console.error("Error fetching payment status:", statusError);
            }
          }, 1000);
        } else {
          toast.info("Fill the details to proceed with payment.");
        }
      } catch (error) {
        console.error("Error booking event:", error);
      } finally {
        setIsLoading(false);
      }
    };

  if (isLoading) {
    return (
      <main className="flex-grow py-20 px-4 text-center text-gray-600 text-lg">
        Loading event details...
      </main>
    );
  }

  if (!eventData) {
    return (
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#FF5E14] mb-4">
            Event Not Found
          </h1>
          <Link href="/events">
            <Button className="bg-[#FF5E14] hover:bg-orange-600 text-white rounded-full">
              Back to Events
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const availability = eventData.availability?.[0];
  const times = availability?.availableTimes?.[0];

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isValidPhoneNumber = /^[0-9]{10}$/.test(formData.phoneNumber);

  const isFormValid =
    formData.name.trim() !== "" && isValidEmail && isValidPhoneNumber;

  const isSoldOut =
    Array.isArray(eventData?.attendees) &&
    typeof eventData?.limitCapacity === "number" &&
    eventData.limitCapacity !== 0 &&
    eventData.attendees.length >= eventData.limitCapacity;

  return (
    <main className="flex-grow">
      <section className="py-8 bg-[#FDF6EF]">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/events"
            className="inline-flex items-center text-[#FF5E14] hover:text-orange-600 mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Events
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Event Details */}
            <div className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden shadow-md mb-6">
                <img
                  src={eventData.coverImage.value}
                  alt={eventData.coverImage.label}
                  className="w-full h-80 object-cover"
                />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#FF5E14] mb-6">
                {eventData.title}
              </h1>

              <div className="text-2xl font-bold text-[#FF5E14] mb-6">
                ₹{eventData.pricing}
              </div>

              <div className="space-y-4 mb-6">
                {availability?.day && (
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <span>{availability.day}</span>
                  </div>
                )}
                {times?.startTime && times?.endTime && (
                  <div className="flex items-center text-gray-600">
                    <Clock size={20} className="mr-3" />
                    <span className="font-medium">{`${formatTime(times.startTime)} - ${formatTime(times.endTime)}`}</span>
                  </div>
                )}
                {eventData.location && (
                  <div className="flex items-center text-gray-600">
                    <MapPin size={20} className="mr-3" />
                    <span className="font-medium">{eventData.location}</span>
                  </div>
                )}
                {eventData.hostedBy && (
                  <div className="flex items-center text-gray-600">
                    <Users size={20} className="mr-3" />
                    <span className="font-medium">
                      By - {eventData.hostedBy}
                    </span>
                  </div>
                )}
              </div>

              <div className="bg-[#FDF6EF] p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold text-[#FF5E14] mb-2">
                  Instructor
                </h3>
                <p className="text-gray-700">{eventData.hostedBy}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#FF5E14] mb-4">
                  About This Event
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {eventData.description}
                </p>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#FF5E14] mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {event.included.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-[#FF5E14] rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#FF5E14] mb-4">
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {event.requirements.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-[#FF5E14] rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
            </div>

            {/* Right Column - Registration Form */}
            <div className="lg:col-span-1">
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-[#FF5E14]">
                    Enter Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {["name", "email", "phoneNumber"].map((field) => (
                      <div key={field}>
                        <label
                          htmlFor={field}
                          className="block text-sm font-medium text-gray-700 mb-2 capitalize"
                        >
                          {field === "email"
                            ? "Email"
                            : field === "phoneNumber"
                              ? "Mobile No"
                              : "Name"}
                        </label>
                        <input
                          id={field}
                          name={field}
                          type={
                            field === "email"
                              ? "email"
                              : field === "phoneNumber"
                                ? "tel"
                                : "text"
                          }
                          placeholder={`${field === "email" ? "Email" : field === "phoneNumber" ? "Mobile No" : "Name"} *`}
                          value={(formData as any)[field]}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-md border p-2 px-3"
                          disabled={isSubmitting}
                        />
                      </div>
                    ))}
                    {isSoldOut ? (
                      <p>Tickets are Sold Out</p>
                    ) : (
                      <>
                        {eventData?.guestApproval ? (
                          <button
                            className={`w-full text-white py-3 rounded-lg font-medium ${!isFormValid ? "cursor-not-allowed bg-gray-400" : "cursor-pointer bg-[#ff6347]"}`}
                            disabled={!isFormValid}
                            onClick={() => {
                              if (
                                !eventData?._id ||
                                !eventData?.community?._id
                              ) {
                                return;
                              }
                              handleRequestEventBook(
                                eventData._id,
                                formData?.name,
                                formData?.email,
                                formData?.phoneNumber,
                                eventData.community._id
                              );
                            }}
                          >
                            {isLoading ? (
                              <LoaderCircle size={20} color="white" />
                            ) : (
                              "Request for Event Booking"
                            )}
                          </button>
                        ) : eventData?.isPaidService &&
                          !eventData?.guestApproval ? (
                          <button
                            className={`w-full text-white py-3 rounded-lg font-medium ${!isFormValid ? "cursor-not-allowed bg-gray-400" : "cursor-pointer bg-[#ff6347]"}`}
                            disabled={!isFormValid}
                            onClick={() => {
                              if (
                                !eventData?._id ||
                                !eventData?.community?._id ||
                                !eventData?.pricing
                              ) {
                                return;
                              }
                              handleProceedToPayment(
                                eventData._id,
                                formData?.name,
                                formData?.email,
                                formData?.phoneNumber,
                                eventData?.pricing.toString(),
                                eventData.community._id
                              );
                            }}
                          >
                            {isLoading ? (
                              <LoaderCircle size={20} color="white" />
                            ) : (
                              "Proceed to Payment"
                            )}
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              if (
                                !eventData?._id ||
                                !eventData?.community?._id
                              ) {
                                return;
                              }
                              handleFreeEventBook(
                                eventData._id,
                                formData?.name,
                                formData?.email,
                                formData?.phoneNumber,
                                eventData.community._id
                              );
                            }}
                            disabled={!isFormValid}
                            className={`w-full text-white py-3 rounded-lg font-medium ${!isFormValid ? "cursor-not-allowed bg-gray-400" : "cursor-pointer bg-[#ff6347]"}`}
                          >
                            {isLoading ? (
                              <LoaderCircle size={20} color="white" />
                            ) : (
                              "Book Event"
                            )}
                          </button>
                        )}
                      </>
                    )}

                    {/* <button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                className="w-full bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-lg font-medium cursor-pointer"
              >
                {isSubmitting ? "Processing..." : "Proceed To Payment"}
              </button> */}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default YogastEventDetails;
