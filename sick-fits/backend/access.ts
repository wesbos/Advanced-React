import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';
// At it's simplest, the access control returns yes or no value depending on the users session

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data?.role?.[permission];
    },
  ])
);

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

export const permissions = {
  ...generatedPermissions,
  // you can create your own permissions. Example:
  isAwesome({ session }: ListAccessArgs): boolean {
    return session?.data.name.includes('coelho');
  },
};

// Rule based function - allow us to be more flexible with different rules as well as who owns an item
