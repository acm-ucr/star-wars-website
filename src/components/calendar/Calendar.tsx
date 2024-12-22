"use client";

import { Calendar, EventProps } from "@/components/ui/calendar";
import { useState } from "react";
import Header from "@/components/Header";
import { fetchCalendarEvents } from "@/data/actions";
import { useQuery } from "@tanstack/react-query";

const CalendarCall = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const {
    data: events,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["calendarEvents"],
    queryFn: fetchCalendarEvents,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
  const proppedEvents: EventProps[] = events || [];
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
          events={proppedEvents}
          className="mb-[45vh] ml-[16.5vw] w-[67vw] text-black"
        />
      </div>
    </div>
  );
};

export default CalendarCall;
