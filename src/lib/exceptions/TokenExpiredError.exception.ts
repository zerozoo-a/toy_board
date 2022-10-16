import { HttpException, HttpStatus } from '@nestjs/common';

export class TokenExpiredErrorException extends HttpException {
  constructor() {
    super(
      'Login_session_is_expired_please_login_again',
      HttpStatus.UNAUTHORIZED,
    );
  }
}
