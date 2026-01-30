
import { char, integer, pgTable, text } from "drizzle-orm/pg-core"
import { timestamps } from "../common"
import { index } from "drizzle-orm/pg-core"
import { boolean } from "drizzle-orm/pg-core"

export const TABLE_NAME = 'users'

export const usersEntity = pgTable(TABLE_NAME, {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    username: text(),
    lastName: text('last_name').notNull(),
    firstName: text('first_name').notNull(),
    email: text().notNull().unique(),
    password: text().notNull(),
    isActive: boolean('is_active').default(false),
    ...timestamps,
}, table => [index('user_email_index').on(table.email)])