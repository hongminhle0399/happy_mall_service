import { Expose, Type } from "class-transformer"
import { IsArray, IsIn, IsInt, IsOptional } from "class-validator"

export class PaginationQueryDto {
    @Type(() => Number)
    @IsInt()
    @IsOptional()
    limit: number

    @Type(() => Number)
    @IsInt()
    @IsOptional()
    page: number
}
