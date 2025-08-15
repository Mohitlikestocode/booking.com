// index.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

console.log("✅ Server file started executing...");

dotenv.config();
console.log("✅ Loaded environment variables...");

const app = express();

const connect = async () => {
  try {
    console.log("🔁 Trying to connect to MongoDB...");
    await mongoose.connect(process.env.MONGO);
    console.log("✅ Connected to mongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Stop the app if DB connection fails
  }
};

mongoose.connection.on("connected", () => {
  console.log("✅ Mongoose connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("⚠️ Mongoose disconnected");
});

app.listen(8800, async () => {
  console.log("🚀 Starting server...");
  await connect();
  console.log("✅ Connected to backend!");
});
