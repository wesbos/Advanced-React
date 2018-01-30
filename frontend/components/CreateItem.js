import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { ALL_ITEMS_QUERY, CREATE_ITEM_MUTATION } from '../queries';
import ErrorMessage from './ErrorMessage';
import makeImage from '../lib/image';
import { fileEndpoint } from '../config';

class CreateLink extends Component {
  state = {
    description: '',
    title: '',
    image: '',
    price: 0,
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
    data.append('data', files[0]);

    // use the file endpoint
    const res = await fetch(fileEndpoint, {
      method: 'POST',
      body: data,
    });
    const file = await res.json();
    this.setState({ image: file.id, loading: false });
  };

  _createLink = async e => {
    e.preventDefault();
    // pull the values from state
    const { description, title, image, price, fullPrice } = this.state;
    // create a mutation
    // TODO: handle any errors
    // turn loading on
    this.setState({ loading: true });
    try {
      const res = await this.props.createItemMutation({
        // pass in those variables from state
        variables: {
          description,
          title,
          price: parseInt(price),
          fullPrice,
          imageId: image,
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
        {this.state.loading ? 'LOADING...' : 'Ready!'}

        <ErrorMessage error={this.state.error} onButtonClick={() => this.setState({ error: {} })} />
        <form onSubmit={this._createLink}>
          <p>
            Image
            <input onChange={this.uploadFile} type="file" accept=".png, .jpg, .jpeg" />
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
          <button disabled={!this.state.loading} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
// When we submit this mutation, we need to update our store - we have a few ways to do that:
// One - we can go nucular and run refetchQueries() which will just go get everything - this is easy, but at the cost of efficiency.

export default graphql(CREATE_ITEM_MUTATION, {
  name: 'createItemMutation',
  options: {
    // Easy, but slow
    // refetchQueries: ['AllLinksQuery']
    // This is much Better / efficient
    // Notice how the variable is called createItem - that is because createItem is the name of the query!
    update: (proxy, { data: { createItem } }) => {
      const data = proxy.readQuery({ query: ALL_ITEMS_QUERY });
      // data is our store, allItems is our sub-"state", it's just an array. We can just add it to
      console.log({ createItem });
      data.allItems = [createItem, ...data.allItems.slice(1, 3)];
      // and then "set state", so it will update on the page. This will update the cache for us!
      proxy.writeQuery({ query: ALL_ITEMS_QUERY, data });
    },
  },
})(CreateLink);
