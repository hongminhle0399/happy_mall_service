import { comparePassword, generateHashPassword } from '@common/utils/hash';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntityInsert, UserEntitySelect } from 'src/users/types/entities';
import { UsersService } from 'src/users/users.service';
import { UserCredential } from './types';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(credential: UserCredential) {
    const user = await this.usersService.findOne({ email: credential.email });
    if (!user) {
      return null
    }

    const isPasswordCorrect = await comparePassword(user.password, credential.password)
    if (!isPasswordCorrect) {
      return null
    }

    const { password, ...result } = user
    return result
  }

  async login({ username, email }) {
    const payload = { email: email, sub: username }
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userInfo: UserEntityInsert) {
    userInfo.password = await generateHashPassword(userInfo.password)
    return await this.usersService.create(userInfo)
  }
}
