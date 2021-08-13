import { list } from '@keystone-next/keystone/schema';
import { text, relationship, select, integer } from '@keystone-next/fields';

export const CartItem = list({
  ui: {
    listView: {
      initialColumns: ['product', 'quantity', 'user'],
    },
  },
  // access
  fields: {
    //   TODO Custom label in here
    quantity: integer({
      defaultValue: 1,
      isRequired: true,
    }),
    product: relationship({ ref: 'Product' }),
    user: relationship({ ref: 'User.cart' }),
  },
});
