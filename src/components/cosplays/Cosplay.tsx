"use client";
import Image from "next/image";
import React from "react";
import cosplaysframe from "@/public/frame/cosplaysframe.svg";
import Card from "../Card";
import { ITEMS } from "@/data/board";
import { motion } from "framer-motion";

const Cosplay = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
  };

  const animations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  const title = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <motion.div
        variants={title}
        initial="hidden"
        whileInView={"visible"}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Image
          src={cosplaysframe}
          alt="cosplay frame"
          width={370}
          height={500}
        />
      </motion.div>

      <motion.div
        variants={animations}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-5 flex w-full flex-wrap justify-center gap-20"
      >
        {ITEMS.map((item, index) => (
          <motion.div
            variants={containerVariants}
            transition={{ duration: 0.9, type: "spring", bounce: 0.2 }}
            key={index}
            className="w-1/4 sm:w-1/4"
          >
            <Card
              topText={item.topText}
              bottomText={item.bottomText}
              image={item.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Cosplay;
