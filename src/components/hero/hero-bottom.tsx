import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroBottom = () => {
  return (
    <div className="size-full flex items-center justify-start gap-10 flex-col">
      <h1 className="text-6xl font-semibold w-[60%] text-center">
        Attractive Templates for every
        <span className="text-foreground"> use case.</span>
      </h1>
      <div className="flex items-center justify-center gap-4">
        <button className="px-4 py-2 rounded-md bg-foreground text-white font-semibold">
          Get Started
        </button>
        <button className="px-4 py-2 rounded-md text-dark font-semibold flex items-center gap-2   ">
          Templates
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default HeroBottom;
