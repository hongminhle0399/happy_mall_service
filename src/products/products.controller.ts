import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Query,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateProductDto, CreateProductVariantDto } from './dto/create.dto';
import { DeleteProductDto } from './dto/delete.dto';
import { PaginationQueryDto } from '../common/dto/query.dto';
import { ProductResponseDto } from './dto/response.dto';
import { ProductVariantService } from './services/product-variants.service';
import { ProductsService } from './services/products.service';

@Controller('products')
@UseInterceptors(ClassSerializerInterceptor)
export class ProductsController {
  constructor(private readonly productsService: ProductsService, private readonly productVariantsService: ProductVariantService) { }

  @Post()
  create(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }

  @Post()
  delete(@Body() body: DeleteProductDto) {
    this.productsService.delete(body.id);
  }

  @Get()
  @SerializeOptions({ strategy: 'excludeAll' })
  async findAll(@Query() productQueries: PaginationQueryDto): Promise<ProductResponseDto[]> {
    const products = await this.productsService.findAll(productQueries.page, productQueries.limit)
    return plainToInstance(ProductResponseDto, products);
  }

  @Get(':id')
  @SerializeOptions({ strategy: 'excludeAll' })
  async findById(@Param('id') id: number) {
    const product = await this.productsService.findById(id)
    return plainToInstance(
      ProductResponseDto,
      product
    );
  }

  @Post('variants')
  async createColor(@Body() productVariant: CreateProductVariantDto) {
    this.productVariantsService.create(productVariant)
  }

  @Get('variants')
  async findColorByProductId(@Param('product_id') productId: string) {

  }
}
