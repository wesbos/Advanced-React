import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import Router from 'next/router';
import Nav from '../components/Nav';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeUser } from '../lib/testUtils';
import { CURRENT_USER_QUERY } from '../components/User';

// Mock the router
Router.router = { push() {} };

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
