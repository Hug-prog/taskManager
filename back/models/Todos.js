import mongoose from "mongoose";

const TodosSchema = mongoose.Schema({
    name:{type:String,required:true},
    state:{type:Boolean,required:true}
    //technologies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Technologies" }],
});

export default mongoose.model("Todos", TodosSchema);