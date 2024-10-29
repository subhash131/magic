"use client";
import React from "react";
import Image from "next/image";
import { useScroll, motion } from "framer-motion";

const AppIcon = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="left-12 top-6 z-50 w-12 h-fit absolute">
      <Image
        src="/logo.svg"
        alt="icon"
        width={1}
        height={1}
        className="size-full"
      />
    </motion.div>
  );
};

export default AppIcon;
