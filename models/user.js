const mongoose = require('mongoose')

// User Schema
const userSchema = mongoose.Schema({
  first_name : {
    type: String,
    required: true
  },
  last_name : {
    type : String,
    required: true
  },
  born : {
    type : Number,
    required : true
  },
  user_name: {
    type : String,
    required : true
  },
  member_since : {
    type: Date,
    default: Date.now
  },
  institution : {
    type : String,
    required : false
  },
  career : {
    type : String,
    required : true
  },
  followers : {
    type: Array,
    required: true
  },
  following : {
    type: Array,
    required: true
  }
})

const User = module.exports = mongoose.model('User', userSchema)

//Get Users
module.exports.getUsers = (callback, limit) => {
  User.find(callback).limit(limit)
}

// Get a User by its Id
module.exports.getUSerById = function (id, callback) {
  User.findById(id, callback)
}
