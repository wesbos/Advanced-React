import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { EditUser } from '../components/EditUser';

const wait = amount => new Promise(resolve => setTimeout(resolve, amount));

const currentUser = {
  me: {
    name: 'Wes Bos',
  },
  refetch() {},
};

describe('<EditUser/>', () => {
  it('renders', () => {
    const wrapper = shallow(<EditUser currentUser={currentUser} updateUser={() => {}} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('asks you to log in when you arent logged in', () => {
    const wrapper = shallow(<EditUser currentUser={{}} updateUser={() => {}} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('displays changes', () => {
    const wrapper = shallow(<EditUser currentUser={currentUser} updateUser={() => {}} />);
    const nameInput = wrapper.find('[name="name"]');
    nameInput.simulate('change', { target: { name: 'name', value: 'Scott' } });
    const diff = wrapper.find('pre[data-test="change"]');
    expect(diff.text()).toBe('{"name":"Scott"}');
  });

  it('calls update user when form is submitted', () => {
    const updateUserSpy = jest.fn();
    const wrapper = shallow(<EditUser currentUser={currentUser} updateUser={updateUserSpy} />);
    const nameInput = wrapper.find('[name="name"]');
    nameInput.simulate('change', { target: { name: 'name', value: 'Scott' } });
    wrapper.simulate('submit', { preventDefault() {} });
    expect(updateUserSpy).toHaveBeenCalledWith({ variables: { name: 'Scott' } });
  });

  it('refetches the current user after an update', async () => {
    const currentUserWithSpy = {
      me: { name: 'wes' },
      refetch: jest.fn(),
    };
    const wrapper = shallow(<EditUser currentUser={currentUserWithSpy} updateUser={() => {}} />);
    wrapper.simulate('submit', { preventDefault() {} });
    await wait(0);
    expect(currentUserWithSpy.refetch).toHaveBeenCalled();
  });
});
