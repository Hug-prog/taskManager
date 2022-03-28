import express from "express";
import {
  createTodolist,
  getTodolists,
  deleteTodolists,
  getTodolistsById,
  updateName,
  getTodolistsByUser,
} from "../controllers/Todolists.js";

const router = express.Router();
router.post("/user/:id", createTodolist);
router.get("/", getTodolists);
router.delete("/:id", deleteTodolists);
router.get("/:id", getTodolistsById);
router.patch("/:id", updateName);
router.get("/user/:id", getTodolistsByUser);
//router.get("/:id", getUserById);
//router.delete("/:id", deleteUser);
//router.patch("/:id/technologies/add", addTechnology);

export default router;
