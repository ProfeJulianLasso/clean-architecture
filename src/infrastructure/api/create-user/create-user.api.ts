import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { UserCreatedInterceptor } from '../../interceptors/user-created/user-created.interceptor';
import { CreateUserUseCase } from '../../../application/use-cases/create-user/create-user.use.case';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UserEntity } from '../../persistence/entities/user.entity';
import { UserRepository } from '../../persistence/repositories/user.repository';

@Controller('user')
export class CreateUserApi {
  private readonly useCase: CreateUserUseCase;

  constructor(private readonly userRepository: UserRepository) {
    this.useCase = new CreateUserUseCase(this.userRepository);
  }

  @Post()
  @UseInterceptors(UserCreatedInterceptor)
  create(@Body() data: CreateUserDto): Observable<UserEntity> {
    return from(this.useCase.execute(data));
  }

  // create(@Body() data: CreateUserDto): Observable<UserCreatedResponseDto> {
  //   return from(this.useCase.execute(data)).pipe(
  //     map((user) => ({
  //       id: user.id.value,
  //       name: user.name.value,
  //       state: user.state.value,
  //     })),
  //   );
  // }
}
