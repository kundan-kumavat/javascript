const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    // Array of sub todos
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubTodo'
        }
    ],
}, {timestamps: true});

module.exports = mongoose.model('Todo', todoSchema);