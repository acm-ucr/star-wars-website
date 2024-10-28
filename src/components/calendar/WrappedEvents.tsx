"use client";
import { Component, useState } from "react";
//import Events from "./Events";
import Filter from "@/components/./Filter";
import { EVENTS } from "@/data/./filters";

const Wrapped = () => {
  const [component, setComponent] = useState("calendar");

  // const handleFilterChange = ({component}: {component: Component}) => {
  //   setComponent(component);
  // };

  return (
    <div>
      <Filter
        filters={EVENTS}
        // onChange={handleFilterChange}
      />
      {component === "upcoming" && <Events type="upcoming" />}
      {component === "past" && <Events type="past" />}
    </div>
  );
};

export default Wrapped;