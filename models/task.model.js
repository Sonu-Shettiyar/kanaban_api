const mongoose = require("mongoose");
const { SubtaskModel } = require("./subtask.model");

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    status: { type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo' },
    // status: String,
    // subtask: Array
    // subtask: [{  ref: SubtaskModel }]
})
const TaskModel = mongoose.model("task", taskSchema);

module.exports = {
    TaskModel
}

