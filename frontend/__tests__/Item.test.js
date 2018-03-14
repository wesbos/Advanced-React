/* eslint-env jest */

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ItemComponent } from '../components/Item';

const fakeItem = {
  id: 'ABC123',
  title: 'A Cool Item',
  price: 5000,
  description: 'This item is really cool!',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg',
};

describe('<Item/>', () => {
  it('Renders an item', () => {
    const removeItem = jest.fn();
    const wrapper = shallow(<ItemComponent item={fakeItem} removeItem={removeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  it('handles button clicks', async () => {
    const removeItem = jest.fn();
    global.confirm = jest.fn().mockReturnValue(true);
    const wrapper = shallow(<ItemComponent item={fakeItem} removeItem={removeItem} />);
    wrapper.find('button').simulate('click');
    expect(removeItem).toHaveBeenCalled();
    expect(global.confirm).toHaveBeenCalled();
  });
});
