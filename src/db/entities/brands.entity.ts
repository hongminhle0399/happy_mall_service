import { integer, pgTable, text } from "drizzle-orm/pg-core";
import { countriesEntity } from "./countries.entity";

export const TABLE_NAME = 'brands'

export const brandsEntity = pgTable(TABLE_NAME, {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: text().notNull(),
    countryId: text('country_id').notNull().references(() => countriesEntity.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade'
    }),
})