import React from 'react';
import toJSON from 'enzyme-to-json';
import RemoveFromCart from '../components/RemoveFromCart';
import { mountWithApollo } from './mockMang';

describe('<RemoveFromCart/>', () => {
  it('renders and matches snapshot', () => {
    const { wrapper } = mountWithApollo(<RemoveFromCart id="123" />);
    expect(toJSON(wrapper.find('button'))).toMatchSnapshot();
  });

  it('runs the mutation with correct variables', () => {
    const { wrapper } = mountWithApollo(<RemoveFromCart id="abc123" />);
    const mutation = wrapper.find('Mutation').instance();
    mutation.client.mutate = jest.fn().mockResolvedValue({ removeFromCart: { id: 'abc123' } });
    wrapper.find('button').simulate('click');
    expect(mutation.client.mutate).toHaveBeenCalled();
    expect(mutation.client.mutate).toHaveBeenCalledWithVariables({ id: 'abc123' });
  });
});
