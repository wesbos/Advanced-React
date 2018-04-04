import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import { REMOVE_ITEM_MUTATION, ALL_ITEMS_QUERY } from '../queries/index';
import Error from './ErrorMessage';

class DeleteItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  update = (proxy, payload) => {
    const deletedItem = payload.data.deleteItem;
    const data = proxy.readQuery({ query: ALL_ITEMS_QUERY });
    // filter this one out
    data.items = data.items.filter(item => item.id !== deletedItem.id);
    // write the data back to the proxy
    proxy.writeQuery({ query: ALL_ITEMS_QUERY, data });
  };

  render() {
    return (
      <Mutation mutation={REMOVE_ITEM_MUTATION} variables={{ id: this.props.id }} update={this.update}>
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
