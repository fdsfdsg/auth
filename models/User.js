const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 10,
  },
  email: {
    type: String,
    trim: true, //spacebar 없애주려고
    unique: 1,
  },
  password: {
    type: String,
    minlength: 20,
  },
  role: {
    type: Number, //1이면 관리자, 0이면 유저
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
