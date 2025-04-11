import express from "express";
import { EditJopById } from "../../Controller/Jop/EditJop.js";
const EditJopRouter = express.Router();

EditJopRouter.route("/:id").put(EditJopById);

export default EditJopRouter;
