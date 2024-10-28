"use client";
import React, { /*Component,*/ useState } from "react";
import frame from "@/public/frame/pastevents.svg";
import frame2 from "@/public/frame/upcomingevents.svg";
import Image from "next/image";

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

// const animations = {
//   start: {
//     opacity: 0,
//     y: 30,
//   },
//   end: {
//     opacity: 1,
//     y: 0,
//   },
// };

const Filter = ({ filters, /*onChange*/ }: {filters: Array<string> /*</string>onChange: void*/}) => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const handleClick = ({filter}: {filter: string}) => {
    setSelectedFilter(filter);
    //onChange(filter);
  };

  return (
      <div
        className="flex space-x-4 mb-5 mt-4"
        // variants={containerVariants}
        // initial="start"
        // whileInView="end"
        // transition={{ duration: 0.8 }}
      >
        
        {filters.map((filter) => (
          <button
          // variants={animations}
          // initial="start"
          // whileInView="end"
          // transition={{ duration: 0.8 }}
          key={filter}
          className={`w-66 px-6 py-1.5 font-nunito ${
            selectedFilter === filter
            ? "bg-ais-blue-100 text-blue-500"
            : "text-white border-2 border-ais-blue-100 text-ais-blue-100"
          }`}
          onClick={() => handleClick({filter})}
          >
            {/* <div className="relative mx-4 inline-block bg-black w-50">
              <Image src={frame} alt='swLogo' />
              <span className="absolute inset-0 flex items-center justify-center font-nunito text-1x">
                {filter}
              </span>
              
            </div> */}
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
  );
};

export default Filter;
