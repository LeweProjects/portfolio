"use client";
import React from "react";
import { motion } from "framer-motion";
import hero from "@/app/images/hero.jpeg";
import { headerProps } from "@/app/headerProps";
import ViewProjectsButton from "./ViewProjectsButton";
import TextLayout from "./TextLayout";
import Logo from "./Logo";

const HeroSection: React.FC<headerProps> = ({ home, logo, isLogoInView }) => {

  return (
    <motion.section
      ref={home}
      className="heroContainer font-semibold w-full overflow-hidden
      bg-center bg-[length:2150px_1000px] whitespace-break-spaces"
      style={{
        backgroundImage: `url(${hero.src})`,
      }}
    >
      <motion.div className="w-full min-h-screen flex flex-col items-center justify-center bg-black backdrop-blur-md bg-opacity-25">
        <Logo isLogoInView={isLogoInView} logo={logo} />
        {/* Top line light blue */}
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
        {/* Top line solid blue */}
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
        {/* bottom line light blue */}
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
        {/* bottom line solid blue */}
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
        <TextLayout isLogoInView={isLogoInView} logo={logo} />
        <ViewProjectsButton isLogoInView={isLogoInView} logo={logo} />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
