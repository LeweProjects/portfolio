"use client";
import Projects from "@/components/Layout/Projects/Projects";
import NavBar from "../components/Layout/Navigation/NavBar";
import useRefForInView from "./hooks/useRefForInView";
import Footer from "@/components/Layout/Footer/Footer";
import HeroSection from "@/components/Layout/Hero Section/HeroSection";
import Skills from "@/components/Layout/Skills/Skills";
import About from '../components/Layout/About/About';

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
        <Projects projects={projects} />
        {/* @ts-ignore */}
        <Skills skills={skills} />
        <About about={about} />
      </div>
      {/* @ts-ignore */}
      <Footer contacts={contacts} />
    </section>
  );
};
export default Home;
