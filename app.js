const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const Post = require('./models/post')
const User = require('./models/user')

// connection to mongoose
mongoose.connect('mongodb://127.0.0.1/jayhawk')
const db = mongoose.connection

app.get('/', (req, res) => {
  res.send('Please use a valid API module')
})

// Get All users
app.get('/api/users', (req, res) => {
  User.getUsers((error, users) => {
    if (error) {
      throw error
    }
    res.json(users)
  })
})

// Get a user by Id
app.get('/api/users/:_id', (req, res) => {
  User.getUSerById(req.params._id, (error, user) => {
    if (error) {
      throw error
    }
    res.json(user)
  })
})


// add a user
app.post('/api/users', (req, res) => {
  const user = req.body
  User.addUser(user, (error, user) => {
    if (error) {
      throw error
    }
    res.json(user)
  })
})

app.listen(7770)
console.log('Running jayhawk server on port 7000')
