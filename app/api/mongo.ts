"use server";
import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;
let client = new MongoClient(uri);
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("error env");
} else {
  clientPromise = client.connect();
}

export { clientPromise, client };
// const client = new MongoClient(uri);
