"use client";

import { Event } from "@/app/models/event.model";
import {
  freeEventsNoAuth,
  getEventById,
  getPaymentStatusByIdNoAuth,
  paymentEventsNoAuth,
} from "@/app/services/eventService";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import { Calendar, Clock, LoaderCircle, MapPin, User } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export enum PaymentStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

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

const renderDescription = (desc: string = "", title: string) => {
  const MAX_PREVIEW_CHARS = 150;
  const shouldTruncate = desc.length > MAX_PREVIEW_CHARS;

  if (!shouldTruncate) {
    return <p className="text-gray-600 mb-4">{desc}</p>;
  }

  return (
    <div className="mb-2">
      <p className="text-gray-600 line-clamp-3">{desc}</p>
      <Dialog>
        <DialogTrigger className="text-md font-medium text-blue-600 hover:underline cursor-pointer">
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
        const url = `/event-confirmation/?eventId=${eventData?._id}`;
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
        const url = `/event-confirmation/?eventId=${eventData?._id}`;
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
      <main className="flex-grow py-20 px-4 text-center text-red-500 text-lg">
        Event not found or has been removed.
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
    <main className="flex-grow py-8 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Details */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="grid grid-cols-[auto_1fr] gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={eventData.coverImage?.value || "/placeholder.jpg"}
                  alt={eventData.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {eventData.title}
                </h1>
                <p className="text-3xl font-bold text-black mt-2">
                  ₹{eventData.pricing}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6 text-gray-600">
              {availability?.day && (
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#FF6347]" />
                  <span>{availability.day}</span>
                </div>
              )}
              {times?.startTime && times?.endTime && (
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#FF6347]" />
                  <span>
                    {`${formatTime(times.startTime)} - ${formatTime(times.endTime)}`}
                  </span>
                </div>
              )}
              {eventData.location && (
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6347]" />
                  <span>{eventData.location}</span>
                </div>
              )}
              {eventData.hostedBy && (
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#FF6347]" />
                  <span>By - {eventData.hostedBy}</span>
                </div>
              )}
            </div>

            <div>
              {renderDescription(eventData.description, eventData.title)}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Enter Details
            </h2>

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
                        if (!eventData?._id || !eventData?.community?._id) {
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
                  ) : eventData?.isPaidService && !eventData?.guestApproval ? (
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
                        if (!eventData?._id || !eventData?.community?._id) {
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default YuvaaEventDetails;
