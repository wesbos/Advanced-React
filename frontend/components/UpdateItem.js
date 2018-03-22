import React, { Component } from 'react';
import { graphql, gql, compose } from 'react-apollo';
import { SINGLE_ITEM_QUERY, UPDATE_LINK_MUTATION } from '../queries';
import Form from './styles/Form';

import { singleItemEnhancer } from '../enhancers/enhancers';

class UpdateItem extends Component {
  state = {
    item: {},
  };


  saveToState = e => {
    let { name, value, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    console.log('Saving to state');
    const item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  };

  updateItem = async e => {
    e.preventDefault();
    // pull the values from state
    const { description, title } = this.state;
    const { id } = this.props;
    // create a mutation
    // TODO: handle any errors. If you send an extra field it should break -how do we display those errors if they are currently only visible via the network tab?
    // turn loading on
    this.setState({ loading: true });
    const res = await this.props.updateItem({
      // pass in those variables from state
      variables: {
        ...this.props.findItem.items[0],
        ...this.state.item,
      },
    });
    console.log(res);
    this.setState({ loading: false });
  };

  render() {
    if (this.props.findItem.loading) {
      return <p>Loading...</p>;
    }

    const item = this.props.findItem.items[0];
    return (
      <div>
        <Form onSubmit={this.updateItem}>
          <h2>Edit {item.title}</h2>
          {this.state.loading ? 'LOADING...' : 'Ready!'}
          <fieldset disabled={this.state.loading}>
            <label htmlFor="title">
              Title
              <input id="title" defaultValue={item.title} name="title" onChange={this.saveToState} type="text" />
            </label>

            <label htmlFor="description">
              Description
              <textarea defaultValue={item.description} name="description" onChange={this.saveToState} />
            </label>

            <label htmlFor="price">
              Price
              <input type="number" name="price" onChange={this.saveToState} defaultValue={item.price} />
            </label>
            <button type="submit">Save...</button>
          </fieldset>
        </Form>
      </div>
    );
  }
}

const ComponentWithMutations = compose(
  singleItemEnhancer,
  // Second, the mutation for updating the link
  graphql(UPDATE_LINK_MUTATION, { name: 'updateItem' })
)(UpdateItem);

export default ComponentWithMutations;
