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
    required: true,
    default: "ready"
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('ToDos', ToDoSchema);