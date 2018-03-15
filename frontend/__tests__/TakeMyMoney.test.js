import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NProgress from 'nprogress';
import { TakeMyMoney } from '../components/TakeMyMoney';
import Router from 'next/router';

const wait = amount => new Promise(resolve => setTimeout(resolve, amount));

Router.router = { push() {} };

const cartItem = {
  item: { price: 5000 },
  quantity: 10,
};

const currentUser = {
  me: {
    cart: [cartItem, cartItem, cartItem],
  },
  refetch() {},
};

describe('<TakeMyMoney />', () => {
  it('renders', () => {
    const wrapper = shallow(<TakeMyMoney createOrder={() => {}} currentUser={currentUser} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('creates an order onToken', () => {
    const createOrderSpy = jest.fn(() => Promise.resolve({ data: { createOrder: { id: 'xyz789' } } }));
    const wrapper = shallow(<TakeMyMoney createOrder={createOrderSpy} currentUser={currentUser} />);
    // manually run onToken
    wrapper.instance().onToken({ id: 'abc123' });
    expect(createOrderSpy).toBeCalled();
    expect(createOrderSpy).toBeCalledWith({ variables: { token: 'abc123' } });
  });

  it('turns the progress bar on', () => {
    const createOrderSpy = jest.fn(() => Promise.resolve({ data: { createOrder: { id: 'xyz789' } } }));
    NProgress.start = jest.fn();
    const wrapper = shallow(<TakeMyMoney createOrder={createOrderSpy} currentUser={currentUser} />);
    wrapper.instance().onToken({ id: 'abc123' });
    expect(NProgress.start).toHaveBeenCalled();
  });

  it('routes to the order page', async () => {
    Router.router.push = jest.fn();
    const createOrderSpy = jest.fn(() => Promise.resolve({ data: { createOrder: { id: 'xyz789' } } }));
    const wrapper = shallow(<TakeMyMoney createOrder={createOrderSpy} currentUser={currentUser} />);
    wrapper.instance().onToken({ id: 'abc123' });
    await wait(0);
    expect(Router.router.push).toHaveBeenCalledWith({ pathname: '/order/xyz789', query: { id: 'xyz789' } });
  });
});
