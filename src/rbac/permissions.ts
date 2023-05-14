enum ROLE {
  ADMIN,
  USER,
}

export const permissions = {
  "user.read": Object.values(ROLE),
  "user.edit": Object.values(ROLE),
  "user.delete": ["ADMIN"],
};

export type PermissionName = keyof typeof permissions;
