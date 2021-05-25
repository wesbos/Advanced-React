import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import waait from 'waait';
import Nav from '../components/Nav';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser, fakeCartItem } from '../lib/testUtils';
import { CartStateProvider } from '../components/LocalState';

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

const signedInMocksWithCartItems = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        authenticatedItem: {
          // This typename must be explicit because we use the `... on User` fragment
          __typename: 'User',
          ...fakeUser(),
          cart: [fakeCartItem()],
        },
      },
    },
  },
];

describe('<Nav/>', () => {
  it('renders a minimal nav when signed out', async () => {
    const { container } = render(
      <CartStateProvider>
        <MockedProvider mocks={notSignedInMocks}>
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders full nav when signed in', async () => {
    const { container } = render(
      <CartStateProvider>
        <MockedProvider
          mocks={signedInMocks}
          defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}
        >
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );
    await screen.findByText('Account');
    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('Sign Out');
    expect(container).toHaveTextContent('My Cart');
  });

  it('renders the amount of items in the cart', async () => {
    render(
      <CartStateProvider>
        <MockedProvider
          mocks={signedInMocksWithCartItems}
          defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}
        >
          <Nav />
        </MockedProvider>
      </CartStateProvider>
    );
    await screen.findByText('Account');
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
