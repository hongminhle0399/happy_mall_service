import { pgTable, text } from "drizzle-orm/pg-core"

export const TABLE_NAME = 'countries'

export const countriesEntity = pgTable(TABLE_NAME, {
    id: text().primaryKey(),
    name: text().notNull()
})