import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import Signup from '../components/Signup';
import { MockedProvider } from 'react-apollo/test-utils';
import { LocalStorageMock, fakeItem, fakeUser, fakeCartItem } from '../lib/testUtils';
import { SIGNUP_MUTATION, CURRENT_USER_QUERY } from '../queries/queries';

function type(wrapper, name, value) {
  wrapper.find(`input[name="${name}"]`).simulate('change', {
    target: {
      name,
      value,
    },
  });
}
const me = fakeUser();
const mocks = [
  {
    request: {
      query: SIGNUP_MUTATION,
      variables: {
        email: me.email,
        name: me.name,
        password: 'wes',
      },
    },
    result: {
      data: {
        signup: {
          __typename: 'AuthPayload',
          token: 'tok123',
          user: {
            __typename: 'User',
            id: 'abc123',
            email: me.email,
            name: me.name,
          },
        },
      },
    },
  },
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: {
          __typename: 'User',
          ...me,
          cart: [],
        },
      },
    },
  },
];

describe('<Signup/>', () => {
  beforeAll(() => {
    // mock localStorage
    global.localStorage = new LocalStorageMock();
  });

  it('renders and matches snapshot', () => {
    const wrapper = mount(
      <MockedProvider>
        <Signup />
      </MockedProvider>
    );
    expect(toJSON(wrapper.find('form'))).toMatchSnapshot();
  });

  it('calls mutation with correct data', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Signup />
      </MockedProvider>
    );

    await wait();
    wrapper.update();

    type(wrapper, 'name', me.name);
    type(wrapper, 'email', me.email);
    type(wrapper, 'password', 'wes');

    wrapper.update();
    wrapper.find('form').simulate('submit');

    await wait();
    expect(localStorage.getItem('token')).toBe('tok123');
  });
});
