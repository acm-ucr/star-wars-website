"use client";

import Image from "next/image";
import { ITEMS } from "@/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import swIcon from "@/public/swIcon.svg";
import navframe from "@/public/frame/navframe.svg";
import navjoinframe from "@/public/frame/navjoinframe.svg";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between py-10">
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
  );
};

export default Navigation;
