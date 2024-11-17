"use client";
import React, { useState } from "react";
import FilterCard from "./FilterCard";
import { Background } from "@/data/Background";
import frame from "@/public/frame/pastevents1.svg";

const Filter = ({
  filters,
  onChange,
}: {
  filters: Array<Background>;
  onChange: (filter: Background) => void;
}) => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const handleClick = (filter: Background) => {
    onChange(filter);
    setSelectedFilter(filter);
    if (filter == filters[1]) {
      if (filter.Image == frame) {
        const temp = filters[1].Image;
        filter.Image = filters[0].Image;
        filters[0].Image = temp;
      }
    }
    if (filter == filters[0]) {
      if (filter.Image == frame) {
        const temp = filters[0].Image;
        filter.Image = filters[1].Image;
        filters[1].Image = temp;
      }
    }
  };
  return (
    <div className="image-gallery mb-5 mt-4 flex space-x-4">
      {filters.map((filter, index) => (
        <button
          key={index}
          className={`px-6 py-1.5${
            selectedFilter === filter ? "text-black" : "border-2 border-white"
          }`}
          onClick={() => handleClick(filter)}
        >
          <FilterCard frame={filter.Image} Message={filter.Message} />
        </button>
      ))}
    </div>
  );
};

export default Filter;
