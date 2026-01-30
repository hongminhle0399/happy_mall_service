import { IsString } from "class-validator";
import { UserEntityInsert } from "src/users/types/entities";

export interface UserCredential {
    email: string
    password: string
}

export interface LoginPayload {
    email: string
    username: string
}