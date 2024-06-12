import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { Inter } from "next/font/google";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { headerProps } from "@/app/headerProps";

const inter = Inter({ subsets: ["latin"] });

const Footer: React.FC<headerProps> = ({ contacts }) => {

  return (
    <div className="flex flex-col bg-zinc-900  h-[40rem] items-center">
      <div className="text-5xl mt-20 flex justify-center w-full items-center text-white">
        Don't hesitate to leave me a message
      </div>

      <div
        id="contacts"
        className="w-full h-full footerContainer flex justify-between items-center px-28"
      >
        <div ref={contacts} className="contacts flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-5">CONTACTS</h1>
          <ul className={inter.className}>
            <li>
              <MdEmail
                className="icon text-2xl" />
              <p> loewiayon12@gmail.com</p>
            </li>
            <li>
              <FaPhoneAlt className="text-2xl" />
              <p> +639455963805</p>
            </li>
          </ul>
        </div>
        <div className="medias text-right">
          <h1 className="text-2xl font-semibold mb-5 med uppercase">
            Social Medias
          </h1>
          <ul className={`${inter.className} flex justify-end space-x-5`}>
            <div className="">
              <Link
                href="https://www.facebook.com/marvellloewi.ayon/"
                className="li"
              >
                <FaFacebook className="text-2xl" />
                <p>Facebook</p>
              </Link>
              <Link href="https://twitter.com/ayono_stck" className="li">
                <FaXTwitter className="text-2xl" />
                <p>Twitter</p>
              </Link>
            </div>
            <div className="">
              <Link
                href="https://www.instagram.com/marvell_loewi/"
                className="li"
              >
                <FaInstagram className="text-2xl" />
                <p>Instagram</p>
              </Link>
              <Link href="https://github.com/LeweProjects" className="li">
                <FaGithub className="text-2xl" />
                <p>Github</p>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Footer;
