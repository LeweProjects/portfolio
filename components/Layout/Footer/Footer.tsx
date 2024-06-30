"use client"
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { Inter } from "next/font/google";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { headerProps } from "@/app/headerProps";
import Logo from "./Logo";
import { motion } from 'framer-motion';
import useInserMessage from "@/app/hooks/useInserMessage";
import { ring } from 'ldrs'

const inter = Inter({ subsets: ["latin"] });
//ring?.register()


const Footer: React.FC<headerProps> = ({ contacts }) => {
  const { handleChange, formData, handleSubmit, success, anotherMessage, loading } = useInserMessage()

  return (
    <div className="bg-zinc-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-200px" }}
        className="flex footerContainer flex-col h-[35rem] items-center w-full">
        <div className="flex footLeft items-center w-[85%] py-4">
          <motion.div
            className="-mr-[68px] footLogo">
            {/* @ts-ignore */}
            <Logo />
          </motion.div>
          <motion.div
            className="flex flex-col w-full footTextLeft items-start justify-center tracking-wide">
            <span className="text-lg -mb-3">Need help for starting a project?</span>
            <h1 ref={contacts} id="contacts" className="text-[75px] letsTalk font-semibold w-full text-[#02A9F7]">{"LET'S"} TALK</h1>
            <div className="flex flex-col items-start contact">
              <div className="flex items-center ">
                <MdEmail
                  className="icon text-2xl mr-2" />
                <p className="text-md"> loewiayon12@gmail.coms</p>
              </div>
              <div
                className="flex items-center mt-3">
                <FaPhoneAlt
                  className="icon text-2xl mr-2" />
                <p className="text-md "> +63-945-596-3805</p>
              </div>
            </div>

          </motion.div>
          <motion.div
            className="w-full flex justify-center">

            {loading ? (<div className="flex flex-col items-center">
              <l-ring
                size="40"
                stroke="5"
                bg-opacity="0"
                speed="2"
                color="white"
              ></l-ring> <p className="text-xl mt-2">sending...</p>
            </div>) : success ? (<div className="flex flex-col items-center text-center">
              <p className="text-4xl uppercase leading-normal font-semibold"> message sent!</p>
              <button onClick={anotherMessage} className="py-2 px-4 bg-zinc-600 mt-3">{"<"} add another message</button>
            </div>) : (
              <form onSubmit={handleSubmit} className="flex flex-col w-[25rem] form justify-center space-y-3 items-center tracking-wider">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Your Name"
                  onChange={handleChange}
                  className="w-full bg-white px-3 rounded-sm text-black" />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your email"
                  onChange={handleChange}
                  className="w-full bg-white px-3 rounded-sm text-black" />
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  placeholder="Your Message Here"
                  onChange={handleChange}
                  className="w-full h-[8rem] bg-white px-3 py-2 rounded-sm text-black" />
                <button type="submit" className="bg-zinc-600 w-full py-2 text-2xl rounded-md">SEND</button>
              </form>
            )}

          </motion.div>
        </div>
        <motion.div
          className="border-t-2 border-white w-[80%] footerTextBottom flex h-full justify-between -mt-5 px-16 items-center">
          <p className="text-md font-sans cred text-center">© 2024 portfolio by Marvell Ayon  <span className="footerTextBreak hidden"><br /></span>
            | <span className="font-semibold"> All Rights Reserved</span> | Powered by <span>Next JS</span> </p>
          <div className="text-right">
            <div id="medias" className={`${inter.className} flex justify-end items-center space-x-16 text-4xl`}>
              <Link
                href="https://www.facebook.com/marvellloewi.ayon/"
              >
                <FaFacebook className="li" />
              </Link>
              <Link href="https://twitter.com/ayono_stck">
                <FaXTwitter className="li" />
              </Link>
              <Link
                href="https://www.instagram.com/marvell_loewi/"
              >
                <FaInstagram className="li" />
              </Link>
              <Link href="https://github.com/LeweProjects">
                <FaGithub className="li" />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
