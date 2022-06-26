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
// Rules can return a boolean - yes or no - or a filter which limits which products they can CRUD
export const rules = {
  canManageProducts({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }

    // 1. Do they have the permission of canManageProducts
    if (permissions?.canManageProducts({ session })) {
      return true;
    }
    // 2. If not, do they own this item? - graphqlQL query
    // if this query doesn't work, it returns falsy value
    return { user: { id: session.itemId } };
  },
  canOrder({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions?.canManageCart({ session })) {
      // 1. Do they have the permission of canManageProducts
      return true;
    }
    // 2. If not, do they own this item? - graphqlQL query
    // if this query doesn't work, it returns falsy value
    return { user: { id: session.itemId } };
  },
  canManageOrderItems({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }

    // 1. Do they have the permission of canManageProducts
    if (permissions?.canManageCart({ session })) {
      return true;
    }
    // 2. If not, do they own this item? - graphqlQL query
    // if this query doesn't work, it returns falsy value
    return { order: { user: { id: session.itemId } } };
  },
  canReadProducts({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions?.canManageProducts({ session })) {
      return true;
    }

    // Shoudl be only available products (based on the status field)
    return { status: 'AVAILABLE' };
  },
  canManageUsers({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions?.canManageUsers({ session })) {
      // 1. Do they have the permission of canManageProducts
      return true;
    }
    // Otherwise they may only update themselves!
    return { id: session.itemId };
  },
};
