import fs from "fs";
import path from "path";

export function GET(request: any) {
	let usersPath = path.join(process.cwd(), "/public/json/skills.json");
	let file = fs.readFileSync(usersPath);
	return new Response(file);
}
