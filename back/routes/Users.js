import express from "express";
import {
  createUser,
  getUserById,
  getUsers,
  deleteUser,
  login,
  refreshUserToken,
} from "../controllers/Users.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.get("/:id", getUserById);
router.post("/login", login);
router.post("/refreshToken", refreshUserToken);

export default router;
