import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import SingleItem, { SINGLE_ITEM_QUERY } from '../components/SingleItem';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeItem, fakeUser } from '../lib/testUtils';
import { CURRENT_USER_QUERY } from '../components/User';

const data = {
  items: [fakeItem()],
};

describe('<SingleItem/>', () => {
  it('Renders with Proper Data', async () => {
    const mocks = [
      {
        request: { query: SINGLE_ITEM_QUERY, variables: { id: '123' } },
        result: { data },
      },
      {
        request: { query: CURRENT_USER_QUERY },
        result: { data: { me: fakeUser() } },
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <SingleItem id="123" />
      </MockedProvider>
    );
    // Check for loading state
    expect(wrapper.text()).toContain('Loading...');

    // wait for response and refresh
    await wait(55);
    wrapper.update();
    // Grab the piece we want
    expect(toJSON(wrapper.find('h2'))).toMatchSnapshot();
    expect(toJSON(wrapper.find('img'))).toMatchSnapshot();
    expect(toJSON(wrapper.find('p'))).toMatchSnapshot();
  });

  it('Errors with a not found Item', async () => {
    const mocks = [
      {
        request: { query: SINGLE_ITEM_QUERY, variables: { id: '123' } },
        delay: 50,
        // we can return data and an error
        result: { data, errors: [{ message: 'Item not found!' }] },
        // or just an error!
        // error: new Error('offline!'),
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <SingleItem id="123" />
      </MockedProvider>
    );

    // wait for response
    await wait(55);
    wrapper.update();

    const Item = wrapper.find('[data-test="graphql-error"]');
    expect(toJSON(Item)).toMatchSnapshot();
  });
});
