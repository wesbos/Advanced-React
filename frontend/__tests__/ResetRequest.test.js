import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ApolloProvider } from 'react-apollo';
import ResetRequest from '../components/ResetRequest';
import mountOptions from './mockMang';

describe('<ResetRequest/>', () => {
  it('renders and matches snapshot', async () => {
    const wrapper = mount(<ResetRequest />, mountOptions);
    const Form = wrapper.find("Form[data-test='ResetRequest']");
    expect(toJSON(Form)).toMatchSnapshot();
  });

  it('calls the mutation', async () => {
    const wrapper = mount(<ResetRequest />, mountOptions);
    const mutation = wrapper.find('Mutation').instance();
    const input = wrapper.find('input[name="email"]');
    input.simulate('change', { target: { name: 'email', value: 'wesbos@gmail.com' } });
    // Create a spy function on mutate
    mutation.client.mutate = jest.fn();
    mutation.forceUpdate();
    wrapper.find('Form').simulate('submit');
    expect(mutation.client.mutate.mock.calls[0][0].variables).toEqual({
      email: 'wesbos@gmail.com',
    });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders errors', () => {
    const wrapper = mount(<ResetRequest />, mountOptions);
    const mutation = wrapper.find('Mutation').instance();
    mutation.setState({ error: { message: 'Shit!' } });
    wrapper.update();
    const error = wrapper.find('DisplayError');
    expect(error).toHaveLength(1);
    expect(toJSON(error)).toMatchSnapshot();
  });
});
