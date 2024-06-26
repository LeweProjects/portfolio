"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Laravel from '@/app/images/laravel.png';
import PHP from '@/app/images/PHP-logo.svg.webp';
import reactIcon from '@/app/images/React-icon.png';
import Vite from '@/app/images/Vitejs-logo.svg.png';
import javaScript from '@/app/images/JavaScript.png';

const STImart = () => {
    const [showDetails2, setShowDetails2] = useState(false);
    function openDetails2(): void {
        setShowDetails2(!showDetails2);
    }
    return (
        <div className="flex flex-col items-center">
            <div
                className="w-[50vh] hover:cursor-default lowercase h-[25vh] projImage box absolute
                           z-10 opacity-0 flex items-center justify-center text-5xl hover:opacity-100 transition 
                           duration-200 ease-in bg-black"
            >
                ongoing
            </div>
            <div
                className="w-[50vh] h-[25vh] projImage bg-right pr-10 bg-origin-padding box bg-[length:50vh_25vh]
                           bg-no-repeat bg-[url('../images/STImart.png')] bg-white"
            ></div>
            <h1 className="mt-2 text-xl font-semibold">STImart V2</h1>
            <p className="w-[50vh] des">
                This is a remake project for my first react project. An E-commerce
                website made for our {"school's"} proware.
            </p>
            <div
                className={`${showDetails2
                    ? "transition-all duration-500 ease-out overflow-y-visible max-h-[20rem] mt-5"
                    : "transition-all duration-300 ease-out overflow-y-hidden max-h-0"
                    } w-[50vh] `}
            >
                <p className="text-center text-xl font-semibold">coded using</p>
                <div className="flex projectDetails flex-wrap items-end justify-center space-x-3 space-y-3">
                    <div className="flex flex-col items-center">
                        <Image
                            src={Laravel}
                            width={500}
                            height={500}
                            className="w-16"
                            alt="logo"
                        />
                        Laravel
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src={PHP}
                            width={500}
                            height={500}
                            className="w-16"
                            alt="logo"
                        />
                        PHP
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src={reactIcon}
                            width={500}
                            height={500}
                            className="w-16"
                            alt="logo"
                        />
                        ReactJS
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src={Vite}
                            width={500}
                            height={500}
                            className="w-16"
                            alt="logo"
                        />
                        ViteJS
                    </div>
                    <div className="tw flex flex-col items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png"
                            className="tw"
                            alt="logo"
                        />
                        TailwindCSS
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src={javaScript}
                            width={500}
                            height={500}
                            className="w-16"
                            alt="logo"
                        />
                        JavaScript
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                            width={500}
                            height={500}
                            className="w-16"
                            alt="logo"
                        />
                        HTML5
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                            width={500}
                            height={500}
                            className="w-16"
                            alt="logo"
                        />
                        CSS3
                    </div>
                </div>
            </div>
            <div
                onClick={openDetails2}
                className="text-2xl py-2 px-6 hover:bg-gray-500 select-none cursor-pointer
                           box2 flex justify-center mt-5 transition duration-200 ease-in-out"
            >
                <p>{showDetails2 ? "hide <<" : "more details >>"}</p>
            </div>
        </div>
    )
}

export default STImart