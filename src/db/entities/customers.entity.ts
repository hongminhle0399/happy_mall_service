
import { char, integer, pgTable, text } from "drizzle-orm/pg-core"
import { timestamps } from "../common"
import { index } from "drizzle-orm/pg-core"

export const TABLE_NAME = 'customers'

export const customersEntity = pgTable(TABLE_NAME, {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    lastName: text('last_name').notNull(),
    firstName: text('first_name').notNull(),
    email: text(),
    address: text(),
    phone: text().notNull(),
    birthday: char({ length: 10 }),
    ...timestamps,
}, table => [index('customer_email_index').on(table.email)])