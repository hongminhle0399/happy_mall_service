import { IsInt } from "class-validator";

export class DeleteProductDto {
    @IsInt()
    id: number
}