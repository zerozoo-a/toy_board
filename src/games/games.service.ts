import { Injectable } from '@nestjs/common';

@Injectable()
export class GamesService {
  getGamesHome(): string {
    return 'THIS IS GAMES HOME! hello';
  }

  getSnakeGame(): string {
    return `🐍`;
  }
}
