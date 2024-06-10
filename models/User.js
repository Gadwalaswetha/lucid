const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: String,
  email: {type: String, unique: true},
  password: String,
  profilePicture: String,
  genre: String,
})

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
})

module.exports = mongoose.model('User', UserSchema)