import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import Order, { SINGLE_ORDER_QUERY } from '../components/Order';
import { fakeOrder } from '../lib/testUtils';

const order = fakeOrder();
const mocks = [
  {
    request: { query: SINGLE_ORDER_QUERY, variables: { id: 'ord123' } },
    result: { data: { Order: order } },
  },
];

describe('<Order/>', () => {
  it('renders the order', async () => {
    const { container } = render(
      <MockedProvider
        mocks={mocks}
        // Not sure why we need this, but it fixes it. https://github.com/apollographql/apollo-client/issues/7081
        defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}
      >
        <Order id="ord123" />
      </MockedProvider>
    );
    await screen.findByTestId('order');
    expect(container).toMatchSnapshot();
  });
});
