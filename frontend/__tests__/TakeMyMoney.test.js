import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NProgress from 'nprogress';
import TakeMyMoney from '../components/TakeMyMoney';
import Router from 'next/router';
import wait from 'waait';
import mountOptions from './testUtils';

Router.router = { push() {} };

describe('<TakeMyMoney />', () => {
  it('renders', async () => {
    const wrapper = mount(<TakeMyMoney />, mountOptions);
    // wait for it to load
    await wait();
    wrapper.update();
    // find the button
    const checkoutButton = wrapper.find('ReactStripeCheckout');
    expect(toJSON(checkoutButton)).toMatchSnapshot();
  });

  it('creates an order onToken', async () => {
    // TODO can this be done with a resolve jest fn?
    const createOrderSpy = jest.fn(() =>
      Promise.resolve({ data: { createOrder: { id: 'xyz789' } } })
    );
    const wrapper = mount(<TakeMyMoney />, mountOptions);
    // manually run onToken
    wrapper.instance().onToken({ id: 'abc123' }, createOrderSpy);
    // check it
    expect(createOrderSpy).toBeCalled();
    expect(createOrderSpy).toBeCalledWith({ variables: { token: 'abc123' } });
  });

  it('turns the progress bar on', () => {
    const createOrderSpy = jest.fn().mockResolvedValue({
      data: { createOrder: { id: 'xyz789' } },
    });

    // spy on .start()
    NProgress.start = jest.fn();
    const wrapper = mount(<TakeMyMoney />, mountOptions);
    wrapper.instance().onToken({ id: 'abc123' }, createOrderSpy);
    expect(NProgress.start).toHaveBeenCalled();
  });

  it('routes to the order page when completed', async () => {
    const createOrderSpy = jest.fn().mockResolvedValue({
      data: { createOrder: { id: 'xyz789' } },
    });

    Router.router.push = jest.fn();
    const wrapper = mount(<TakeMyMoney />, mountOptions);
    wrapper.instance().onToken({ id: 'abc123' }, createOrderSpy);
    await wait();
    expect(Router.router.push).toHaveBeenCalledWith({
      pathname: '/order',
      query: { id: 'xyz789' },
    });
  });
});
