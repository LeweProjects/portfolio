import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface modalProps {
	setProectModal: React.SetStateAction<any>;
	data: any;
}

const ProjectDetailsModal: React.FC<modalProps> = ({
	setProectModal,
	data,
}) => {
	function closeModal() {
		setProectModal(false);
		document.documentElement.style.overflowY = "unset";
	}

	let tools = data.tools;
	return (
		<div className="flex justify-center items-center w-screen h-screen transition duration-150 bg-black backdrop-blur-sm bg-opacity-20 fixed inset-0 z-40">
			<motion.div
				initial={{ opacity: 0, translateY: -400 }}
				whileInView={{ opacity: 1, translateY: 0 }}
				className="bg-zinc-700 text-white flex flex-col rounded-md justify-center items-center p-10 shadow-xl"
			>
				<div className="flex w-full justify-end">
					<button
						onClick={closeModal}
						className="absolute translate-x-7 -translate-y-7 bg-zinc-800 py-2 px-3 rounded-full"
					>
						X
					</button>
				</div>
				<div className="modalContainer flex mt-7">
					<div className="flex flex-col items-start w-[40rem]">
						<Image
							src={`/images/${data.image}`}
							width={600}
							height={200}
							alt=""
						/>
						<p className="mt-3 font-semibold uppercase">{data.name}</p>
						<p className="mt-1 text-sm tracking-widest w-[30rem]">
							{data.description}
						</p>
					</div>
					<div className="flex flex-col items-center">
						<h1 className="text-2xl font-semibold">Tools used</h1>
						<div className="grid grid-cols-3 gap-3 items-end tracking-wider">
							{tools.map((res: any, i: any) => (
								<motion.div
									key={i}
									className="flex flex-col items-center mt-3"
								>
									<Image
										src={`/images/${res.icon}`}
										width={50}
										height={40}
										alt=""
									/>
									{res.name}
								</motion.div>
							))}
						</div>
						{data.status == "open" ? (
							<Link
								onClick={() => {
									data.link == "/" && window.location.reload();
								}}
								target="_blank"
								href={data?.link}
								className="text-xl border-2 mt-10 hover:bg-white hover:text-black hover:scale-110 transition duration-200 border-white px-2 rounded"
							>
								visit site
							</Link>
						) : (
							<div className="text-xl border-2 mt-10 hover:bg-red-400 hover:text-black border-red-400 hover:scale-110 transition duration-200 px-2 rounded text-red-400 cursor-not-allowed">
								maintenance
							</div>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectDetailsModal;
