import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NProgress from 'nprogress';
import TakeMyMoney from '../components/TakeMyMoney';
import Router from 'next/router';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeItem, fakeUser, fakeCartItem } from '../lib/testUtils';
import { CREATE_ITEM_MUTATION, CURRENT_USER_QUERY } from '../queries/queries.graphql';

Router.router = { push() {} };

const mocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: {
          ...fakeUser(),
          cart: [fakeCartItem()],
        },
      },
    },
  },
];
describe('<TakeMyMoney />', () => {
  it('renders', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <TakeMyMoney />
      </MockedProvider>
    );
    // wait for it to load
    await wait();
    wrapper.update();
    // find the button
    const checkoutButton = wrapper.find('ReactStripeCheckout');
    expect(toJSON(checkoutButton)).toMatchSnapshot();
  });

  it('creates an order onToken', async () => {
    const createOrderSpy = jest
      .fn()
      .mockResolvedValue({ data: { CREATE_ORDER_MUTATION: { id: 'xyz789' } } });

    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <TakeMyMoney />
      </MockedProvider>
    );
    const component = wrapper.find('TakeMyMoney');
    component.instance().onToken({ id: 'abc123' }, createOrderSpy);
    // check it
    expect(createOrderSpy).toBeCalled();
    expect(createOrderSpy).toBeCalledWith({ variables: { token: 'abc123' } });
  });

  it('turns the progress bar on', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <TakeMyMoney />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    NProgress.start = jest.fn();

    const createOrderSpy = jest
      .fn()
      .mockResolvedValue({ data: { CREATE_ORDER_MUTATION: { id: 'xyz789' } } });
    const component = wrapper.find('TakeMyMoney');
    component.instance().onToken({ id: 'abc123' }, createOrderSpy);
    wrapper.find('button').simulate('click');
    expect(NProgress.start).toHaveBeenCalled();
  });

  it('routes to the order page when completed', async () => {
    // Mount the wrapper
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <TakeMyMoney />
      </MockedProvider>
    );
    await wait();
    wrapper.update();

    // Spy on Router Push
    Router.router.push = jest.fn();
    const createOrderSpy = jest
      .fn()
      .mockResolvedValue({ data: { CREATE_ORDER_MUTATION: { id: 'xyz789' } } });

    const component = wrapper.find('TakeMyMoney');
    component.instance().onToken({ id: 'abc123' }, createOrderSpy);

    // submit the form
    wrapper.find('button').simulate('click');
    await wait();
    expect(Router.router.push).toHaveBeenCalledWith({
      pathname: '/order',
      query: { id: 'xyz789' },
    });
  });
});
