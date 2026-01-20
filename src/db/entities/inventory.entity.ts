import { integer, pgTable, text } from "drizzle-orm/pg-core"
import { timestamps } from "../common"

export const TABLE_NAME = 'inventory'

export const inventoryEntity = pgTable(TABLE_NAME, {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    address: text().notNull(),
    district: text().notNull(),
    city: text().notNull(),
    ...timestamps,
})