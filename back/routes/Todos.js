import express from "express";
import {createTodo,getTodos} from "../controllers/Todos.js";

const router = express.Router();
router.post("/",createTodo);
router.get('/',getTodos);
//router.get('/',getTodolists);
//router.get("/:id", getUserById);
//router.delete("/:id", deleteUser);
//router.patch("/:id/technologies/add", addTechnology);

export default router;