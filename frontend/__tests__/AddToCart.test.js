import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AddToCart from '../components/AddToCart';
import mountOptions from './testUtils';

describe('<AddtoCart/>', () => {
  it('renders and matches snapshot', () => {
    const wrapper = mount(<AddToCart id="abc123" />, mountOptions);
    expect(toJSON(wrapper.find('button'))).toMatchSnapshot();
  });

  it('adds an item to the cart', () => {
    const wrapper = mount(<AddToCart id="abc123" />, mountOptions);
    const mutation = wrapper.find('Mutation').instance();
    mutation.client.mutate = jest.fn().mockResolvedValue(null);
    wrapper.simulate('click');
    // check that it was called
    expect(mutation.client.mutate).toHaveBeenCalled();
    // check that it was called with the correct ID
    expect(mutation.client.mutate).toHaveBeenCalledWithVariables({ id: 'abc123' });
  });

  it('changes to adding when clicked', () => {
    const wrapper = mount(<AddToCart id="abc123" />, mountOptions);
    const button = wrapper.find('button');
    expect(button.text()).toContain('Add To Cart');
    button.simulate('click');
    expect(button.text()).toContain('Adding To Cart');
  });
});
