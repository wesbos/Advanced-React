import { render, screen, waitFor } from '@testing-library/react';
import waait from 'waait';
import { MockedProvider } from '@apollo/react-testing';
import userEvent from '@testing-library/user-event';
import { useStripe } from '@stripe/react-stripe-js';
import Router from 'next/router';
import Checkout, { CREATE_ORDER_MUTATION } from '../components/Checkout';
import { CartStateProvider } from '../components/LocalState';
import { CURRENT_USER_QUERY } from '../components/User';
// Mock the Router
jest.mock('next/router', () => ({
  push: jest.fn(),
}));

// Mock Stripe js
jest.mock('@stripe/react-stripe-js', () => ({
  CardElement: ({ children }) => <div>{children}</div>,
  Elements: ({ children }) => <div>{children}</div>,
  useStripe: jest.fn().mockReturnValue({
    createPaymentMethod: jest
      .fn()
      .mockResolvedValue({ paymentMethod: 'abc123' }),
  }),
  useElements: jest.fn().mockReturnValue({
    getElement: jest.fn(),
  }),
}));

const mocks = [
  {
    request: { query: CREATE_ORDER_MUTATION },
    result: {
      data: {
        checkout: { id: 'ord123' },
      },
    },
  },
  {
    request: { query: CURRENT_USER_QUERY },
    result: {},
  },
];

describe('<Checkout />', () => {
  // Mock Stripe create Payment Method
  it('renders and matches snappy', async () => {
    const { container } = render(
      <CartStateProvider>
        <MockedProvider>
          <Checkout />
        </MockedProvider>
      </CartStateProvider>
    );

    await screen.findByTestId('checkout');
    expect(container).toMatchSnapshot();
  });

  it('submits the form properly', async () => {
    const { container } = render(
      <CartStateProvider>
        <MockedProvider mocks={mocks}>
          <Checkout />
        </MockedProvider>
      </CartStateProvider>
    );
    await screen.findByTestId('checkout');
    await userEvent.click(screen.getByText(/Pay/i));
    // / wait for checking you out text
    await screen.findByText(/checking/i);
    await waitFor(() => waait());
    const stripe = useStripe();
    expect(stripe.createPaymentMethod).toHaveBeenCalled();
    expect(stripe.createPaymentMethod).toHaveBeenCalledWith({
      card: undefined,
      type: 'card',
    });
    expect(Router.push).toHaveBeenCalled();
    expect(Router.push).toHaveBeenCalledWith({
      pathname: '/order',
      query: { id: 'ord123' },
    });
    await waitFor(() => waait());
  });
});
