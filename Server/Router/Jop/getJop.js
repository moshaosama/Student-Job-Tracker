import express from "express";
import { getJop, getJopById } from "../../Controller/Jop/getJops.js";
const getJopRouter = express.Router();

const getJopByIdRouter = express.Router();

getJopRouter.route("/").get(getJop);

getJopByIdRouter.route("/:id").get(getJopById);

export { getJopRouter, getJopByIdRouter };
