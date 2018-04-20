import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ApolloProvider, ApolloConsumer } from "react-apollo";
import RemoveFromCart from "../components/RemoveFromCart";
import { MockedProvider } from "react-apollo/test-utils";
import mountOptions, { mocked, mountWithApollo } from "./mockMang";
import { CURRENT_USER_QUERY, REMOVE_FROM_CART } from "../queries/queries";

const mocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: { id: 1, email: "james@apollo.com" } } },
  },
  {
    request: {
      query: REMOVE_FROM_CART,
      variables: { id: "abc123" },
      result: { data: { removeFromCart: { id: "abc123" } } },
    },
  },
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: { id: 1, email: "jame@apollo.com" } } },
  },
];

describe("<RemoveFromCart/>", () => {
  it("renders and matches snapshot", () => {
    const wrapper = mountWithApollo(<RemoveFromCart id="123" />);
    expect(toJSON(wrapper.find("button"))).toMatchSnapshot();
  });

  it("runs the mutation with correct variables", async () => {
    let apollo;
    // const wrapper = mountWithApollo(<RemoveFromCart id="abc123" />);
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <ApolloConsumer>
          {client => {
            apollo = client;
            return <RemoveFromCart id="abc123" />;
          }}
        </ApolloConsumer>
      </MockedProvider>
    );
    // console.log(apollo);
    // // act as a query from eariler in the app, so its already in the store
    // await apollo.query({ query: CURRENT_USER_QUERY }).then(data => {
    //   console.log(data);
    // });
    const mutation = wrapper.find("Mutation").instance();
    // mutation.client.mutate = jest.fn().mockResolvedValue({ removeFromCart: { id: 'abc123' } });
    wrapper.find("button").simulate("click");
    // await wait(2);
    // // the updated query from the mutation update
    // await apollo.query({ query: CURRENT_USER_QUERY, fetchPolicy: 'cache-only' })

    // // sync
    // const user = apollo.readQuery({ query: CURRENT_USER_QUERY })
  });
});
