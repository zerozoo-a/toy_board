import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Board } from 'src/board/entities/board.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToMany((_) => Board, (board) => board.user)
  boards: Board[];
}
