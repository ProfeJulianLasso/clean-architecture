import { SecurityAggregate } from 'src/domain/aggregates/security.aggregate';
import { ICreateUserCommand } from 'src/domain/commands/create-user/create-user.command';
import { CreateUserValidator } from 'src/domain/commands/create-user/create-user.validator';
import { UserEntity } from 'src/domain/entities/user/user.entity';
import { IUserRepository } from 'src/domain/repositories/user.repository';

export class CreateUserUseCase {
  private readonly securityAggregate: SecurityAggregate;

  constructor(private readonly userRepository: IUserRepository) {
    this.securityAggregate = new SecurityAggregate();
  }

  execute(data: ICreateUserCommand): Promise<UserEntity> {
    const user = new CreateUserValidator(data);
    if (user.isValid() === false) throw new Error('Invalid data');

    const userEntity = new UserEntity({
      id: user.id,
      name: user.name,
    });
    const newUser = this.securityAggregate.createUser(userEntity);

    return this.userRepository.create(newUser);
  }
}
