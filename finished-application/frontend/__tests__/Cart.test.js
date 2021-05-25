import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import userEvent from '@testing-library/user-event';
import wait from 'waait';
import Cart from '../components/Cart';
import { CURRENT_USER_QUERY } from '../components/User';
import { REMOVE_FROM_CART_MUTATION } from '../components/RemoveFromCart';
import { fakeUser, fakeCartItem } from '../lib/testUtils';
import { CartStateProvider } from '../components/LocalState';

const mocks = [
  // {
  //   request: { query: CURRENT_USER_QUERY },
  //   result: {
  //     data: {
  //       authenticatedItem: {
  //         __typename: 'User',
  //         ...fakeUser(),
  //         cart: [fakeCartItem()],
  //       },
  //     },
  //   },
  // },
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        authenticatedItem: {
          ...fakeUser(),
          cart: [fakeCartItem(), fakeCartItem({ id: 'haha123' })],
        },
      },
    },
  },
  {
    request: { query: REMOVE_FROM_CART_MUTATION, variables: { id: 'omg123' } },
    result: {
      data: {
        deleteCartItem: { id: 'omg123' },
      },
    },
  },
];

describe('<Cart/>', () => {
  it('renders and matches snappy', async () => {
    const { container } = render(
      <CartStateProvider>
        <MockedProvider mocks={mocks}>
          <Cart />
        </MockedProvider>
      </CartStateProvider>
    );
    await screen.findByTestId('cart');
    expect(container).toMatchSnapshot();
  });
});

describe('<RemoveFromCart/>', () => {
  it('updates when an item is removed', async () => {
    const { container } = render(
      <CartStateProvider>
        <MockedProvider
          mocks={mocks}
          // defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}
        >
          <Cart />
        </MockedProvider>
      </CartStateProvider>
    );
    await screen.findByTestId('cart');
    expect(container).toHaveTextContent(/You have 2 items/i);
    const deleteButtons = screen.getAllByTitle(/Remove Item/i);
    expect(deleteButtons).toHaveLength(2);
    userEvent.click(deleteButtons[0]);
    await waitFor(() => wait());
    const deleteButtonsUpdated = screen.getAllByTitle(/Remove Item/i);
    expect(container).toHaveTextContent(/You have 1 item/i);
    expect(deleteButtonsUpdated).toHaveLength(1);
  });
});

export { mocks };
