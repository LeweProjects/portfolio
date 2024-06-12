import React from "react";
import { motion } from 'framer-motion';
import { heroSectionProps } from "./heroSectionProps";
import { GoArrowRight } from "react-icons/go";

const ViewProjectsButton: React.FC<heroSectionProps> = ({ isLogoInView }) => {
  //button function
  function scrollTo(id: string): void {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  return (
    <motion.div
      animate={{
        x: isLogoInView ? 0 : 355,
        opacity: isLogoInView ? 1 : 0,
        visibility: isLogoInView ? "visible" : "hidden",
      }}
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
  );
};

export default ViewProjectsButton;
