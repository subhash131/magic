"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

const HomeWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 15, 1]);
  const top = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["1.5rem", "50rem", "80rem", "123rem"]
  );
  const left = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    ["1.5rem", "75rem", "82rem"]
  );
  const rotate = useTransform(scrollYProgress, [0.1, 0.4], ["0deg", "360deg"]);

  return (
    <div className="w-full min-h-screen relative" ref={ref}>
      <motion.div
        className="left-12 z-50 top-32 w-12 h-fit absolute"
        style={{
          scale,
          top,
          left,
          rotate,
        }}
      >
        <Image
          src="/logo.svg"
          alt="icon"
          width={1}
          height={1}
          className="size-full"
          priority
        />
      </motion.div>
      {children}
    </div>
  );
};

export default HomeWrapper;
