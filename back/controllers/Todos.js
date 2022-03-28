import mongoose from "mongoose";
import Todos from "../models/Todos.js";

export const createTodo = async (req, res) => {
  const todolist = req.params.id;
  const { name, state } = req.body;
  try {
    const todo = await Todos.create({
      name,
      owner: todolist,
      state,
    });
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todos.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const deleteTodos = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: "this todos doens't exist" });
    }
    await Todos.findByIdAndRemove(id);
    res.status(200).json({ message: "this todos has deleted" });
  } catch (error) {
    res.status(404).json({ message: "request want wrong" });
  }
};
