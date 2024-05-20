"use client";
import React from "react";
import { Orbitron } from "next/font/google";
import { motion } from "framer-motion";
import { IoCodeSlashOutline } from "react-icons/io5";
import hero from "../../app/images/hero.jpeg";
import { GoArrowRight } from "react-icons/go";
import splitText from "@/app/utils/splitText";
import { relative } from "path";

const inter = Orbitron({
  subsets: ["latin"],
});

const greet = "Hello, I am";
const myName = "Marvell";
const define = "a full-stack developer";

const HeroSection = () => {
  const greetChar = splitText(greet);
  const myNameChar = splitText(myName);
  const defineChar = splitText(define);

  function scrollTo(id: string): void {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  const textAnimation = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section
      className="heroContainer font-semibold w-full 
      bg-center bg-[length:2150px_1000px] whitespace-break-spaces"
      style={{
        backgroundImage: `url(${hero.src})`,
      }}
    >
      <div className="w-full min-h-[56.1rem] flex flex-col items-center justify-center bg-black backdrop-blur-md bg-opacity-25">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, type: "spring" }}
          className="relative -mt-20"
        >
          <div className="border-4 border-white rounded-full p-[68px] absolute ml-[56px] mt-[56px]" />
          <div className="border-4 border-white rounded-full p-9 absolute ml-[87px] mt-[87px] bg-white" />
          <IoCodeSlashOutline className="text-5xl text-black ml-[104px] mt-[104px] absolute" />

          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 400 400"
            className="w-64"
          >
            <defs>
              <path
                id="MyPath"
                d="M 180, 200 m -60, 0 a 60,60 0 0,1 160,0 a 60,60 0 0,1 -160,0"
                className="stroke-2"
              />
            </defs>

            <text fill="#fff">
              <textPath xlinkHref="#MyPath" className=" text-lg">
                MARVELLPORTFOLIO ★ MARVELLPORTFOLIO ★
              </textPath>
            </text>
          </motion.svg>
        </motion.div>
        <motion.div
          initial={{
            x: "var(--x-initial-top-lightblue)",
            y: "var(--y-initial-top-lightblue)",
            rotate: -45,
            padding: 8,
            position: "relative",
            display: "flex",
            justifyContent: "start",
            paddingRight: 0,
            visibility: "hidden",
          }}
          animate={{
            x: "var(--x-animate-top-lightblue)",
            y: "var(--y-animate-top-lightblue)",
            rotate: -45,
            padding: 8,
            display: "flex",
            justifyContent: "start",
            paddingRight: "var(--size-top-lightblue)",
            visibility: "visible",
          }}
          transition={{ duration: 1.3, type: "spring" }}
          className="
          [--size-top-lightblue:56rem]  
          [--x-initial-top-lightblue:-21rem] [--y-initial-top-lightblue:-32rem]
          [--x-animate-top-lightblue:-40rem] [--y-animate-top-lightblue:-13rem]
          bg-[#D4F0FC] -rotate-45 lines"
        />
        <motion.div
          initial={{
            x: "var(--x-initial-top-blue)",
            y: "var(--y-initial-top-blue)",
            rotate: -45,
            padding: 4,
            display: "flex",
            justifyContent: "start",
            paddingRight: 0,
            visibility: "hidden",
          }}
          animate={{
            x: "var(--x-animate-top-blue)",
            y: "var(--y-animate-top-blue)",
            rotate: -45,
            padding: 4,
            display: "flex",
            justifyContent: "start",
            paddingRight: "var(--size-top-blue)",
            visibility: "visible",
          }}
          transition={{ duration: 1.3, type: "spring", delay: 0.3 }}
          className="
          [--size-top-blue:55.5rem]
          [--x-initial-top-blue:-60rem] [--y-initial-top-blue:8rem]
          [--x-animate-top-blue:-40rem] [--y-animate-top-blue:-12rem]
          p-1 bg-[#02A9F7] -rotate-45 -translate-x-[53rem] lines"
        />
        <motion.div
          initial={{
            x: "var(--x-initial-bottom-lightblue)",
            y: "var(--y-initial-bottom-lightblue)",
            rotate: -45,
            padding: 8,
            display: "flex",
            justifyContent: "start",
            paddingRight: 0,
            visibility: "hidden",
          }}
          animate={{
            x: "var(--x-animate-bottom-lightblue)",
            y: "var(--y-animate-bottom-lightblue)",
            rotate: -45,
            padding: 8,
            display: "flex",
            justifyContent: "start",
            paddingRight: "var(--size-bottom-lightblue)",
            visibility: "visible",
          }}
          transition={{ duration: 1.3, type: "spring", delay: 0.34 }}
          className=" [--size-bottom-lightblue:52rem]         
          [--x-initial-bottom-lightblue:23.5rem] [--y-initial-bottom-lightblue:31rem]
          [--x-animate-bottom-lightblue:42.2rem] [--y-animate-bottom-lightblue:12.3rem]
          bg-[#D4F0FC] -rotate-45 z-50 lines box1"
        />
        <motion.div
          initial={{
            //x: "60rem",
            //y: "-8rem",
            x: "var(--x-initial-bottom-blue)",
            y: "var(--y-initial-bottom-blue)",
            rotate: -45,
            padding: 4,
            display: "flex",
            justifyContent: "start",
            paddingRight: 0,
            visibility: "hidden",
          }}
          animate={{
            x: "var(--x-animate-bottom-blue)",
            y: "var(--y-animate-bottom-blue)",
            rotate: -45,
            padding: 4,
            display: "flex",
            justifyContent: "start",
            paddingRight: "var(--size-bottom-blue)",
            visibility: "visible",
          }}
          transition={{ duration: 1.3, type: "spring", delay: 0.2 }}
          className="bg-[#02A9F7]
          [--size-bottom-blue:53.5rem]          
          [--x-initial-bottom-blue:60rem] [--y-initial-bottom-blue:-8rem]
          [--x-animate-bottom-blue:40.5rem] [--y-animate-bottom-blue:11.5rem]
          -rotate-45 translate-x-[53rem] lines box2"
        />
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.09, type: "spring", delayChildren: 0.4 }}
          className={`${inter.className} hero 
          text-7xl -mt-8 text-center  leading-tight`}
        >
          <motion.div>
            {greetChar.map((char) => (
              <motion.span
                key={char}
                className="inline-block"
                variants={textAnimation}
              >
                {char}
              </motion.span>
            ))}{" "}
            {myNameChar.map((char) => (
              <motion.span
                key={char}
                variants={textAnimation}
                className="text-[#02A9F7] italic inline-block"
              >
                {char}
              </motion.span>
            ))}
            <br />
            {defineChar.map((char) => (
              <motion.span
                key={char}
                className="inline-block"
                variants={textAnimation}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", delay: 4 }}
          onClick={() => scrollTo("projects")}
          className="viewButton flex items-center mt-10 px-6 py-4 border-[3px] text-2xl font-normal"
        >
          view my works <GoArrowRight className="text-3xl" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
