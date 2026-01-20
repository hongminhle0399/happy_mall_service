
import { index, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { timestamps } from "../common"
import { customersEntity } from "./customers.entity"
import { paymentMethodsEntity } from "./payment-methods.entity"
import { productsEntity } from "./products.entity"

export const TABLE_NAME = 'orders'

export const ordersEntity = pgTable(TABLE_NAME, {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    customerId: integer('customer_id').notNull().references(() => customersEntity.id, {
        onDelete: 'cascade',
    }),
    productId: integer('product_id').notNull().references(() => productsEntity.id, {
        onDelete: 'cascade',
    }).notNull(),
    paymentMethodId: text('payment_method_id').notNull().references(() => paymentMethodsEntity.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
    }).notNull(),
    ...timestamps,
}, table => [index('order_product_index').on(table.productId), index('order_customer_index').on(table.customerId)])