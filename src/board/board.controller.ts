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
import { AuthService } from 'src/auth/auth.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  save(@Body() saveBoardDto: SaveBoardDto) {
    return this.boardService.save(saveBoardDto);
  }

  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Get(`:id`)
  findOne(@Param(`id`) id: string) {
    return this.boardService.findOne(+id);
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
