import { integer, select, text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const CartItem = list({
  ui: {
    // What to show by default when going to keystoneJs CartItems
    listView: {
      initialColumns: ['product', 'quantity', 'user'],
    },
  },
  fields: {
    // TODO: custom label in here
    quantity: integer({
      defaultValue: 1,
      isRequired: true,
    }),
    product: relationship({ ref: 'Product' }),
    user: relationship({ ref: 'User.cart' }), // two-way relationship - so we don't need to modify both entities manualy?
  },
});
