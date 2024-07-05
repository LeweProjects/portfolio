"use server";
import { promises as fs } from "fs";

const getSkills = async () => {
	const file = await fs.readFile(
		process.cwd() + "/public/json/skills.json",
		"utf-8"
	);
	const data = JSON.parse(file);
	return data;
};

export default getSkills;
