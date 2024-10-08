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
    <div className="flex items-center bg-gray-500">
      <Link href="/" className="ml-12 mr-64 flex items-center">
        <Image src={swIcon} alt="swLOGO" />
      </Link>
      <div
        className="flex items-center justify-center gap-x-16 font-lora text-4xl font-bold text-white"
        style={{
          backgroundImage: `url(${navframe.src})`,
          width: `${navframe.width}px`,
          height: `${navframe.height}px`,
        }}
      >
        {ITEMS.map((item, index) => {
          const isActive = pathname === item.link;

          return (
            <div className="relative" key={index}>
              <Link
                href={item.link}
                className={`hover:bg-gradient-to-b hover:from-[#DDA82A] hover:via-sw-white hover:to-[#905803] hover:bg-clip-text hover:text-transparent ${isActive ? "bg-gradient-to-b from-[#DDA82A] via-sw-white to-[#905803] bg-clip-text text-transparent" : ""}`}
              >
                {item.name}
              </Link>
              {isActive && (
                <div className="absolute -bottom-3 h-1.5 w-full rounded-full bg-gradient-to-r from-sw-gold-100 via-sw-white to-[#905803]" />
              )}
            </div>
          );
        })}
      </div>
      <div
        className="mb-2 ml-20 flex items-center justify-center"
        style={{
          backgroundImage: `url(${navjoinframe.src})`,
          width: `${navjoinframe.width}px`,
          height: `${navjoinframe.height}px`,
        }}
      >
        <Link
          href="/join"
          className="mt-4 bg-gradient-to-b from-[#DDA82A] via-sw-white to-[#905803] bg-clip-text font-lora text-4xl font-bold text-transparent"
        >
          JOIN
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
