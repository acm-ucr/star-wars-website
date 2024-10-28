import React from "react";
import LargeFrame from "@/public/frame/largeframe.svg";
import Image from "next/image";

const HistoryLanding = ({ title }: { title: string }) => {
  return (
    <div className="relative my-10 flex justify-center">
      <Image src={LargeFrame} alt="LargeFrame" />
      <div className="absolute top-[40%] w-full text-center">
        <div className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-nunito font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </div>
      </div>
    </div>
  );
};

export default HistoryLanding;
