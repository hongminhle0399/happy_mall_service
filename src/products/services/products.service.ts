import { DRIZZLE } from '@common/constants/db.constant';
import { productVariantsEntity } from '@db/entities/product-variants.entity';
import { brandsEntity, productCategoriesEntity, productsEntity } from '@db/schema';
import type { DrizzleDB } from '@db/types/drizzle';
import { Inject, Injectable } from '@nestjs/common';
import { eq, sql } from 'drizzle-orm';
import type { ProductEntity, ProductEntityInsert } from '../types/entities';

@Injectable()
export class ProductsService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDB) { }

  async update(updatedProduct: ProductEntity) {
    this.db
      .select()
      .from(productsEntity)
      .where(eq(productsEntity.id, updatedProduct.id));
  }

  async create(newProduct: ProductEntityInsert) {
    return await this.db.insert(productsEntity).values(newProduct).returning({
      insertedId: productsEntity.id,
    });
  }

  async delete(id: number) {
    await this.db.delete(productsEntity).where(eq(productsEntity.id, id));
  }

  async findAll(page: number = 1, limit: number = 10) {
    const _limit = limit <= 20 ? limit : 20
    const _page = page > 0 ? page : 1
    const _offset = Math.ceil(_limit * (_page - 1))
    const result = await this.db
      .select()
      .from(productVariantsEntity)
      .innerJoin(productsEntity, eq(productVariantsEntity.productId, productsEntity.id))
      .innerJoin(brandsEntity, eq(brandsEntity.id, productsEntity.id))
      .innerJoin(productCategoriesEntity, eq(productCategoriesEntity.id, productsEntity.categoryId))
      .limit(_limit)
      .offset(_offset)

    return result.map(row => ({
      ...row.products,
      variant: row.product_variants,
      brand: row.brands,
    }))
  }

  async findById(id: number) {
    return await this.db
      .select()
      .from(productsEntity)
      .where(sql`${productsEntity.id}=${id}`);
  }
}
