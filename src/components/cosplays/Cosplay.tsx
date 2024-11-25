import Image from "next/image";
import React from "react";
import cosplaysframe from "@/public/frame/cosplaysframe.svg";
import Card from "../Card";
import { ITEMS } from "@/data/board";

const Cosplay = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Image src={cosplaysframe} alt="cosplay frame" width={370} height={500} />

      <div className="mx-5 flex w-full flex-wrap justify-center gap-20">
        {ITEMS.map((item, index) => (
          <div key={index} className="w-1/4 sm:w-1/4">
            <Card topText={item.topText} bottomText={item.bottomText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cosplay;
