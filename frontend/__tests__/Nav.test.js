import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Nav } from '../components/Nav';

const currentUserLoggedOut = {
  refetch() {},
};

const currentUser = {
  me: {},
  refetch() {},
};

describe('<Nav></Nav>', () => {
  it('renders', () => {
    shallow(<Nav currentUser={currentUserLoggedOut} />);
  });

  it('Renders minimal nav when logged out', () => {
    const wrapper = shallow(<Nav currentUser={currentUserLoggedOut} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders full nav when logged in', () => {
    const wrapper = shallow(<Nav currentUser={currentUser} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('tries to refetch the current user when it mounts', () => {
    const refetch = jest.fn();
    shallow(<Nav currentUser={{ ...currentUser, refetch }} />);
    expect(refetch).toHaveBeenCalled();
  });
});
