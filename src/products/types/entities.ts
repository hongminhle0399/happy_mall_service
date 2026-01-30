import { productVariantsEntity, productsEntity } from 'src/db/schema';

export type ProductEntitySelect = typeof productsEntity.$inferSelect;
export type ProductEntityInsert = typeof productsEntity.$inferInsert

export type ProductVariantEntitySelect = typeof productVariantsEntity.$inferSelect
export type ProductVariantEntityInsert = typeof productVariantsEntity.$inferInsert
