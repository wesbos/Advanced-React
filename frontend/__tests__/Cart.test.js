import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import mountOptions from '../lib/testUtils';
import wait from 'waait';
import Cart from '../components/Cart';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeOrder } from '../lib/testUtils';
import { LOCAL_STATE_QUERY } from '../queries/queries';

const mocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: {
          ...fakeUser(),
          cart: fakeCart(),
        },
      },
    },
  },
];

describe('<Cart/>', () => {
  // TODO fix this one
  expect('wes').toBe('fixed');
  it('renders', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Cart />
      </MockedProvider>
    );
    console.log(wrapper.debug());
    // await wait();
    // wrapper.update();
    // expect(toJSON(wrapper.find('header'))).toMatchSnapshot();
    // expect(wrapper.find('CartItem')).toHaveLength(2);
  });
});
