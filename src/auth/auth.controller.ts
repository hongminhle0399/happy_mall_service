import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterBodyDto } from './dto/request.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    const { user } = req
    return await this.authService.login({
      username: user.username,
      email: user.email,
    });
  }

  @Post('register')
  async register(@Body() registerPayload: RegisterBodyDto) {
    return await this.authService.register(registerPayload);
  }
}
