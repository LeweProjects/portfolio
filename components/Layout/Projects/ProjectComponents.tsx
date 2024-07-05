"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import MoreDetails from "./More Details/MoreDetails";
import useJsonMapping from "@/app/hooks/useJsonMapping";

const Portfolio = () => {
	const { projectsArray } = useJsonMapping();
	return projectsArray.map((data, i) => (
		<div key={i} className="flex flex-col items-center">
			<Link
				onClick={() => window.location.reload()}
				href="/"
				className="w-[50vh] lowercase h-[25vh] projImage box absolute z-10 opacity-0 flex items-center justify-center hover:cursor-pointer text-6xl hover:opacity-100 transition duration-200 ease-in bg-black"
			>
				Visit
			</Link>

			<div
				className="w-[50vh] h-[25vh] projImage box bg-[length:50vh_25vh]
     bg-no-repeat bg-[url('../images/portfolio.png')] bg-white"
			></div>
			<h1 id="projects" className="mt-2 text-xl font-semibold">
				{data?.name}
			</h1>
			<p className="w-[50vh] des">{data?.description}</p>
			<MoreDetails tools={data?.tools} />
		</div>
	));
};

export default Portfolio;
