"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Button from "../Button";
import EvBar from "@/public/frame/evbar.svg";
import CoBar from "@/public/frame/cobar.svg";
import CreBar from "@/public/frame/crebar.svg";
import { motion } from "framer-motion";

const animatePopupStagger = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const animatePopup = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Do = () => {
  return (
    <motion.div
      variants={animatePopupStagger}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col items-center"
    >
      <motion.div variants={animatePopup} className="w-full md:w-2/5">
        <Header title="What We Do" />
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-5">
        <motion.div
          variants={animatePopup}
          className="grid grid-cols-1 sm:grid-cols-2"
        >
          <div className="shadow-m ml-auto max-w-sm rounded-lg border border-sw-gold-100 bg-gradient-to-r from-[#15121A] from-10% via-[#2C2636] to-[#675980] p-6 text-center">
            <h2 className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text text-4xl text-transparent">
              EVENTS
            </h2>
            <div className="my-2 flex items-center justify-center">
              <div className="size-1/3">
                <Image src={EvBar} alt="mando" />
              </div>
            </div>
            <p className="font-nunito text-base text-white md:text-xl">
              Join us for thrilling Star Wars-themed events, including movie
              nights, trivia competitions, and lightsaber duels. Whether you're
              a Jedi, Sith, or somewhere in between, our events bring fans
              together for unforgettable adventures.
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
            <p className="font-nunito text-base text-white md:text-xl">
              Express your love for Star Wars by creating and showcasing your
              own unique costumes. From iconic characters to original designs,
              our cosplay community celebrates creativity and craftsmanship.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={animatePopup}
          className="mx-auto max-w-3xl rounded-lg border border-sw-gold-100 bg-gradient-to-r from-[#15121A] from-10% via-[#2C2636] to-[#675980] p-6 text-center shadow-md"
        >
          <h2 className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text text-4xl text-transparent">
            CREATE
          </h2>
          <div className="my-2 flex items-center justify-center">
            <div className="size-1/5">
              <Image src={CreBar} alt="mando" />
            </div>
          </div>
          <p className="font-nunito text-base text-white md:text-xl">
            Unleash your imagination with art, writing, and design inspired by
            the Star Wars universe. Share fanfiction, create stunning
            illustrations, or collaborate on group projects that bring the
            galaxy far, far away to life.
          </p>
        </motion.div>

        <motion.div variants={animatePopup} className="mt-10 md:mt-0">
          <Button title={"SEE EVENTS"} link={"/events"} target="" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Do;
