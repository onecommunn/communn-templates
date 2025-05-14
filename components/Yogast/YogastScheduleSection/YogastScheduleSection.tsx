import { cn } from "@/lib/Utils/utils";
import React from "react";

import { useState } from "react";

// const days = ["Monday", "Friday", "Saturday", "Sunday"];
// const timeSlots = [
//   {
//     title: "Basic Yoga",
//     times: ["07:00 - 08:30 am", "07:00 - 08:30 am", "07:00 - 08:30 am"],
//   },
//   {
//     title: "Meditation Yoga",
//     times: ["01:00 - 02:30 pm", "01:00 - 02:30 pm", "01:00 - 02:30 pm"],
//   },
//   {
//     title: "Advanced Yoga",
//     times: ["05:30 - 07:00 pm", "05:30 - 07:00 pm", "05:30 - 07:00 pm"],
//   },
// ];

interface Days {
  day: string;
}

interface Times {
  time: string;
}

interface TimeSlots {
  title: string;
  times: Times[];
}

const YogastScheduleSection = ({
  Title,
  Description,
  Days,
  TimeSlots,
  backgroundColor,
  textColor,
  activeButtonBackgroundColor,
  buttonBackgroundColor,
  rowBackgroundColor,
}: {
  Title: string;
  Description: string;
  Days: Days[];
  TimeSlots: TimeSlots[];
  backgroundColor: string;
  textColor: string;
  activeButtonBackgroundColor: string;
  buttonBackgroundColor: string;
  rowBackgroundColor: string;
}) => {
  const [activeDay, setActiveDay] = useState(0);
  return (
    <section
      className="text-white py-16"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2" style={{color:activeButtonBackgroundColor}}>{Title}</h2>
          <p className="text-sm" style={{color:textColor}}>{Description}</p>
        </div>

        {/* Days Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {Days?.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              style={{ "--active-color": activeButtonBackgroundColor,"--color" :buttonBackgroundColor,color:textColor} as React.CSSProperties}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium mx-1 my-1 transition-all",
                activeDay === index
                  ? `bg-[color:var(--active-color)] `
                  : `bg-[color:var(--color)]`
              )}
            >
              {day.day} Class
            </button>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse" style={{color:textColor}}>
            <tbody>
              {TimeSlots?.map((slot, index) => (
                <tr
                  key={index}
                  style={{ "--bg-color": rowBackgroundColor } as React.CSSProperties}
                  className={index % 2 === 0 ? "bg-[color:var(--bg-color)]" : ""}
                >
                  <td className="py-4 px-4">
                    {slot.title}
                  </td>
                  {slot?.times?.map((time, idx) => (
                    <td
                      key={idx}
                      className="py-4 px-4 text-center"
                    >
                      {time.time}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default YogastScheduleSection;
