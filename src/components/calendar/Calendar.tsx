"use client";

import { Calendar, EventProps } from "@/components/ui/calendar";
import { useState } from "react";
import Header from "@/components/Header";
import { fetchCalendarEvents } from "@/data/actions";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

const CalendarCall = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { data: events, isFetching } = useQuery({
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
        {isFetching && (
          <div className="flex w-full items-center justify-center gap-4 bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text text-center text-sm font-semibold text-transparent md:text-3xl">
            Currently fetching data from hyperpace{" "}
            <span>
              <Loader className="text-sw-white" />
            </span>
          </div>
        )}
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          events={proppedEvents}
          className="ml-[16.5vw] w-[67vw] text-black md:mb-[20vh]"
        />
      </div>
    </div>
  );
};

export default CalendarCall;
