"use client";
//import * as _ from "lodash";
import Image from "next/image";

import Projects from "@/components/Layout/Projects/Projects";
import NavBar from "../components/Layout/Navigation/NavBar";
import useRefForInView from "./hooks/useRefForInView";
import Footer from "@/components/Layout/Footer/Footer";
import HeroSection from "@/components/Layout/Hero Section/HeroSection";
import Skills from "@/components/Layout/Skills/Skills";

const Home = () => {
  const {
    logo,
    home,
    projects,
    skills,
    about,
    contacts,
    isHomeInView,
    isLogoInView,
    isProjectInView,
    isSomeProjectInView,
    isSkillsInView,
    isContactsInView,
    isAboutInView,
  } = useRefForInView();
  return (
    <section className="">
      <div id="hero">
        {/* @ts-ignore */}
        <HeroSection home={home} logo={logo} isLogoInView={isLogoInView} />
      </div>
      <div className="w-full p-5 bg-zinc-700 z-30 absolute"></div>
      {/* @ts-ignore */}
      <NavBar
        home={home}
        contacts={contacts}
        about={about}
        skills={skills}
        projects={projects}
        isHomeInView={isHomeInView}
        isLogoInView={isLogoInView}
        isSomeProjectInView={isSomeProjectInView}
        isProjectInView={isProjectInView}
        isSkillsInView={isSkillsInView}
        isContactsInView={isContactsInView}
        isAboutInView={isAboutInView}
      />

      <div className="flex flex-col w-full min-h-screen h-full items-center mt-24 tracking-wider">
        {/* @ts-ignore */}
        <Projects projects={projects} skills={skills} />
        {/* @ts-ignore */}
        <Skills skills={skills} />

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
