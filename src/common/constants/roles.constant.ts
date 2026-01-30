// backend/src/common/constants/roles.constant.ts
export enum UserRole {
  ADMIN = 'admin',
//   MANAGER = 'manager',
  CUSTOMER = 'customer',
}

export enum Permission {
  PRODUCTS_CREATE = 'products:create',
  PRODUCTS_READ = 'products:read',
  PRODUCTS_UPDATE = 'products:update',
  PRODUCTS_DELETE = 'products:delete',
  USERS_CREATE = 'users:create',
  USERS_READ = 'users:read',
  USERS_UPDATE = 'users:update',
  USERS_DELETE = 'users:delete',
  ORDERS_CREATE = 'orders:create',
  ORDERS_READ = 'orders:read',
  ORDERS_UPDATE = 'orders:update',
  ORDERS_CANCEL = 'orders:cancel',
}

// Export to frontend
export const ROLE_HIERARCHY = {
  [UserRole.ADMIN]: 100,
//   [UserRole.MANAGER]: 50,
  [UserRole.CUSTOMER]: 10,
};