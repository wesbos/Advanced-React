import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/react-testing';
import PleaseSignIn from '../components/PleaseSignIn';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser } from '../lib/testUtils';

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: null } },
  },
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedItem: fakeUser() } },
  },
];

describe('<PleaseSignIn/>', () => {
  it('renders the sign in dialog to logged out users', async () => {
    const { container } = render(
      <MockedProvider mocks={notSignedInMocks}>
        <PleaseSignIn />
      </MockedProvider>
    );

    expect(container).toHaveTextContent(/Sign into your/);
  });

  it('renders the child component when the user is signed in', async () => {
    const Hey = () => <p>Hey!</p>;
    const { container } = render(
      <MockedProvider mocks={signedInMocks}>
        <PleaseSignIn>
          <Hey />
        </PleaseSignIn>
      </MockedProvider>
    );
    await screen.findByText('Hey!');
    expect(container).toContainHTML('<p>Hey!</p>');
  });
});
