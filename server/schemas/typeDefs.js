const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  email: String
  itemCount: Int
  savedBooks: [Item]
}
type Item {
  categories: [String]
  storageLocation: String
  name: String
  quantity: Int
}
type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
  test: String
  users: [User]
  user(username: String!): User
}

type QuerySuper {
  test: String
}

type Mutation { 
  login(email: String!, password: String!): Auth
  addUser(email: String!, password: String!): Auth
}


`;

// addedDate: Date
// exeriationDate: Date

// thoughts(username: String): [Thought]
// thought(_id: ID!): Thought

// type Mutation {
//   login($email: String!, $password: String!): jws
//   addUser($email: String!, $password: String!): Auth
// }

// saveItem(accepts array of categories (strings), storage location (string), addedDate (date), experiationDate (date), name (string), quantity (int))
// removeItem(accepts itemId (verifies it belongs to user))

module.exports = typeDefs;