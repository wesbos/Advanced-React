import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Router from 'next/router';
import { MockedProvider } from 'react-apollo/test-utils';
import CreateItem from '../components/CreateItem';
import wait from 'waait';
import { fakeItem } from '../lib/testUtils';
import { CREATE_ITEM_MUTATION } from '../queries/queries.graphql';

const dogImage = 'https://dog.com/dog.jpg';

// Mock fetch to resolve data
global.fetch = jest.fn().mockResolvedValue({
  json: () => ({
    secure_url: dogImage,
    eager: [{ secure_url: dogImage }],
  }),
});

describe('<Createitem/>', () => {
  it('renders and matches snapshot', () => {
    const wrapper = mount(
      <MockedProvider>
        <CreateItem />
      </MockedProvider>
    );
    const form = wrapper.find('form[data-test]');
    expect(toJSON(form)).toMatchSnapshot();
  });

  it('uploads a file when changed', async () => {
    const wrapper = mount(
      <MockedProvider>
        <CreateItem />
      </MockedProvider>
    );
    const component = wrapper.find('CreateItem').instance();

    const input = wrapper.find('input[type="file"]');
    // internally this does some setState() calls
    input.simulate('change', { currentTarget: { files: ['fakedog.jpg'] } });
    await wait(0);
    expect(component.state.image).toEqual(dogImage);
    expect(component.state.largeImage).toEqual(dogImage);
  });

  it('handles state updating', async () => {
    const wrapper = mount(
      <MockedProvider>
        <CreateItem />
      </MockedProvider>
    );

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
    const component = wrapper.find('CreateItem').instance();
    expect(component.state).toMatchObject({
      title: 'Testing',
      description: 'This is a really nice item',
      image: '',
      largeImage: '',
      price: 50000,
    });
  });

  it('creates an item when form is submitted', async () => {
    const item = fakeItem();
    const mocks = [
      {
        request: {
          query: CREATE_ITEM_MUTATION,
          variables: {
            title: item.title,
            description: item.description,
            image: '',
            largeImage: '',
            price: item.price,
          },
        },
        result: {
          data: {
            createItem: {
              ...fakeItem(),
              __typeName: 'Item',
            },
          },
        },
      },
    ];

    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <CreateItem />
      </MockedProvider>
    );

    wrapper.find('#title').simulate('change', { target: { value: item.title, name: 'title' } });
    wrapper.find('#price').simulate('change', {
      target: {
        value: item.price,
        name: 'price',
        type: 'number',
      },
    });
    wrapper.find('#description').simulate('change', {
      target: {
        value: item.description,
        name: 'description',
      },
    });

    Router.router = { push: jest.fn() };
    // it submits and matches the mocks
    wrapper.find('form').simulate('submit');
    // it routes to the item page
    await wait(50);
    expect(Router.router.push).toHaveBeenCalled();
    expect(Router.router.push).toHaveBeenCalledWith({ pathname: '/item', query: { id: '123' } });
  });
});
