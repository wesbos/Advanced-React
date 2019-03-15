function hasPermissions(user, permissionsNeeded) {
  const matchPermissions = user.permissions.filter(permissionsTheyhave => 
    permissionsNeeded.includes(permissionsTheyhave)
  );
  if (!matchPermissions.length) {
    throw new Error(
      `you dont have needed permissions 
      : ${permissionsNeeded} 🌹
      you permissions are
      : ${user.permissions} 💩
      `
    );
  }
}

exports.hasPermissions = hasPermissions;
