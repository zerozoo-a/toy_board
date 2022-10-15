import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaveBoardDto } from './dto/save-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  save(saveBoardDto: SaveBoardDto) {
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
