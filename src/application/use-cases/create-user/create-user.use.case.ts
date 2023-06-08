import { SecurityAggregate } from '../../../domain/aggregates/security/security.aggregate';
import { ICreateUserCommand } from '../../../domain/commands/create-user/create-user.command';
import { CreateUserValidator } from '../../../domain/commands/create-user/create-user.validator';
import { UserEntity } from '../../../domain/entities/user/user.entity';
import { CommandException } from '../../../domain/exceptions/command.exception';
import { IUserRepository } from '../../../domain/repositories/user.repository';

export class CreateUserUseCase {
  private readonly securityAggregate: SecurityAggregate;

  constructor(private readonly userRepository: IUserRepository) {
    this.securityAggregate = new SecurityAggregate();
  }

  execute(data: ICreateUserCommand): Promise<UserEntity> {
    const user = new CreateUserValidator(data);
    if (user.isValid() === false)
      throw new CommandException('Invalid data 2', user.errors);

    const userEntity = new UserEntity({
      id: user.id,
      name: user.name,
    });
    const newUser = this.securityAggregate.createUser(userEntity);

    return this.userRepository.create(newUser);
  }
}
