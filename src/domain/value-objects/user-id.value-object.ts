import { ValueObjectBase } from './base/value-object.base';

const FIELD_NAME = 'userId';
const UUID_REGEX =
  /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;

export class UserIdValueObject extends ValueObjectBase<string> {
  protected validate(): void {
    if (UUID_REGEX.test(this.value) === false)
      this.error = {
        field: FIELD_NAME,
        message: 'UUID is not valid',
      };
  }
}
