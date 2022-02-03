import mongoose from "mongoose";

const connectDB = () => {
  if (mongoose.connection.readyState >= 1) return;
  if (!process.env.MONGO_URI) throw new Error("Environment Invalid");

  mongoose.connect(process.env.MONGO_URI, (err: any) => {
    if (err) throw err;
  });
};

export default connectDB;
