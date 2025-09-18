"use client";

import * as React from "react";
import { format } from "date-fns";
import { Button } from "@/components/Ui/button";
import { Card, CardContent } from "@/components/Ui/card";
import { Separator } from "@/components/Ui/separator";
import { Calendar } from "@/components/Ui/calendar";
import { cn } from "@/lib/Utils/utils";
import CreatorSectionHeader from "../Components/CreatorSectionHeader";
import { toast } from "sonner";

type Slot = {
  label: string; // "09:00am"
  value: string; // "09:00"
  disabled?: boolean;
};

// -------- Demo content (replace with API data later) --------
const DEMO = {
  title: "1 on 1 session",
  priceInr: 1500,
  description:
    "Lorem ipsum dolor sit amet consectetur. Tortor tristique tempus placerat aenean nisl eu purus. Mauris nec interdum diam cras massa tristique nulla faucibus at.",
  accessInfo: {
    rangeText: "May 28 2025 - May 28 2025",
    timeText: "02:30 PM - 03:00 PM",
    adminText: "By Admin : Prachi",
    linkText: "https://www.meet.com/wng-sgf-wet",
  },
};

// Mock slot provider — replace with your API call
const demoGetSlotsForDate = (d: Date): Slot[] => {
  const day = d.getDay(); // 0 Sun - 6 Sat
  const base: Slot[] = [
    { label: "09:00am", value: "09:00" },
    { label: "11:00am", value: "11:00" },
    { label: "01:00pm", value: "13:00" },
    { label: "04:00pm", value: "16:00" },
  ];
  if (day === 0) return []; // Sunday closed
  if (day === 2) return base.slice(0, 3); // Wednesday fewer
  if (day === 5) return base.map((s, i) => ({ ...s, disabled: i === 0 })); // Friday first disabled
  return base;
};

export default function CreatorAppointmentsDetails() {
  // ---- Hydration-safe mount gate ----
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  // Initialize date/slots ONLY after mount to avoid SSR/client mismatch
  const [date, setDate] = React.useState<Date | null>(null);
  const [slots, setSlots] = React.useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = React.useState<Slot | null>(null);

  React.useEffect(() => {
    if (!mounted) return;
    const d = new Date();
    setDate(d);
    setSlots(demoGetSlotsForDate(d));
  }, [mounted]);

  React.useEffect(() => {
    if (!date) return;
    setSelectedSlot(null);
    setSlots(demoGetSlotsForDate(date));
  }, [date]);

  const handleNext = () => {
    if (!date || !selectedSlot) return;
    // Replace with your navigation / API call
    console.log("Confirm booking:", {
      dateISO: date.toISOString().slice(0, 10),
      slot: selectedSlot,
    });

    toast.success(
      `Booking Confirmed on ${date.toISOString().slice(0, 10)}, ${selectedSlot.value}`
    );
  };

  // Simple skeleton while mounting/client-initializing
  if (!mounted || !date) {
    return (
      <section className="py-10 font-inter">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="h-6 w-56 rounded bg-muted animate-pulse mb-4" />
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-6 lg:gap-10">
            <div className="space-y-3">
              <div className="h-5 w-80 bg-muted rounded animate-pulse" />
              <div className="h-4 w-full max-w-prose bg-muted rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
            </div>
            <div className="h-80 bg-muted rounded-md animate-pulse" />
            <div className="h-80 bg-muted rounded-2xl animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  const { title, priceInr, description, accessInfo } = DEMO;

  return (
    <section className="py-10 font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <CreatorSectionHeader
          title="1 on 1 Session"
          description="Is easy movement them, for harder your a in duty the except when of
            interfaces had is screen state be accuse own set the creating how have him."
        />

        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-6 lg:gap-10">
            {/* Left: Details + Access Info */}
            <section className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight font-poppins">
                {title} - <span className="font-medium">₹{priceInr}</span>
              </h1>
              <p className="text-sm text-muted-foreground max-w-prose">
                {description}
              </p>

              <div className="pt-2">
                <h3 className="text-xl font-semibold mb-3">
                  Access Information
                </h3>
                <ul className="space-y-2 text-sm">
                  {accessInfo.rangeText && (
                    <li className="list-disc ml-5">{accessInfo.rangeText}</li>
                  )}
                  {accessInfo.timeText && (
                    <li className="list-disc ml-5">{accessInfo.timeText}</li>
                  )}
                  {accessInfo.adminText && (
                    <li className="list-disc ml-5">{accessInfo.adminText}</li>
                  )}
                  {accessInfo.linkText && (
                    <li className="list-disc ml-5">
                      <a
                        className="underline underline-offset-2"
                        href={accessInfo.linkText}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {accessInfo.linkText}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </section>

            {/* Center: Calendar */}
            <section className="w-full">
              <div className="flex flex-col w-full">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d: Date | undefined) => d && setDate(d)}
                  showOutsideDays
                  className="rounded-md border p-3 w-full"
                  disabled={{ before: new Date() }}
                  classNames={{
                    caption: "flex justify-between items-center",
                    day: "h-full w-full p-0 font-medium aria-selected:opacity-100",
                  }}
                />
              </div>
            </section>

            {/* Right: Time Slots */}
            <section>
              <Card className="rounded-2xl">
                <CardContent className="p-4">
                  <div className="mb-3">
                    <div className="text-sm text-muted-foreground">
                      {format(date, "EEEE, dd LLL")}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {slots.length === 0 && (
                      <div className="text-sm text-muted-foreground">
                        No slots available.
                      </div>
                    )}

                    {slots.map((slot) => {
                      const selected =
                        !!selectedSlot &&
                        selectedSlot.value === slot.value &&
                        !slot.disabled;

                      return (
                        <button
                          key={slot.value}
                          disabled={slot.disabled}
                          onClick={() =>
                            !slot.disabled && setSelectedSlot(slot)
                          }
                          className={cn(
                            "w-full h-11 rounded-xl border flex items-center justify-between px-4 text-sm transition",
                            "disabled:opacity-50 disabled:cursor-not-allowed",
                            selected
                              ? "border-foreground"
                              : "hover:bg-accent hover:text-accent-foreground"
                          )}
                          aria-pressed={selected}
                        >
                          <span className="font-medium">{slot.label}</span>
                          <span
                            className={cn(
                              "text-xs rounded-lg px-3 py-1",
                              selected
                                ? "bg-foreground text-background"
                                : "bg-muted"
                            )}
                          >
                            {selected ? "Selected" : "Available"}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <Separator className="my-4" />

                  <Button
                    size="lg"
                    className="w-full rounded-xl"
                    onClick={handleNext}
                    disabled={!selectedSlot}
                  >
                    Next
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
