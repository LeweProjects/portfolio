"use client";
import React, { useRef, useState } from "react";
import { Orbitron } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { IoCodeSlashOutline } from "react-icons/io5";
import hero from "../../app/images/hero.jpeg";
import { GoArrowRight } from "react-icons/go";
import splitText from "@/app/utils/splitText";
import { relative } from "path";
import { headerProps } from "@/app/headerProps";

const inter = Orbitron({
  subsets: ["latin"],
});

const greet = "Hello, I am";
const myName = "Marvell";
const define = "a full-stack developer";

const HeroSection: React.FC<headerProps> = ({ home, logo, isLogoInView }) => {
  //texts broke into characters
  const greetChar = splitText(greet);
  const myNameChar = splitText(myName);
  const defineChar = splitText(define);

  //button function
  function scrollTo(id: string): void {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  //text animation
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

  //hide scroll until animation is finished
  // React.useEffect(() => {

  // }, []);

  return (
    <motion.section
      ref={home}
      className="heroContainer font-semibold w-full overflow-hidden
      bg-center bg-[length:2150px_1000px] whitespace-break-spaces"
      style={{
        backgroundImage: `url(${hero.src})`,
      }}
    >
      <motion.div className="w-full min-h-[56.1rem] flex flex-col items-center justify-center bg-black backdrop-blur-md bg-opacity-25">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: isLogoInView ? 1 : 0,
            y: isLogoInView ? 0 : -100,
          }}
          transition={{ duration: 0.9, type: "spring" }}
          className="relative -mt-20"
        >
          <div className="border-4 border-white rounded-full p-[68px] absolute ml-[56px] mt-[56px]" />
          <div className="border-4 border-white rounded-full p-9 absolute ml-[87px] mt-[87px] bg-white" />

          <motion.div ref={logo} viewport={{ margin: "-5000px" }} className="">
            <IoCodeSlashOutline className="text-5xl text-black ml-[104px] mt-[104px] absolute" />
          </motion.div>

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
          initial={
            isLogoInView && {
              x: "var(--x-initial-top-lightblue)",
              y: "var(--y-initial-top-lightblue)",
              rotate: -45,
              padding: 8,
              position: "relative",
              display: "flex",
              justifyContent: "start",
              width: 0,
              visibility: "hidden",
            }
          }
          animate={{
            x: isLogoInView
              ? "var(--x-animate-top-lightblue)"
              : "var(--x-initial-top-lightblue)",
            y: isLogoInView
              ? "var(--y-animate-top-lightblue)"
              : "var(--y-initial-top-lightblue)",
            rotate: -45,
            padding: 8,
            display: "flex",
            justifyContent: "start",
            width: isLogoInView ? "var(--size-top-lightblue)" : 0,
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
          initial={
            isLogoInView && {
              x: "var(--x-initial-top-blue)",
              y: "var(--y-initial-top-blue)",
              rotate: -45,
              padding: 4,
              display: "flex",
              justifyContent: "start",
              width: 0,
              visibility: "hidden",
            }
          }
          animate={{
            x: isLogoInView
              ? "var(--x-animate-top-blue)"
              : "var(--x-initial-top-blue)",
            y: isLogoInView
              ? "var(--y-animate-top-blue)"
              : "var(--y-initial-top-blue)",
            rotate: -45,
            padding: 4,
            display: "flex",
            justifyContent: "start",
            width: isLogoInView ? "var(--size-top-blue)" : 0,
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
          initial={
            isLogoInView && {
              x: "var(--x-initial-bottom-lightblue)",
              y: "var(--y-initial-bottom-lightblue)",
              rotate: -45,
              padding: 8,
              display: "flex",
              justifyContent: "start",
              width: 0,
            }
          }
          animate={{
            x: isLogoInView
              ? "var(--x-animate-bottom-lightblue)"
              : "var(--x-initial-bottom-lightblue)",
            y: isLogoInView
              ? "var(--y-animate-bottom-lightblue)"
              : "var(--y-initial-bottom-lightblue)",
            rotate: -45,
            padding: 8,
            display: "flex",
            justifyContent: "start",
            width: isLogoInView ? "var(--size-bottom-lightblue)" : 0,
            visibility: "visible",
          }}
          transition={{ duration: 1.3, type: "spring", delay: 0.6 }}
          className=" [--size-bottom-lightblue:52rem] 
          [--x-initial-bottom-lightblue:23.5rem] [--y-initial-bottom-lightblue:31rem]
          [--x-animate-bottom-lightblue:42.2rem] [--y-animate-bottom-lightblue:12.3rem]
          bg-[#D4F0FC] -rotate-45 z-20 lines box1"
        />
        <motion.div
          initial={
            isLogoInView && {
              x: "var(--x-initial-bottom-blue)",
              y: "var(--y-initial-bottom-blue)",
              rotate: -45,
              padding: 4,
              display: "flex",
              justifyContent: "start",
              width: 0,
              visibility: "hidden",
            }
          }
          animate={{
            x: isLogoInView
              ? "var(--x-animate-bottom-blue)"
              : "var(--x-initial-bottom-blue)",
            y: isLogoInView
              ? "var(--y-animate-bottom-blue)"
              : "var(--y-initial-bottom-blue)",
            rotate: -45,
            padding: 4,
            display: "flex",
            justifyContent: "start",
            width: isLogoInView ? "var(--size-bottom-blue)" : 0,
            visibility: "visible",
          }}
          transition={{ duration: 1.3, type: "spring", delay: 0.2 }}
          className="bg-[#02A9F7]
          [--size-bottom-blue:53.5rem]          
          [--x-initial-bottom-blue:60rem] [--y-initial-bottom-blue:-8rem]
          [--x-animate-bottom-blue:40.7rem] [--y-animate-bottom-blue:11.4rem]
          -rotate-45 translate-x-[53rem] lines box2"
        />
        <motion.div
          animate={{
            opacity: isLogoInView ? 1 : 0,
            x: isLogoInView ? 0 : -300,
          }}
          transition={{ duration: 1, type: "spring", delay: 0.3 }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{
              staggerChildren: 0.09,
              type: "spring",
              delayChildren: 0.4,
            }}
            className={`${inter.className} hero 
          text-7xl -mt-8 text-center  leading-tight`}
          >
            <motion.div>
              {greetChar.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={textAnimation}
                >
                  {char}
                </motion.span>
              ))}{" "}
              {myNameChar.map((char, i) => (
                <motion.span
                  key={i}
                  variants={textAnimation}
                  className="text-[#02A9F7] italic inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <br />
              {defineChar.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={textAnimation}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ x: isLogoInView ? 0 : 355, opacity: isLogoInView ? 1 : 0, visibility: isLogoInView ? "visible": "hidden" }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", delay: 4 }}
            onClick={() => scrollTo("projects")}
            className="viewButton flex items-center mt-10 px-6 py-4 hover:bg-white hover:text-black
             transition-colors duration-150 border-[3px] text-2xl font-normal"
          >
            view my works <GoArrowRight className="text-3xl" />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
