"use client";
import React from "react";
import Image from "next/image";
import swLogo from "@/public/swNameOnly.svg";
import Title from "./Title";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex w-full flex-col gap-x-[10%] md:flex-row lg:flex-row"
    >
      <div className="flex w-auto flex-col gap-y-4 pl-[12%] pt-[9%]">
        <motion.p
          className="ml-2 flex-col bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          ABOUT
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
          }}
        >
          <Image src={swLogo} alt="swLogo" className="flex w-full max-w-64" />
        </motion.div>
      </div>
      <motion.div
        className="mr-[8%] flex w-auto flex-col gap-7 space-x-10 text-left"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay: 0.2 },
          },
        }}
      >
        <Title text="Enter Our Galaxy" />
        <motion.p
          className="md:text:xl text-lg text-white lg:text-2xl"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.4 },
            },
          }}
        >
          Embark on a journey to a galaxy far, far away with the Star Wars Club
          at UCR! Whether you’re a Jedi, Sith, bounty hunter, or just a fan of
          podracing, this is the place for you. Connect with fellow enthusiasts,
          explore the Star Wars universe through watch parties, game nights,
          trivia challenges, and lightsaber duels, and share your passion for
          one of the most iconic franchises in history.
        </motion.p>
        <motion.p
          className="md:text:xl text-lg text-white lg:text-2xl"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.6 },
            },
          }}
        >
          Join us as we dive into the lore, debate fan theories, and celebrate
          the films, TV series, books, and games that continue to inspire
          generations. May the Force be with you, always.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
