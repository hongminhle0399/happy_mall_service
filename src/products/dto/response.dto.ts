import { Expose, Type } from 'class-transformer'

export class ColorResponseDto {
    @Expose()
    id: string

    @Expose()
    name: string
}

export class BrandResponseDto {
    @Expose()
    name: string
}

export class ProductVariantDto {
    @Expose()
    quantity: number

    @Expose()
    colorName: string

    @Expose()
    colorHex: string

    @Expose()
    priceModifier: number
}

export class ProductResponseDto {
    @Expose()
    id: number

    @Expose()
    name: string

    @Expose()
    price: number

    @Expose()
    images: string[]

    @Expose()
    description: Record<string, any>

    @Expose()
    @Type(() => BrandResponseDto)
    brand: BrandResponseDto

    @Expose()
    @Type(() => ProductVariantDto)
    variant: ProductVariantDto

    @Expose()
    get formattedPrice(): string {
        return `${this.price?.toFixed(2)}`
    }
}