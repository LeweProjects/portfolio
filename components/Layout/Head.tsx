"use client"
import React from "react";

const head = () => {
  
  function scrollTo (id: string): void {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block:"center" });
  }

  return (
    <div className="w-full flex z-30 bg-zinc-900 p-2 justify-center sticky top-0">
      <div className="head list-none flex space-x-3 text-white font-">
        <button onClick={() => scrollTo("hero")} className="hover:underline transition duration-200 ease-in">
          Home
        </button>
        <button onClick={() => scrollTo("projects")} className="hover:underline transition duration-200 ease-in">Projects</button>
        <button onClick={() => scrollTo("stack")} className="hover:underline transition duration-200 ease-in">My Skills</button>
        <button onClick={() => scrollTo("about")} className="hover:underline transition duration-200 ease-in">About me</button>
        <button onClick={() => scrollTo("contacts")} className="hover:underline transition duration-200 ease-in">Contacts</button>
      </div>
    </div>
  );
};

export default head;
