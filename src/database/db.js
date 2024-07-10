import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export const dbConnection = () => {
  return mongoose.connect(MONGO_URI, {});
};