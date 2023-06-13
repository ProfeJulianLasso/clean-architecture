import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { UserEntity } from '../../../persistence/entities/user.entity';
import { UserCreatedResponseDto } from '../../dto/user-created.response';

@Injectable()
export class UserCreatedInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<UserCreatedResponseDto> {
    return next.handle().pipe(
      map((user: UserEntity) => {
        return {
          id: user.id.value,
          name: user.name.value,
          state: user.state.value,
        };
      }),
    );
  }
}
