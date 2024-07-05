"use server";
import fs from "fs";

const getProjects = async () => {
	const file = await fs.readFileSync(
		process.cwd() + "/public/json/projects.json",
		"utf-8"
	);
	const data = JSON.parse(file);

	return data;
};

export default getProjects;
