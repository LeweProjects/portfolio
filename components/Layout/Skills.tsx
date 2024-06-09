import React from "react";
import reactIcon from "../../app/images/React-icon.png";
import nextJs from "../../app/images/next-js.svg";
import Laravel from "../../app/images/laravel.png";
import PHP from "../../app/images/PHP-logo.svg.webp";
import Vite from "../../app/images/Vitejs-logo.svg.png";
import nodeJs from "../../app/images/nodejs.webp";
import SQLite from "../../app/images/Sqlite-square-icon.svg.png";
import { motion } from "framer-motion";
import { headerProps } from "@/app/headerProps";
import Image from "next/image";

const Skills: React.FC<headerProps> = ({ skills }) => {
  return (
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
          <Image
            src={nodeJs}
            width={500}
            height={500}
            className="w-16"
            alt="logo"
          />
          Node.js
        </li>
        <li>
          <Image
            src={nextJs}
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
          <Image
            src={Vite}
            className="w-14"
            width={500}
            height={500}
            alt="logo"
          />
          ViteJS
        </li>
        <li>
          <Image
            src={PHP}
            className="w-14"
            width={500}
            height={500}
            alt="logo"
          />
          PHP
        </li>
        <li>
          <Image
            src={Laravel}
            className="w-14"
            width={500}
            height={500}
            alt="logo"
          />
          Laravel
        </li>
        <li>
          <Image
            src={SQLite}
            className="w-14"
            width={500}
            height={500}
            alt="logo"
          />
          SQLite
        </li>
      </ul>
    </motion.div>
  );
};

export default Skills;
