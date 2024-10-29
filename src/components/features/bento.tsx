import React from "react";
import style from "./bento.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  GiChargedArrow,
  GiCrystalGrowth,
  GiDeerTrack,
  GiPointySword,
  GiSparkles,
} from "react-icons/gi";
import { IoIosGitCompare } from "react-icons/io";
import { TbTopologyComplex } from "react-icons/tb";
import { FaFighterJet } from "react-icons/fa";

const BentoGrid = () => {
  return (
    <section
      className="w-screen h-screen flex items-center justify-center backdrop-blur-lg relative text-white"
      id="about-me"
    >
      <div className={`${style.parent} w-[80%] h-[80%] gap-3 bento`}>
        <div
          className={`${style.div1} rounded-2xl  overflow-hidden hover:scale-95 transition-transform bg-dark p-10 flex flex-wrap items-center justify-between text-[#d6d6d6]`}
        >
          <div className="size-32 rounded-md bg-[#3D3D3D] flex items-center justify-center relative">
            <IoIosGitCompare size={40} />
            <p className="text-xs absolute bottom-2 ">Faster deployment</p>
          </div>
          <div className="size-32 rounded-md bg-[#3D3D3D] flex items-center justify-center relative">
            <GiCrystalGrowth size={40} />
            <p className="text-xs absolute bottom-2 ">Scale 100x</p>
          </div>
          <div className="size-32 rounded-md bg-[#3D3D3D] flex items-center justify-center relative animate-pulse">
            <GiDeerTrack size={40} />
            <p className="text-xs absolute bottom-2 ">Track progress</p>
          </div>
          <div className="size-32 rounded-md bg-[#3D3D3D] flex items-center justify-center relative animate-pulse">
            <TbTopologyComplex size={40} />
            <p className="text-xs absolute bottom-2 ">Secured Network</p>
          </div>
          <div className="size-32 rounded-md bg-[#3D3D3D] flex items-center justify-center relative animate-pulse">
            <FaFighterJet size={40} className="-rotate-90" />

            <p className="text-xs absolute bottom-2 ">Unlimited Access</p>
          </div>
          <div className="size-32 rounded-md bg-[#3D3D3D] flex items-center justify-center flex-col relative">
            <GiPointySword size={40} className="rotate- animate-bounce" />
            <p className="text-xs absolute bottom-2 ">Reap competition</p>
          </div>
        </div>
        <div
          className={`${style.div2}  rounded-2xl  p-4 bg-dark hover:scale-95 transition-transform flex flex-col gap-4`}
        >
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fugit
            dolores. Neque sint recusandae pariatur sequi natus atque, quidem
            enim, harum quis officiis facilis minus doloremque necessitatibus
            ducimus inventore ut!
          </p>
        </div>
        <div
          className={`${style.div3}  rounded-2xl bg-foreground flex flex-col items-center hover:scale-95 transition-transform overflow-hidden p-4 gap-4`}
        >
          <div className="w-full flex justify-between items-center">
            <h3 className="text-4xl font-semibold">Features</h3>
            <GiSparkles fill="#DCD4DF" size={28} />
          </div>
          <div className="size-full">
            <p>Artificial intelligence</p>
            <p>Automation</p>
            <p>Blockchain</p>
            <p>Edge computing</p>
            <p>Machine learning</p>
            <p>Internet of things</p>
            <p>Augmented reality</p>
          </div>
        </div>

        <div className={`${style.div4} rounded-2xl flex flex-col gap-3`}>
          <div className="size-full bg-[#e7e7e7] rounded-2xl hover:scale-95 transition-transform " />
          <div className={`size-full`}></div>
          <div className="size-full bg-[#e7e7e7] rounded-2xl  hover:scale-95 transition-transform " />
        </div>
        <div
          className={`${style.div5}  rounded-2xl  bg-dark flex gap-3 p-1 items-center justify-between pr-3`}
        >
          <div className="size-full text-3xl font-extrabold tracking-widest flex items-center justify-center">
            LIN
            <br />
            KS:
          </div>
          <Link
            target="_blank"
            href="https://x.com/subhashnayak131"
            className="w-40 h-16 bg-gray-100 rounded-2xl flex items-center justify-center hover:scale-95 transition-transform cursor-pointer"
          >
            <Image src="/x.png" alt="x" width={30} height={30} />
          </Link>
          <Link
            target="_blank"
            href="#"
            className="w-40 h-16 bg-gray-100 rounded-2xl flex items-center justify-center hover:scale-95 transition-transform"
          >
            <Image src="/youtube.svg" alt="youtube" width={40} height={40} />
          </Link>
        </div>
        <div
          className={`${style.div6}  rounded-2xl  bg-foreground hover:scale-95 transition-transform px-3 pt-6  flex flex-col gap-4 h-full`}
        >
          <h4 className="uppercase font-[1000] text-2xl">
            Recent <br /> Achievements.
          </h4>
          <div>
            <div className="flex justify-between items-center">
              <p className="font font-semibold">Security Award.</p>
              <p className="text-xs "> 2024</p>
            </div>
            <p className="text-xs">USA</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="font font-semibold">Innovation Award</p>
              <p className="text-xs "> 2023</p>
            </div>
            <p className="text-xs">Worldwide</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="font font-semibold">XYZ Awards</p>
              <p className="text-xs ">2023</p>
            </div>
            <p className="text-xs">UK</p>
          </div>
        </div>

        <div className={`${style.div7}  rounded-2xl  bg-dark`}>
          <div className="size-full flex flex-col p-3">
            <div className="size-full flex items-center gap-4">
              <div className="size-10 rounded-full flex items-center justify-center  bg-black">
                O
              </div>
              <div className="flex flex-col">
                <p>Oliver Twist</p>
                <p className="text-[0.6rem] ">Product Manager at XYZ</p>
              </div>
            </div>
            <p className="text-[0.6rem] size-full">
              This specific feature of this product helped us to mitigate the
              risk. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, reiciendis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
