"use client";
import { useEffect, useState } from "react";
import getProjects from "../functions/getProjects";
import _ from "lodash";
import getSkills from "../functions/getSkills";

const useJsonMapping = () => {
	const imagePath = "/images/";
	const [showDetails, setShowDetails] = useState(false);

	const [projectsArray, setProjects] = useState<any[]>([]);
	const [skillsArray, setSkills] = useState<any[]>([]);

	function openDetails(): void {
		setShowDetails(!showDetails);
	}
	useEffect(() => {
		async function projectsArray() {
			const data = await getProjects();
			setProjects(_.map(data));
		}
		async function skillsArray() {
			const data = await getSkills();
			setSkills(_.map(data));
		}
		projectsArray();
		skillsArray();
	}, []);

	return { projectsArray, skillsArray, showDetails, openDetails, imagePath };
};

export default useJsonMapping;
