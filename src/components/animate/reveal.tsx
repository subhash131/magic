"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const Reveal = ({
  children,
  className,
  animate,
  initial,
  transition,
}: {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
}) => {
  return (
    <motion.div
      initial={{ ...defaultInitial, ...initial }}
      animate={{ ...defaultAnimate, ...animate }}
      transition={{ ...defaultTransition, ...transition }}
      className={cn("text-center flex items-center justify-center", className)}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

const defaultInitial = {
  y: 100,
  opacity: 0,
};
const defaultAnimate = {
  y: 0,
  opacity: 1,
};
const defaultTransition = {
  delay: 0,
};
