import { timestamps } from "@db/common"
import { text } from "drizzle-orm/pg-core"
import { integer } from "drizzle-orm/pg-core"
import { pgTable } from "drizzle-orm/pg-core"

export const TABLE_NAME = 'permissions'

export const permissionsEntity = pgTable(TABLE_NAME, {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    action: text().notNull().unique(),
    resource: text().notNull(),
    ...timestamps,
})