import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { CommandException } from '../../../domain/exceptions/command.exception';

@Catch(CommandException)
export class CommandExceptionFilter implements ExceptionFilter {
  catch(exception: CommandException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      message: exception.message,
      details: exception.details,
    });
  }
}
