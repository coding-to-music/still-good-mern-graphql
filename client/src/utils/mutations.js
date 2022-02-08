import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const SAVE_ITEM = gql`
  mutation saveItem($input: SavedItemInput) {
    saveItem(input: $input) {
      categories
      storageLocation
      addedDate
      useByDate
      name
      quantity
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation updateItem($input: UpdateItemInput) {
    updateItem(input: $input) {
      _id
      savedItems {
        categories
        storageLocation
        addedDate
        useByDate
        name
        quantity
      }
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation removeItem($_id: ID!) {
    removeItem(_id: $_id) {
      categories
      storageLocation
      addedDate
      useByDate
      name
      quantity
    }
  }
`;
