import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { CreateItem } from '../components/CreateItem';

// Wait func
const wait = amount => new Promise(resolve => setTimeout(resolve, amount));

const dogImage = 'https://dog.com/dog.jpg';

// Mock fetch to resolve data
global.fetch = jest.fn().mockResolvedValue({
  json: () => ({
    secure_url: dogImage,
    eager: [{ secure_url: dogImage }],
  }),
});

const fakeItem = {
  title: 'Testing',
  description: 'This is a really nice item',
  image: dogImage,
  largeImage: dogImage,
  price: 50000,
};

describe('<Createitem/>', () => {
  it('renders the form out', () => {
    const createItemMutation = jest.fn();
    const wrapper = shallow(<CreateItem createItemMutation={createItemMutation} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('uploads a file when changed', async () => {
    const createItemMutation = jest.fn();
    const wrapper = shallow(<CreateItem createItemMutation={createItemMutation} />);

    const input = wrapper.find('input[type="file"]');
    // internally this does some setState() calls
    input.simulate('change', { currentTarget: { files: ['fakedog.jpg'] } });
    await wait(0);
    expect(wrapper.state('image')).toEqual(dogImage);
    expect(wrapper.state('largeImage')).toEqual(dogImage);
  });

  it('handles state updating', async () => {
    const createItemMutation = jest.fn();
    const wrapper = shallow(<CreateItem createItemMutation={createItemMutation} />);

    wrapper.find('#title').simulate('change', { target: { value: 'Testing', name: 'title' } });
    wrapper.find('#price').simulate('change', {
      target: {
        value: 50000,
        name: 'price',
        type: 'number',
      },
    });
    wrapper.find('#description').simulate('change', {
      target: {
        value: 'This is a really nice item',
        name: 'description',
      },
    });
    expect(wrapper.state().item).toMatchObject({
      title: 'Testing',
      description: 'This is a really nice item',
      image: '',
      largeImage: '',
      price: 50000,
    });
  });

  it('creates an item with all the inputs', () => {
    const createItemMutation = jest.fn(() => Promise.resolve({}));
    const wrapper = shallow(<CreateItem createItemMutation={createItemMutation} />);
    wrapper.setState({ item: fakeItem });
    const form = wrapper.find('Form');
    // console.log(form.debug());
    form.simulate('submit', {
      preventDefault() {},
    });
    expect(createItemMutation).toHaveBeenCalled();
    expect(createItemMutation).toHaveBeenCalledWith({ variables: fakeItem });
  });
});
