import { SecurityAggregate } from '../../../domain/aggregates/security/security.aggregate';
import { ICreateUserCommand } from '../../../domain/commands/create-user/create-user.command';
import { CreateUserValidator } from '../../../domain/commands/create-user/create-user.validator';
import { UserEntity } from '../../../domain/entities/user/user.entity';
import { DomainException } from '../../../domain/exceptions/domain.exception';
import { IUserRepository } from '../../../domain/repositories/user.repository';
import { UseCaseBase } from '../base/use-case.base';

export class CreateUserUseCase extends UseCaseBase<SecurityAggregate> {
  constructor(private readonly userRepository: IUserRepository) {
    super(new SecurityAggregate());
  }

  execute(data: ICreateUserCommand): Promise<UserEntity> {
    const user = new CreateUserValidator(data);
    if (user.isValid() === false)
      throw new DomainException('Invalid data 2', user.getErrors());

    const userEntity = new UserEntity(user);
    const newUser = this.aggregate.createUser(userEntity);

    return this.userRepository.create(newUser);
  }
}
