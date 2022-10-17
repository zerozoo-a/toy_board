import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { SaveBoardDto } from './dto/save-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Post('findUserBoardsByUserEmail')
  findUserBoardBy(@Body(`userEmail`) userEmail: string): Promise<Board[]> {
    return this.boardService.findUsersBoardBy(userEmail);
  }

  @Get(`findBoardByBoard_id/:board_id`)
  findOne(@Param(`board_id`) board_id: string): Promise<Board> {
    return this.boardService.findOne(+board_id);
  }

  @Post()
  save(@Body() saveBoardDto: SaveBoardDto) {
    return this.boardService.save(saveBoardDto);
  }

  @Patch(`:id`)
  update(@Param(`id`) id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+id, updateBoardDto);
  }

  @Delete(`:id`)
  remove(@Param(`id`) id: string) {
    return this.boardService.remove(+id);
  }
}
