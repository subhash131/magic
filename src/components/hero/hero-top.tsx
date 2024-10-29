import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { GiPolarStar } from "react-icons/gi";
import { RiNextjsFill } from "react-icons/ri";
import SpinIcon from "../animate/spin-icon";
import Reveal from "../animate/reveal";

const HeroTop = () => {
  return (
    <div className="size-full flex items-center justify-between [background:radial-gradient(circle,rgba(247,189,255,1)3%,rgba(255,255,255,1)25%,rgba(255,255,255,1)100%)]">
      <div className="size-full flex items-center justify-center">
        <SpinIcon
          transition={{
            delay: 0.5,
          }}
        >
          <RiNextjsFill className="-rotate-12 size-full text-foreground" />
        </SpinIcon>
      </div>
      <Reveal
        transition={{
          delay: 0.3,
        }}
      >
        <div className="relative flex items-center justify-center ">
          <div className="absolute size-28 flex items-center justify-center rounded-full shadow-inner shadow-[rgba(99,76,195,0.4)] bg-white">
            <div className="rounded-full shadow ">
              <div className="size-20 shadow-inner shadow-[rgba(99,76,195,0.2)] rounded-full animate-spin flex items-center justify-center [background:linear-gradient(90deg,rgba(255,255,255,0.1)10%,rgba(99,76,195,0.4)100%)]" />
            </div>
          </div>
          <SpinIcon transition={{ delay: 0.3 }}>
            <GiPolarStar size={60} className="text-dark drop-shadow-2xl" />
          </SpinIcon>
        </div>
      </Reveal>
      <div className="size-full flex items-center justify-center">
        <SpinIcon
          transition={{
            delay: 0.5,
          }}
        >
          <BiLogoTypescript className="rotate-12 text-foreground size-full" />
        </SpinIcon>
      </div>
    </div>
  );
};

export default HeroTop;
