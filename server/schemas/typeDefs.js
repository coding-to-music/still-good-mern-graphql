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
`;

module.exports = typeDefs;