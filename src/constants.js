import dotenv from "dotenv";
dotenv.config();
export const Mongo_DB_URL = process.env.MONGODB_URL
export const PORT = process.env.PORT;