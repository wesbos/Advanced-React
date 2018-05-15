import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import EditUser from '../components/EditUser';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeUser } from '../lib/testUtils';
import { CURRENT_USER_QUERY, UPDATE_USER_MUTATION } from '../queries/queries.graphql';

const mocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: fakeUser(),
      },
    },
  },
  {
    request: {
      query: UPDATE_USER_MUTATION,
      variables: {
        name: 'Westopher',
      },
    },
    result: {
      updateUser: {
        name: 'Westopher',
        __typename: 'User',
      },
    },
  },
];

describe('<EditUser/>', () => {
  it('renders', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <EditUser />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect(toJSON(wrapper.find('form'))).toMatchSnapshot();
  });

  it('displays changes', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <EditUser />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    const nameInput = wrapper.find('[name="name"]');
    nameInput.simulate('change', { target: { name: 'name', value: 'Scott' } });
    const diff = wrapper.find('pre[data-test="change"]');
    expect(diff.text()).toBe('{"name":"Scott"}');
  });

  it('calls update user when form is submitted', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <EditUser />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    const nameInput = wrapper.find('[name="name"]');
    nameInput.simulate('change', { target: { name: 'name', value: 'Westopher' } });
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('[data-test="updated"]').text()).toBe('Updated!');
  });
});
