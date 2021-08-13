import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { CURRENT_USER_QUERY } from '../../lib/hooks/useUser';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    endSession
  }
`;

export default function SignOut() {
  const router = useRouter();

  const [signOut] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    onCompleted: ({ endSession }) => {
      if (endSession) router.push('/signin');
    },
  });

  return (
    <button type="button" onClick={signOut}>
      Sign Out
    </button>
  );
}
