import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { Board } from 'src/board/entities/board.entity';

@Entity()
export class User {
  @Column()
  @PrimaryColumn()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToMany((_) => Board, (board) => board.user)
  boards: Board[];
}
