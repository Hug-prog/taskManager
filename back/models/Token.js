import mongoose from "mongoose";

const tokenSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Users",
  },
  token: { type: String, require: true },
});

export default mongoose.model("Tokens", tokenSchema);
