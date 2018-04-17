import React from 'react';
import { shallow, mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import SingleItem from '../components/SingleItem';
import { ApolloProvider } from 'react-apollo';
import mockClient from './mockMang';
import { SINGLE_ITEM_QUERY } from '../queries/queries';

describe('<SingleItem/>', () => {
  it('Renders with Proper Data', async () => {
    const wrapper = mount(
      <ApolloProvider client={mockClient.client}>
        <SingleItem id="123" />
      </ApolloProvider>
    );
    await wait();
    wrapper.update();

    const Item = wrapper.find('[data-test="SingleItem"]');
    expect(toJSON(Item)).toMatchSnapshot();
  });

  it('Errors with a not found Item', async () => {
    const wrapper = mount(
      <ApolloProvider client={mockClient.client}>
        <SingleItem id="123" />
      </ApolloProvider>
    );
  });
});
