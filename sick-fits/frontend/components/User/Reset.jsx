import { string } from 'prop-types';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from '../styles/Form';
import useForm from '../../lib/hooks/useForm';
import DisplayError from '../ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $token: String!
    $password: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;

export default function Reset({ token }) {
  const { handleChange, inputs } = useForm({
    email: '',
    password: '',
    token,
  });

  const [resetMutation, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
    }
  );

  const successfulError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  return (
    <Form
      method="POST"
      onSubmit={async (event) => {
        event.preventDefault();
        const response = await resetMutation();
        console.log({ response });
      }}
    >
      <h2>Reset Your Password</h2>
      <DisplayError error={error || successfulError} />
      <fieldset
        disabled={loading || data?.redeemUserPasswordResetToken === null}
        aria-busy={loading}
      >
        {data?.redeemUserPasswordResetToken === null && (
          <p>Success! You can now sign in with your new password</p>
        )}
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
        <button type="submit">Reset Password</button>
      </fieldset>
    </Form>
  );
}

Reset.propTypes = {
  token: string,
};
