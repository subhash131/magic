"use client";
import React from "react";
import {
  motion,
} from "framer-motion";

const SpinIcon = ({
  children,
  animate,
  initial,
  transition,
}: {
  children: React.ReactNode;
  initial?: any;
  animate?: any;
  transition?: any;
}) => {
  return (
    <motion.div
      className="size-28 flex items-center justify-center"
      initial={{ ...defaultInit, ...initial }}
      animate={{ ...defaultAnimate, ...animate }}
      transition={{ ...defaultTransition, ...transition }}
    >
      {children}
    </motion.div>
  );
};

export default SpinIcon;

const defaultInit = {
  scale: 0,
  rotate: 0,
};
const defaultAnimate = {
  scale: 1,
  rotate: 360,
};
const defaultTransition = {
  duration: 0.4,
};
