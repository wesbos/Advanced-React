import React, { Component } from 'react'
import { graphql, gql, compose } from 'react-apollo'
import { SINGLE_ITEM_QUERY, UPDATE_LINK_MUTATION } from '../queries';

class UpdateLink extends Component {

  state = {
    ...this.props.findItem.Item,
  }

  saveToState = (e) => {
    let { name, value, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>

        <h2>Edit {this.props.id}</h2>
        { this.state.loading ? 'LOADING...' : 'Ready!' }
        <form onSubmit={this._createLink}>

          <label htmlFor="title">Title</label>
          <input value={this.state.title} name="title" onChange={this.saveToState} type='text'/>

          <label htmlFor="description">Description</label>
          <textarea value={this.state.description} name="description" onChange={this.saveToState}></textarea>

          <label htmlFor="price">Price</label>
          <input type="number" name="price" onChange={this.saveToState} value={this.state.price} />

          <label htmlFor="fullPrice">Full Price</label>
          <input type="number" name="fullPrice" onChange={this.saveToState} value={this.state.fullPrice} />

          <button type="submit">Save...</button>
        </form>
      </div>
    )
  }

  _createLink = async (e) => {
    e.preventDefault();
    // pull the values from state
    const { description, title } = this.state
    const { id } = this.props;
    // create a mutation
    // TODO: handle any errors
    // turn loading on
    this.setState({ loading: true });
    console.log(this.state);
    const res = await this.props.updateItem({
      // pass in those variables from state
      variables: {
        ...this.state
      }
    });
    this.setState({ loading: false });
  }

}

const ComponentWithMutations = compose(
  // First, query for getting the link
  graphql(SINGLE_ITEM_QUERY, {
    name: 'findItem',
    options: ({ id }) => ({
      variables: { id }
    })
  }),
  // Second, the mutation for updating the link
  graphql(UPDATE_LINK_MUTATION, { name: 'updateItem' })
)(UpdateLink);

export default ComponentWithMutations;
