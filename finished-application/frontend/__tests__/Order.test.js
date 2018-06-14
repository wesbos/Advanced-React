import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import Order, { SINGLE_ORDER_QUERY } from '../components/Order';
import { fakeOrder } from '../lib/testUtils';

const mocks = [
  {
    request: { query: SINGLE_ORDER_QUERY, variables: { id: '123' } },
    result: {
      data: {
        order: fakeOrder(),
      },
    },
  },
];

describe('<Order/>', () => {
  it('Renders loading state', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Order id="123" />
      </MockedProvider>
    );
    expect(wrapper.text()).toContain('Loading...');
  });

  it('Renders the order', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Order id="123" />
      </MockedProvider>
    );
    await wait(50);
    wrapper.update();
    const order = wrapper.find('div[data-test="order"]');
    expect(toJSON(order)).toMatchSnapshot();
  });
});
