import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Pagination from '../components/Pagination';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import { fakeItem } from '../lib/testUtils';
import { ALL_ITEMS_QUERY } from '../queries/queries';

import Router from 'next/router';

Router.router = { push() {} };

function makeMocksFor(length) {
  return [
    {
      request: { query: ALL_ITEMS_QUERY, variables: { skip: 0, first: 4 } },
      result: {
        data: {
          itemsConnection: {
            // TODO what are these typenames ????
            __typename: 'aggregate',
            aggregate: {
              count: length,
              __typename: 'count',
            },
          },
          // items: [fakeItem()],
          items: Array.from({ length }, (_, i) => fakeItem({ id: `item${i}` })),
        },
      },
    },
  ];
}

describe('<Pagination/>', () => {
  it('displays loading message', async () => {
    const wrapper = mount(
      <MockedProvider mocks={makeMocksFor(1)}>
        <Pagination page={1} />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect(toJSON(wrapper.find('div[data-test="pagination"]'))).toMatchSnapshot();
  });

  it('renders pagination for 18 items', async () => {
    const wrapper = mount(
      <MockedProvider mocks={makeMocksFor(18)}>
        <Pagination page={1} />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect(wrapper.find('.totalPages').text()).toEqual('5');
  });

  it('disables prev button on first page', async () => {
    const wrapper = mount(
      <MockedProvider mocks={makeMocksFor(18)}>
        <Pagination page={1} />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    // first page
    expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(true);
    expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(false);
  });

  it('disables next button on last page', async () => {
    const wrapper = mount(
      <MockedProvider mocks={makeMocksFor(18)}>
        <Pagination page={5} />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    // first page
    expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(false);
    expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(true);
  });

  it('enables all buttons on a middle page', async () => {
    const wrapper = mount(
      <MockedProvider mocks={makeMocksFor(18)}>
        <Pagination page={2} />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    // first page
    expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(false);
    expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(false);
  });
});
