import { text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { permissionFields } from './fields';

export const Role = list({
  fields: {
    name: text({ isRequired: true }),
    ...permissionFields,
    assignedTo: relationship({
      ref: 'User.role', // TODO: add this to the User as well
      many: true,
      ui: {
        itemView: { fieldMode: 'read' },
      },
    }),
  },
});
