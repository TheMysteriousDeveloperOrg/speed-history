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
  GraphQLInt,
  GraphQLList
  } = graphql;

// Import models
const Posts = require('../models/posts.mongo.js')
const Author = require('../models/author.mongo.js');

// Post type
const PostsType = new GraphQLObjectType({
  name: 'Posts',
  fields: () => ({
    id: {type: GraphQLID},
    author: {type: AuthorType, resolve(parent,args){
      // return _.find(authors, {id: parent.authorId})
    }},
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
    role: {type: GraphQLString},
    posts: {type: new GraphQLList(PostsType), resolve(parent,args){
      //return _.filter(posts, {authorId: parent.id})
    }}
  })
});

// The root query to search the database
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    post: {
      type: PostsType,
      args: {id: {type: GraphQLID}},
      resolve(parent,args){
        // code to get data from db / other source
        // return _.find(posts, { id: args.id });
      }
    },
  author: {
    type: AuthorType,
    args: {id: {type: GraphQLID}},
    resolve(parent,args){
      // code to get data from db / other source
      // return _.find(authors, { id: args.id });
    }
  },
  posts: {
    type: new GraphQLList(PostsType),
    resolve(parent,args){
      // return posts
    }
  },
  authors: {
    type: new GraphQLList(AuthorType),
    resolve(parent,args){
      // return authors
    }
  }
  }
});

// Mutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name:
      }
    },
  }
})

// Export this schema
module.exports = new GraphQLSchema({
  query: RootQuery
});
