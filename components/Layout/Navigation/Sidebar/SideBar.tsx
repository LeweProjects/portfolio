import React from "react";
import { sideBarProps } from "../sideBarProps";
import useMenuAnimation from "@/app/hooks/useMenuAnimation";
import SideBarButton from './SideBarButton';
import { motion } from "framer-motion";

const SideBar: React.FC<sideBarProps> = ({
  scrollTo,
  setOpenSide,
  openSide,
}) => {
  function scrollAndClose(sec: string) {
    scrollTo(sec);
    setOpenSide(false);
    document.body.style.overflowY = "unset";
  }

  const scope = useMenuAnimation(openSide);
  function toggle() {
    setOpenSide(!openSide);
    if (openSide == true) {
      document.body.style.overflowY = "unset";
    } else if (openSide == false) {
      document.body.style.overflowY = "hidden";
    }
  }

  return (
    <div className="sidebar invisible">
      <div ref={scope}>
        {/* @ts-ignore */}
        <SideBarButton toggle={toggle} />
      </div>
      <motion.div
        animate={{ opacity: openSide ? 1 : 0, visibility: openSide ? "visible" : "hidden" }}
        className="absolute bg-black bg-opacity-30 backdrop-blur-md flex flex-col items-start w-screen h-screen "
      ></motion.div>
      <motion.div
        animate={openSide ? { translateX: 0 } : { translateX: -352 }}
        transition={{ duration: 1, type: "spring" }}
        className="bg-zinc-900 pt-36 pl-10 w-[22rem] h-[200vw] z-30 absolute flex flex-col justify-start items-start space-y-16 text-3xl"
      >
        <button onClick={() => scrollAndClose("hero")}>Home</button>
        <button onClick={() => scrollAndClose("projects")}>Projects</button>
        <button onClick={() => scrollAndClose("stack")}>Skills</button>
        <button onClick={() => scrollAndClose("about")}>About</button>
        <button onClick={() => scrollAndClose("contacts")}>Contacts</button>
      </motion.div>
    </div>
  );
};

export default SideBar;
