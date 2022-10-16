import { Injectable } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
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
  ) {}

  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async save(saveBoardDto: SaveBoardDto) {
    const { name, contents, at } = saveBoardDto;

    const user = await this.authService.verifyUser(at);

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
      .execute()
      .catch((error) => {
        throw new Error('Sorry unexpected error is occurred!' + error);
      });
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
