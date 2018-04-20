import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ApolloConsumer } from 'react-apollo';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import RemoveFromCart from '../components/RemoveFromCart';
import { mountWithApollo, fakeCartItem, fakeUser } from './mockMang';
import { CURRENT_USER_QUERY, REMOVE_FROM_CART_MUTATION } from '../queries/queries';

const mocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: {
          ...fakeUser(),
          cart: [fakeCartItem({ id: 'abc123' })],
          orders: [],
        },
      },
    },
  },
  {
    request: {
      // This is the mutation
      query: REMOVE_FROM_CART_MUTATION,
      variables: { id: 'abc123' },
    },
    result: { data: { removeFromCart: { id: 'abc123' } } },
  },
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: { name: 'hi', cart: [], permissions: [], orders: [], id: 22, email: 'jame@apollo.com' },
      },
    },
  },
];

describe('<RemoveFromCart/>', () => {
  it('renders and matches snapshot', () => {
    const wrapper = mountWithApollo(<RemoveFromCart id="123" />);
    expect(toJSON(wrapper.find('button'))).toMatchSnapshot();
  });

  fit('removes an item from the cart', async () => {
    // 1. Grab a copy of the current client
    let apolloClient;
    // const wrapper = mountWithApollo(<RemoveFromCart id="abc123" />);
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <ApolloConsumer>
          {client => {
            apolloClient = client;
            return <RemoveFromCart id="abc123" />;
          }}
        </ApolloConsumer>
      </MockedProvider>
    );
    // Fire Off that first mock
    await apolloClient.query({ query: CURRENT_USER_QUERY });
    // check if it worked
    const { me } = apolloClient.readQuery({ query: CURRENT_USER_QUERY });
    expect(me.cart).toHaveLength(1);

    // simulate a click, which will fire REMOVE_FROM_CART mock
    wrapper.find('button').simulate('click');
    await wait();
    const { me: me2 } = apolloClient.readQuery({ query: CURRENT_USER_QUERY });
    // console.log('----------');
    // console.log(me2);
    // console.log('----------');
    expect(me2.cart).toHaveLength(0);
    // await wait(2);
    // // the updated query from the mutation update
    // await apollo.query({ query: CURRENT_USER_QUERY, fetchPolicy: 'cache-only' })

    // // sync
    // const user = apollo.readQuery({ query: CURRENT_USER_QUERY })
  });
});
