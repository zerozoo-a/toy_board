import { HttpException, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaveUserDto } from './dto/save-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  @Post()
  async save(saveUserDto: SaveUserDto) {
    const res = await this.findOne(saveUserDto.email);
    if (res !== null) {
      throw new HttpException(
        'this email is already used sorry try another email account',
        405,
      );
    }

    return this.userRepository.save(saveUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async auth(auth: { email: string; password: string }): Promise<string> {
    const { email, password } = auth;
    const isUser = await this.userRepository
      .createQueryBuilder()
      .where('user.email = :email AND user.password = :password', {
        email,
        password,
      })
      .getOne();

    if (!isUser) {
      return 'you are not an user';
    }
    return 'you are an user';
  }
}
