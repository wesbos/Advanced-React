import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Nav from '../components/Nav';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeUser, fakeOrder } from 'testUtils';
import { CURRENT_USER_QUERY } from '../queries/queries';
import wait from 'waait';
// Mock the router
import Router from 'next/router';

Router.router = { push() {} };

const currentUserLoggedOut = {
  refetch() {},
};

const loggedOutMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    delay: 0,
    result: {
      data: {
        me: null,
      },
    },
  },
];

const loggedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        what: 'yah',
        me: {
          ...fakeUser(),
          orders: [],
          cart: [],
        },
      },
    },
  },
];

describe('<Nav></Nav>', () => {
  it('Renders minimal nav when logged out', () => {
    const wrapper = mount(
      <MockedProvider mocks={loggedOutMocks}>
        <Nav />
      </MockedProvider>
    );
    const nav = wrapper.find('ul[data-test="nav"]');
    expect(toJSON(nav)).toMatchSnapshot();
  });

  it('renders full nav when logged in', async () => {
    const wrapper = mount(
      <MockedProvider mocks={loggedInMocks}>
        <Nav />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    const nav = wrapper.find('ul[data-test="nav"]');
    // account link
    const accountLink = wrapper.find('a[href="/me"]');
    expect(accountLink.length).toBe(1);
  });
});
