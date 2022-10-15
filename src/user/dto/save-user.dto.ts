import { Board } from 'src/board/entities/board.entity';
import { ApiProperty } from '@nestjs/swagger';

export class SaveUserDto {
  @ApiProperty({
    description: 'user의 id는 1부터 시작합니다.',
    minimum: 1,
    type: Number,
  })
  user_id?: number;
  @ApiProperty({
    description: "user's name",
    type: String,
  })
  name: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  createdAt?: Date;
  @ApiProperty()
  updatedAt?: Date;
  @ApiProperty({ type: () => Board })
  boards?: Board[];
}
