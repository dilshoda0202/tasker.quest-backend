// update branch - task

const mongoose = require('mongoose');

const taskUpdateSchema = new mongoose.Schema({
    username: String,
    header: String,
    body: String
}, { timestamps: true });



const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'Medium',
    },
    status: {
        type: String,
        enum: ['Todo', 'In Progress', 'Completed'],
        default: 'Todo',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    taskUpdateSchema: [taskUpdateSchema]

}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
