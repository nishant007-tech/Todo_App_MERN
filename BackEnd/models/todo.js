const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({

    todoData: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
        default: new Date().toDateString()
    }

});

module.exports = mongoose.model('todo', todoSchema);