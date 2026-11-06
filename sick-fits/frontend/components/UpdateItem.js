import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";

import Error from "./ErrorMessage";
import Form from "./styles/Form";

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`;

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
    $image: String
    $largeImage: String
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
      title
      description
      price
      image
    }
  }
`;

class UpdateItem extends Component {
  state = {};

  handleChange = (e) => {
    const { name, type, value } = e.target;

    // Inputs always come in as string. If the type needs to be stored as a number, convert it
    const val = type === "number" && value.length ? parseFloat(value) : value;

    this.setState({ [name]: val });
  };

  uploadFile = async (e) => {
    const files = e.target.files;
    if (files.length) {
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "sickfits"); // Set in Cloudinary
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/mbglasser/image/upload",
        {
          method: "POST",
          body: data,
        },
      );
      const file = await res.json();
      this.setState({
        image: file.secure_url,
        largeImage: file.eager ? file.eager[0].secure_url : "",
      });
    }
  };

  updateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    const res = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state,
      },
    });
    Router.push({
      pathname: "/item",
      query: { id: res.data.updateItem.id },
    });
  };

  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No item found for ID: {this.props.id}</p>;

          return (
            <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
              {(updateItem, { loading, error }) => (
                <Form onSubmit={(e) => this.updateItem(e, updateItem)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="file">
                      Image
                      <input
                        type="file"
                        id="file"
                        name="file"
                        placeholder="Upload an Image"
                        onChange={this.uploadFile}
                      />
                      {this.state.image && (
                        <img src={this.state.image} alt="Upload Preview" />
                      )}
                    </label>
                    <label htmlFor="title">
                      Title
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        onChange={this.handleChange}
                        defaultValue={data.item.title}
                        required
                      />
                    </label>
                    <label htmlFor="price">
                      Price
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price (in lira)"
                        onChange={this.handleChange}
                        defaultValue={data.item.price}
                        required
                      />
                    </label>
                    <label htmlFor="description">
                      Description
                      <textarea
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Enter a Description"
                        onChange={this.handleChange}
                        defaultValue={data.item.description}
                        required
                      />
                    </label>
                    <button type="submit">
                      {loading ? "Saving..." : "Save Changes"}
                    </button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateItem;
export { UPDATE_ITEM_MUTATION };
