import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CartItem from '../components/CartItem';

const cartItem = {
  item: {
    price: 5000,
    image: 'dog.jpg',
    title: 'Fake Item',
  },
  id: 'abc123',
  quantity: 20,
};

describe('<CartItem>', () => {
  it('renders and matches snapshot', () => {
    const wrapper = shallow(<CartItem cartItem={cartItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders a single quantity', () => {
    const wrapper = shallow(<CartItem cartItem={{ ...cartItem, quantity: 1 }} />);
    const p = wrapper.find('p');
    expect(p.text()).toBe('$50 — 1 × $50 each');
  });

  it('renders multiples', () => {
    const wrapper = shallow(<CartItem cartItem={{ ...cartItem, quantity: 23423 }} />);
    const p = wrapper.find('p');
    expect(p.text()).toBe('$1,171,150 — 23423 × $50 each');
  });
});
