import { UserEntity } from '../entities/user/user.entity';

export class SecurityAggregate {
  createUser(user: UserEntity): UserEntity {
    return user.create();
  }
}
