// Get the express module
const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const app = express();

// Get the graphql API
const schema = require('./schema/schema')

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
