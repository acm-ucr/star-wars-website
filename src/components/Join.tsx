import React from "react";
import Image from "next/image";
import mediumFrame from "@/public/frame/joinframe1.svg";
import smallFrame from "@/public/frame/smallframe.svg";
import star from "@/public/frame/star.svg";
import discord from "@/public/frame/discord.svg";
import instagram from "@/public/frame/instagram.svg";
import email from "@/public/frame/email.svg";
import highlander from "@/public/frame/highlander.svg";

const Join = () => {
  return (
    <div className="relative bg-black bg-gradient-to-b from-[#241d3b] to-black py-[90px] text-center">
      <div className="relative z-10">
        <h1 className="font-nunito text-[36px] text-sw-gold-100">Join</h1>

        <div className="relative inline-block">
          <Image
            src={mediumFrame}
            alt="Medium Frame"
            className="h-[588px] w-[1569px]"
          />

          <div className="pointer-events-none absolute left-1/2 top-[-54px] z-0 h-[125px] w-[588px] -translate-x-1/2 transform rounded-lg bg-gradient-to-b from-[#15121A] to-[#675980] opacity-100"></div>

          <Image
            src={smallFrame}
            alt="Small Frame"
            className="absolute left-1/2 top-[-55px] z-10 h-[126.8px] w-[670.53px] -translate-x-1/2 transform"
          />

          <Image
            src={star}
            alt="Star"
            className="absolute left-1/2 top-[-65px] z-20 h-[26px] w-[23px] -translate-x-1/2 transform"
          />

          <div className="absolute left-1/2 top-[1%] z-20 -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-nunito text-[50px] font-bold text-transparent">
            JOIN THE GALAXY
          </div>

          <div className="absolute left-1/2 top-[150px] z-10 w-[55%] -translate-x-1/2 transform font-nunito text-[20px] leading-[1.6] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>

        <div className="mt-[-160px] flex justify-center gap-[90px]">
          <div className="text-center">
            <Image src={discord} alt="Discord" className="h-[50px] w-[50px]" />
            <div className="-ml-[3px] mt-[8px] bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-nunito font-bold text-transparent">
              Discord
            </div>
          </div>

          <div className="text-center">
            <Image
              src={instagram}
              alt="Instagram"
              className="h-[50px] w-[50px]"
            />
            <div className="-ml-[11px] mt-[8px] bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-nunito font-bold text-transparent">
              Instagram
            </div>
          </div>

          <div className="text-center">
            <Image src={email} alt="Email" className="h-[50px] w-[50px]" />
            <div className="-ml-[2px] mt-[8px] bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-nunito font-bold text-transparent">
              Email
            </div>
          </div>

          <div className="text-center">
            <Image
              src={highlander}
              alt="Highlander"
              className="h-[50px] w-[50px]"
            />
            <div className="-ml-[11px] mt-[8px] bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-nunito font-bold text-transparent">
              Highlander
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
