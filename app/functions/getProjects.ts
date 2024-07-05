"use server";
import { promises as fs } from "fs";

const getProjects = async () => {
  const file = await fs.readFile(
    process.cwd() + "/components/json/projects.json",
    "utf-8",
  );
  const data = JSON.parse(file);
  
  if(!data.ok){
    throw new Error('Failed to fetch data')
  }
  return data;
};

export default getProjects;