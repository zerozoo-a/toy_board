import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
export class SaveBoardDto {
  @ApiProperty({
    description: 'board의 id',
  })
  board_id: number;

  @ApiProperty({ description: '제목' })
  name: string;

  @ApiProperty()
  contents: string;

  @ApiProperty()
  at: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ type: () => User })
  user: User;
}
