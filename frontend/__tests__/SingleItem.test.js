import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { SingleItem } from '../components/SingleItem';

const wait = amount => new Promise(resolve => setTimeout(resolve, amount));

const findItem = {
  items: [
    {
      largeImage: 'dog.jpg',
      title: 'Sneakers',
      description: 'A cool set of shoes',
    },
  ],
};

describe('<SingleItem/>', () => {
  it('renders', () => {
    const wrapper = shallow(<SingleItem findItem={findItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
