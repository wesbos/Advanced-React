import { gql } from 'react-apollo';

export const itemDetails = gql`
  fragment itemDetails on Item {
      id
      title
      price
      fullPrice
      description
      image {
        id
        url
        secret
      }
  }
`;
