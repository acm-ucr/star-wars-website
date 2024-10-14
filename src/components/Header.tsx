import React from "react";
import Image from "next/image";
import smallheaderframe from "@/public/frame/title2smallframe.svg";
import starImage from "@/public/starframeIcon.svg";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="relative">
      <Image
        src={smallheaderframe}
        alt="smallheaderframe"
        className="rounded-xl bg-gradient-to-b from-[#15121A] via-[#2C2636] to-[#675980] object-cover"
      />

      <div className="absolute left-1/2 top-0 translate-x-[-50%] translate-y-[-50%] transform">
        <Image src={starImage} alt="Star" />
      </div>

      <div className="absolute top-[28%] w-full text-center">
        <header className="bg-gradient-to-b from-[#D09742] via-[#FFDA7C] to-[#6A4D22] bg-clip-text font-nunito text-6xl font-bold text-transparent">
          {title}
        </header>
      </div>
    </div>
  );
};

export default Header;
