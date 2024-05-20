import useLandToHome from "@/app/hooks/useLandToHome";
import { useAnimate, motion } from 'framer-motion';
import React from "react";

type LandingPageProps = {
  home: boolean;
  setHome: React.Dispatch<boolean>;
};

const LandingPage: React.FC<LandingPageProps> = ({ home, setHome }) => {
  const [scope, slide] = useAnimate();

  function handleHome(): void {
    setHome(!home);
    slide("button", { x: [0, 2500] }, { type: "spring", duration: 2 });
    slide("div", { x: [0, 2500] }, { type: "spring", duration: 3, delay: 0.5 });
  }

  return (
    <section ref={scope}>
      <div className="bg-black w-screen h-screen flex justify-center items-center fixed z-50 inset-0">
        <motion.div>
      
        </motion.div>
        <button onClick={handleHome}>go to home</button>
      </div>
    </section>
  );
};

export default LandingPage;
