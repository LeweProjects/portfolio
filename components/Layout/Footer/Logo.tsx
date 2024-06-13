import React from 'react'
import { motion } from 'framer-motion';
import { IoCodeSlashOutline } from 'react-icons/io5';

const Logo = () => {
    return (
        <>
            <div className="border-4 border-white rounded-full p-[104px] absolute ml-[5.8rem] mt-[5.8rem]" />
            <div className="border-4 border-white rounded-full p-[3.8rem] absolute ml-[8.5rem] mt-[8.3rem] bg-white" />

            <motion.div id='logo' viewport={{ margin: "-5000px" }} className="">
                <IoCodeSlashOutline className="text-7xl text-black ml-[10.3rem] mt-[10.2rem] absolute" />
            </motion.div>
            <motion.svg
                viewBox="0 0 400 400"
                className="w-[25rem]"
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
                        MARVELLPORTFOLIO ★ MARVELLPORTFOLIO ★
                    </textPath>
                </text>
            </motion.svg>
        </>
    )
}

export default Logo