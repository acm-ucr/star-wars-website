import React from "react";
import Image from "next/image";
import swLogo from "@/public/swNameOnly.svg";
import Title from "./Title";

const About = () => {
  return (
    <div className="flex w-full flex-row gap-x-[10%]">
      <div className="flex w-auto flex-col gap-y-4 pl-[12%] pt-[9%]">
        <p className="ml-2 bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          ABOUT
        </p>
        <Image src={swLogo} alt="swLogo" className="flex w-full max-w-64" />
      </div>
      <div className="mr-[8%] flex w-auto flex-col gap-9 text-left">
        <Title text="Enter Our Galaxy" />
        <p className="md:text:xl text-white sm:text-lg lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="md:text:xl text-white sm:text-lg lg:text-2xl">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </p>
      </div>
    </div>
  );
};

export default About;
