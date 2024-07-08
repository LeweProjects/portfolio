"use client";
import React from "react";
import Link from "next/link";
import MoreDetails from "./More Details/MoreDetails";
import useJsonMapping from "@/app/hooks/useJsonMapping";
import mgh from "@/app/images/MGHsite.png";
import portfolio from "@/app/images/portfolio.png";
import { StaticImageData } from "next/image";
import stimart from "@/app/images/STImart.png";
import ttg from "@/app/images/TTGBlogs.png";

type ImageMap = {
	[key: string]: StaticImageData;
};

const images: ImageMap = {
	"portfolio.png": portfolio,
	"MGHsite.png": mgh,
	"STImart.png": stimart,
	"TTGBlogs.png": ttg,
};

interface projectProps {
	projects: React.MutableRefObject<any>;
}

const Portfolio: React.FC<projectProps> = ({ projects }) => {
	const { projectsArray } = useJsonMapping();
	return projectsArray.map((data, i) => (
		<div id="projects" key={i} className="flex flex-col items-center mb-10">
			<div
				className="w-[50vh] lowercase h-[25vh] peer/project  projImage absolute z-10 opacity-0 flex flex-col space-y-3 items-center 
							justify-center select-none hover:opacity-100 [&:not(:hover)]:delay-0 delay-200 transition duration-200 scale-110 ease-in bg-black"
			>
				<h1 className="font-semibold uppercase">{data.name}</h1>
				<p className="text-center project__description pb-7">
					{data?.description}
				</p>
				{data.status == "open" ? (
					<Link
						onClick={() => {
							data.link == "/" && window.location.reload();
						}}
						target="_blank"
						href={data?.link}
						className="text-xl border-2 hover:bg-white hover:text-black hover:scale-110 transition duration-200 border-white px-2 rounded"
					>
						visit site
					</Link>
				) : (
					<div className="text-xl border-2 hover:bg-red-400 hover:text-black border-red-400 hover:scale-110 transition duration-200 px-2 rounded text-red-400 cursor-not-allowed">
						maintenance
					</div>
				)}
			</div>

			<div
				className="min-w-[50vh] min-h-[25vh] projImage bg-[length:50vh_25vh] [&:not(:hover)]:delay-200 delay-0 transition duration-150 peer-hover/project:scale-110
     						bg-no-repeat bg-white"
				style={{
					backgroundImage: `url(${images[data.image]?.src})`,
				}}
			></div>
			{/* <h1 id="projects" className="mt-2 text-xl font-semibold">
				{data?.name}
			</h1>
			<p className="w-[50vh] des">{data?.description}</p>
			<MoreDetails tools={data?.tools} /> */}
		</div>
	));
};

export default Portfolio;
