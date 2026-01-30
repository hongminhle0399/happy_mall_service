import { Type } from "class-transformer";
import { IsInt } from "class-validator";

export class ProductDeleteParamDto {
    @IsInt()
    @Type(() => Number)
    id: number
}