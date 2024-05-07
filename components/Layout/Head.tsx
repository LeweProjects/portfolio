"use client"
import Link from "next/link";
import React from "react";

const head = () => {
  
  function scrollTo (id: any): void {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block:"center" });
  }

  return (
    <div className="w-full flex z-30 bg-zinc-900 p-2 justify-center sticky top-0">
      <li className="list-none flex space-x-3 text-white font-">
        <button onClick={() => scrollTo("hero")} className="focus:underline">
          Home
        </button>
        <button onClick={() => scrollTo("projects")}>Projects</button>
        <button onClick={() => scrollTo("stack")}>My Skills</button>
        <button onClick={() => scrollTo("about")}>About me</button>
        <button onClick={() => scrollTo("contacts")}>Contacts</button>
      </li>
    </div>
  );
};

export default head;
