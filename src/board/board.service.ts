import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { TokenExpiredErrorException } from 'src/lib/exceptions/TokenExpiredError.exception';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { SaveBoardDto } from './dto/save-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  async save(saveBoardDto: SaveBoardDto) {
    const { name, contents, at } = saveBoardDto;

    try {
      await this.authService.verifyToekn(at);
      const userTokenData = (await this.authService.decodeToken(at)) as {
        [key: string]: any;
      };
      const user = await this.userService.findOne(userTokenData.email);

      await this.boardRepository
        .createQueryBuilder()
        .insert()
        .into(Board)
        .values([
          {
            name,
            contents,
            user,
          },
        ])
        .execute();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new TokenExpiredErrorException();
      }
      throw new Error('Sorry unexpected error is occurred!');
    }
    return 'This action adds a new board';
  }

  findAll() {
    return this.boardRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
