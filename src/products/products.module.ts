import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/db/drizzle.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './services/products.service';
import { ProductVariantService } from './services/product-variants.service';

@Module({
    providers: [ProductsService, ProductVariantService],
    controllers: [ProductsController],
    imports: [DrizzleModule]
})
export class ProductsModule {}
