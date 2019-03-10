function hasPermission(user, permissionsNeeded) {
  const matchedPermissions = permissionsNeeded.every(permissionTheyNeed =>
    user.permissions.includes(permissionTheyNeed),
  );
  if (!matchedPermissions) {
    throw new Error(`You do not have sufficient permissions

      : ${permissionsNeeded}

      You Have:

      ${user.permissions}
      `);
  }
}

exports.hasPermission = hasPermission;
