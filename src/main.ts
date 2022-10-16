import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Simple board')
    .setDescription('CRUD API description')
    .setVersion('0.1')
    .addTag('board')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // swagger api 문서화를 위한 setup
  SwaggerModule.setup('api', app, document);

  // port
  await app.listen(3000);
}
bootstrap();
