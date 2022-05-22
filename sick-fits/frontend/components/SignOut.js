import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const END_SESSION_MUTATION = gql`
  mutation {
    endSession
  }
`;
export default function SignOut() {
  const [signOut] = useMutation(END_SESSION_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <button type="button" onClick={signOut}>
      Sign Out!
    </button>
  );
}
