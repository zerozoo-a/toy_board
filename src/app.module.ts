import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesModule } from './games/games.module';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';
import { DataSource } from 'typeorm';
import { LoggerMiddleware } from './logger.middleware';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '141800',
      database: 'myboard',
      entities: [__dirname + '/./**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    BoardModule,
    GamesModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UserController);
  }
}
