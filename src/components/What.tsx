"use client";
import React from "react";
import Title from "./Title";
import Header from "./Header";
import Image from "next/image";
import planet from "@/public/tatooine.png";
import { motion } from "framer-motion";

const delayedPopup = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const whatAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: -500,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
};

const What = () => {
  return (
    <div className="relative flex w-full flex-col md:flex-row">
      <motion.div
        variants={delayedPopup}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col gap-y-4 px-4 pt-6 text-center md:w-1/2 md:pl-[8%] md:pt-[9%]"
      >
        <motion.div
          className="flex flex-col gap-6 md:gap-9"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <Title text="Forge The Future" />
          <motion.div
            className="text-base text-white sm:text-lg md:text-xl lg:text-2xl"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </motion.div>
          <motion.p
            className="text-base text-white sm:text-lg md:text-xl lg:text-2xl"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="flex w-full items-center justify-center px-4 py-6 md:w-1/2 md:items-end md:justify-start">
        <motion.div
          className="flex w-full justify-center text-center text-4xl md:text-left lg:text-8xl"
          variants={whatAnimation}
          initial="hidden"
          whileInView="visible"
          transition={{ ease: "easeOut", duration: 1 }}
        >
           <Image src={planet} alt="planet" className="w-4/5" />
          <Header title="What We Do" />
        </motion.div>
      </div>
    </div>
  );
};

export default What;
