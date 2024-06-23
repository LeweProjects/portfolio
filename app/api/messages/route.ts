import Message from "@/app/models/message";
import connectMongoDb from "../mongodb";
import { NextResponse } from "next/server";
import NextCors from 'nextjs-cors';

export async function POST(req: any) {

//   await NextCors(req, res, {
//     // Options
//     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//     origin: '*',
//     optionsSuccessStatus: 200,
//  });

  const { name, email, message } = await req.json();
  await connectMongoDb();
  await Message.create({ name, email, message });
  return NextResponse.json({ message: "message sent" }, { status: 201 });
}
