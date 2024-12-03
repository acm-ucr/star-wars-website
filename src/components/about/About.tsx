"use client";
import React from "react";
import Image from "next/image";
import largeFrame from "@/public/frame/largeframe.svg";
import Title from "@/components/Title";
import { motion } from "framer-motion";

const animateAbout = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const About = ({ title }: { title: string }) => {
  return (
    <motion.div
      variants={animateAbout}
      initial="hidden"
      whileInView="visible"
      className="relative flex items-center justify-center"
    >
      <Image
        src={largeFrame}
        alt="largeFrame"
        className="h-11/12 inset-0 w-11/12 object-cover"
      />
      <motion.div
        variants={animateAbout}
        className="absolute bottom-12 top-0 flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: 0, duration: 0.5, ease: "linear" }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 200, damping: 10 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { type: "spring", stiffness: 200, damping: 10 },
          }}
        >
          <Title text={title} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
