"use client";
import React, { useState } from "react";
import { headerProps } from "@/app/headerProps";
import Portfolio from "./My portfolio/Portfolio";
import Mgh from "./MGH/Mgh";
import STImart from "./STI mart/STImart";
import { motion } from 'framer-motion';

const Projects: React.FC<headerProps> = ({ projects }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);

  function openDetails(): void {
    setShowDetails(!showDetails);
  }
  function openDetails1(): void {
    setShowDetails1(!showDetails1);
  }
  function openDetails2(): void {
    setShowDetails2(!showDetails2);
  }

  return (
    <div ref={projects} className="mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-200px" }}
        className="flex flex-col items-center">
        <div className="text-lg">Welcome! these are my</div>
        <h1 className="w-fit font-semibold text-5xl">PROJECTS</h1>

        <div className="projects grid grid-cols-3 gap-x-8 mt-16">
          {/* @ts-ignore */}
          <Portfolio showDetails={showDetails} openDetails={openDetails} />
          {/* @ts-ignore */}
          <Mgh showDetails1={showDetails1} openDetails={openDetails1} />
          {/* @ts-ignore */}
          <STImart showDetails2={showDetails2} openDetails={openDetails2} />

        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
