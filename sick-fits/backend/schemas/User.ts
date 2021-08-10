import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';

export const User = list({
  // access
  // ui
  fields: {
    name: text({ isRequired: true, isIndexed: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // TODO add roles, cart & orders
  },
});
