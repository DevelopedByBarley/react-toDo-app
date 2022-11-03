const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  importance: {
    type: String,
    required: true
  },
  isItDone: {
    type: Boolean,
    required: false,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  alarm: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('ToDos', ToDoSchema);