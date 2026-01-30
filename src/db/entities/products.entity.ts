import { integer, jsonb, pgTable, real, text } from 'drizzle-orm/pg-core';
import { timestamps } from '../common';
import { brandsEntity } from './brands.entity';
import { productCategoriesEntity } from './product-categories.entity';
import { doublePrecision } from 'drizzle-orm/pg-core';

export const TABLE_NAME = 'products'

export const productsEntity = pgTable(TABLE_NAME, {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  price: doublePrecision().notNull(),
  description: text(),
  brandId: integer('brand_id').notNull().references(() => brandsEntity.id, {
    onDelete: 'cascade',
  }),
  categoryId: integer('category_id').notNull().references(() => productCategoriesEntity.id, {
    onDelete: 'cascade',
  }),
  ...timestamps,
});
