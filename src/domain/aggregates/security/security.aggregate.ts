import { UserEntity } from '../../entities/user/user.entity';
import { AggregateBase } from '../base/aggregate.base';

export class SecurityAggregate extends AggregateBase {
  createUser(user: UserEntity): UserEntity {
    return user.create();
  }
}
