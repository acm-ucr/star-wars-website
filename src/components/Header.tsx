import React from "react";
import Image from "next/image";
import smallheaderframe from "@/public/frame/title2smallframe.svg";
import starImage from "@/public/starframeIcon.svg";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="relative my-10 flex justify-center">
      <Image
        src={smallheaderframe}
        alt="smallheaderframe"
        className="rounded-xl bg-gradient-to-b from-[#15121A] via-[#2C2636] to-[#675980] object-cover"
      />

      <div className="absolute left-1/2 top-0 translate-x-[-50%] translate-y-[-50%]">
        <Image src={starImage} alt="Star" />
      </div>

      <div className="absolute top-[28%] w-full text-center">
        <header className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-nunito font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </header>
      </div>
    </div>
  );
};

export default Header;
