"use server";
import { promises as fs } from "fs";

const getProjects = async () => {
  const file = await fs.readFile(
    process.cwd() + "/components/json/projects.json",
    "utf-8",
  );
  const data = JSON.parse(file);
  return data;
};

export default getProjects;