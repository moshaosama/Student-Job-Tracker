import express from "express";
import { createJop } from "../../Controller/Jop/createJop.js";
const createJopRouter = express.Router();

createJopRouter.route("/").post(createJop);

export default createJopRouter;
