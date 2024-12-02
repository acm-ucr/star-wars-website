"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import calendarframe from "@/public/frame/calendarframe.svg";
import { useCalendarEvents } from "@/data/actions";
import { format, parseISO } from "date-fns";

const CalendarComp = () => {
  const [selectedEvent, setSelectedEvent] = useState<null | {
    summary: string;
    location?: string;
    start: string;
    end: string;
  }>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { data: events, isLoading, error } = useCalendarEvents();

  useEffect(() => {
    if (error) {
      console.error("Failed to fetch calendar events in homepage");
    } else if (isLoading) {
      console.log("Loading calendar events...");
    } else if (events) {
      console.log("Fetched Events: ", events);
    }
  }, [events, isLoading, error]);

  if (isLoading) return <p>Loading events...</p>;
  if (error) return <p>Error fetching events.</p>;

  const eventDates =
    events?.reduce<
      Record<
        string,
        { summary: string; location?: string; start: string; end: string }[]
      >
    >((acc, event) => {
      const date = format(parseISO(event.start.dateTime), "yyyy-MM-dd");
      if (!acc[date]) acc[date] = [];
      acc[date].push({
        summary: event.summary,
        location: event.location,
        start: event.start.dateTime,
        end: event.end.dateTime,
      });
      return acc;
    }, {}) || {};

  return (
    <div className="flex flex-col items-center">
      <Image src={calendarframe} alt="calendarframe" className="my-5" />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        modifiers={{
          hasEvent: (day) =>
            !!eventDates && !!eventDates[format(day, "yyyy-MM-dd")],
        }}
        modifiersClassNames={{
          hasEvent: "bg-yellow-200",
        }}
        onDayClick={(day) => {
          const dateKey = format(day, "yyyy-MM-dd");
          if (eventDates[dateKey]) {
            setSelectedEvent(eventDates[dateKey][0]);
          }
        }}
      />
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-black">
          <div className="w-full max-w-md rounded bg-white p-5 shadow-md">
            <h3 className="mb-2 text-xl font-bold">{selectedEvent.summary}</h3>
            <p>
              <strong>Location:</strong> {selectedEvent.location || "N/A"}
            </p>
            <p>
              <strong>Start:</strong> {selectedEvent.start}
            </p>
            <p>
              <strong>End:</strong> {selectedEvent.end}
            </p>
            <button
              className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
              onClick={() => setSelectedEvent(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComp;
