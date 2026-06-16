const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
{
    taskName: {
        type: String,
        required: true
    },

    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        required: true
    },

    dueDate: {
        type: Date,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Task", taskSchema);
