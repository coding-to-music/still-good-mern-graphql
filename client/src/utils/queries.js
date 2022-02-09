import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      email
      savedItems {
        _id
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
