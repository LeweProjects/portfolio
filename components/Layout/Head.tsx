"use client";
import { useProjectsRef } from "@/app/functions/refContext";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import React, { createRef, useEffect, useRef, useState } from "react";
import Projects from "./Projects";
import useRefForInView from "@/app/hooks/useRefForInView";
import { headerProps } from "@/app/headerProps";

const Head: React.FC<headerProps> = ({
  projects,
  home,
  contacts,
  about,
  skills,
  isHomeInView,
  isProjectInView,
  isSkillsInView,
  isContactsInView,
  isAboutInView,
}) => {
  const [xAxis, setXAxis] = useState(Number);
  const [fonts, setFonts] = useState({
    home: "",
    projects: "",
    skills: "",
    about: "",
    contacts: "",
    homeP: "",
    projectsP: "",
    skillsP: "",
    aboutP: "",
    contactsP: "",
    homeC: "",
    projectsC: "",
    skillsC: "",
    aboutC: "",
    contactsC: "",
    homeO: "",
    projectsO: "",
    aboutO: "",
    contactsO: "",
  });

  function scrollTo(id: string): void {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  useEffect(() => {
    console.log("skills: " + isAboutInView);
    console.log("contacts: " + isContactsInView);
    console.log("about: " + isAboutInView);
    if (isHomeInView) {
      setXAxis(170);
      setFonts((prev) => {
        return {
          ...prev,
          home: "24px",
          projects: "14px",
          homeP: "55px",
          projectsP: "2px",
          homeC: "#28C9FA",
          projectsC: "#FFFFFF",
          aboutO: "0%",
          contactsO: "0%",
        };
      });
    } else if (isProjectInView) {
      setXAxis(100);
      setFonts((prev) => {
        return {
          ...prev,
          home: "14px",
          projects: "22px",
          skills: "14px",
          homeP: "2px",
          projectsP: "36px",
          skillsP: "2px",
          homeC: "#FFFFFF",
          projectsC: "#28C9FA",
          skillsC: "#FFFFFF",
          aboutO: "100%",
          contactsO: "0%",
        };
      });
    } else if (isSkillsInView) {
      setXAxis(17);
      setFonts((prev) => {
        return {
          ...prev,
          projects: "14px",
          skills: "22px",
          about: "14px",
          projectsP: "2px",
          skillsP: "30px",
          aboutP: "2px",
          projectsC: "#FFFFFF",
          skillsC: "#28C9FA",
          aboutC: "#FFFFFF",
          homeO: "100%",
          contactsO: "100%",
        };
      });
    } else if (isAboutInView) {
      setXAxis(-70);
      setFonts((prev) => {
        return {
          ...prev,
          skills: "14px",
          about: "21px",
          contacts: "14px",
          skillsP: "2px",
          aboutP: "30px",
          contactsP: "2px",
          skillsC: "#FFFFFF",
          aboutC: "#28C9FA",
          contactsC: "#FFFFFF",
          homeO: "0%",
          projectsO: "100%",
        };
      });
    } else if (isContactsInView) {
      setXAxis(-155);
      setFonts((prev) => {
        return {
          ...prev,
          about: "14px",
          contacts: "20px",
          aboutP: "2px",
          contactsP: "30px",
          aboutC: "#FFFFFF",
          contactsC: "#28C9FA",
          projectsO: "0%",
        };
      });
    }
  }, [
    isHomeInView,
    isProjectInView,
    isSkillsInView,
    isAboutInView,
    isContactsInView,
  ]);
  const circle = createRef();

  const { scrollYProgress } = useScroll({
    target: isHomeInView
      ? home
      : isProjectInView
      ? projects
      : isSkillsInView
      ? skills
      : isContactsInView
      ? contacts
      : about,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div className="w-full flex z-30 h-[8vh] bg-zinc-900 items-end justify-center sticky top-0">
      <div className="flex justify-center items-center w-[38rem] h-[6vh] box3 -mb-12 bg-zinc-900 absolute" />
      <motion.div className="flex justify-center items-center w-[50rem] h-[6vh] -mb-12">
        <motion.div
          className="border-t-[7px] border-b-[7px] border-none absolute flex rounded-full h-[180px] w-[180px]
        justify-center bg-gradient-radial from-blue-600 to-[#000000]"
        />
        <motion.div
          className="border-t-[7px] border-b-[7px] absolute flex rounded-full w-[126px] h-[126px]
        justify-center bg-[#0a0a0a] border-white"
        />
        <motion.div
          style={{ rotate }}
          className="border-t-[7px] border-b-[7px] absolute flex rounded-full h-[180px] w-[180px]
        justify-center bg-gradient-radial  border-white"
        ></motion.div>
        <motion.div
          animate={{
            x: xAxis,
          }}
        >
          <motion.div className="head list-none flex space-x-3 text-white">
            <motion.button
              animate={{
                fontSize: fonts.home,
                paddingInline: fonts.homeP,
                color: fonts.homeC,
                opacity: fonts.homeO,
              }}
              onClick={() => scrollTo("hero")}
              className="ease-in"
            >
              Home
            </motion.button>
            <motion.button
              animate={{
                fontSize: fonts.projects,
                paddingInline: fonts.projectsP,
                color: fonts.projectsC,
                opacity: fonts.projectsO,
              }}
              onClick={() => scrollTo("projects")}
              className="ease-in"
            >
              Projects
            </motion.button>
            <motion.button
              animate={{
                fontSize: fonts.skills,
                paddingInline: fonts.skillsP,
                color: fonts.skillsC,
              }}
              onClick={() => scrollTo("stack")}
              className="ease-in"
            >
              My Skills
            </motion.button>
            <motion.button
              animate={{
                fontSize: fonts.about,
                paddingInline: fonts.aboutP,
                color: fonts.aboutC,
                opacity: fonts.aboutO,
              }}
              onClick={() => scrollTo("about")}
              className="ease-in"
            >
              About me
            </motion.button>
            <motion.button
              animate={{
                fontSize: fonts.contacts,
                paddingInline: fonts.contactsP,
                color: fonts.contactsC,
                opacity: fonts.contactsO,
              }}
              onClick={() => scrollTo("contacts")}
              className="ease-in"
            >
              Contacts
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Head;
