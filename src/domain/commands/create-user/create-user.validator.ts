import { NameValueObject } from 'src/domain/value-objects/user/name.value-object';
import { UserIdValueObject } from 'src/domain/value-objects/user/user-id.value-object';
import { ICreateUserCommand } from './create-user.command';

export class CreateUserValidator {
  private readonly _id: UserIdValueObject;
  private readonly _name: NameValueObject;

  constructor(private data: ICreateUserCommand) {
    this._id = new UserIdValueObject(data.id);
    this._name = new NameValueObject(data.name);
  }

  get id(): UserIdValueObject {
    return this._id;
  }

  get name(): NameValueObject {
    return this._name;
  }

  isValid(): boolean {
    return this._id.isValid() && this._name.isValid();
  }
}
