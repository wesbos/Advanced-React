import gql from 'graphql-tag';

export const itemDetails = gql`
  fragment itemDetails on Item {
    id
    title
    price
    description
  }
`;
