import express from "express";
import { FilterJopByStatus } from "../../Controller/Jop/FilterJopByStatus.js";
const FilterJopRouter = express.Router();

FilterJopRouter.route("/:status").get(FilterJopByStatus);

export default FilterJopRouter;
