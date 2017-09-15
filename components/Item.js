import React, { Component } from 'react'
import { graphql, gql, compose } from 'react-apollo'
import { SINGLE_ITEM_QUERY } from '../queries';
import withData from '../lib/withData';

class Item extends Component {
  render() {
    if(!this.props.findItem.Item) return <p>Not ready</p>
    console.log(this.props.findItem.Item);

    if(this.props.loading) return <p>Loading...</p>
    if(this.props.error) return <p>Error...</p>

    const item = this.props.findItem.Item;
    return (
      <div>
        <h2>Viewing {item.title}</h2>
      </div>
    )
  }
}

const ComponentWithMutations = compose(
  graphql(SINGLE_ITEM_QUERY, {
    name: 'findItem',
    // This comes from Props
    options: ({ id }) => ({
      variables: { id }
    })
  })
)(Item);

export default ComponentWithMutations;
