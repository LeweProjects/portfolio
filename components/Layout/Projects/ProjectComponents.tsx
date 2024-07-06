"use client";
import React from "react";
import Link from "next/link";
import MoreDetails from "./More Details/MoreDetails";
import useJsonMapping from "@/app/hooks/useJsonMapping";
import mgh from "@/app/images/MGHsite.png";
import portfolio from "@/app/images/portfolio.png";
import { StaticImageData } from "next/image";
import stimart from "@/app/images/STImart.png";
import ttg from "@/app/images/TTGBlogs.png"

type ImageMap = {
	[key: string]: StaticImageData;
};

const images: ImageMap = {
	"portfolio.png": portfolio,
	"MGHsite.png": mgh,
	"STImart.png": stimart,
	"TTGBlogs.png": ttg,
};

const Portfolio = () => {
	const { projectsArray } = useJsonMapping();
	return projectsArray.map((data, i) => (
		<div key={i} className="flex flex-col items-center mb-10">
			{data.status == "open" ? (
				<Link
					onClick={() => {
						data.link == "/" && window.location.reload();
					}}
					href={data.link}
					className="w-[50vh] lowercase h-[25vh] projImage box absolute z-10 opacity-0 flex items-center justify-center hover:cursor-pointer text-6xl hover:opacity-100 transition duration-200 ease-in bg-black"
				>
					Visit
				</Link>
			) : (
				<div
					//onClick={() => window.location.reload()}
					className="w-[50vh] lowercase cursor-wait h-[25vh] projImage box absolute z-10 opacity-0 flex items-center justify-center hover:cursor-pointer text-6xl hover:opacity-100 transition duration-200 ease-in bg-black"
				>
					Ongoing
				</div>
			)}
			<div
				className={`w-[50vh] h-[25vh] projImage box bg-[length:50vh_25vh] 
     						bg-no-repeat bg-white`}
				style={{
					backgroundImage: `url(${images[data.image]?.src})`,
				}}
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
