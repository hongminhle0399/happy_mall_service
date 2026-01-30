
import { index, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { timestamps } from "../common"
import { usersEntity } from "./users.entity"
import { paymentMethodsEntity } from "./payment-methods.entity"
import { productsEntity } from "./products.entity"

export const TABLE_NAME = 'orders'

export const ordersEntity = pgTable(TABLE_NAME, {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: integer('user_id').notNull().references(() => usersEntity.id, {
        onDelete: 'cascade',
    }),
    paymentMethodId: text('payment_method_id').notNull().references(() => paymentMethodsEntity.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
    }).notNull(),
    ...timestamps,
}, table => [index('order_user_index').on(table.userId)])