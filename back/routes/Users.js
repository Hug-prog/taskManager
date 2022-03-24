import express from "express";
import {
  createUser,
  getUserById,
  getUsers,
  //addTechnology,
  deleteUser,
} from "../controllers/Users.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.get("/:id", getUserById);
//router.get("/:id", getUserById);
//router.patch("/:id/technologies/add", addTechnology);

export default router;
