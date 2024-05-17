const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
  img: String,
  summary: String
});

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;
