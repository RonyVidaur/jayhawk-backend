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
  }
  followers : {
    data : [
    ]
  },
  following : {
    data: [

    ]
  }

})
