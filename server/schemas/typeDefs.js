const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  email: String
  itemCount: Int
  savedBooks: [Item]s
}
type Item {
  categories: [String]
  storageLocation: String
  addedDate: Date
  exeriationDate: Date
  name: String
  quantity: Int
}
type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
  users: [User]
  user(username: String!): User
  thoughts(username: String): [Thought]
  thought(_id: ID!): Thought
}
`;

module.exports = typeDefs;