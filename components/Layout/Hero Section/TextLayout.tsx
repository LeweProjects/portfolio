import React from 'react'
import { motion } from 'framer-motion';
import splitText from "@/app/utils/splitText";
import { relative } from "path";
import { Orbitron } from "next/font/google";
import { heroSectionProps } from './heroSectionProps';

const inter = Orbitron({
    subsets: ["latin"],
});

const greet = "Hello, I am";
const myName = "Marvell";
const define = "a full-stack developer";



const TextLayout: React.FC<heroSectionProps> = ({ isLogoInView }) => {

    //texts broke into characters
    const greetChar = splitText(greet);
    const myNameChar = splitText(myName);
    const defineChar = splitText(define);

    //text animation
    const textAnimation = {
        hidden: {
            opacity: 0,
            y: -30,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <motion.div
            animate={{
                opacity: isLogoInView ? 1 : 0,
                x: isLogoInView ? 0 : -300,
            }}
            transition={{ duration: 1, type: "spring", delay: 0.3 }}
        >
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{
                    staggerChildren: 0.09,
                    type: "spring",
                    delayChildren: 0.4,
                }}
                className={`${inter.className} hero 
                 text-7xl -mt-8 text-center leading-tight`}
            >
                <motion.div>
                    {greetChar.map((char, i) => (
                        <motion.span
                            key={i}
                            className="inline-block"
                            variants={textAnimation}
                        >
                            {char}
                        </motion.span>
                    ))}{" "}
                    {myNameChar.map((char, i) => (
                        <motion.span
                            key={i}
                            variants={textAnimation}
                            className="text-[#02A9F7] italic inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                    <br />
                    {defineChar.map((char, i) => (
                        <motion.span
                            key={i}
                            className="inline-block"
                            variants={textAnimation}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>

    )
}

export default TextLayout