import 'dotenv/config';
import { relationship, text, image } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn, permissions } from '../access';

export const ProductImage = list({
  access: {
    create: isSignedIn,
    read: () => true,
    update: permissions.canManageProducts,
    delete: permissions.canManageProducts,
  },
  fields: {
    image: image({}),
    altText: text(),
    product: relationship({ ref: 'Product.photo' }),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'product'],
    },
  },
});
