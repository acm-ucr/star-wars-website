import React from "react";
import Title from "../Title";

const Unite = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-10 text-white md:flex-row md:gap-0">
      {/* Left section for OUR MISSION */}
      <div className="flex w-2/3 flex-col items-center justify-center space-y-6">
        <div className="rounded-md border border-yellow-500 px-6 py-3">
          <h2 className="text-lg font-bold tracking-wide text-yellow-500">
            OUR MISSION
          </h2>
        </div>
      </div>
      {/* Right section for Title and Mission Statement */}
      <div className="mr-[8%] flex w-full flex-col gap-9 text-left">
        <Title text="Enter Our Galaxy" />
        <p className="md:text:xl text-white sm:text-lg lg:text-3xl">
          Mission Statement HERE.
          <span className="md:text:xl text-white sm:text-lg lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Unite;
