const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const Task = require("./models/Task");

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// =====================
// CREATE TASK
// =====================
app.post("/tasks", async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// =====================
// GET TASKS
// Pagination + Filter
// =====================
app.get("/tasks", async (req, res) => {

    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const filter = {};

        if (req.query.priority) {
            filter.priority = req.query.priority;
        }

        if (req.query.dueDate) {
            filter.dueDate = req.query.dueDate;
        }

        const tasks = await Task.find(filter)
            .skip((page - 1) * limit)
            .limit(limit);

        res.json(tasks);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});


// =====================
// UPDATE TASK
// =====================
app.put("/tasks/:id", async (req, res) => {

    try {

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(task);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// =====================
// DELETE TASK
// =====================
app.delete("/tasks/:id", async (req, res) => {

    try {

        await Task.findByIdAndDelete(req.params.id);

        res.json({
            message: "Task Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});