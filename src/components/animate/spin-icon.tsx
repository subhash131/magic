"use client";
import React from "react";
import { motion } from "framer-motion";

const SpinIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="size-28"
      initial={{
        scale: 0,
        rotate: 0,
      }}
      animate={{
        scale: 1,
        rotate: 360,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SpinIcon;
