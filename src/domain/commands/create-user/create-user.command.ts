import { NameValueObject } from '../../value-objects/name.value-object';
import { UserIdValueObject } from '../../value-objects/user-id.value-object';

export interface ICreateUserCommand {
  id: string;
  name: string;
}

export const CreateUserCommandValueObject = {
  id: UserIdValueObject,
  name: NameValueObject,
};
