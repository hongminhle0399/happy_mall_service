import { Type } from "class-transformer"
import { IsInt } from "class-validator"

export class PaginationQueryDto {
    @Type(() => Number)
    @IsInt()
    limit?: number

    @Type(() => Number)
    @IsInt()
    page?: number
}