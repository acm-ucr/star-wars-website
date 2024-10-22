import React from "react";
import Image from "next/image";
import Button from "./Button";
import swLogo from "@/public/swLOGO.svg";

const Landing = () => {
  return (
    <div className="mr-28 flex h-screen items-center">
      <div className="size-2/3 text-center">
        <h1 className="mb-4 bg-gradient-to-b from-[#DDA82A] via-sw-white to-[#905803] bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
          WELCOME TO
        </h1>
        <div className="flex items-center justify-center">
          <Image src={swLogo} alt="UCR SWC Logo" />
        </div>
        <div className="flex flex-row justify-center gap-5 py-5">
          <Button title={"JOIN"} link={"/about"} />
          <Button title={"LEARN MORE"} link={"/about"} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
