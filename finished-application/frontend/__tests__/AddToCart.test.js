import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/react-testing';
import { ApolloConsumer } from '@apollo/client';
import waait from 'waait';
import AddToCart, { ADD_TO_CART_MUTATION } from '../components/AddToCart';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser, fakeCartItem } from '../lib/testUtils';

const mocks = [
  // First time no items
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        authenticatedItem: {
          __typename: 'User',
          ...fakeUser(),
          cart: [],
        },
      },
    },
  },
  // Second Time, 1 item
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        authenticatedItem: {
          __typename: 'User',
          ...fakeUser(),
          cart: [fakeCartItem()],
        },
      },
    },
  },
  {
    request: { query: ADD_TO_CART_MUTATION, variables: { id: 'abc123' } },
    result: {
      data: {
        addToCart: {
          ...fakeCartItem(),
          quantity: 1,
        },
      },
    },
  },
];

describe('<AddToCart/>', () => {
  it('renders and matches the snap shot', async () => {
    const { container } = render(
      <MockedProvider mocks={mocks}>
        <AddToCart id="abc123" />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('adds an item to cart when clicked', async () => {
    // Here I show you how to reach directly into the apollo cache to test the data. This is against react-testing-library's whole ethos but I'm gonna show you anyway because sometimes you just gotta do it
    let apolloClient;
    const { container } = render(
      <MockedProvider mocks={mocks}>
        <ApolloConsumer>
          {(client) => {
            apolloClient = client;
            return <AddToCart id="abc123" />;
          }}
        </ApolloConsumer>
      </MockedProvider>
    );
    // check that the cart is empty to start
    const {
      data: { authenticatedItem: me },
    } = await apolloClient.query({ query: CURRENT_USER_QUERY });
    expect(me.cart).toHaveLength(0);
    // Click the button
    userEvent.click(screen.getByText(/Add To Cart/));
    // it should be in loading state
    expect(container).toHaveTextContent(/Adding to Cart/i);
    // wait until we come back from loading state
    await screen.findByText(/Add To Cart/i);
    await waitFor(() => waait()); // wait for next tick, weird apollo event loop thing
    // check if the item is in the cart
    const {
      data: { authenticatedItem: me2 },
    } = await apolloClient.query({ query: CURRENT_USER_QUERY });
    expect(me2.cart).toHaveLength(1);
    expect(me2.cart[0].id).toBe('omg123');
    expect(me2.cart[0].quantity).toBe(3);
  });
});
