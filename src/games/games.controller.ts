import { Controller, Get } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('/games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  getGamesHome(): string {
    return this.gamesService.getGamesHome();
  }

  @Get('snake')
  getSnake(): string {
    return this.gamesService.getSnakeGame();
  }
}
