

const express = require("express");
const { BoardModel } = require("../models/board.model");
const boardRouter = express.Router();

boardRouter.get("/board", async (req, res) => {

    try {
        const allBoard = await BoardModel.find();
        res.status(200).json({ msg: `Success`, data: allBoard })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

boardRouter.post("/board", async (req, res) => {
    try {
        const newBoard = new BoardModel({ ...req.body });
        await newBoard.save();
        res.status(200).json({ "msg": "Board Added Successfully" })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})


boardRouter.patch("/task/:id", async (req, res) => {
    const { id } = req.params;
    const { task, subtasks } = req.body;

    try {
        let board = await BoardModel.findOne({ _id: id });
        await BoardModel.findByIdAndUpdate({ _id: id }, { ...board, tasks: [...board.tasks, task] })
        res.status(200).json({ msg: "Task Added !!", data: board })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})
boardRouter.patch("/subtask/:id", async (req, res) => {
    const { id } = req.params;
    const { subtasks } = req.body;
    try {

        res.status(200).json({ msg: "Task Added !!", data: board })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = {
    boardRouter
}