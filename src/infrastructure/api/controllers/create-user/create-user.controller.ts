import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { CreateUserUseCase } from '../../../../application/use-cases/create-user/create-user.use.case';
import { UserEntity } from '../../../persistence/entities/user.entity';
import { UserRepository } from '../../../persistence/repositories/user.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UserCreatedInterceptor } from '../../interceptors/user-created/user-created.interceptor';

@Controller('user')
export class CreateUserController {
  useCase: CreateUserUseCase;

  constructor(private readonly userRepository: UserRepository) {
    this.useCase = new CreateUserUseCase(this.userRepository);
  }

  @Post()
  @UseInterceptors(UserCreatedInterceptor)
  create(@Body() data: CreateUserDto): Observable<UserEntity> {
    return from(this.useCase.execute(data));
  }
}
