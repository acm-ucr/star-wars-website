import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialMedia } from "@/data/footerLinks";
import Logo from "@/public/swIcon.svg";

const Footer = () => {
  return (
    <div className="flex w-full flex-row bg-black">
      <div className="flex w-auto items-center">
        <Image src={Logo} alt="Logo" className="ml-[10%] w-1/2" />
      </div>
      <div className="ml-auto flex w-auto px-[2.5%]">
        <div className="flex gap-x-5">
          {socialMedia.map((link, index) => (
            <div key={index} className="flex items-center text-sw-gold-100">
              <Link
                target={link.target}
                href={link.href}
                className="flex flex-row duration-150 hover:scale-110 sm:text-3xl lg:text-5xl"
              >
                <link.icon />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
