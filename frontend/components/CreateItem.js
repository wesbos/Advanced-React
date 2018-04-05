import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_ITEM_MUTATION, ALL_ITEMS_QUERY } from '../queries';
import Error from './ErrorMessage';
import Form from './styles/Form';
import PropTypes from 'prop-types';
import Router from 'next/router';
import formatMoney from '../lib/formatMoney';

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0,
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async e => {
    this.setState({ loading: true });
    const files = e.currentTarget.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');

    // use the file endpoint
    const res = await fetch('https://api.cloudinary.com/v1_1/wesbos/image/upload', {
      method: 'POST',
      body: data,
    });
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
      loading: false,
    });
  };

  // TODO: Problem here - if I refetch page 1, page 2 to infinity are still out of date. I need to refetch all the pages somehow? without @connection
  render() {
    return (
      <Mutation
        mutation={CREATE_ITEM_MUTATION}
        variables={this.state}
        refetchQueries={[
          {
            query: ALL_ITEMS_QUERY,
            variables: {
              skip: 0,
              first: 2,
            },
          },
        ]}
      >
        {(createItem, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const { data: { createItem: item } } = await createItem();
              Router.push({
                pathname: `/item`,
                query: { id: item.id },
              });
            }}
          >
            <h2>Sell an Item.</h2>
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label>
                Image
                <input required onChange={this.uploadFile} type="file" accept=".png, .jpg, .jpeg" />
                {this.state.image ? (
                  <img src={this.state.image} width="100" alt={this.state.title} />
                ) : null}
              </label>
              <label>
                Title
                <input
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                />
              </label>
              <label>
                Price {this.state.price && formatMoney(this.state.price)}
                <input
                  required
                  type="number"
                  id="price"
                  name="price"
                  min="0"
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </label>
              <textarea
                id="description"
                required
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                placeholder="The desc for this item"
              />
              <button disabled={this.state.loading} type="submit">
                Submit
              </button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
