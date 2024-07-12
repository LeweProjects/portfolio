import skillsJson from "@/public/json/skills.json";
import { NextResponse } from "next/server";

export async function GET(request: any) {
	return NextResponse.json(skillsJson);
}
