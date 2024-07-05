import React from "react";
import { headerProps } from "@/app/headerProps";
import { motion } from "framer-motion";
import ProjectComponents from "./ProjectComponents";

const Projects: React.FC<headerProps> = ({ projects }) => {
	return (
		<div ref={projects} className="mt-16">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ margin: "-200px" }}
				className="flex flex-col items-center"
			>
				<div className="text-lg">Welcome! these are my</div>
				<h1 className="w-fit font-semibold text-5xl">PROJECTS</h1>

				<div className="projects grid grid-cols-3 gap-x-8 mt-16">
					<ProjectComponents />
				</div>
			</motion.div>
		</div>
	);
};

export default Projects;
