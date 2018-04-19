import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import Order from '../components/Order';
import mountOptions from './mockMang';

describe('<Order/>', () => {
  it('Renders with Proper Data', async () => {
    const wrapper = mount(<Order id="123" />, mountOptions);
    await wait();
    wrapper.update();
    const order = wrapper.find('[data-test="order"]');
    expect(toJSON(order)).toMatchSnapshot();
  });
});
