const mongoose = require('mongoose')
const db = require('../config/db')

const { Schema } = mongoose

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    // required: true
  },
  password: {
    type: String,
    // required: true
    }
  
})

const UserModel = db.model('user', userSchema)

module.exports = UserModel
