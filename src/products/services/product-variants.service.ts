import { DRIZZLE } from '@common/constants/db.constant';
import { productVariantsEntity } from '@db/schema';
import type { DrizzleDB } from '@db/types/drizzle';
import { Inject, Injectable } from '@nestjs/common';
import { ProductVariantEntityInsert, ProductVariantEntity } from '../types/entities';

@Injectable()
export class ProductVariantService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDB) {}

  async create(productVariant: ProductVariantEntityInsert) {
    return this.db.insert(productVariantsEntity).values(productVariant);
  }

  async findAll() {
    return this.db.select().from(productVariantsEntity);
  }

  async update(productVariant: ProductVariantEntityInsert) {
    return this.db.update(productVariantsEntity).set(productVariant)
  }
}
