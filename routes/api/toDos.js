const express = require('express');
const router = express.Router();
const ToDos = require('../../database/models/toDos')

// GET ToDos
router.get('/', async (req, res) => {
  res.send('Router')
})

// POST ToDos

module.exports = router;
