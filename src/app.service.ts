import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello() {
    // return 'Hello World!';
    return JSON.stringify({ hello: 'world!' });
  }
}
