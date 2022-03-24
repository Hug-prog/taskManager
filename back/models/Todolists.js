import mongoose from "mongoose";

const TodolistsSchema = mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
  name: { type: String, required: true },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todos" }],
});

export default mongoose.model("Todolists", TodolistsSchema);
