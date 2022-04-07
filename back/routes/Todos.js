import express from "express";
import {
  createTodo,
  getTodos,
  deleteTodos,
  getTodoByTodolist,
} from "../controllers/Todos.js";

const router = express.Router();
router.post("/todolists/:id", createTodo);
router.get("/", getTodos);
router.get("/todolists/:id", getTodoByTodolist);
router.delete("/:id", deleteTodos);

//router.get("/:id", getUserById);
//router.delete("/:id", deleteUser);
//router.patch("/:id/technologies/add", addTechnology);

export default router;
