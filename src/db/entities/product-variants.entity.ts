import { integer } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';
import { productsEntity } from './products.entity';
import { index } from 'drizzle-orm/pg-core';
import { doublePrecision } from 'drizzle-orm/pg-core';
import { char } from 'drizzle-orm/pg-core';
import { text } from 'drizzle-orm/pg-core';
import { inventoryEntity } from './inventory.entity';
import { jsonb } from 'drizzle-orm/pg-core';

export const TABLE_NAME = 'product_variants';
export const productVariantsEntity = pgTable(
  TABLE_NAME,
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    productId: integer('product_id')
      .references(() => productsEntity.id, {
        onDelete: 'cascade',
      })
      .notNull(),
    images: jsonb(),
    specifications: jsonb(),
    inventoryId: integer('inventory_id')
      .references(() => inventoryEntity.id)
      .notNull(),
    colorHex: char('color_hex', { length: 7 }).notNull(),
    colorName: text('color_name').notNull(),
    priceModifier: doublePrecision('price_modifier').default(0),
    quantity: integer().notNull(),
  },
  (table) => [index('inventory_product_index').on(table.productId)],
);
