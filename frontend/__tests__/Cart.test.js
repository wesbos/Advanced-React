import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Cart } from '../components/Cart';
import { UIProvider } from '../components/UIContext';

const cartItem = {
  item: { price: 5000 },
  quantity: 10,
};

const currentUser = {
  me: {
    cart: [cartItem, cartItem, cartItem],
  },
  refetch() {},
};

describe('<Cart/>', () => {
  it('renders', () => {
    const wrapper = mount(
      <UIProvider>
        <Cart currentUser={currentUser} />
      </UIProvider>
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
