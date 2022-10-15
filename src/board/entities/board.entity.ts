import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  board_id: number;

  @Column()
  name: string;

  @Column()
  contents: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @ManyToOne((_) => User, (user) => user.boards)
  user: User;
}
