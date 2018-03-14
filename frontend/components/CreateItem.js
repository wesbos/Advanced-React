import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { CREATE_ITEM_MUTATION } from '../queries';
import ErrorMessage from './ErrorMessage';
import Form from './styles/Form';
import PropTypes from 'prop-types';

class CreateItem extends Component {
  static propTypes = {
    createItemMutation: PropTypes.func.isRequired,
  };

  state = {
    item: {
      title: '',
      description: '',
      image: '',
      largeImage: '',
      price: 0,
    },
    loading: false,
    error: {
      message: null,
    },
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const updatedItem = {
      ...this.state.item,
      [name]: type === 'number' ? parseFloat(value) : value,
    };
    this.setState({ item: updatedItem });
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
    this.setState({ image: file.secure_url, largeImage: file.eager[0].secure_url, loading: false });
  };

  createItem = async e => {
    e.preventDefault();
    // TODO: handle any errors
    // turn loading on
    this.setState({ loading: true });
    try {
      const res = await this.props.createItemMutation({
        // pass in those variables from state
        variables: {
          ...this.state.item,
        },
      });
    } catch (error) {
      this.setState({ error });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.createItem}>
          {this.state.loading ? 'LOADING...' : null}
          <ErrorMessage error={this.state.error} onButtonClick={() => this.setState({ error: {} })} />
          <p>
            Image
            <input onChange={this.uploadFile} type="file" accept=".png, .jpg, .jpeg" />
            {this.state.image ? <img src={this.state.image} width="100" alt={this.state.title} /> : null}
          </p>
          <p>
            Title
            <input
              value={this.state.title}
              onChange={this.handleChange}
              type="text"
              name="title"
              id="title"
              placeholder="Title"
            />
          </p>
          <label>
            Price
            <input
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
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="The desc for this item"
          />
          <button disabled={this.state.loading} type="submit">
            Submit
          </button>
        </Form>
      </div>
    );
  }
}

export default graphql(CREATE_ITEM_MUTATION, {
  name: 'createItemMutation',
  options: {
    refetchQueries: ['AllItemsQuery'],
  },
})(CreateItem);

export { CreateItem };
