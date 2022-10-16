import { HttpException, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpUserDto } from 'src/auth/dto/signup-user.dto';
import { AlreadyUsedEmailException } from 'src/lib/exceptions/alreadyUsedEmail.exception';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  @Post()
  async save(signUpUserDto: SignUpUserDto) {
    const res = await this.findOne(signUpUserDto.email);
    if (res !== null) {
      throw new AlreadyUsedEmailException();
    }

    return this.userRepository.save(signUpUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(email: string): Promise<User | null> {
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
