"use client";

import Image from "next/image";
import { ITEMS } from "@/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import swIcon from "@/public/swIcon.svg";
import navframe from "@/public/frame/navframe.svg";
import navjoinframe from "@/public/frame/navjoinframe.svg";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/*Desktop*/}
      <div className="hidden items-center justify-between py-8 md:flex">
        <Link href="/" className="flex justify-center">
          <Image
            src={swIcon}
            alt="swLOGO"
            className="w-1/2 duration-300 hover:scale-110"
          />
        </Link>
        <div className="flex items-center justify-center gap-4 font-lora text-base font-bold text-white md:gap-6 md:text-xl lg:gap-10 lg:text-3xl">
          <Image src={navframe} alt="" className="absolute -z-10 w-[65%]" />

          {ITEMS.map((item, index) => (
            <div key={index} className="relative">
              <Link
                href={item.link}
                className={`hover:bg-gradient-to-b hover:from-[#DDA82A] hover:via-sw-white hover:to-[#905803] hover:bg-clip-text hover:text-transparent ${
                  pathname === item.link
                    ? "bg-gradient-to-b from-[#DDA82A] via-sw-white to-[#905803] bg-clip-text text-transparent"
                    : ""
                }`}
              >
                {item.name}
              </Link>
              {pathname === item.link && (
                <div className="absolute -bottom-3 h-1.5 w-full rounded-full bg-gradient-to-r from-sw-gold-100 via-sw-white to-[#905803]" />
              )}
            </div>
          ))}
        </div>
        <Link
          href="/join"
          className="relative z-10 mb-2 flex items-center justify-center hover:opacity-75"
        >
          <Image src={navjoinframe} alt="jaj" className="mr-10 w-2/3" />
          <p className="absolute left-[27%] mt-4 bg-gradient-to-b from-[#DDA82A] via-sw-white to-[#905803] bg-clip-text font-lora text-base font-bold text-transparent md:text-2xl lg:text-4xl">
            JOIN
          </p>
        </Link>
      </div>

      {/*Mobile*/}
      <div className="flex w-full items-center justify-end pr-4 md:hidden">
        <Link
          href="/"
          className="flex w-full justify-center"
          onClick={() => setIsOpen(false)}
        >
          <Image src={swIcon} alt="swLOGO" className="mr-auto w-1/6 pl-4" />
        </Link>
        <Menu className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
      </div>
      {isOpen && (
        <div className="absolute z-20 flex w-full flex-col items-center justify-center gap-4 bg-black bg-opacity-100 pb-8 pt-2 font-lora text-xl font-bold text-sw-gold-100">
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text text-transparent"
            >
              <Link href={item.link} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
              {pathname === item.link && (
                <div className="absolute bottom-0 h-[3px] w-full rounded-full bg-gradient-to-r from-sw-gold-100 via-sw-white to-sw-gold-200" />
              )}
            </div>
          ))}
          <Link
            href="/join"
            className="flex items-center justify-center"
            onClick={() => setIsOpen(false)}
            target="_blank"
          >
            <Image src={navjoinframe} alt="navframe" className="w-3/6" />
            <p className="absolute mt-2 bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text text-transparent">
              JOIN
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
