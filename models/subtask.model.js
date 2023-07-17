const mongoose = require("mongoose");
 const subTaskScehma = mongoose.Schema({
    title: String,
    isCompleted: Boolean
})
const SubtaskModel = mongoose.model("subtask", subTaskScehma);

module.exports = {
    SubtaskModel
}

