const express = require ('express')
const router = express.Router()
const Task = require ("../models/task.js")

router.post ("/create", async (req, res)=>{
    try {
        const task =await Task.create(req.body)
        res.status(201).send(task)
    } catch (error){
    console.error(error),
    res.status(500).send({ message: "There was a problem creating the task"})
    }
})

router.get("/all", async (req, res)=>{
    try {
        const tasks = await Task.find()
        res.status(200).send(tasks)
    } catch (error){
        console.error(error)
        res.status(500).send({message: "There was a problem retrieving the tasks"})
    }
})

router.put("/update/:id", async (req, res)=>{
    try {
        const {id} = req.params
        const task = await Task.findByIdAndUpdate(id, req.body, {new: true})
        if (!task) {
            return res.status(404).send({message: "Task not found"})
        }       res.status(200).send(task)
    } catch (error){
        console.error(error) 
        res.status(500).send({message: "There was a problem updating the task"})
    }
})

router.delete("/delete/:id", async (req, res)=>{
    try {
        const {id} = req.params
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return res.status(404).send({message: "Task not found"})
        }
        res.status(200).send({message: "Task deleted successfully"})
    } catch (error){
        console.error(error)
        res.status(500).send({message: "There was a problem deleting the task"})
    }
})

module.exports =router;

