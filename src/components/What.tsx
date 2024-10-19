import React from "react";
import Image from "next/image";
import navframe from "@/public/swStar.svg";

const What = () => {
  return (
    <>
      <div className="flex w-full flex-row ">
        {" "}
        <div className="flex w-auto flex-col gap-y-4 pl-[8%] pt-[9%] text-center">
          <p className="mb-2 bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-100 bg-clip-text text-4xl font-bold text-transparent">
            {" "}
            Forge the Future
          </p>
          <p className="w-4/5 rounded-sm text-right font-nunito text-3xl text-white">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <p className=" w-4/5 rounded-sm text-right font-nunito text-3xl text-white">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div>
          <div className="sticky h-[529px] w-[535px]">
                      <p className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-100 bg-clip-text pt-[26rem] text-center text-6xl font-bold text-transparent">
              WHAT WE DO
            </p>
            <Image src={navframe} alt="navframe" className=" h-full w-full object-" />
  
          </div>
        </div>
      </div>
    </>
  );
};

export default What;
