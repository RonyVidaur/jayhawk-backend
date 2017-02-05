const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-paser')

app.use(bodyParser())
const User = require('./models/user')
const User = require('./models/post')

// connection to mongoose
mongoose.connect('mongodb://localhost/jayhawk')
const db = mongoose.connection

app.get('/', (req, res) => {
  res.send('Please use a valid API module')
})

app.listen(5050)
console.log('Running jayhawk server on port 5050')
