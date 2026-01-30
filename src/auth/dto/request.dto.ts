import { Type } from "class-transformer";
import { IsBoolean, IsEmail, IsString, MinLength } from "class-validator";

export class LoginBodyDto {
    @IsString()
    password: string

    @IsString()
    username: string
}

export class RegisterBodyDto {
    @IsString()
    username: string

    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsEmail()
    email: string

    @IsString()
    address: string

    @IsBoolean()
    @Type(() => Boolean)
    isActive: boolean

    @IsString()
    @MinLength(8)
    password: string
}