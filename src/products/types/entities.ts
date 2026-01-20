import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { productVariantsEntity, productsEntity } from 'src/db/schema';

export type ProductEntity = InferSelectModel<typeof productsEntity>;
export type ProductEntityInsert = InferInsertModel<typeof productsEntity>;

export type ProductVariantEntity = InferSelectModel<typeof productVariantsEntity>
export type ProductVariantEntityInsert = InferInsertModel<typeof productVariantsEntity>
