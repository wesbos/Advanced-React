import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import SingleItem from '../components/SingleItem';
import { SINGLE_ITEM_QUERY } from '../queries/queries';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeItem } from './testUtils';

const data = {
  items: [fakeItem()],
};

describe('<SingleItem/>', () => {
  it('Renders with Proper Data', async () => {
    const mocks = [
      {
        request: { query: SINGLE_ITEM_QUERY, variables: { id: '123' } },
        delay: 50,
        result: { data },
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
    const Item = wrapper.find('[data-test="SingleItem"]');
    // snapshot it!
    expect(toJSON(Item)).toMatchSnapshot();
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
    console.log(Item.debug());
    expect(toJSON(Item)).toMatchSnapshot();
  });
});
