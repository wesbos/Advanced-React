import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import Error from './ErrorMessage';

export const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
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

export class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0,
  };

  handleChange = event => {
    const { name, type, value } = event.target;
    const _value = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: _value });
  };

  uploadImage = async event => {
    const { files } = event.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sick-fits');

    const res = await fetch('https://api.cloudinary.com/v1_1/matevegh/image/upload', {
      method: 'POST',
      body: data,
    });

    const file = await res.json();

    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    });
  };

  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, { loading, error }) => (
          <Form
            onSubmit={async event => {
              event.preventDefault();
              const res = await createItem();
              Router.push({
                pathname: '/item',
                query: { id: res.data.createItem.id },
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                required
                value={this.state.title}
                onChange={this.handleChange}
              />

              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                placeholder="Image"
                onChange={this.uploadImage}
              />
              {this.state.image && <img width={200} src={this.state.image} alt="Upload Preview" />}

              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                required
                value={this.state.price}
                onChange={this.handleChange}
              />

              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                placeholder="Description"
                required
                value={this.state.description}
                onChange={this.handleChange}
              />

              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
