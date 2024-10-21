import Calendar from "@/components/calendar/Calendar";
import Wrapped from "@/components/calendar/WrappedEvents";
import Event from "@/components/calendar/Event";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full flex-col justify-center">
      <Calendar />
      <Wrapped />
      <Event />
    </div>
  );
};

export default page;
