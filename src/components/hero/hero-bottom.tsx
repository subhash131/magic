import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../link";
import CustomLink from "../link";

const HeroBottom = () => {
  return (
    <div className="size-full flex items-center justify-start gap-10 flex-col">
      <h1 className="text-6xl font-semibold w-[60%] text-center">
        Attractive Templates for every
        <span className="text-foreground"> use case.</span>
      </h1>
      <div className="flex items-center justify-center gap-4">
        {/* <button className=" bg-foreground ">Get Started</button> */}
        <CustomLink className="bg-foreground text-white" href="#">
          Get Started
        </CustomLink>
        <CustomLink href="/">
          Templates
          <FaLongArrowAltRight />
        </CustomLink>
      </div>
    </div>
  );
};

export default HeroBottom;
