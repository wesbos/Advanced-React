import React from "react";
import { mount } from "enzyme";
import wait from "waait";
import toJSON from "enzyme-to-json";
import SingleItem from "../components/SingleItem";
import mountOptions from "./mockMang";
import { MockedProvider } from "react-apollo/test-utils";
import { SINGLE_ITEM_QUERY } from "../queries/queries";

const data = {
  items: [
    {
      __typename: "Item",
      id: "123",
      price: 5000,
      user: null,
      image: "dog-small.jpg",
      title: "dogs are best",
      description: "dogs",
      largeImage: "dog.jpg",
    },
  ],
};

describe("<SingleItem/>", () => {
  xit("Renders with Proper Data", async () => {
    const mocks = [
      {
        request: { query: SINGLE_ITEM_QUERY, variables: { id: "123" } },
        delay: 50,
        result: { data },
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <SingleItem id="123" />
      </MockedProvider>
    );
    // loading state

    // wait for response
    await wait(55);
    wrapper.update();

    const Item = wrapper.find('[data-test="SingleItem"]');
    // wait for data
    expect(toJSON(Item)).toMatchSnapshot();
  });

  fit("Errors with a not found Item", async () => {
    const mocks = [
      {
        request: { query: SINGLE_ITEM_QUERY, variables: { id: "123" } },
        delay: 50,
        result: { data, errors: [{ message: "user not found" }] },
        // error: new Error("offline!"),
      },
    ];
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <SingleItem id="123" />
      </MockedProvider>
    );
    // loading state

    // wait for response
    await wait(55);
    wrapper.update();

    const Item = wrapper.find('[data-test="graphql-error"]');
    // wait for data
    expect(toJSON(Item)).toMatchSnapshot();
    // expect("wes").toBe("able to replicate an error");
  });
});
