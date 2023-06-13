import { NameValueObject } from '../../value-objects/name.value-object';
import { StateValueObject } from '../../value-objects/state.value-object';
import { UserIdValueObject } from '../../value-objects/user-id.value-object';
import { EntityBase } from '../base/entity.base';
import { IUser } from './user.interface';

export class UserEntity extends EntityBase implements IUser {
  id: UserIdValueObject;
  name: NameValueObject;
  state: StateValueObject;

  constructor(data?: Partial<IUser>) {
    super(data);
  }

  create(): this {
    this.state = new StateValueObject(true);
    return this;
  }

  disable(): this {
    this.state = new StateValueObject(false);
    return this;
  }

  enable(): this {
    this.state = new StateValueObject(true);
    return this;
  }

  updateName(name: string): this {
    this.name = new NameValueObject(name);
    return this;
  }
}
