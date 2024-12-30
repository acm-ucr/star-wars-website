"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import swLogo from "@/public/swLOGO.svg";
import stuff from "@/public/xwing-removebg.png";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="my-10 flex items-center justify-center sm:mr-28 sm:h-screen sm:justify-start md:my-0"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="size-2/3 text-center"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 bg-gradient-to-b from-[#DDA82A] via-sw-white to-[#905803] bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
        >
          WELCOME TO
        </motion.h1>
        <motion.div
          initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center"
        >
          <Image src={swLogo} alt="UCR SWC Logo" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, staggerChildren: 0.2 }}
          className="flex flex-row justify-center gap-5 py-5"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              title={"JOIN"}
              link={"https://linktr.ee/ucrstarwars"}
              target="_blank"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button title={"LEARN MORE"} link={"/about"} target="" />
          </motion.div>
        </motion.div>
      </motion.div>
      <Image
        src={stuff}
        alt="x-wing"
        className="absolute right-4 hidden w-1/3 md:block"
      />
    </motion.div>
  );
};

export default Landing;
