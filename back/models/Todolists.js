import mongoose from "mongoose";

const TodolistsSchema = mongoose.Schema({
    name:{type:String,required:true}
  
    //technologies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Technologies" }],
});

export default mongoose.model("Todolists", TodolistsSchema);