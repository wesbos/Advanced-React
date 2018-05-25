import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';
import { ALL_ITEMS_QUERY } from './Items';
import { PAGINATION_QUERY } from './Pagination';
import { perPage } from '../config';

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
    const { page = 1 } = this.props.router.query;
    const skip = page * perPage - perPage;
    const variables = { skip };
    // TODO Expose Page Number here
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY, variables });
    // filter this one out
    data.items = data.items.filter(item => item.id !== deletedItem.id);
    // write the data back to the cache
    console.log(data.items);
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data, variables });
  };

  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        refetchQueries={[
          {
            query: ALL_ITEMS_QUERY,
            variables: { skip: (this.props.router.query.page || 1) * perPage - perPage },
          },
          { query: PAGINATION_QUERY },
        ]}
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

export default withRouter(DeleteItem);
export { DELETE_ITEM_MUTATION };
