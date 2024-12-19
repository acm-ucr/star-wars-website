"use client";

import { Calendar, EventProps } from "@/components/ui/calendar";
import { useState } from "react";
import Header from "@/components/Header";

const CalendarCall = ({ events }: { events: EventProps[] }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-fit items-center justify-center md:w-2/5">
        <Header title="Event Calendar" />
      </div>
      <div className="relative w-screen overflow-clip">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          events={events}
          className="mb-[45vh] ml-[16.5vw] w-[67vw] text-black"
        />
      </div>
    </div>
  );
};

export default CalendarCall;
