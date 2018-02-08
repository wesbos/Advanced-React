import { ALL_ITEMS_QUERY, REMOVE_ITEM_MUTATION, SINGLE_ITEM_QUERY } from '../queries/index';
import { graphql } from 'react-apollo';

export const itemEnhancer = graphql(ALL_ITEMS_QUERY, {
  name: 'itemsQuery',
  options({ page }) {
    return {
      variables: {
        skip: page * 3 - 3,
      },
    };
  },
});

export const removeItemMutation = graphql(REMOVE_ITEM_MUTATION, {
  name: 'removeItem',
  options: {
    update: (proxy, { data: { deleteItem } }) => {
      // grab the data from our cache
      const data = proxy.readQuery({ query: ALL_ITEMS_QUERY });
      console.log(data);
      // filter out the deleted item
      data.items = data.items.filter(item => item.id !== deleteItem.id);

      // and then "set state" (update cache), so it will update wherever we have used this data on the page
      proxy.writeQuery({ query: ALL_ITEMS_QUERY, data });
    },
  },
});

export const singleItemEnhancer = graphql(SINGLE_ITEM_QUERY, {
  name: 'findItem',
  // This comes from Props
  options: ({ id }) => ({
    variables: { id },
  }),
});
