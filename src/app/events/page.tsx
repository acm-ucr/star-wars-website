import Calendar from "@/components/calendar/Calendar";
import Wrapped from "@/components/calendar/WrappedEvents";
import React from "react";

const page = () => {
  return (
    <div>
      <Calendar />
      <Wrapped />
    </div>
  );
};

export default page;
