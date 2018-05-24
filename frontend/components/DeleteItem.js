import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { ALL_ITEMS_QUERY } from './Items';

const DELETE_ITEM_MUTATION = gql`
  mutation deleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
      title
      description
    }
  }
`;

class DeleteItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  update = (cache, payload) => {
    const deletedItem = payload.data.deleteItem;
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    // filter this one out
    data.items = data.items.filter(item => item.id !== deletedItem.id);
    // write the data back to the cache
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
  };

  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(removeItem, { error }) => (
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this item?')) {
                removeItem();
              }
            }}
          >
            {error ? error.message : '× Delete Item'}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
export { DELETE_ITEM_MUTATION };
