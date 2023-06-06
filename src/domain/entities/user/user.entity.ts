import { NameValueObject } from 'src/domain/value-objects/user/name.value-object';
import { StateValueObject } from 'src/domain/value-objects/user/state.value-object';
import { UserIdValueObject } from 'src/domain/value-objects/user/user-id.value-object';
import { IUser } from './user.interface';

export class UserEntity implements IUser {
  id: UserIdValueObject;
  name: NameValueObject;
  state: StateValueObject;

  constructor(data?: Partial<UserEntity>) {
    if (data?.id) this.id = data.id;
    if (data?.name) this.name = data.name;
    if (data?.state) this.state = data.state;
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
