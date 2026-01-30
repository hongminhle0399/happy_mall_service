import { timestamps } from "@db/common";
import { text } from "drizzle-orm/pg-core";
import { integer } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const TABLE_NAME = 'roles'
export const rolesEntity = pgTable(TABLE_NAME, {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: text().unique().notNull(),
    description: text(),
    ...timestamps,
})