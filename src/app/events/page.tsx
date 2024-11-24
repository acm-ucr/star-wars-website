import Calendar from "@/components/calendar/Calendar";
import Event from "@/components/calendar/Event";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full flex-col justify-center">
      <Calendar />
      <Event />
    </div>
  );
};

export default page;
