import { REMOVE_FROM_CART_MUTATION, CURRENT_USER_QUERY } from './queries';

import { graphql } from 'react-apollo';

export const removeFromCartEnhancer = graphql(REMOVE_FROM_CART_MUTATION, {
  name: 'removeFromCart',
  options: {
    update: (proxy, payload) => {
      const data = proxy.readQuery({ query: CURRENT_USER_QUERY });
      const cartItemId = payload.data.removeFromCartItems.cartItem.id;
      data.user.cart = data.user.cart.filter(item => item.id !== cartItemId);
      proxy.writeQuery({ query: CURRENT_USER_QUERY, data });
    },
  },
});

// Current User Query
export const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUserQuery' });
