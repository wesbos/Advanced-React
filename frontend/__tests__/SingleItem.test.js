import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import SingleItem from '../components/SingleItem';
import mountOptions from './mockMang';

describe('<SingleItem/>', () => {
  it('Renders with Proper Data', async () => {
    const wrapper = mount(<SingleItem id="123" />, mountOptions);
    await wait();
    wrapper.update();

    const Item = wrapper.find('[data-test="SingleItem"]');
    expect(toJSON(Item)).toMatchSnapshot();
  });

  xit('Errors with a not found Item', async () => {
    const wrapper = mount(<SingleItem id="123" />, mountOptions);
  });
});
