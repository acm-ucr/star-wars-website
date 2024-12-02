"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import mediumFrame from "@/public/frame/joinframe1.svg";
import joinheaderframe from "@/public/frame/joinheaderframe.svg";
import discord from "@/public/frame/discord.svg";
import instagram from "@/public/frame/instagram.svg";
import email from "@/public/frame/email.svg";
import highlander from "@/public/frame/highlander.svg";
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

const Join = () => {
  return (
    <div className="relative mb-[150px] mt-[250px] w-full text-center xl:h-[550px]">
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
        <div className="relative z-10 flex flex-col items-center justify-center gap-y-20">
          <motion.div variants={animatePopup}>
            <Image src={joinheaderframe} alt="Join Header Frame" className="" />
          </motion.div>
          <motion.div variants={animatePopup} className="flex justify-center">
            <div className="leading-[1.6] text-white md:w-[70%] md:text-[20px] xl:w-[45%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </motion.div>
          <motion.div variants={animatePopup} className="flex justify-center">
            <div className="flex items-center justify-center gap-x-5 md:gap-x-20">
              <div className="flex flex-col items-center justify-center text-center">
                <motion.div
                  className="box flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href="https://discord.gg/gvSgtVQDAD" passHref>
                    <Image
                      src={discord}
                      alt="Discord"
                      className="h-[50px] w-[50px] hover:scale-110"
                    />
                  </Link>
                  <div className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-bold text-transparent">
                    Discord
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <Link href="https://instagram.com/starwarsucr" passHref>
                  <motion.div
                    className="box"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src={instagram}
                      alt="Instagram"
                      className="h-[50px] w-[50px] hover:scale-110"
                    />
                  </motion.div>
                </Link>
                <div className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-bold text-transparent">
                  Instagram
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href="mailto:Ucrstarwarsclub@gmail.com" passHref>
                    <Image
                      src={email}
                      alt="Email"
                      className="h-[50px] w-[50px] hover:scale-110"
                    />
                  </Link>
                  <div className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-bold text-transparent">
                    Email
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col items-center justify-center text-center">
                <Link
                  href="https://highlanderlink.ucr.edu/organization/starwarsclubatucr"
                  passHref
                >
                  <motion.div
                    className="box"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src={highlander}
                      alt="Highlander"
                      className="h-[50px] w-[50px] hover:scale-110"
                    />
                  </motion.div>
                </Link>
                <div className="bg-gradient-to-b from-sw-gold-100 via-sw-white to-sw-gold-200 bg-clip-text font-bold text-transparent">
                  Highlander
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Join;
