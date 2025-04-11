import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./ConnectDB/DB.js";
import createJopRouter from "./Router/Jop/createJop.js";
import { getJopByIdRouter, getJopRouter } from "./Router/Jop/getJop.js";
import EditJopRouter from "./Router/Jop/EditJop.js";
import DeletedRouter from "./Router/Jop/DeletedJop.js";
import FilterJopRouter from "./Router/Jop/FilterJopByFilter.js";

dotenv.config({ path: ".env" });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("API is working!");
});
app.use("/createjop", createJopRouter);
app.use("/getjops", getJopRouter);
app.use("/jop", getJopByIdRouter);
app.use("/updatejop", EditJopRouter);
app.use("/deletejop", DeletedRouter);
app.use("/filterjop", FilterJopRouter);

// Database Connection
connectDB();

export default app;
