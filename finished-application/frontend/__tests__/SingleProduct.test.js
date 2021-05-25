import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/react-testing';
import SingleProduct, {
  SINGLE_PRODUCT_QUERY,
} from '../components/SingleProduct';
import { fakeItem } from '../lib/testUtils';

const item = fakeItem();
describe('<SingleProduct/>', () => {
  it('renders with proper data', async () => {
    const mocks = [
      {
        // when someone makes a request with this query and variable combo
        request: { query: SINGLE_PRODUCT_QUERY, variables: { id: '123' } },
        // return this fake data (mocked data)
        result: {
          data: {
            Product: item,
          },
        },
      },
    ];
    const { container } = render(
      <MockedProvider mocks={mocks}>
        <SingleProduct id="123" />
      </MockedProvider>
    );
    await screen.findByTestId('singleProduct');
    expect(container).toMatchSnapshot();
  });

  it('Errors with a not found item', async () => {
    const mocks = [
      {
        request: { query: SINGLE_PRODUCT_QUERY, variables: { id: '123' } },
        result: {
          errors: [{ message: 'Items Not Found!' }],
        },
      },
    ];
    const { container } = render(
      <MockedProvider mocks={mocks}>
        <SingleProduct id="123" />
      </MockedProvider>
    );

    await screen.findByTestId('graphql-error');
    expect(container).toHaveTextContent('Items Not Found!');
  });
});
