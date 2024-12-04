import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialMedia } from "@/data/footer";
import Logo from "@/public/swIcon.svg";

const Footer = () => {
  return (
    <div className="flex w-full flex-row bg-black">
      <Link href={""} className="flex w-auto items-center">
        <Image src={Logo} alt="Logo" className="ml-[10%] w-1/2" />
      </Link>
      <div className="ml-auto flex w-auto px-[2.5%]">
        <div className="flex gap-x-2">
          {socialMedia.map((link, index) => (
            <div key={index} className="flex items-center text-sw-gold-100">
              <Link
                target={link.target}
                href={link.href}
                className="flex flex-row text-3xl duration-150 hover:scale-110 md:text-4xl lg:text-4xl"
              >
                <Image src={link.icon} alt="icons" className="w-2/3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
