import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/react-testing';
import Router from 'next/router';
import waait from 'waait';
import CreateProduct, {
  CREATE_PRODUCT_MUTATION,
} from '../components/CreateProduct';
import { fakeItem, makePaginationMocksFor } from '../lib/testUtils';
import { ALL_PRODUCTS_QUERY } from '../components/Products';

jest.mock('next/router', () => ({
  push: jest.fn(),
}));

const item = fakeItem();

describe('<CreateProduct/>', () => {
  it('renders and matches snapshot', async () => {
    const { container } = render(
      <MockedProvider>
        <CreateProduct />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('handles state updating', async () => {
    render(
      <MockedProvider>
        <CreateProduct />
      </MockedProvider>
    );

    await userEvent.type(screen.getByPlaceholderText('Name'), item.name);
    await userEvent.type(
      screen.getByPlaceholderText('Price'),
      item.price.toString()
    );

    await userEvent.type(
      screen.getByPlaceholderText('Description'),
      item.description
    );

    expect(screen.getByDisplayValue(item.name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(item.price.toString())).toBeInTheDocument();
    expect(screen.getByDisplayValue(item.description)).toBeInTheDocument();
    // await waitFor();
  });
  it('creates an item when the form is submitted', async () => {
    const mocks = [
      {
        request: {
          query: CREATE_PRODUCT_MUTATION,
          variables: {
            name: item.name,
            description: item.description,
            image: '',
            price: item.price,
          },
        },
        result: {
          data: {
            createProduct: {
              ...item,
              id: 'abc123',
              __typename: 'Item',
            },
          },
        },
      },
      // All Products
      {
        request: {
          query: ALL_PRODUCTS_QUERY,
          variables: {
            skip: 0,
            first: 4,
          },
        },
        result: {
          data: {
            allProducts: [item],
          },
        },
      },
      ...makePaginationMocksFor(2),
    ];

    const { container } = render(
      <MockedProvider mocks={mocks}>
        <CreateProduct />
      </MockedProvider>
    );
    await userEvent.type(screen.getByPlaceholderText('Name'), item.name);

    await userEvent.clear(screen.getByPlaceholderText('Price'));
    await userEvent.type(
      screen.getByPlaceholderText('Price'),
      item.price.toString()
    );
    await userEvent.type(
      screen.getByPlaceholderText('Description'),
      item.description
    );
    // mock the router
    await userEvent.click(screen.getByText('Submit'));
    await waitFor(() => waait(500));
    expect(Router.push).toHaveBeenCalled();
    expect(Router.push).toHaveBeenCalledWith({
      pathname: '/product/abc123',
    });
  });
});
