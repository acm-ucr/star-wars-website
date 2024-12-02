import React from "react";
import Image from "next/image";
import Link from "next/link";
import mediumFrame from "@/public/frame/joinframe1.svg";
import joinheaderframe from "@/public/frame/joinheaderframe.svg";
import discord from "@/public/frame/discord.svg";
import instagram from "@/public/frame/instagram.svg";
import email from "@/public/frame/email.svg";
import highlander from "@/public/frame/highlander.svg";

const Join = () => {
  return (
    <div className="relative my-10 w-full text-center xl:h-[550px]">
      <Image
        src={mediumFrame}
        alt="Medium Frame"
        className="absolute left-1/2 z-0 hidden -translate-x-1/2 transform xl:top-[70px] xl:block xl:w-[85%] 2xl:w-[60%]"
      />
      <div className="relative z-10 flex flex-col items-center justify-center gap-y-20">
        <Image src={joinheaderframe} alt="Join Header Frame" className="" />
        <div className="leading-[1.6] text-white md:w-[70%] md:text-[20px] xl:w-[45%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className="flex items-center justify-center gap-x-5 md:gap-x-20">
          <div className="flex flex-col items-center justify-center text-center">
            <Link href="https://discord.gg/gvSgtVQDAD" passHref>
              <Image
                src={discord}
                alt="Discord"
                className="h-[50px] w-[50px] hover:scale-110"
              />
            </Link>
            <div className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-bold text-transparent">
              Discord
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <Link href="https://instagram.com/starwarsucr" passHref>
              <Image
                src={instagram}
                alt="Instagram"
                className="h-[50px] w-[50px] hover:scale-110"
              />
            </Link>
            <div className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-bold text-transparent">
              Instagram
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <Link href="mailto:Ucrstarwarsclub@gmail.com" passHref>
              <Image
                src={email}
                alt="Email"
                className="h-[50px] w-[50px] hover:scale-110"
              />
            </Link>
            <div className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-bold text-transparent">
              Email
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <Link
              href="https://highlanderlink.ucr.edu/organization/starwarsclubatucr"
              passHref
            >
              <Image
                src={highlander}
                alt="Highlander"
                className="h-[50px] w-[50px] hover:scale-110"
              />
            </Link>
            <div className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-bold text-transparent">
              Highlander
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
