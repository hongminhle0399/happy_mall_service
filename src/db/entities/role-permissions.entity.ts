import { integer } from "drizzle-orm/pg-core"
import { pgTable } from "drizzle-orm/pg-core"
import { rolesEntity } from "./roles.entity"
import { permissionsEntity } from "./permissions.entity"
import { primaryKey } from "drizzle-orm/pg-core"

export const TABLE_NAME = 'role_permissions'

export const rolePermissionsEntity = pgTable(TABLE_NAME, {
    roleId: integer('role_id').notNull().references(() => rolesEntity.id, { onDelete: 'cascade' }),
    permissionId: integer('permission_id').notNull().references(() => permissionsEntity.id, { onDelete: 'cascade' })
}, (table) => [primaryKey({ columns: [table.roleId, table.permissionId] })])