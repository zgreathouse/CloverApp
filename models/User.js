const mongoose = require('mongoose');
const { Schema } = mongoose;

//User Schema
const userSchema = new Schema({
  username: String,
  googleID: String
});

mongoose.model('users', userSchema);
