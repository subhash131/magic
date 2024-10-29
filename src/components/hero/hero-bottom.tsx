import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../link";
import CustomLink from "../link";
import Reveal from "../animate/reveal";

const HeroBottom = () => {
  return (
    <div className="size-full flex items-center justify-start gap-10 flex-col">
      <Reveal>
        <h1 className="text-6xl font-semibold w-[60%] text-center">
          Attractive Templates for every
          <span className="text-foreground"> use case.</span>
        </h1>
      </Reveal>
      <div className="flex items-center justify-center gap-4">
        <Reveal
          transition={{
            delay: 0.3,
          }}
        >
          <CustomLink className="bg-foreground text-white" href="#">
            Get Started
          </CustomLink>
        </Reveal>
        <Reveal
          transition={{
            delay: 0.5,
          }}
        >
          <CustomLink href="/">
            Templates
            <FaLongArrowAltRight />
          </CustomLink>
        </Reveal>
      </div>
    </div>
  );
};

export default HeroBottom;
