"use client";
import React, { /*Component,*/ useState } from "react";
import Image, { StaticImageData } from "next/image";

const Filter = ({
  filters,
  message,
  onChange,
}: {
  filters: Array<StaticImageData>;
  message: Array<string>;
  onChange: (filter: StaticImageData) => void;
}) => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const handleClick = (filter: StaticImageData) => {
    setSelectedFilter(filter);
    console.log(filter);
    onChange(filter);
  };
  return (
    <div
      className="image-gallery mb-5 mt-4 flex space-x-4"
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
            selectedFilter === filter ? "text-black" : "text-white"
          }`}
          onClick={() => handleClick(filter)}
        >
          <div className="image-item w-4/ relative mx-4 inline-block flex-wrap">
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
