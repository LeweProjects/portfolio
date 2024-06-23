"use server";
import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI, {
        dbName: "portfolio",
      })
      .then(() => {
        console.log("connected succesfully");
        console.log(process.env.NEXT_PUBLIC_DOMAIN + process.env.MONGODB_URI)
      });
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDb;
