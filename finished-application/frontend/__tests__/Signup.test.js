import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/react-testing';
import Signup, { SIGNUP_MUTATION } from '../components/Signup';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser } from '../lib/testUtils';

const me = fakeUser();
const mocks = [
  // signup mock mutation
  {
    request: {
      query: SIGNUP_MUTATION,
      variables: {
        name: me.name,
        email: me.email,
        password: 'wes',
      },
    },
    result: {
      data: {
        createUser: {
          __typename: 'User',
          id: 'abc123',
          email: me.email,
          name: me.name,
        },
      },
    },
  },
  // current user query mock
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: me } },
  },
];

describe('<Signup/>', () => {
  it('renders and matches snapshot', async () => {
    const { container } = render(
      <MockedProvider>
        <Signup />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('calls the mutation properly', async () => {
    const { container } = render(
      <MockedProvider mocks={mocks}>
        <Signup />
      </MockedProvider>
    );
    await userEvent.type(screen.getByPlaceholderText('name'), me.name);
    await userEvent.type(screen.getByPlaceholderText('email'), me.email);
    await userEvent.type(screen.getByPlaceholderText('password'), 'wes');
    await userEvent.click(screen.getByText('Sign Up!'));
    // loading state
    expect(screen.getByTestId('loading')).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByTestId('loading')).toHaveAttribute('disabled');
    await screen.findByText(`Signed up with ${me.email} — Please Sign In now`);
  });
});
