import express from "express";
import { createTodolist,getTodolists } from "../controllers/Todolists.js";

const router = express.Router();
router.post("/",createTodolist);
router.get('/',getTodolists);
//router.get("/:id", getUserById);
//router.delete("/:id", deleteUser);
//router.patch("/:id/technologies/add", addTechnology);

export default router;