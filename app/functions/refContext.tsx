"use client";
import React, { createContext, useRef, useContext } from "react";

const ProjectsRefContext =
  createContext<React.RefObject<HTMLDivElement> | null>(null);

export const ProjectsRefProvider = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <ProjectsRefContext.Provider value={projectsRef}>
    </ProjectsRefContext.Provider>
  );
};
export const useProjectsRef = () => {
  const context = useContext(ProjectsRefContext);
  if (context === null) {
    console.log("useProjectsRef must be used within a ProjectsRefProvider");
  }
  return context;
};
