import React from "react";
import Image from "next/image";
import Card from "../Card";
import { JEDIITEMS } from "@/data/history";
import mediumHeaderFrame from "@/public/frame/mediumframeheader.svg";
import starImage from "@/public/starframeIcon.svg";

const PastJediMasters = () => {
  return (
    <div className="w-full">
      <div className="relative my-10 flex justify-center">
        <Image
          src={mediumHeaderFrame}
          alt="mediumHeaderFrame"
          className="rounded-xl bg-gradient-to-b from-[#15121A] via-[#2C2636] to-[#675980] object-cover"
        />
        <div className="absolute left-1/2 top-0 translate-x-[-50%] translate-y-[-50%]">
          <Image src={starImage} alt="Star" />
        </div>
        <div className="absolute top-[28%] w-full text-center">
          <header className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-nunito font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            PAST JEDI MASTERS
          </header>
        </div>
      </div>

      <div className="flex w-full flex-wrap justify-center gap-20">
        {JEDIITEMS.map((item, index) => (
          <div key={index} className="w-1/4 sm:w-1/4">
            <Card topText={item.topText} bottomText={item.bottomText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastJediMasters;
