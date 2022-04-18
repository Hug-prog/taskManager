import mongoose from "mongoose";

const TodosSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Todolists",
    required: true,
  },
  name: { type: String, required: true },
  state: { type: Boolean, required: true },
});

export default mongoose.model("Todos", TodosSchema);
