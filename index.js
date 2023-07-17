const express = require("express");
const { connection } = require("./db");
const { boardRouter } = require("./routers/board.route");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors())
console.log("eve.holt@reqres.in")
app.use("/", boardRouter)

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected to DB")
        console.log(`Succesfully running at port no: ${process.env.port} `)

    } catch (error) {
        console.log(error.message, "error while connecting to DB")
    }
})
