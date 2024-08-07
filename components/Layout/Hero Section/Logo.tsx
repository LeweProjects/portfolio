import React from 'react'
import { motion } from 'framer-motion';
import { heroSectionProps } from './heroSectionProps';
import { IoCodeSlashOutline } from 'react-icons/io5';

const Logo: React.FC<heroSectionProps> = ({ isLogoInView, logo }) => {
    return (

        <>
            <div className="border-4 border-white rounded-full p-[68px] absolute ml-[56px] mt-[56px]" />
            <div className="border-4 border-white rounded-full p-9 absolute ml-[87px] mt-[87px] bg-white" />

            <motion.div id='logo' viewport={{ margin: "-5000px" }} className="">
                <IoCodeSlashOutline className="text-5xl text-black ml-[104px] mt-[104px] absolute" />
            </motion.div>
            <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                viewBox="0 0 400 400"
                className="w-64"
            >
                <defs>
                    <path
                        id="MyPath"
                        d="M 180, 200 m -60, 0 a 60,60 0 0,1 160,0 a 60,60 0 0,1 -160,0"
                        className="stroke-2"
                    />
                </defs>

                <text fill="#fff">
                    <textPath xlinkHref="#MyPath" className=" text-lg">
                        MARVELLAYON ★ DEVELOPER ★ PORTFOLIO ★
                    </textPath>
                </text>
            </motion.svg>
        </>

    )
}

export default Logo