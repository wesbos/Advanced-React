import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ResetRequest from '../components/ResetRequest';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import { fakeItem } from '../lib/testUtils';
import { REQUEST_RESET_MUTATION, RESET_MUTATION } from '../queries/queries';

const mocks = [
  {
    request: {
      query: REQUEST_RESET_MUTATION,
      variables: {
        email: 'wesbos@gmail.com',
      },
    },
    result: {
      data: {
        requestReset: { id: 'abc123', __typename: 'User' },
      },
    },
  },
];

describe('<ResetRequest/>', () => {
  it('renders and matches snapshot', async () => {
    const wrapper = mount(
      <MockedProvider>
        <ResetRequest />
      </MockedProvider>
    );
    const form = wrapper.find("form[data-test='ResetRequest']");
    expect(toJSON(form)).toMatchSnapshot();
  });

  it('calls the mutation', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <ResetRequest />
      </MockedProvider>
    );

    wrapper.find('input').simulate('change', {
      target: { value: 'wesbos@gmail.com' },
    });

    // submit the form
    wrapper.find('form').simulate('submit');

    await wait();
    wrapper.update();
    expect(wrapper.find('p').text()).toContain('Success! Check Your Email!');
  });

  xit('displays an error', async () => {
    const errorMocks = [
      {
        request: {
          query: REQUEST_RESET_MUTATION,
          variables: {
            email: 'wesbos@gmail.com',
          },
        },
        error: {
          message: 'Shit',
        },
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={errorMocks}>
        <ResetRequest />
      </MockedProvider>
    );

    wrapper.find('input').simulate('change', {
      target: { value: 'wesbos@gmail.com' },
    });

    try {
      wrapper.find('form').simulate('submit');
      await wait();
    } catch (e) {
      console.log('CAUGHT');
      console.log(e);
    }
    // expect(async () => {
    // }).toThrow();

    // wrapper.find('form').simulate('submit');
    wrapper.update();
    console.log(wrapper.debug());
    // expect(wrapper.find('p').text()).toContain('Success! Check Your Email!');
  });
});
