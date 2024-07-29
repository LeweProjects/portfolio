"use client";
import React from "react";
import Link from "next/link";
import mgh from "@/app/images/MGHsite.png";
import portfolio from "@/app/images/portfolio.png";
import { StaticImageData } from "next/image";
import stimart from "@/app/images/STImart.png";
import ttg from "@/app/images/TTGBlogs.png";
import nxs from "@/app/images/chartNexus.png";
import ProjectDetailsModal from "../Modals/ProjectDetailsModal";
import useModalFunction from "@/app/hooks/useModalFunction";
import ModalLoading from "../Loading/ModalLoading";

type ImageMap = {
	[key: string]: StaticImageData;
};

const images: ImageMap = {
	"portfolio.png": portfolio,
	"MGHsite.png": mgh,
	"STImart.png": stimart,
	"TTGBlogs.png": ttg,
	"chartNexus.png": nxs,
};

interface projectProps {
	projects: React.MutableRefObject<any>;
	data: any;
}

const Portfolio: React.FC<projectProps> = ({ projects, data }) => {
	function openModal() {
		setProectModal(true);
		document.documentElement.style.overflowY = "hidden";
	}

	const { isProjectModalOpen, setProectModal } = useModalFunction();

	return (
		<div id="projects" className="flex flex-col items-center mb-10">
			{isProjectModalOpen && (
				<>
					<ProjectDetailsModal
						isProjectModalOpen={isProjectModalOpen}
						setProectModal={setProectModal}
						data={data}
					/>
					{/* <ModalLoading setProectModal={setProectModal} /> */}
				</>
			)}

			<div
				className="w-[50vh] lowercase h-[25vh] peer/project  projImage absolute z-10 opacity-0 flex flex-col space-y-3 items-center 
							justify-center select-none hover:opacity-100 [&:not(:hover)]:delay-0 delay-200 transition duration-200 scale-110 ease-in bg-black"
			>
				<h1 className="font-semibold uppercase">{data.name}</h1>
				<p className="text-center normal-case project__description pb-7">
					{data?.description}
				</p>
				<div className="flex items-center justify-around w-full">
					<button
						onClick={openModal}
						className="text-xl border-2 hover:bg-white hover:text-black hover:scale-110 transition duration-200 border-white px-2 rounded"
					>
						details
					</button>
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
			</div>

			<div
				className="min-w-[50vh] min-h-[25vh] projImage bg-[length:50vh_25vh] [&:not(:hover)]:delay-200 delay-0 transition duration-150 peer-hover/project:scale-110
     						bg-no-repeat bg-white"
				style={{
					backgroundImage: `url(${images[data.image]?.src})`,
				}}
			></div>
		</div>
	);
};

export default Portfolio;
