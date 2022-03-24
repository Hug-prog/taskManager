import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique:true},
    password: { type: String, required: true},
  
    //technologies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Technologies" }],
});

export default mongoose.model("Users", userSchema);