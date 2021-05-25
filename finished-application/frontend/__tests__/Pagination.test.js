import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import Pagination, { PAGINATION_QUERY } from '../components/Pagination';
import { makePaginationMocksFor } from '../lib/testUtils';

describe('<Pagination/>', () => {
  it('displays a loading message', async () => {
    const { container, queryByText } = render(
      <MockedProvider mocks={makePaginationMocksFor(1)}>
        <Pagination page={1} />
      </MockedProvider>
    );
    expect(queryByText('Loading...')).toBeTruthy();
  });

  it('renders pagination for 18 items', async () => {
    const { container, findByTestId, getByTestId, debug, query } = render(
      <MockedProvider mocks={makePaginationMocksFor(18)}>
        <Pagination page={1} />
      </MockedProvider>
    );
    // wait for pagination to get past loading
    await findByTestId('pagination');
    expect(getByTestId('totalPages')).toHaveTextContent('5');
    expect(container).toMatchSnapshot();
  });

  it('disables prev button on first page', async () => {
    const { getByText, findByTestId } = render(
      <MockedProvider mocks={makePaginationMocksFor(18)}>
        <Pagination page={1} />
      </MockedProvider>
    );
    await findByTestId('pagination');
    expect(getByText(/Prev/)).toHaveAttribute('aria-disabled', 'true');
    expect(getByText(/Next/)).toHaveAttribute('aria-disabled', 'false');
  });

  it('disables next button on last page', async () => {
    const { getByText, findByTestId } = render(
      <MockedProvider mocks={makePaginationMocksFor(18)}>
        <Pagination page={5} />
      </MockedProvider>
    );
    await findByTestId('pagination');
    expect(getByText(/Prev/)).toHaveAttribute('aria-disabled', 'false');
    expect(getByText(/Next/)).toHaveAttribute('aria-disabled', 'true');
  });

  it('enables all buttons on a middle page', async () => {
    const { getByText, findByTestId } = render(
      <MockedProvider mocks={makePaginationMocksFor(18)}>
        <Pagination page={3} />
      </MockedProvider>
    );
    await findByTestId('pagination');
    expect(getByText(/Prev/)).toHaveAttribute('aria-disabled', 'false');
    expect(getByText(/Next/)).toHaveAttribute('aria-disabled', 'false');
  });
});
