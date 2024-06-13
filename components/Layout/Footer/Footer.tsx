import React, { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { Inter } from "next/font/google";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { headerProps } from "@/app/headerProps";
import Logo from "./Logo";

const inter = Inter({ subsets: ["latin"] });

const Footer: React.FC<headerProps> = ({ contacts }) => {



  return (
    <div
      ref={contacts} id="contacts" className="flex footerContainer flex-col h-[35rem] items-center w-full bg-zinc-900">
      <div className="flex footLeft items-center w-[85%] py-7">
        <div className="-mr-[68px] footLogo">
          {/* @ts-ignore */}
          <Logo />
        </div>
        <div className="flex flex-col footTextLeft items-start justify-center tracking-wide">
          <span className="text-lg">Need help for starting a project?</span>
          <h1 className="text-[75px] letsTalk font-semibold w-full text-[#02A9F7]">{"LET'S"} TALK</h1>
          <div className="flex flex-col items-start contact">
            <div className="flex items-center ">
              <MdEmail
                className="icon text-2xl mr-2" />
              <p className="text-md"> loewiayon12@gmail.com</p>
            </div>
            <div
              className="flex items-center mt-3">
              <FaPhoneAlt
                className="icon text-2xl mr-2" />
              <p className="text-md "> +63-945-596-3805</p>
            </div>
          </div>

        </div>
        <div className="">
          <form>
            
          </form>
        </div>
      </div>
      <div className="border-t-2 border-white w-[80%] footerTextBottom flex h-full justify-between -mt-5 px-16 items-center">
        <p className="text-md font-sans cred">© 2024 portfolio by Marvell Ayon |<span className="font-semibold"> All Rights Reserved</span>  | Powered by <span>Next JS</span> </p>
        <div className="text-right">
          <ul className={`${inter.className}medias flex justify-end space-x-16 text-4xl`}>
            <Link
              href="https://www.facebook.com/marvellloewi.ayon/"
              className="li"
            >
              <FaFacebook />
            </Link>
            <Link href="https://twitter.com/ayono_stck" className="li">
              <FaXTwitter />
            </Link>
            <Link
              href="https://www.instagram.com/marvell_loewi/"
              className="li"
            >
              <FaInstagram />
            </Link>
            <Link href="https://github.com/LeweProjects" className="li">
              <FaGithub />
            </Link>
          </ul>
        </div>
      </div>

    </div>

  );
};

export default Footer;
