import { Expose, Type } from 'class-transformer';

export class BrandResponseDto {
  @Expose()
  name: string;
}

export class ProductVariantDto {
  @Expose()
  quantity: number;

  @Expose()
  colorName: string;

  @Expose()
  colorHex: string;

  @Expose()
  priceModifier: number;

  @Expose()
  images: string[];

  @Expose()
  description: Record<string, any>;
}

export class ProductResponseDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  price: number;

  @Expose()
  @Type(() => BrandResponseDto)
  brand: BrandResponseDto;

  @Expose()
  @Type(() => ProductVariantDto)
  variant: ProductVariantDto;

  @Expose()
  get formattedPrice(): string {
    return `${this.price?.toFixed(2)}`;
  }
}
