import { NameValueObject } from 'src/domain/value-objects/user/name.value-object';
import { StateValueObject } from 'src/domain/value-objects/user/state.value-object';
import { UserIdValueObject } from 'src/domain/value-objects/user/user-id.value-object';

export interface IUser {
  id: UserIdValueObject;
  name: NameValueObject;
  state: StateValueObject;
}
