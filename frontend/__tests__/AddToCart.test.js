import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ApolloConsumer } from 'react-apollo';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import AddToCart, { ADD_TO_CART_MUTATION } from '../components/AddToCart';
import { fakeCartItem, fakeUser } from '../lib/testUtils';
import { CURRENT_USER_QUERY } from '../components/User';

const mocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: {
          ...fakeUser(),
          cart: [],
        },
      },
    },
  },
  {
    request: { query: ADD_TO_CART_MUTATION, variables: { id: 'abc123' } },
    result: {
      data: {
        addToCart: {
          ...fakeCartItem(),
          quantity: 1,
        },
      },
    },
  },
];

describe('<AddtoCart/>', () => {
  it('renders and matches snapshot', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <AddToCart id="abc123" />
      </MockedProvider>
    );
    await wait();
    wrapper.update();

    expect(toJSON(wrapper.find('button'))).toMatchSnapshot();
  });

  it('adds an item to the cart when clicked', async () => {
    // 1. Grab a copy of the current client
    let apolloClient;
    // const wrapper = mountWithApollo(<RemoveFromCart id="abc123" />);
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <ApolloConsumer>
          {client => {
            apolloClient = client;
            return <AddToCart id="abc123" />;
          }}
        </ApolloConsumer>
      </MockedProvider>
    );
    await wait();
    wrapper.update();

    const { me } = apolloClient.readQuery({ query: CURRENT_USER_QUERY });
    expect(me.cart).toHaveLength(0);

    // add to cart
    wrapper.find('button').simulate('click');
    await wait();
    // check if the item is in the cart
    const { me: me2 } = apolloClient.readQuery({ query: CURRENT_USER_QUERY });

    expect(me2.cart).toHaveLength(1);
    expect(me2.cart[0].id).toBe('omg123');
    expect(me2.cart[0].quantity).toBe(1);
  });

  it('changes to adding when clicked', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <AddToCart id="abc123" />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect(wrapper.text()).toContain('🛒 Add To Cart');
    wrapper.find('button').simulate('click');
    expect(wrapper.text()).toContain('🛒 Adding To Cart');
  });
});
