"use client";
import Card from "./Card";
import { ITEMS } from "@/data/board";
import Header from "./Header";
import { motion } from "framer-motion";

const Board = () => {
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

  return (
    <div className="w-full">
      <motion.div
        variants={title}
        initial="hidden"
        whileInView={"visible"}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Header title={"Meet the Board"} />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-5 flex w-full flex-wrap justify-center gap-20"
      >
        {ITEMS.map((item, index) => (
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.9, type: "spring", bounce: 0.2 }}
            key={index}
            className="w-1/3 md:w-1/4"
          >
            <Card
              key={index}
              topText={item.topText}
              bottomText={item.bottomText}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Board;
