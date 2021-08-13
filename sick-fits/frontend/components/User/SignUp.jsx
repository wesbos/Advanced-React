import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from '../styles/Form';
import useForm from '../../lib/hooks/useForm';
import { CURRENT_USER_QUERY } from '../../lib/hooks/useUser';
import DisplayError from '../ErrorMessage';

const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION(
    $email: String!
    $name: String!
    $password: String
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const { handleChange, inputs } = useForm({
    email: '',
    name: '',
    password: '',
  });

  const [signUpMutation, { data, loading, error }] = useMutation(
    SIGN_UP_MUTATION,
    {
      variables: inputs,
      // refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  if (data?.createUser) {
    return (
      <p>Signed up with {data.createUser.email}, please go ahead and sign in</p>
    );
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
      <h2>Sign Up For An Account</h2>
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
        <label htmlFor="email">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            autoComplete="name"
            value={inputs.name}
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
