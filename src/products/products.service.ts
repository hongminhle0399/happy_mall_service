import { DRIZZLE } from '@common/constants/db.constant';
import { productVariantsEntity } from '@db/entities/product-variants.entity';
import {
  brandsEntity,
  productCategoriesEntity,
  productsEntity,
} from '@db/schema';
import type { DrizzleDB } from '@db/types/drizzle';
import { Inject, Injectable } from '@nestjs/common';
import { eq, sql } from 'drizzle-orm';
import type {
  ProductEntityInsert,
  ProductEntitySelect,
  ProductVariantEntityInsert,
} from './types/entities';

@Injectable()
export class ProductsService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDB) {}

  async updateProductVariants(
    productVariantId: number,
    productVariant: ProductVariantEntityInsert,
  ) {
    return await this.db
      .update(productVariantsEntity)
      .set(productVariant)
      .where(eq(productVariantsEntity.id, productVariantId))
      .returning();
  }

  async update(updatedProduct: ProductEntitySelect) {
    await this.db
      .select()
      .from(productsEntity)
      .where(eq(productsEntity.id, updatedProduct.id));
  }

  async create(
    product: ProductEntityInsert & { variants: ProductVariantEntityInsert[] },
  ) {
    return this.db.transaction(async (tx) => {
      const [createdProduct] = await tx
        .insert(productsEntity)
        .values(product)
        .returning();
      const variantRows = product.variants.map((variant) => ({
        ...variant,
        productId: createdProduct.id,
      }));

      const createdVariants = await tx
        .insert(productVariantsEntity)
        .values(variantRows)
        .returning();
      return {
        ...createdProduct,
        variants: createdVariants,
      };
    });
  }

  async delete(id: number) {
    await this.db
      .delete(productsEntity)
      .where(eq(productsEntity.id, id))
      .returning({ id: productsEntity.id });
  }

  async findAll(page: number = 1, limit: number = 10) {
    const _limit = limit <= 20 ? limit : 20;
    const _page = page > 0 ? page : 1;
    const _offset = Math.ceil(_limit * (_page - 1));

    const queryData = this.db.select().from(productVariantsEntity);

    const itemsQuery = queryData
      .innerJoin(
        productsEntity,
        eq(productVariantsEntity.productId, productsEntity.id),
      )
      .innerJoin(brandsEntity, eq(brandsEntity.id, productsEntity.brandId))
      .innerJoin(
        productCategoriesEntity,
        eq(productCategoriesEntity.id, productsEntity.categoryId),
      )
      .offset(_offset)
      .limit(_limit);

    const totalRowsQuery = this.db
      .select({ count: sql<number>`count(*)` })
      .from(productVariantsEntity);

    const [items, totalRows] = await Promise.all([itemsQuery, totalRowsQuery]);

    return {
      data: items.map((item) => ({
        ...item.products,
        brand: item.brands,
        variant: item.product_variants,
      })),
      metadata: {
        total: Number(totalRows[0].count),
        limit: _limit,
        offset: _offset,
      },
    };
  }

  async findOne(id: number) {
    const [result] = await this.db
      .select()
      .from(productVariantsEntity)
      .where(eq(productVariantsEntity.id, id));
    return result;
  }
}
