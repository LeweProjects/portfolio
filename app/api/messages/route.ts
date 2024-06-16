import Message from "@/app/models/message";
import connectMongoDb from "../mongodb";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const { name, email, message } = await req.json();
  await connectMongoDb();
  await Message.create({ name, email, message });
  return NextResponse.json({ message: "message sent" }, { status: 201 });
}
