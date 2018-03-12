import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { ALL_ITEMS_QUERY, CREATE_ITEM_MUTATION } from '../queries';
import ErrorMessage from './ErrorMessage';
import { fileEndpoint } from '../config';
import Form from './styles/Form';

class CreateLink extends Component {
  state = {
    description: 'test',
    title: 'testing title',
    image: '',
    largeImage: '',
    price: 500,
    fullPrice: 0,
    loading: false,
    error: {
      message: '',
    },
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

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
    console.log(file);
    this.setState({ image: file.secure_url, largeImage: file.eager[0].secure_url, loading: false });
  };

  createItem = async e => {
    e.preventDefault();
    // pull the values from state
    const { description, title, price, image, largeImage } = this.state;
    // create a mutation
    // TODO: handle any errors
    // turn loading on
    this.setState({ loading: true });
    try {
      console.log('About to call create item mutation');
      const res = await this.props.createItemMutation({
        // pass in those variables from state
        variables: {
          description,
          title,
          image,
          largeImage,
          price: parseInt(price),
        },
      });
    } catch (error) {
      this.setState({ error });
      console.log(error);
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
              onChange={e => this.setState({ title: e.target.value })}
              type="text"
              placeholder="Title"
            />
          </p>
          <label>
            Price<input
              type="number"
              min="0"
              value={this.state.price}
              onChange={e => this.setState({ price: e.target.value })}
            />
          </label>
          <textarea
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
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
})(CreateLink);
