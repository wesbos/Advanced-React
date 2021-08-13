import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from '../styles/Form';
import useForm from '../../lib/hooks/useForm';
import { CURRENT_USER_QUERY } from '../../lib/hooks/useUser';
import DisplayError from '../ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export default function RequestReset() {
  const { handleChange, inputs } = useForm({
    email: '',
  });

  const [signUpMutation, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
      // refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  if (data?.sendUserPasswordResetLink === null) {
    return <p>Success! Check your email for a link</p>;
  }

  return (
    <Form
      method="post"
      onSubmit={async (event) => {
        event.preventDefault();
        const response = await signUpMutation();
        console.log({ response });
      }}
    >
      <h2>Request Password Reset</h2>
      <DisplayError error={error} />
      <fieldset
        disabled={loading || data?.createUser.email}
        aria-busy={loading}
      >
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
        <button type="submit">Request Reset</button>
      </fieldset>
    </Form>
  );
}
