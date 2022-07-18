import { MockedProvider } from '@apollo/react-testing';
import { render, screen } from '@testing-library/react';
import SingleProduct, { SINGLE_ITEM_QUERY } from '../components/SingleProduct';
import { fakeItem } from '../lib/testUtils';

const product = fakeItem();

const mocks = [
  {
    // When someone requests this query and variable combo
    request: { query: SINGLE_ITEM_QUERY, variables: { id: '123' } },
    // returns this data
    result: { data: { Product: product } },
  },
];

describe('<SingleProduct >', () => {
  it('renders with proper data ', async () => {
    // we need to make some fake data
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SingleProduct id="123" />
      </MockedProvider>
    );

    debug();

    // findByTestId is asyncronous - we can await to for the item to be displayed
    await screen.findByTestId('singleProduct');

    expect(container).toMatchSnapshot();
  });
  it('Errors out when an item isnt found ', async () => {
    const errorMock = [
      {
        request: { query: SINGLE_ITEM_QUERY, variables: { id: '123' } },
        result: { errors: [{ message: 'Item not found!!!' }] },
      },
    ];

    // we need to make some fake data
    const { container, debug } = render(
      <MockedProvider mocks={errorMock}>
        <SingleProduct id="123" />
      </MockedProvider>
    );

    await screen.findByTestId('graphql-error');
    debug();

    expect(container).toHaveTextContent('Shoot!');
    expect(container).toHaveTextContent('Item not found!!!');
  });
});
