"use client";

import React from "react";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import calendarframe from "@/public/frame/calendarframe.svg";

const CalendarComp = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col items-center">
      <Image src={calendarframe} alt="calendarframe" className="my-5" />
      <Calendar mode="single" selected={date} onSelect={setDate} className="" />
    </div>
  );
};

export default CalendarComp;
