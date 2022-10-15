import { PartialType } from '@nestjs/mapped-types';
import { SaveBoardDto } from './save-board.dto';

export class UpdateBoardDto extends PartialType(SaveBoardDto) {}
