import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./ConnectDB/DB.js";
import createJopRouter from "./Router/Jop/createJop.js";
import { getJopByIdRouter, getJopRouter } from "./Router/Jop/getJop.js";
const app = express();
const Port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config({ path: ".env" });

// EndPoints
app.use("/createjop", createJopRouter);
app.use("/getjops", getJopRouter);
app.use("/jop", getJopByIdRouter);

////////////

app.listen(Port, async () => {
  try {
    connectDB();
    console.log("Successfully connect on port", Port);
  } catch (error) {
    console.log("Failed Connected on port", error);
  }
});
