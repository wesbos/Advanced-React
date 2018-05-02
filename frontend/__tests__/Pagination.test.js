import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Pagination from '../components/Pagination';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeItem } from './testUtils';
import { ALL_ITEMS_QUERY } from '../queries/queries';

const data = {
  itemsConnection: { aggregate: { count: 18 } },
  items: [fakeItem()],
};

describe('<Pagination/>', () => {
  fit('displays loading message', () => {
    const mocks = [
      {
        request: { query: ALL_ITEMS_QUERY, variables: { skip: 0 } },
        delay: 50,
        result: { data },
      },
    ];

    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Pagination page={1} />
      </MockedProvider>
    );
    console.log(wrapper.debug());
    // expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders pagination for 18 items', () => {
    const wrapper = shallow(<Pagination loading={false} page={1} itemsQuery={fakeQuery} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.find('.totalPages').text()).toEqual('2');
  });

  it('renders pagination for 28 items', () => {
    const fakeQuery2 = {
      itemsConnection: { aggregate: { count: 28 } },
    };
    const wrapper = shallow(<Pagination loading={false} page={1} itemsQuery={fakeQuery2} />);
    expect(wrapper.find('.totalPages').text()).toEqual('4');
  });

  it('disables and enables next/prev buttons', () => {
    const fakeQuery3 = {
      itemsConnection: { aggregate: { count: 100 } },
    };
    const wrapper = shallow(<Pagination loading={false} page={1} itemsQuery={fakeQuery} />);

    expect(wrapper.find('a.prev').props()['aria-disabled']).toEqual(true);
    expect(wrapper.find('a.next').props()['aria-disabled']).toEqual(false);
    wrapper.setProps({ page: 2 });
    expect(wrapper.find('a.prev').props()['aria-disabled']).toEqual(false);
    expect(wrapper.find('a.next').props()['aria-disabled']).toEqual(true);
    // when in the middle, both should work
    wrapper.setProps({ itemsQuery: fakeQuery3, page: 3 });
    expect(wrapper.find('a.prev').props()['aria-disabled']).toEqual(false);
    expect(wrapper.find('a.next').props()['aria-disabled']).toEqual(false);
  });
});
