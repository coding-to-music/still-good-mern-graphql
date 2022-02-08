const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    saveItem(input: SavedItemInput): Item
    updateItem(input: SavedItemInput): Item
    removeItem(_id: ID): Item
  }

  type User {
    _id: ID
    email: String
    itemCount: Int
    savedItems: [Item]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Item {
    _id: ID
    categories: [String]
    storageLocation: String
    name: String!
    quantity: Int
    addedDate: String
    useByDate: String!
  }

  input SavedItemInput {
    _id: ID
    categories: [String]
    storageLocation: String
    name: String!
    quantity: Int
    addedDate: String
    useByDate: String!
  }
`;

module.exports = typeDefs;
