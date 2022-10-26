

function connectToDatabase() {
  const mongoose = require('mongoose')
  const db = process.env.MONGO_URI;

  mongoose.connect(db)
    .then(() => console.log("Mongodb database is connected!"))
    .catch((err) => console.log(err))
}

module.exports = connectToDatabase;