import { integer, pgTable, text } from "drizzle-orm/pg-core"

export const TABLE_NAME = 'product_categories'

export const productCategoriesEntity = pgTable(TABLE_NAME, {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: text().notNull()
})