import React from "react";
import { FaPhoenixFramework } from "react-icons/fa";
import { GiCrystalGrowth, GiMeltingIceCube } from "react-icons/gi";
import { TbHomeFilled, TbLayoutGridRemove } from "react-icons/tb";
import Reveal from "./animate/reveal";

const Navbar = () => {
  return (
    <nav className="z-[100] fixed bottom-10 w-full h-12 pointer-events-none flex items-center justify-center text-white">
      <Reveal
        transition={{
          delay: 0.8,
        }}
      >
        <div className="w-64 h-fit py-1.5 rounded-full px-4 bg-dark flex items-center justify-between pointer-events-auto">
          {navItems.map(({ icon: Icon, name }, idx) => {
            return (
              <div
                className="cursor-pointer flex items-center justify-center hover:scale-95 transition-transform relative group px-2 py-1.5"
                key={name + idx}
              >
                <div className="-z-10 absolute px-2 py-0.5 text-xs top-0 bg-dark rounded-full group-hover:-top-10 transition-all">
                  {name}
                </div>
                <Icon size={20} />
              </div>
            );
          })}
        </div>
      </Reveal>
    </nav>
  );
};

export default Navbar;

const navItems = [
  {
    name: "Home",
    icon: TbHomeFilled,
  },
  {
    name: "Grid",
    icon: TbLayoutGridRemove,
  },
  {
    name: "Cube",
    icon: GiMeltingIceCube,
  },
  {
    name: "Bird",
    icon: FaPhoenixFramework,
  },
  {
    name: "Crystal",
    icon: GiCrystalGrowth,
  },
];
