import { headerProps } from '@/app/headerProps'
import React from 'react'
import { aboutProps } from './aboutProps'
import { motion } from 'framer-motion';

const About: React.FC<aboutProps> = ({ about }) => {
    return (
        <div className='w-full flex flex-col items-center'>
            <h1 className="w-fit font-semibold text-5xl mt-28 mb-10">ABOUT ME</h1>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-200px" }}
                ref={about}
                id="about"
                className="w-[60%] about text-justify tracking-wider mb-20 text-lg whitespace-break-spaces"
            >
                Hello, my name is{" "}
                <span className="text-[#52c3f8] italic">Marvell</span>, a 22 years old
                with a {"Bachelor's"} Degree of Science in Information and Technolgy.
                I have enough knowledge to develop a website with a full-stack
                experience from creating a webapp with various tech stacks using
                react, node, tailwind , figma, javaScript, typeScript, NextJS, svelte
                and supabase. My area of knowledge specializes in back-end and
                front-end programming.
                <br />
                <br />
                Along with my technical expertise, I approach every project with a
                collaborative perspective and excellent problem-solving skills. I like
                collaborating closely with cross-functional teams to comprehend
                project specifications and provide solutions that go above and beyond.
                I am dedicated to providing top-notch software solutions that promote
                corporate success, and I am committed for lifelong learning and
                keeping up with current industry trends.
            </motion.div></div>
    )
}

export default About