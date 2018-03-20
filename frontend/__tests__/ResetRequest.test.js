import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ResetRequest } from '../components/ResetRequest';

const wait = amount => new Promise(resolve => setTimeout(resolve, amount));

describe('<ResetRequest/>', () => {
  it('renders and matches snapshot', () => {
    const wrapper = shallow(<ResetRequest requestReset={() => {}} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('handles the reset request', async () => {
    const resetSpy = jest.fn(() => Promise.resolve({}));
    const wrapper = shallow(<ResetRequest requestReset={resetSpy} />);
    const input = wrapper.find('input[name="email"]');
    input.simulate('change', { target: { name: 'email', value: 'wesbos@gmail.com' } });
    wrapper.simulate('submit', { preventDefault() {} });
    expect(resetSpy).toHaveBeenCalledWith({ variables: { email: 'wesbos@gmail.com' } });
  });

  it('displays errors', async () => {
    const resetSpy = jest.fn(() => Promise.resolve({ errors: [{ message: 'Error!!!' }] }));
    const wrapper = shallow(<ResetRequest requestReset={resetSpy} />);
    const input = wrapper.find('input[name="email"]');
    input.simulate('change', { target: { name: 'email', value: 'wesbos@gmail.com' } });
    wrapper.simulate('submit', { preventDefault() {} });
    await wait(0);
    wrapper.update();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
