import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import Signup from '../components/Signup';
import mountOptions from './mockMang';

function type(wrapper, name, value) {
  wrapper.find(`input[name="${name}"]`).simulate('change', {
    target: {
      name,
      value,
    },
  });
}

describe('<Signup/>', () => {
  beforeAll(() => {
    // mock localStorage
    global.localStorage = {
      setItem: jest.fn(),
    };
  });

  it('renders and matches snapshot', () => {
    const wrapper = mount(<Signup />, mountOptions);
    expect(toJSON(wrapper.find('form'))).toMatchSnapshot();
  });

  it('calls mutation with correct data', async () => {
    const wrapper = mount(<Signup />, mountOptions);
    const mutation = wrapper.find('Mutation').instance();
    mutation.client.mutate = jest.fn().mockResolvedValue({
      data: { signup: { token: 'omg123' } },
    });

    const expected = {
      name: 'Randy',
      email: 'Randy@randymail.net',
      password: 'pupsrock',
    };

    type(wrapper, 'name', expected.name);
    type(wrapper, 'email', expected.email);
    type(wrapper, 'password', expected.password);

    wrapper.simulate('submit');

    expect(mutation.client.mutate).toHaveBeenCalled();
    expect(mutation.client.mutate).toHaveBeenCalledWithVariables(expected);
    await wait();
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'omg123');
  });
});
