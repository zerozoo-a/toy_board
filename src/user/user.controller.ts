import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { SaveUserDto } from './dto/save-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @Post()
  async create(@Body() saveUserDto: SaveUserDto) {
    return await this.userService.save(saveUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get()
  findOne(@Param('email') email: string) {
    return this.userService.findOne(email);
  }

  @Post('findUsersBoards')
  findUsersBoards(@Body('email') email: string) {
    console.log('run?');
    return this.userService.findUsersBoards(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Post('auth')
  signin(@Body() auth: { email: string; password: string }) {
    return this.userService.auth(auth);
  }
}
