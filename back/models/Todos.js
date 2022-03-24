import mongoose from "mongoose";

const TodosSchema = mongoose.Schema({
  name: { type: String, required: true },
  state: { type: Boolean, required: true },
});

export default mongoose.model("Todos", TodosSchema);
