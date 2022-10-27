require('dotenv').config()

const express = require('express');
const cors = require('cors')
const connectToDatabase = require('./database/connection/connect')
const bodyParser = require('body-parser');
const toDoRouter = require('./routes/api/toDos');
const path = require('path')
const app = express();

app.use(cors());
app.use(bodyParser.json());

connectToDatabase()


// Routes
app.use('/api/toDos', toDoRouter)


app.get('/', (req, res) => {
  res.send('Hello')
})

if (process.env.NODE_ENV === 'production') {
  //Set Static folder
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}



app.listen(process.env.PORT || 5000, () => {
  console.log(`App is listening on port ${process.env.PORT}`)
})