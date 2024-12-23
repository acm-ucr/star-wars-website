"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import mediumFrame from "@/public/frame/joinframe1.svg";
import joinheaderframe from "@/public/frame/joinheaderframe.svg";
import { motion } from "framer-motion";
import { socialMedia } from "@/data/footer";

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

const Join = () => {
  return (
    <div className="relative mb-[150px] mt-10 w-full text-center md:mt-14 xl:h-[550px]">
      <motion.div
        variants={animatePopupStagger}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src={mediumFrame}
          alt="Medium Frame"
          className="absolute left-1/2 z-0 hidden -translate-x-1/2 transform xl:top-[70px] xl:block xl:w-[85%] 2xl:w-[60%]"
        />
        <div className="relative z-10 flex flex-col items-center justify-center gap-y-10 md:gap-y-20">
          <motion.div variants={animatePopup} className="flex justify-center">
            <Image
              src={joinheaderframe}
              alt="Join Header Frame"
              className="w-10/12 md:w-9/12"
            />
          </motion.div>
          <motion.div
            variants={animatePopup}
            className="flex w-11/12 justify-center md:w-full"
          >
            <div className="leading-[1.6] text-white md:w-[70%] md:text-[20px] xl:w-[45%]">
              Ready to become part of a galaxy far, far away? The Star Wars Club
              at UCR welcomes fans of all backgrounds to join our community of
              Jedi, Sith, and everyone in between. Whether you’re here for the
              epic battles, deep lore, or just want to connect with fellow Star
              Wars enthusiasts, there’s a place for you in our galaxy.
            </div>
          </motion.div>
          <motion.div
            variants={animatePopup}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <motion.div
              className="flex items-center justify-center gap-x-5 md:gap-x-20"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              {socialMedia.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <motion.div
                    className="flex flex-col items-center gap-1"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link href={item.href} target="_blank">
                      <Image
                        src={item.icon}
                        alt="icon"
                        className="h-[50px] w-[50px] hover:scale-110"
                      />
                    </Link>
                    <div className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-bold text-transparent">
                      {item.text}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Join;
