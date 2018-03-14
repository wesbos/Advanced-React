import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { CartCount } from '../components/CartCount';

describe('<CartCount></CartCount>', () => {
  it('renders okay', () => {
    shallow(<CartCount count="10" />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<CartCount count="10" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('updates via props', () => {
    const wrapper = mount(<CartCount count="50" />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.setProps({ count: 10 });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
