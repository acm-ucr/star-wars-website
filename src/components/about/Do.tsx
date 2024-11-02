import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Button from "../Button";
import EvBar from "@/public/frame/evbar.svg";
import CoBar from "@/public/frame/cobar.svg";
import CreBar from "@/public/frame/crebar.svg";

const Do = () => {
  return (
    <div>
      <Header title="What We Do" />
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="ml-auto max-w-sm rounded-lg border border-sw-gold-100 bg-gradient-to-r from-[#15121A] from-10% via-[#2C2636] to-[#675980] p-6 text-center shadow-md">
            <h2 className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text text-4xl text-transparent">
              EVENTS
            </h2>
            <div className="my-2 flex items-center justify-center">
              <div className="size-1/3">
                <Image src={EvBar} alt="mando" />
              </div>
            </div>
            <p className="font-nunito text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mr-auto max-w-sm rounded-lg border border-sw-gold-100 bg-gradient-to-r from-[#15121A] from-10% via-[#2C2636] to-[#675980] p-6 text-center shadow-md">
            <h2 className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text text-4xl text-transparent">
              COSPLAY
            </h2>
            <div className="my-2 flex items-center justify-center">
              <div className="size-1/3">
                <Image src={CoBar} alt="mando" />
              </div>
            </div>
            <p className="font-nunito text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl rounded-lg border border-sw-gold-100 bg-gradient-to-r from-[#15121A] from-10% via-[#2C2636] to-[#675980] p-6 text-center shadow-md">
          <h2 className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text text-4xl text-transparent">
            CREATE
          </h2>
          <div className="my-2 flex items-center justify-center">
            <div className="size-1/5">
              <Image src={CreBar} alt="mando" />
            </div>
          </div>
          <p className="font-nunito text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="">
          <Button title={"SEE EVENTS"} link={"/events"} />
        </div>
      </div>
    </div>
  );
};

export default Do;
