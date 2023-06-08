import { ValueObjectBase } from './base/value-object.base';

const UUID_REGEX =
  /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;

export class UserIdValueObject extends ValueObjectBase<string> {
  protected validate(): void {
    if (UUID_REGEX.test(this._value) === false)
      this._error = {
        field: 'id',
        message: 'UUID is not valid',
      };
  }
}
