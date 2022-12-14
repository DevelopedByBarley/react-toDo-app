const express = require('express');
const router = express.Router();
const ToDos = require('../../database/models/toDos')

// GET ToDos
router.get('/', async (req, res) => {
  const getToDos = await ToDos.find({});
  res.send(getToDos)
})

// POST ToDos
router.post('/', async (req, res) => {
  const newToDo = await new ToDos({
    title: req.body.title,
    importance: req.body.importance,
    isItDone: req.body.isItDone,
    alarm: req.body.alarm
  })
  await newToDo.save();
  res.send(newToDo)
})

// Delete ToDos
router.delete('/:toDoId', async (req, res) => {
  const id = req.params.toDoId;
  const deleteToDo = await ToDos.findByIdAndDelete({
    _id: id
  })
  res.send(deleteToDo)
})

// Update ToDos
router.put('/:toDoId', async (req, res) => {
  const id = req.params.toDoId;
  const newToDo = {
    title: req.body.title,
    importance: req.body.importance,
    alarm: req.body.alarm,
    isItDone: req.body.isItDone
  }
  const updatedToDo = await ToDos.findByIdAndUpdate({_id: id}, newToDo, {returnOriginal: false})
  res.send(updatedToDo)
})




module.exports = router;
