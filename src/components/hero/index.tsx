import React from "react";
import HeroTop from "./hero-top";
import HeroBottom from "./hero-bottom";

const Hero = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden flex flex-col sticky top-0 z-0">
      <HeroTop />
      <HeroBottom />
    </div>
  );
};

export default Hero;
