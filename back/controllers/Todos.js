import Todos from "../models/Todos.js";

export const createTodo =async(req,res)=>{
    const {name,state} = req.body;
    try {
        const todo = await Todos.create({
            name,
            state
        })
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const getTodos = async(req,res)=>{
    try {
        const todos = await Todos.find();
        res.status(200).json(todos)
    } catch (error) {
        res.status(404).json(error);
    }
}