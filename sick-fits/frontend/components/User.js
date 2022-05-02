import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        # TODO : query the cart once we have it
      }
    }
  }
`;

export function useUser() {
  const { error, loading, data } = useQuery(CURRENT_USER_QUERY);

  return data?.authenticatedItem;
}
