import mongoose from "mongoose";
import { config } from "dotenv";
// Loads .env file contents into process.env.
config();

const DB_STRING = String(process.env.MONGODB_URI);

/**
 * -------------- DATABASE ----------------
 */

/**
 * Connect to MongoDB Server using the connection string in the `.env` file.
 * To implement this, place the following string into the `.env` file
 * MONGODB_URI=mongodb://<user>:<password>@localhost:27017/database_name
 */

export const connectDB = async (cb: () => void) => {
  try {
    const db = await mongoose.connect(DB_STRING);
    console.log(`MongoDB Connected: ${db.connection.host}`);
    cb();
  } catch (error) {
    const db = mongoose.connection;
    //Bind connection to error event (to get notification of connection errors)
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
  }
};
