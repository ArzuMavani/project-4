const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required : true
  },
  summary: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const bookDB = mongoose.model("bookTBL", userSchema);

module.exports = bookDB;
