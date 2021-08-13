import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from '../styles/Form';
import useForm from '../../lib/hooks/useForm';
import { CURRENT_USER_QUERY } from '../../lib/hooks/useUser';
import DisplayError from '../ErrorMessage';

const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignIn() {
  const { handleChange, inputs, resetInputs } = useForm({
    email: '',
    password: '',
  });

  const [signInMutation, { data, loading }] = useMutation(SIGN_IN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <Form
      method="post"
      onSubmit={async (event) => {
        event.preventDefault();
        const response = await signInMutation();
        console.log({ response });
      }}
    >
      <h2>Sign Into Your Account</h2>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </Form>
  );
}
