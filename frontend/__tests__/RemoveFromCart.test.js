import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import RemoveFromCart from '../components/RemoveFromCart';
import mountOptions from './mockMang';

describe('<RemoveFromCart/>', () => {
  it('renders and matches snapshot', () => {
    const wrapper = shallow(<RemoveFromCart id="abc123" removeFromCart={() => { }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("runs a function when it's clicked", () => {
    const removeSpy = jest.fn();
    const wrapper = shallow(<RemoveFromCart id="abc123" removeFromCart={removeSpy} />);
    wrapper.simulate('click');
    expect(removeSpy).toHaveBeenCalledWith({ variables: { id: 'abc123' } });
  });
});
