import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import ResetRequest, { REQUEST_RESET_MUTATION } from '../components/ResetRequest';

const mocks = [
  {
    request: {
      query: REQUEST_RESET_MUTATION,
      variables: {
        email: 'wesbos@gmail.com',
      },
    },
    result: {
      data: {
        requestReset: { id: 'abc123', __typename: 'User' },
      },
    },
  },
];

describe('<ResetRequest/>', () => {
  it('renders and matches snapshot', async () => {
    const wrapper = mount(
      <MockedProvider>
        <ResetRequest />
      </MockedProvider>
    );
    const form = wrapper.find("form[data-test='ResetRequest']");
    expect(toJSON(form)).toMatchSnapshot();
  });

  it('calls the mutation', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <ResetRequest />
      </MockedProvider>
    );

    wrapper.find('input').simulate('change', {
      target: { value: 'wesbos@gmail.com' },
    });

    // submit the form
    const form = wrapper.find('form');
    console.log(form);
    form.simulate('submit');

    await wait();
    wrapper.update();
    expect(wrapper.find('p').text()).toContain('Success! Check Your Email!');
  });
});
