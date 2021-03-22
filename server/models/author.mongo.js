// Get mongoose
const mongoose = require('mongoose');

// Schema varible
const Schema = mongoose.Schema;

// PostSchema
const AuthorSchema = new Schema({
  title: String,
  age: Number,
  role: String
});

// Export the module
module.exports = mongoose.model('Author', AuthorSchema);
