"use client";
import React from "react";
import Title from "./Title";
import Header from "./Header";
import Image from "next/image";
import planet from "@/public/tatooine.webp";
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

// const whatAnimation = {
//   hidden: {
//     opacity: 0,
//     scale: 0,
//     x: -500,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     x: 0,
//   },
// };

const What = () => {
  return (
    <div className="relative flex w-full flex-col-reverse md:flex-row">
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
            At the Star Wars Club at UCR, we immerse ourselves in the galaxy
            far, far away through a variety of exciting activities. From hosting
            movie marathons that span the Skywalker saga and beyond to animated
            series like The Clone Wars and Rebels, we relive the adventures that
            shaped generations.
          </motion.div>
          <motion.p
            className="text-base text-white sm:text-lg md:text-xl lg:text-2xl"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
          >
            At its heart, the Star Wars Club is about building a community where
            fans can connect, share their love for the franchise, and forge new
            friendships while creating unforgettable memories. May the Force
            guide us as we forge the future together!
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="flex w-full items-center justify-center px-4 py-6 md:w-1/2 md:items-end md:justify-start">
        <motion.div
          className="flex flex-col-reverse items-center justify-center md:flex-col"
          // variants={whatAnimation}
          // initial="hidden"
          // whileInView="visible"
          // transition={{ ease: "easeOut", duration: 1 }}
        >
          <Image src={planet} alt="planet" className="w-fit md:w-4/5" />
          <Header title="What We Do" />
        </motion.div>
      </div>
    </div>
  );
};

export default What;
