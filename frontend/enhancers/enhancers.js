import { graphql } from 'react-apollo';
import {
  REMOVE_FROM_CART_MUTATION,
  ALL_ITEMS_QUERY,
  REMOVE_ITEM_MUTATION,
  SINGLE_ITEM_QUERY,
  CURRENT_USER_QUERY,
  ADD_TO_CART_MUTATION,
} from '../queries/index';

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

export const removeFromCartEnhancer = graphql(REMOVE_FROM_CART_MUTATION, {
  name: 'removeFromCart',
  options: {
    update: (proxy, payload) => {
      const data = proxy.readQuery({ query: CURRENT_USER_QUERY });
      const cartItemId = payload.data.removeFromCart.id;
      data.me.cart = data.me.cart.filter(item => item.id !== cartItemId);
      proxy.writeQuery({ query: CURRENT_USER_QUERY, data });
    },
  },
});

export const addtoCartEnhancer = graphql(ADD_TO_CART_MUTATION, {
  name: 'addToCart',
  options: {
    update: (proxy, payload) => {
      console.log('=----asdf-asd-fas-df-asdf-sa-df');
    },
  },
});

export const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUser' });
