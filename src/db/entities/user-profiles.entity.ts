import { integer } from "drizzle-orm/pg-core"
import { pgTable } from "drizzle-orm/pg-core"
import { usersEntity } from "./users.entity"
import { text } from "drizzle-orm/pg-core"

export const TABLE_NAME = 'user_profiles'

export const userProfilesEntity = pgTable(TABLE_NAME, {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: integer('user_id').notNull().references(() => usersEntity.id, { onDelete: 'cascade' }),
    deliveryAddress: text('delivery_address'),
    phone: text(),
})