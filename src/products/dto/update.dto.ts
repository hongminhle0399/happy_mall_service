import { Type } from "class-transformer";
import { ArrayMinSize, IsInt, IsNumber } from "class-validator";
import { CreateProductVariantDto } from "./create.dto";

export class UpdateProductVariantsDto {
    @Type(() => CreateProductVariantDto)
    variant: CreateProductVariantDto
}

export class UpdateProductVariantsParamDto {
    @IsNumber()
    @Type(() => Number)
    id: number
}