import React from "react";
import Image from "next/image";
import largeFrame from "@/public/frame/largeframe.svg";
import Title from "@/components/Title";

const Gallery = ({ title }: { title: string }) => {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        src={largeFrame}
        alt="largeFrame"
        className="h-11/12 inset-0 w-11/12 object-cover"
      />
      <div className="absolute bottom-2 top-0 flex items-center justify-center">
        <Title text={title} />
      </div>
    </div>
  );
};

export default Gallery;
