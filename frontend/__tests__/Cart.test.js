import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Cart } from '../components/Cart';

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
    const wrapper = shallow(<Cart currentUser={currentUser} />);
  });

  xit('opens', () => {
    const wrapper = shallow(<Cart currentUser={currentUser} />);
    expect('wes').toEqual('figure out how to call test context');
  });
  // it('renders', () => {
  //   shallow(<Cart currentUser={currentUserLoggedOut} />);
  // });
});
