"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  classNames: string;
  children: React.ReactNode;
}

const MotionWrapper = ({ children, classNames }: Props) => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${classNames} app__flex`}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
