import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
  console.log("Starting up...4");
  
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {});
    console.log("Auth Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Auth Listening on port 3000!!!!!!!!99911");
  });
};

start();
