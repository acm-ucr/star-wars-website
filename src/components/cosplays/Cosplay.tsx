import Image from "next/image";
import React from "react";
import cosplaysframe from "@/public/frame/cosplaysframe.svg";
import cosplayVector from "@/public/frame/cosplayVector.svg";
import cosplayVector122 from "@/public/frame/cosplayVector122.svg";
import cosplayVector123 from "@/public/frame/cosplayVector123.svg";
import cosplayEllipse from "@/public/frame/cosplayEllipse.svg";

const Cosplay = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src={cosplaysframe} alt="cosplay frame" />
      <div>
        <div className="mt-4 absolute">
        <p className="mb-1 px-3 text-3xl text-white">NAME</p>
        </div>
        <div className="flex py-10">
          <div className="flex px-2 py-4">
            <Image src={cosplayVector122} alt="Vector122" />
          </div>
          <div className="flex items-start">
            <Image src={cosplayVector} alt="Vector" />
          </div>
          <div className="absolute mx-2 flex px-20 py-4">
            <Image src={cosplayVector123} alt="Vector123" />
          </div>
          <div className="relative right-48 top-52 flex pb-2 pl-3">
            <Image src={cosplayEllipse} alt="Ellipse" />
          </div>
        </div>
        <div className="flex flex-row absolute justify-end right-48 bottom-28">
          <div className="text-3xl text-white">CHARACTER</div>
        </div>
      </div>
    </div>
  );
};

export default Cosplay;
