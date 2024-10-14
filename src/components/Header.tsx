import React from "react";
import Image from "next/image";
import smallheaderframe from "@/public/frame/title2smallframe.svg";
import starImage from "@/public/starframeIcon.svg";

const Header = ({title}: {title: string}) => {
  return (
    <div className = "relative">
      <Image  src = {smallheaderframe}
              alt = "smallheaderframe"
              className = "object-cover rounded-xl bg-gradient-to-b from-[#15121A] via-[#2C2636] to-[#675980]"
      />

      <div className = "absolute top-0 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
        <Image src={starImage} alt="Star"/>
      </div>

      <div className="absolute text-center top-[28%] w-full">
        <header className = "bg-gradient-to-b from-[#D09742] via-[#FFDA7C] to-[#6A4D22] text-transparent bg-clip-text font-nunito font-bold text-6xl">
          {title}
        </header>
      </div>
    </div>
  )
};

export default Header;
