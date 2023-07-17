
const mongoose = require("mongoose");
const { TaskModel } = require("./task.model");


const boardSchema = mongoose.Schema({
    name: String,
    tasks: Array
})
const BoardModel = mongoose.model("board", boardSchema);

module.exports = {
    BoardModel
}

//create board=== board elemt will add to board array with three status todo doiung done-- with separate coliunmn;



// add task button ---will addd to respected category column in specific board;
//on click of card ==-- modal will open --where checkbox presnt--strike;

//find by ud and update onoy when addinf=g taask to it



// const boards = [
//     {
//         id: "fvk",
//         "name": "Todo",
//         "tasks": [
//             {
//                 id: sknfl,
//                 "title": "Build UI for onboarding flow",
//                 "description": "",
//                 "status": "Todo",
//                 "subtasks": [
//                     {
//                         "title": "Sign up page",
//                         "isCompleted": true
//                     },
//                     {
//                         "title": "Sign in page",
//                         "isCompleted": false
//                     },
//                     {
//                         "title": "Welcome page",
//                         "isCompleted": false
//                     }
//                 ]
//             }]
//     }]