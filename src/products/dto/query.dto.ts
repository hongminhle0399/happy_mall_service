import { Type } from "class-transformer";

export class ColorByProductIdQueryDto {
    @Type(() => Number)
    productId: string
}