import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";

import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";

import Error from "./ErrorMessage";

const CREATE_ITEM_MULATION = gql`
  mutation CREATE_ITEM_MULATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: "Mock Title",
    description: "I Love this shoe",
    image: "",
    largeImage: "",
    price: 12
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;

    this.setState({ [name]: val });
  };

  handleUpload = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "name_of_cloudinary");

    const res = await fetch("CLOUDINARY_URL", {
      method: "POST",
      body: data
    });

    const file = await res.json();
    console.log(file);

    // put data into image
    // this.setState({
    //   image: file.secure_url,
    //   largeImage: file.eager[0].secure_url
    // })
  };

  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MULATION} variables={this.state}>
        {(createItem, { loading, error }) => (
          <Form
            onSubmit={async e => {
              // stop the default submit
              e.preventDefault();
              // run the mutation
              const res = await createItem();
              // go to the single item page, based on the newly created item
              Router.push({
                pathname: "/item",
                query: { id: res.data.createItem.id }
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="file">
                Image
                <input
                  type="file"
                  id="image"
                  name="image"
                  placeholder="Upload an Image"
                  required
                  onChange={this.handleUpload}
                />
              </label>

              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title"
                  required
                  onChange={this.handleChange}
                  value={this.state.title}
                />
              </label>

              <label htmlFor="price">
                Price
                <input
                  type="number"
                  id="price"
                  name="price"
                  required
                  onChange={this.handleChange}
                  value={this.state.price}
                />
              </label>

              <label htmlFor="description">
                Description
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Enter a description"
                  required
                  onChange={this.handleChange}
                  value={this.state.description}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MULATION };
