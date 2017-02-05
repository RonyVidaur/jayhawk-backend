const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const Post = require('./models/post')
const User = require('./models/user')

// connection to mongoose
mongoose.connect('mongodb://localhost/jayhawk')
const db = mongoose.connection

app.get('/', (req, res) => {
  res.send('Please use a valid API module')
})

app.get('/api/users', (req, res) => {
  User.getUsers((error, users) => {
    if (error) {
      throw error
    }
    res.json(users)
  })
})

app.listen(3000)
console.log('Running jayhawk server on port 5050')
