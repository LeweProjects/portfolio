import Link from "next/link";
import React from "react";
import { sideBarProps } from "@/app/sideBarProps";
import useMenuAnimation from "@/app/hooks/useMenuAnimation";
import SideBarButton from "@/components/SideBarButton";
import { motion } from "framer-motion";

const SideBar: React.FC<sideBarProps> = ({
  scrollTo,
  setOpenSide,
  openSide,
}) => {
  function scrollAndClose(sec: string) {
    scrollTo(sec);
    setOpenSide(false);
  }

  const scope = useMenuAnimation(openSide);
  function toggle() {
    setOpenSide(!openSide);
  }

  return (
    <div className="sticky top-0 z-40 sidebar invisible">
      <div ref={scope}>
        <SideBarButton toggle={toggle} />
      </div>
      {/* <button
        onClick={() => setOpenSide(!openSide)}
        className="bg-zinc-900 flex absolute mt-3 ml-3 rounded-full justify-center z-40 items-center p-3 w-16 h-16"
      ></button> */}

      <motion.div 
      animate={{opacity: openSide ? 1:0}}
      className="absolute bg-black bg-opacity-30 backdrop-blur-md flex flex-col items-start w-screen h-[400vw] "></motion.div>
      <motion.div
        animate={openSide ? { translateX: 0 } : { translateX: -352 }}
        transition={{ duration: 1, type: "spring" }}
        className="bg-zinc-900 pt-36 pl-10 w-[22rem] h-[200vw] z-30 absolute flex flex-col justify-start items-start space-y-16 text-3xl"
      >
        <button onClick={() => scrollAndClose("hero")}>Home</button>
        <button onClick={() => scrollAndClose("projects")}>
          Projects
        </button>
        <button onClick={() => scrollAndClose("stack")}>Skills</button>
        <button onClick={() => scrollAndClose("about")}>About</button>
        <button onClick={() => scrollAndClose("contacts")}>Contacts</button>
      </motion.div>
    </div>
  );
};

export default SideBar;
