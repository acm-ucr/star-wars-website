"use client";
//import { Component } from "Component, useState";
//import Events from "./Events";
import { useState } from "react";
import Filter from "@/components/Filter";
import { FILTERS } from "@/data/filters";
import { MESSAGE } from "@/data/filterMessage";
import { StaticImageData } from "next/image";

const Wrapped = () => {
   const [component, setComponent] = useState<StaticImageData>(FILTERS[0]);

  const handleFilterChange = (filter: StaticImageData) => {
     setComponent(filter);
   };

  return (
    <div>
      <Filter
        filters={FILTERS}
        message={MESSAGE}
        onChange={handleFilterChange}
      />
      {component === "upcoming" && <Events type="upcoming" />}
      {component === "past" && <Events type="past" />} 
    </div>
  );
};

export default Wrapped;
