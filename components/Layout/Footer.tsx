import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { Inter } from "next/font/google";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="w-full footerContainer bg-zinc-900 py-10 grid grid-cols-2 px-28 justify-center">
      <div className="contacts">
        <h1 className="text-2xl font-semibold mb-5">CONTACTS</h1>
        <ul className={inter.className}>
          <li>
            <MdEmail className="icon text-2xl" />
            <p> loewiayon12@gmail.com</p>
          </li>
          <li>
            <FaPhoneAlt className="text-2xl" />
            <p> +639455963805</p>
          </li>
        </ul>
      </div>
      <div className="medias text-right">
        <h1 className="text-2xl font-semibold mb-5 med uppercase">Social Medias</h1>
        <ul className={`${inter.className} flex justify-end space-x-5`}>
          <div className="">
            <Link href="https://www.facebook.com/marvellloewi.ayon/" className="li">
              <FaFacebook
                
                className="text-2xl"
              />
              <p>Facebook</p>
            </Link>
            <Link href="https://twitter.com/ayono_stck" className="li">
              <FaXTwitter className="text-2xl" />
              <p>Twitter</p>
            </Link>
          </div>
          <div className="">
            <Link href="https://www.instagram.com/marvell_loewi/" className="li">
              <FaInstagram
                
                className="text-2xl"
              />
              <p>Instagram</p>
            </Link>
            <Link href="https://github.com/LeweProjects" className="li">
              <FaGithub
                
                className="text-2xl"
              />
              <p>Github</p>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
