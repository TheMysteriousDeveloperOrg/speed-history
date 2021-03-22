// Get mongoose
const mongoose = require('mongoose');

// Schema varible
const Schema = mongoose.Schema;

// PostSchema
const PostsSchema = new Schema({
  title: String,
  description: String,
  article: String,
  catagory: String,
  tags: Array
});

// Export the module
module.exports = mongoose.model('Posts', PostsSchema);
