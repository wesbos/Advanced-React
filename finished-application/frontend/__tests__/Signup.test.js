import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import { ApolloConsumer } from 'react-apollo';
import { MockedProvider } from 'react-apollo/test-utils';
import Signup, { SIGNUP_MUTATION } from '../components/Signup';
import { fakeUser } from '../lib/testUtils';
import { CURRENT_USER_QUERY } from '../components/User';

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
          __typename: 'User',
          id: 'abc123',
          email: me.email,
          name: me.name,
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
  it('renders and matches snapshot', () => {
    const wrapper = mount(
      <MockedProvider>
        <Signup />
      </MockedProvider>
    );
    expect(toJSON(wrapper.find('form'))).toMatchSnapshot();
  });

  it('calls mutation with correct data', async () => {
    let apolloClient;
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <ApolloConsumer>
          {client => {
            apolloClient = client;
            return <Signup />;
          }}
        </ApolloConsumer>
      </MockedProvider>
    );

    await wait();
    wrapper.update();

    type(wrapper, 'name', me.name);
    type(wrapper, 'email', me.email);
    type(wrapper, 'password', 'wes');

    wrapper.update();
    wrapper.find('form').simulate('submit');

    const user = await apolloClient.query({ query: CURRENT_USER_QUERY });
    expect(user.data.me).toMatchObject(me);
  });
});
