import Todolists from "../models/Todolists.js";
import mongoose from "mongoose";

export const createTodolist = async (req, res) => {
  const user = req.params.id;
  const { name } = req.body;
  if (!mongoose.Types.ObjectId.isValid(user)) {
    res.status(400).json({ message: "this user doens't exist" });
  } else {
    try {
      const todolist = await Todolists.create({
        name,
        owner: user,
      });
      res.status(201).json(todolist);
    } catch (error) {
      res.status(400).json(error);
    }
  }
};

export const getTodolists = async (req, res) => {
  try {
    const todolists = await Todolists.find();
    res.status(200).json(todolists);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getTodolistsById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: "this todolist doens't exist" });
    }
    const todolist = Todolists.findById(id);
    res.status(200).json(todolist);
  } catch (error) {
    res.status(404).json({ message: "request want wrong" });
  }
};

export const deleteTodolists = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: "this todolist doens't exist" });
    }
    await Todolists.findByIdAndRemove(id);
    res.status(200).json({ message: "this todolist has deleted" });
  } catch (error) {
    res.status(404).json({ message: "request want wrong" });
  }
};

export const updateName = async (req, res) => {
  const { newName } = req.body;
  const { id } = req.params;
  try {
    await Todolists.updateOne({ _id: id }, { name: newName });
    res.status(200).json({ message: "name has been changed" });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getTodolistsByUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "this user doens't exist" });
    }
    const todolist = await Todolists.find({ owner: id });
    res.status(200).json(todolist);
  } catch (error) {
    res.status(400).json(error);
  }
};
