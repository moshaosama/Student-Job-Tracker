import express from "express";
import { getJop } from "../../Controller/Jop/getJops.js";
const getJopRouter = express.Router();

getJopRouter.route("/").get(getJop);

export default getJopRouter;
