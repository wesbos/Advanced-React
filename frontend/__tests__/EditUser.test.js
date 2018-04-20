import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import EditUser from '../components/EditUser';
import { mountWithApollo } from './mockMang';
import wait from 'waait';

const currentUser = {
  me: {
    name: 'Wes Bos',
  },
  refetch() { },
};

describe('<EditUser/>', () => {
  it('renders', async () => {
    const { wrapper, component } = mountWithApollo(<EditUser />);
    await wait();
    wrapper.update();
    expect(toJSON(wrapper.find('Form'))).toMatchSnapshot();
  });

  it('asks you to log in when you arent logged in', () => {
    const wrapper = shallow(<EditUser />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('displays changes', async () => {
    const { wrapper } = mountWithApollo(<EditUser />);
    await wait();
    wrapper.update();
    const nameInput = wrapper.find('[name="name"]');
    nameInput.simulate('change', { target: { name: 'name', value: 'Scott' } });
    const diff = wrapper.find('pre[data-test="change"]');
    expect(diff.text()).toBe('{"name":"Scott"}');
  });

  it('calls update user when form is submitted', async () => {
    const { wrapper } = mountWithApollo(<EditUser />);
    await wait();
    wrapper.update();
    const mutation = wrapper.find('Mutation').instance();
    mutation.client.mutate = jest.fn();
    const nameInput = wrapper.find('[name="name"]');
    nameInput.simulate('change', { target: { name: 'name', value: 'Scott' } });
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    expect(mutation.client.mutate).toHaveBeenCalledWithVariables({ name: 'Scott' });
  });

  it.only('refetches the current user after an update', async () => {
    const { wrapper } = mountWithApollo(<EditUser />);
    await wait();
    wrapper.update();
    const query = wrapper.find('Query').instance();
    const mutation = wrapper.find('Mutation').instance();
    console.log(mutation.props.mutation);
    // wrapper.find('form').simulate('submit', { preventDefault() {} });
    // expect(query.client.reFetchObservableQueries).toHaveBeenCalled();
  });
});
