"use client";
import { useEffect, useState } from "react";
import _ from "lodash";
import axios from "axios";

const useJsonMapping = () => {
	const imagePath = "/images/";
	const [showDetails, setShowDetails] = useState(false);

	const [projectsArray, setProjects] = useState<any[]>([]);
	const [skillsArray, setSkills] = useState<any[]>([]);

	function openDetails(): void {
		setShowDetails(!showDetails);
	}
	
	useEffect(() => {
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
