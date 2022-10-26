require('dotenv').config()

const express = require('express');
const cors = require('cors')
const connectToDatabase = require('./database/connection/connect')
const bodyParser = require('body-parser');
const toDoRouter = require('./routes/api/toDos')

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/toDos', toDoRouter)


app.get('/', (req, res) => {
  res.send('Hello')
})


connectToDatabase()

app.listen(process.env.PORT || 5000, () => {
  console.log(`App is listening on port ${process.env.PORT}`)
})