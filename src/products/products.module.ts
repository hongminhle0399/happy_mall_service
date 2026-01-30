import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/db/drizzle.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    providers: [ProductsService],
    controllers: [ProductsController],
    imports: [DrizzleModule]
})
export class ProductsModule {}
