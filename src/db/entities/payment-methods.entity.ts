import { boolean, pgTable, text } from "drizzle-orm/pg-core"

export const TABLE_NAME = 'payment_methods'

export const paymentMethodsEntity = pgTable(TABLE_NAME, {
    id: text().primaryKey(),
    name: text().notNull(),
    requireAdvancePayment: boolean('require_advance_payment').default(false)
})
