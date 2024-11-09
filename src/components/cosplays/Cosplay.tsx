import Image from "next/image";
import React from "react";
import cosplaysframe from "@/public/frame/cosplaysframe.svg";
import cardframe from "@/public/frame/cardframe.svg";

const Cosplay = ({ name, character }: { name: string; character: string }) => {
  const items = Array(6).fill(null);

  return (
    <div className="flex flex-col items-center gap-4">
      <Image src={cosplaysframe} alt="cosplay frame" width={370} height={500} />
      <div className="mx-5 grid grid-cols-3 gap-4">
        {items.map((_, index) => (
          <div key={index} className="p-4">
            <p className="relative top-2">{name}</p>
            <Image
              src={cardframe}
              alt="cosplay frame"
              width={500}
              height={300}
            />
            <p className="flex justify-end">{character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cosplay;
