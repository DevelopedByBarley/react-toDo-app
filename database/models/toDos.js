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
  state: {
    type: String,
    required: false,
    default: "ready"
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