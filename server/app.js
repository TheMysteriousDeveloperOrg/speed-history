// Get the express module
const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const app = express();

// Get the graphql API
const schema = require('./schema/schema')

// Mongoose Database
const mongoose = require('mongoose');

// Connection to mongoose
mongoose.connect('mongodb+srv://system:dpiTFz2jHs9l4ZKc@hql.ekenq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  console.log('[Log] {Database} Connected to the database!');
});

// Middleware with express
app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

// Routes for express


// Listen to the port on the server
var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[Log] Listening on port ${port}`);
});

//
