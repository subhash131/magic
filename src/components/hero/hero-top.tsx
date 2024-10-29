import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { GiPolarStar } from "react-icons/gi";
import { RiNextjsFill } from "react-icons/ri";

const HeroTop = () => {
  return (
    <div className="size-full flex items-center justify-between [background:radial-gradient(circle,rgba(247,189,255,1)3%,rgba(255,255,255,1)25%,rgba(255,255,255,1)100%)]">
      <div className="size-full flex items-center justify-center">
        <RiNextjsFill className="-rotate-12 text-foreground" size={80} />
      </div>
      <div className="relative flex items-center justify-center ">
        <div className="absolute size-28 flex items-center justify-center rounded-full shadow-inner shadow-[rgba(99,76,195,0.4)] bg-white">
          <div className="rounded-full shadow ">
            <div className="size-20 shadow-inner shadow-[rgba(99,76,195,0.2)] rounded-full animate-spin flex items-center justify-center [background:linear-gradient(90deg,rgba(255,255,255,0.1)10%,rgba(99,76,195,0.4)100%)]" />
          </div>
        </div>
        <GiPolarStar size={40} className="text-dark drop-shadow" />
      </div>
      <div className="size-full flex items-center justify-center">
        <BiLogoTypescript className="rotate-12 text-foreground" size={80} />
      </div>
    </div>
  );
};

export default HeroTop;
