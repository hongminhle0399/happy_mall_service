import { ArrayNotEmpty, IsInt, IsNumber, IsObject, IsString, isNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @ArrayNotEmpty()
  @IsString({ each: true })
  images: string[];

  @IsObject()
  specifications: Record<string, any>;

  @IsString()
  colorId: string;

  @IsInt()
  brandId: number;

  @IsInt()
  categoryId: number;
}

export class CreateProductVariantDto {
  @IsInt()
  productId: number;

  @IsInt()
  inventoryId: number;

  @IsInt()
  quantity: number;

  @IsString()
  colorHex: string;

  @IsString()
  colorName: string;

  @IsNumber()
  priceModifier: number;
}