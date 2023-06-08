import { NameValueObject } from '../../value-objects/name.value-object';
import { StateValueObject } from '../../value-objects/state.value-object';
import { UserIdValueObject } from '../../value-objects/user-id.value-object';

export interface IUser {
  id: UserIdValueObject;
  name: NameValueObject;
  state: StateValueObject;
}
