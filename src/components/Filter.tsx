"use client";
import React, { Component, useState } from "react";
import frame from "@/public/frame/pastevents.svg";
import frame2 from "@/public/frame/upcomingevents.svg";
import Image, { StaticImageData } from "next/image";
import { filters } from "@/data/filters"

//import { motion } from "framer-motion";

// const containerVariants = () => {
//   start: {
//     opacity: 0,
//     y: 30,
//   },
//   end: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       staggerChildren: 0.7,
//     },
//   },
// };

const Filter = ({ filters, message, onChange}: {filters: Array<StaticImageData>, message: Array<string>, onChange:(filter: StaticImageData) => void}) => {
  
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const handleClick = ({filter}: {filter: StaticImageData}) => {
    setSelectedFilter(filter);
    console.log(filter)
    onChange(filter);
  };
  return (
      <div
        className="flex space-x-4 mb-5 mt-4 image-gallery"
        // variants={containerVariants}
        // initial="start"
        // whileInView="end"
        // transition={{ duration: 0.8 }}
      >
        {filters.map((filter, index) => (
          <button
          // variants={animations}
          // initial="start"
          // whileInView="end"
          // transition={{ duration: 0.8 }}
          key={index}
          className={`px-6 py-1.5${
            selectedFilter === filter
            ? " text-black"
            : " text-white"
          }`}
          onClick={() => handleClick(filter)}
          >
            <div className = "image-item flex-wrap relative mx-4 inline-block w-4/">
              <Image src={filter} alt={`Image ${index + 1}`} />
              <span className="absolute inset-0 flex items-center justify-center font-nunito text-2xl">
                {message[index]}
              </span>
            </div> 
            
          </button>
        ))}
      </div>
  );
};

export default Filter;
