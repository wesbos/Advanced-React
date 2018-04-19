import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import mountOptions from './mockMang';
import wait from 'waait';
import Cart from '../components/Cart';

describe('<Cart/>', () => {
  it('renders', async () => {
    const wrapper = mount(<Cart />, mountOptions);
    await wait();
    wrapper.update();
    expect(toJSON(wrapper.find('header'))).toMatchSnapshot();
    expect(wrapper.find('CartItem')).toHaveLength(2);
  });
});
