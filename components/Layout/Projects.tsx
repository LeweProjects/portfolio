"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import reactIcon from "../../app/images/React-icon.png";

const Projects = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetails1, setShowDetails1] = useState(false);

  function openDetails(): void {
    setShowDetails(!showDetails);
  }
  function openDetails1(): void {
    setShowDetails1(!showDetails1);
  }

  return (
    <div id="projects" className="projects grid grid-cols-2 gap-x-8 mt-16">
      <div className="flex flex-col items-center">
        <Link
          href="/"
          className="w-[50vh] lowercase h-[25vh] projImage box absolute z-10 opacity-0 flex items-center justify-center hover:cursor-pointer text-6xl hover:opacity-100 transition duration-200 ease-in bg-black"
        >
          Visit
        </Link>
        <div className="w-[50vh] h-[25vh] projImage box bg-[length:50vh_25vh] bg-no-repeat bg-[url('./images/portfolio.png')] bg-white"></div>
        <h1 className="mt-2 text-xl font-semibold">My Portfolio</h1>
        <p className="w-[50vh] des">
          My personal website that contains my information and projects.
        </p>
        <div
          className={`${
            showDetails
              ? "transition-all duration-500 ease-out overflow-y-visible max-h-[20rem] mt-5"
              : "transition-all duration-300 ease-out overflow-y-hidden max-h-0"
          } w-[50vh] `}
        >
          <p className="text-center text-xl font-semibold">coded using</p>
          <div className="flex projectDetails flex-wrap items-end justify-center space-x-3 space-y-3">
            <div className="flex flex-col items-center">
              <img
                src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              NextJS
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              Node.js
            </div>
            <div className="tw flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png"
                className="tw"
                alt="logo"
              />
              TailwindCSS
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              TypeScript
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              HTML5
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              CSS3
            </div>
          </div>
        </div>
        <div
          className="text-2xl py-2 px-6 hover:bg-gray-500 select-none cursor-pointer
         box2 flex justify-center mt-5 transition duration-200 ease-in-out"
        >
          <p onClick={openDetails}>
            {showDetails ? "hide <<" : "more details >>"}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Link
          href="https://leweprojects.github.io/MGHsite/#/"
          className="w-[50vh] lowercase h-[25vh] projImage box absolute z-10 opacity-0 flex items-center justify-center hover:cursor-pointer text-6xl hover:opacity-100 transition duration-200 ease-in bg-black"
        >
          Visit
        </Link>
        <div className="w-[50vh] h-[25vh] projImage box bg-[length:50vh_25vh] bg-no-repeat bg-[url('./images/MGHsite.png')] bg-white"></div>
        <h1 className="mt-2 text-xl font-semibold">MGH appointment website</h1>
        <p className="des">A website made for our capstone project.</p>
        <div
          className={`${
            showDetails1
              ? "transition-all duration-500 ease-out overflow-y-visible max-h-[20rem] mt-5"
              : "transition-all duration-300 ease-out overflow-y-hidden max-h-0"
          } w-[50vh] `}
        >
          <p className="text-center text-xl font-semibold">coded using</p>
          <div className="flex projectDetails flex-wrap items-end justify-center space-x-3 space-y-3">
            <div className="flex flex-col items-center">
              <Image
                src={reactIcon}
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              ReactJS
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              Node.js
            </div>
            <div className="tw flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png"
                className="tw"
                alt="logo"
              />
              TailwindCSS
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              JavaScript
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              HTML5
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              CSS3
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
                className="w-16"
                alt="logo"
              />
              Supabase
            </div>
          </div>
        </div>
        <div
          className="text-2xl py-2 px-6 hover:bg-gray-500 select-none cursor-pointer
         box2 flex justify-center mt-5 transition duration-200 ease-in-out"
        >
          <p onClick={openDetails1}>
            {showDetails1 ? "hide <<" : "more details >>"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
