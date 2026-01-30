import { integer, pgTable, primaryKey } from 'drizzle-orm/pg-core';
import { usersEntity } from './users.entity';
import { rolesEntity } from './roles.entity';

export const TABLE_NAME = 'users_roles';

export const userRolesEntity = pgTable(
  TABLE_NAME,
  {
    userId: integer('user_id').notNull().references(() => usersEntity.id, {
      onDelete: 'cascade',
    }),
    roleId: integer('role_id').notNull().references(() => rolesEntity.id, {
      onDelete: 'cascade',
    }),
  },
  (table) => [primaryKey({ columns: [table.roleId, table.userId] })],
);
