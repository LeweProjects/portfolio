"use server";
import { NextResponse } from "next/server";
import projectsJson from "@/public/json/projects.json"

export async function GET(request: any) {
	return NextResponse.json(projectsJson)
}