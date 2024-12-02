import React from "react";
import Title from "./Title";
import Header from "./Header";
import Image from "next/image";
import planet from "@/public/tatooine.png";

const What = () => {
  return (
    <div className="flex w-full flex-col-reverse md:flex-row">
      <div className="flex flex-col gap-y-4 px-4 pt-6 text-center md:w-1/2 md:pl-[8%] md:pt-[9%]">
        <div className="flex flex-col gap-6 md:gap-9">
          <Title text="Forge The Future" />

          <p className="text-base text-white sm:text-lg md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <p className="text-base text-white sm:text-lg md:text-xl lg:text-2xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col-reverse items-center justify-center px-10 py-6 md:w-1/2 md:flex-col md:items-center md:justify-end">
        <Image src={planet} alt="planet" className="w-4/5" />
        <Header title="What We Do" />
      </div>
    </div>
  );
};

export default What;
