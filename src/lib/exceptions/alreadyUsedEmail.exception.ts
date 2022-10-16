import { HttpException, HttpStatus } from '@nestjs/common';

export class AlreadyUsedEmailException extends HttpException {
  constructor() {
    super(
      'Oops! this email address is already used please try another one.🥲 ',
      HttpStatus.NOT_ACCEPTABLE,
    );
  }
}
