import { PaginationResponseDto } from '@common/dto/response.dto';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  SerializeOptions,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PaginationQueryDto } from '../common/dto/query.dto';
import { CreateProductDto } from './dto/create.dto';
import { ProductDeleteParamDto } from './dto/delete.dto';
import { ProductResponseDto } from './dto/response.dto';
import { UpdateProductVariantsDto, UpdateProductVariantsParamDto } from './dto/update.dto';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Public } from '@common/decorators/public.decorator';
import { Roles } from '@common/decorators/roles.decorator';

@Controller('products')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
@Roles('admin')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Patch(':id')
  updateProductVariants(
    @Param() param: UpdateProductVariantsParamDto,
    @Body() body: UpdateProductVariantsDto,
  ) {
    return this.productsService.updateProductVariants(param.id, body.variant);
  }

  @Post()
  create(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param() param: ProductDeleteParamDto) {
    return this.productsService.delete(param.id);
  }

  @Get()
  @Public()
  @SerializeOptions({ strategy: 'excludeAll' })
  async findAll(
    @Query() productQueries: PaginationQueryDto,
  ): Promise<PaginationResponseDto<ProductResponseDto>> {
    const paginationData = await this.productsService.findAll(
      productQueries.page,
      productQueries.limit,
    );
    const productDto = plainToInstance(ProductResponseDto, paginationData.data);
    return new PaginationResponseDto(productDto, paginationData.metadata);
  }

  @Get(':id')
  @SerializeOptions({ strategy: 'excludeAll' })
  async findOne(@Param('id') id: number) {
    const product = await this.productsService.findOne(id);
    return plainToInstance(ProductResponseDto, product);
  }
}
