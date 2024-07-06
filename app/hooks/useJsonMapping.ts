"use client";
import { useEffect, useState } from "react";
import getProjects from "../functions/getProjects";
import _ from "lodash";
import getSkills from "../functions/getSkills";
import axios from "axios";
import { error } from "console";

const useJsonMapping = () => {
	const imagePath = "/images/";
	const [showDetails, setShowDetails] = useState(false);

	const [projectsArray, setProjects] = useState<any[]>([]);
	const [skillsArray, setSkills] = useState<any[]>([]);

	function openDetails(): void {
		setShowDetails(!showDetails);
	}
	useEffect(() => {
		// async function projectsArray() {
		// 	const data = await getProjects();
		// 	setProjects(_.map(data));
		// }
		axios
			.get("/api/fetchProjects")
			.then((res) => setProjects(res.data))
			.catch((res) => console.error(res));

		axios
			.get("/api/fetchSkills")
			.then((res) => setSkills(res.data))
			.catch((res) => console.error(res));
	}, []);

	return { projectsArray, skillsArray, showDetails, openDetails, imagePath };
};

export default useJsonMapping;
