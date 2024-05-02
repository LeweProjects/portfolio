import React from "react";
import { Orbitron } from 'next/font/google'

const inter = Orbitron({
    subsets: ['latin']
  })

const HeroSection = () => {
  return (
    <div className="flex justify-center py-[40vh] font-semibold bg-black whitespace-break-spaces">
        <div className={`${inter.className} text-6xl`}>
            Hello,<br />I am <span className="text-cyan-300 italic">Marvell</span><br />a full-stack web developer
            <div className="border-t-8 mt-2 box1 border-white w-[25vh]"></div>
        </div>
     
    </div>
  );
};

export default HeroSection;
