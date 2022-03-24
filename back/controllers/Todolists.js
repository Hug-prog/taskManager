import Todolists from "../models/Todolists.js";
import mongoose from "mongoose";
export const createTodolist = async (req,res)=>{
    const {name} = req.body;
    try {
        const todolist = await Todolists.create({
            name,
        })
        res.status(201).json(todolist);
    } catch (error) {
        res.status(404).json(error);
    }
}

export const getTodolists = async(req,res)=>{
    try {
        const todolists = await Todolists.find();
        res.status(200).json(todolists);
    } catch (error) {
        res.status(404).json(error);
    }
}