"use client";
//import * as _ from "lodash";
import Image from "next/image";
import reactIcon from "./images/React-icon.png";
import Projects from "@/components/Layout/Projects";
import { motion } from "framer-motion";
import Head from "../components/Layout/Head";
import useRefForInView from "./hooks/useRefForInView";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Layout/HeroSection";

const Home = () => {
  const {
    home,
    projects,
    skills,
    about,
    contacts,
    isHomeInView,
    isProjectInView,
    isSkillsInView,
    isContactsInView,
    isAboutInView,
  } = useRefForInView();
  return (
    <section className="">
      <div id="hero">
        {/* @ts-ignore */}
        <HeroSection home={home} />
      </div>
     
      {/* @ts-ignore */}
      <Head
        home={home}
        contacts={contacts}
        about={about}
        skills={skills}
        projects={projects}
        isHomeInView={isHomeInView}
        isProjectInView={isProjectInView}
        isSkillsInView={isSkillsInView}
        isContactsInView={isContactsInView}
        isAboutInView={isAboutInView}
      />

      <div className="flex flex-col w-full min-h-screen h-full items-center mt-24 tracking-wider">
        {/* @ts-ignore */}
        <Projects projects={projects} skills={skills} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px" }}
          id="stack"
          ref={skills}
        >
          <div className="flex flex-col mb-10 items-center">
            <p className="text-lg mt-28">These are my</p>
            <h1 className="w-fit font-semibold text-5xl tech">TECH-STACKS</h1>
          </div>

          <ul className="stack grid grid-cols-4 gap-x-3 gap-y-5 text-xl items-end">
            <li>
              <Image
                src={reactIcon}
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              ReactJS
            </li>
            <li>
              <img
                src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              Node.js
            </li>
            <li>
              <img
                src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              NextJS
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              JavaScript
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              TypeScript
            </li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              HTML5
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                width={500}
                height={500}
                className="w-16"
                alt="logo"
              />
              CSS3
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png"
                width={500}
                height={500}
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
                src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"
                className="w-24 bg-white"
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
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png"
                className="w-14"
                alt="logo"
              />
              ViteJS
            </li>
          </ul>
        </motion.div>
        <h1 className="w-fit font-semibold text-5xl mt-28 mb-10">ABOUT ME</h1>
        <div
          ref={about}
          id="about"
          className="w-[60%] about text-justify tracking-wider mb-20 text-lg whitespace-break-spaces"
        >
          Hello, my name is{" "}
          <span className="text-[#52c3f8] italic">Marvell</span>, a 22 years old
          with a {"Bachelor's"} Degree of Science in Information and Technolgy.
          I have enough knowledge to develop a website with a full-stack
          experience from creating a webapp with various tech stacks using
          react, node, tailwind , figma, javaScript, typeScript, NextJS, svelte
          and supabase. My area of knowledge specializes in back-end and
          front-end programming.
          <br />
          <br />
          Along with my technical expertise, I approach every project with a
          collaborative perspective and excellent problem-solving skills. I like
          collaborating closely with cross-functional teams to comprehend
          project specifications and provide solutions that go above and beyond.
          I am dedicated to providing top-notch software solutions that promote
          corporate success, and I am committed for lifelong learning and
          keeping up with current industry trends.
        </div>
      </div>
      {/* @ts-ignore */}
      <Footer contacts={contacts} />
    </section>
  );
};
export default Home;
