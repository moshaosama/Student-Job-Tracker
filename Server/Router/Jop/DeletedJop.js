import express from "express";
import { DeleteJop } from "../../Controller/Jop/DeleteJop.js";
const DeletedRouter = express.Router();

DeletedRouter.route("/:id").delete(DeleteJop);

export default DeletedRouter;
