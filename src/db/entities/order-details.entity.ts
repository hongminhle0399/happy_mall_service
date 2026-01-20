import { integer, pgTable, unique } from 'drizzle-orm/pg-core';
import { ordersEntity } from './orders.entity';
import { productsEntity } from './products.entity';
import { index } from 'drizzle-orm/pg-core';

export const TABLE_NAME = 'order_details';

export const orderDetailsEntity = pgTable(
  TABLE_NAME,
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    orderId: integer('order_id').notNull().references(() => ordersEntity.id, {
      onDelete: 'cascade',
    }),
    productId: integer('product_id').notNull().references(() => productsEntity.id, {
      onDelete: 'cascade',
    }),
    quantity: integer().notNull(),
  },
  (table) => [
    unique('order_product_unique').on(table.orderId, table.productId),
    index('order_order_detail_index').on(table.orderId),
    index('product_order_detail_index').on(table.productId),
  ],
);
