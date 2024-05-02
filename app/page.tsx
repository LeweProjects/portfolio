"use client";
//import * as _ from "lodash";
import HeroSection from "@/components/Layout/HeroSection";
import Link from "next/link";
//import reactIcon from "./images/React-icon.png";

//const reactIcon = require('./images/portfolio.png')

export default function Home() {

  return (
    <section>
      <HeroSection />
      <div className="flex flex-col w-full min-h-screen h-full items-center mt-24">
        <div className="text-lg">Welcome! these are my</div>
        <h1 className="w-fit font-semibold text-5xl">PROJECTS</h1>
        <div className="grid grid-cols-2 gap-x-8 mt-16">
          <div className="flex flex-col items-center">
            <Link
              href="/"
              className="w-[50vh] lowercase h-[25vh] box absolute z-10 opacity-0 flex items-center justify-center hover:cursor-pointer text-6xl hover:opacity-100 transition duration-200 ease-in bg-black"
            >
              Visit
            </Link>
            <div className="w-[50vh] h-[25vh] box bg-[length:50vh_25vh] bg-no-repeat bg-[url('./images/portfolio.png')] bg-white"></div>
            <h1 className="mt-2 text-xl font-semibold">My Portfolio</h1>
            <p className="w-[50vh]">
              My personal website that contains my information and projects.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Link
              href="https://leweprojects.github.io/MGHsite/#/"
              className="w-[50vh] lowercase h-[25vh] box absolute z-10 opacity-0 flex items-center justify-center hover:cursor-pointer text-6xl hover:opacity-100 transition duration-200 ease-in bg-black"
            >
              Visit
            </Link>
            <div className="w-[50vh] h-[25vh] box bg-[length:50vh_25vh] bg-no-repeat bg-[url('./images/MGHsite.png')] bg-white"></div>
            <h1 className="mt-2 text-xl font-semibold">
              MGH appointment website
            </h1>
            <p>A website made for our capstone project.</p>
          </div>
        </div>
        <div className="text-lg mt-28">These are my</div>
        <h1 className="w-fit font-semibold text-5xl">TECH-STACKS</h1>
        <div className="mt-10">
          <ul className="stack grid grid-cols-4 gap-x-3 gap-y-5 text-xl items-end">
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                className="w-16"
                alt="logo"
              />
              ReactJS
            </li>
            <li>
              <img
                src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                className="w-16"
                alt="logo"
              />
              Node.JS
            </li>
            <li>
              <img
                src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png"
                className="w-16"
                alt="logo"
              />
              NextJS
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                className="w-16"
                alt="logo"
              />
              JavaScript
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                className="w-16"
                alt="logo"
              />
              TypeScript
            </li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                className="w-16"
                alt="logo"
              />
              HTML5
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                className="w-16"
                alt="logo"
              />
              CSS3
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png"
                className="w-20 mb-1"
                alt="logo"
              />
              TailwindCSS
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
                className="w-14"
                alt="logo"
              />
              SVELTE
            </li>
            <li>
              <img
                src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
                className="w-16"
                alt="logo"
              />
              Supabase
            </li>
            <li>
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-svg-vector.svg"
                className="w-16 bg-white"
                alt="logo"
              />
              MySQL
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
                className="w-14"
                alt="logo"
              />
              Figma
            </li>
          </ul>
        </div>
        <h1 className="w-fit font-semibold text-5xl mt-28 mb-10">ABOUT ME</h1>
        <div className="w-[60%] text-justify mb-20 text-lg whitespace-break-spaces">
          Hello, my name is <span className="text-cyan-300 italic">Marvell</span>, a 4th year graduating college student with
          enough knowledge to develop a website. I have a full-stack experience
          from creating a website with various tech stacks using react, node, tailwind,
          figma, javaScript, typeScript, NextJS, svelte and
          supabase. My area of knowledge specializes in back-end and front-end programming.
          <br /><br />
          Along with my technical expertise, I approach every project with a collaborative 
          perspective and excellent problem-solving skills. I like collaborating closely with
           cross-functional teams to comprehend project specifications and provide solutions
            that go above and beyond. I am dedicated to providing top-notch software solutions
             that promote corporate success, and I am committed for lifelong learning and keeping
              up with current industry trends.

        </div>
      </div>
    </section>
  );
}
