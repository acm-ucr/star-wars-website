"use client";
import Card from "../Card";
import { Creations } from "@/data/images";
import Header from "../Header";
import { motion } from "framer-motion";
const containerVariants = {
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

const cardVariants = {
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
const Creation = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <motion.div
        variants={title}
        initial="hidden"
        whileInView={"visible"}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center md:w-2/5"
      >
        <Header title={"CREATION"} />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex w-full flex-wrap justify-center gap-20"
      >
        {Creations.map((item, index) => (
          <motion.div
            variants={cardVariants}
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

export default Creation;
