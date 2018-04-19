import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AddToCart } from '../components/AddToCart';

const currentUser = {
  me: {},
  refetch() {},
};

describe('<AddtoCart/>', () => {
  it('renders and matches snapshot', () => {
    const wrapper = shallow(
      <AddToCart id="abc123" addToCart={() => {}} currentUser={currentUser} />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('adds an item to the cart', () => {
    const addToCart = jest.fn(() => Promise.resolve());
    const wrapper = shallow(
      <AddToCart id="abc123" addToCart={addToCart} currentUser={currentUser} />
    );
    wrapper.simulate('click');
    expect(addToCart).toHaveBeenCalled();
    expect(addToCart).toHaveBeenCalledWith({ variables: { id: 'abc123' } });
  });
});
