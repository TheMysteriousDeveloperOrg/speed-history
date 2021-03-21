// require Graphql
const graphql = require('graphql');

// require lodash
const _ = require('lodash');

// Graphql Object
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
  } = graphql;

// Example posts
var postsex = [
  { title: 'This is a test 1', catagory: 'test', id: '456', authorId: "1"},
  { title: 'This is a test 2', catagory: 'test', id: '489', authorId: "1"},
  { title: 'This is a test 3', catagory: 'test', id: '413', authorId: "1"}
];

// Example Author
var authorsex = [
  {name: 'The Mysterious Developer', age: '15', role: 'Owner', id: '1'}
];

// Post type
const PostsType = new GraphQLObjectType({
  name: 'Posts',
  fields: () => ({
    id: {type: GraphQLID},
    author: {type: AuthorType, resolve(parent,args){console.log(parent); return _.find(authorsex, {id: parent.authorId})}},
    title: {type: GraphQLString},
    description: {type: GraphQLString},
    article: {type: GraphQLString},
    catagory: {type: GraphQLString},
    tags: {type: GraphQLString}
  })
});

// Author type
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    role: {type: GraphQLString}
  })
});

// The root query to search the database
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    posts: {
      type: PostsType,
      args: {id: {type: GraphQLID}},
      resolve(parent,args){
        // code to get data from db / other source
        return _.find(postsex, { id: args.id });
      }
    },
  author: {
    type: AuthorType,
    args: {id: {type: GraphQLID}},
    resolve(parent,args){
      // code to get data from db / other source
      return _.find(authorsex, { id: args.id });
    }
  }
  }
});


// Export this schema
module.exports = new GraphQLSchema({
  query: RootQuery
});
