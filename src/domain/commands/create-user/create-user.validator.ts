import { CommandExceptionType } from '../../exceptions/command.exception';
import { NameValueObject } from '../../value-objects/name.value-object';
import { UserIdValueObject } from '../../value-objects/user-id.value-object';
import { ICreateUserCommand } from './create-user.command';

export class CreateUserValidator {
  private readonly _id: UserIdValueObject;
  private readonly _name: NameValueObject;
  private _errors: CommandExceptionType[];

  constructor(private data: ICreateUserCommand) {
    this._id = new UserIdValueObject(data.id);
    this._name = new NameValueObject(data.name);
    this._errors = new Array<CommandExceptionType>();
  }

  get id(): UserIdValueObject {
    return this._id;
  }

  get name(): NameValueObject {
    return this._name;
  }

  get errors(): CommandExceptionType[] {
    return this._errors;
  }

  isValid(): boolean {
    if (this._id.isValid() === false) this._errors.push(this._id.error);
    if (this._name.isValid() === false) this._errors.push(this._name.error);
    return this._errors.length === 0 ? true : false;
  }
}
