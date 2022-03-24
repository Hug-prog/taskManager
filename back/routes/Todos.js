import express from "express";
import { createTodo, getTodos, deleteTodos } from "../controllers/Todos.js";

const router = express.Router();
router.post("/", createTodo);
router.get("/", getTodos);
router.delete("/:id", deleteTodos);

//router.get("/:id", getUserById);
//router.delete("/:id", deleteUser);
//router.patch("/:id/technologies/add", addTechnology);

export default router;
