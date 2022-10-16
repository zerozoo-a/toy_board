import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { LoginUserDto } from '../dto/login-user.dto';

import { Either, tryCatch, left, right } from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/function';
import { chain } from 'fp-ts/lib/Either';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { email, password } = context.switchToHttp().getRequest().body;
    return typeof email === 'string' && typeof password === 'string';
  }
}
