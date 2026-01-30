import { Expose, Type } from "class-transformer";
import { IsInt } from "class-validator";

class PaginationResponseMetadataDto {
    @Expose()
    @IsInt()
    limit: number;

    @Expose()
    @IsInt()
    total: number;

    @Expose()
    @IsInt()
    offset: number;
}

export class PaginationResponseDto<T> {
    @Expose()
    data: T[]

    @Expose()
    @Type(() => PaginationResponseMetadataDto)
    metadata: PaginationResponseMetadataDto

    constructor(data: T[], metadata: PaginationResponseMetadataDto) {
        this.data = data
        this.metadata = metadata
    }
}