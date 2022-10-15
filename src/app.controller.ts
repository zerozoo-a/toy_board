import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LoginUserDto } from './auth/dto/login-user.dto';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Body() body) {
    return body.user;
  }

  @Get('/')
  home() {
    return 'home!';
  }
}
