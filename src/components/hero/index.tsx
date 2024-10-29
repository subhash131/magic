import React from "react";
import HeroTop from "./hero-top";
import HeroBottom from "./hero-bottom";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <HeroTop />
      <HeroBottom />
    </div>
  );
};

export default Hero;
