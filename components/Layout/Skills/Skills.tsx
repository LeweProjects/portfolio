import React from "react";
import { motion } from "framer-motion";
import { headerProps } from "@/app/headerProps";
import Image from "next/image";
import useJsonMapping from "@/app/hooks/useJsonMapping";

const Skills: React.FC<headerProps> = ({ skills }) => {
	const { skillsArray, imagePath } = useJsonMapping();
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ margin: "-200px" }}
			id="stack"
			ref={skills}
		>
			<div className="flex flex-col mb-10 items-center">
				<p className="text-lg mt-28">These are my</p>
				<h1 className="w-fit font-semibold text-5xl tech">TECH-STACKS</h1>
			</div>

			<motion.ul
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				className="stack grid grid-cols-5 gap-x-3 gap-y-5 text-xl items-end"
			>
				{skillsArray?.map((data, i) => (
					<li key={i}>
						<Image
							src={imagePath + data.icon}
							width={500}
							height={500}
							className="w-16"
							alt="logo"
						/>
						{data.name}
					</li>
				))}
			</motion.ul>
		</motion.div>
	);
};

export default Skills;
