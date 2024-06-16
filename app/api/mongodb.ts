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
      });
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDb;
