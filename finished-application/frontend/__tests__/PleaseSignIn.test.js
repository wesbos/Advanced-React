import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import PleaseSignIn from '../components/PleaseSignIn';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeUser } from '../lib/testUtils';
import { CURRENT_USER_QUERY } from '../components/User';

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: null,
      },
    },
  },
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: {
          ...fakeUser(),
          permissions: ['VIEW_HEY'],
        },
      },
    },
  },
];
// some dummy child component
const Hey = () => <p>Hey!</p>;

describe('<PleaseSignIn />', () => {
  it('renders sign in dialog to logged out users', async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <PleaseSignIn allowedPermissions={[]}>
          <Hey />
        </PleaseSignIn>
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    // find the error message
    expect(wrapper.text()).toContain('Please sign in before continuing!');
    // show the sign in dialog
    expect(wrapper.find('Signin').exists()).toBeTruthy();
  });

  it('renders child for correct permissions', async () => {
    const wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <PleaseSignIn allowedPermissions={['ADMIN', 'VIEW_HEY']}>
          <Hey />
        </PleaseSignIn>
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect(wrapper.find('Hey').exists()).toBeTruthy();
  });
  it("renders error when permissions aren't met", async () => {
    const wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <PleaseSignIn allowedPermissions={['ADMIN']}>
          <Hey />
        </PleaseSignIn>
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    // should tell you you can't access it
    expect(wrapper.text()).toContain('Insufficient Permissions');
    // it should not render the child component
    expect(wrapper.find('Hey').exists()).toBeFalsy();
  });
});
