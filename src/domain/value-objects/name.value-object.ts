import { ValueObjectBase } from './base/value-object.base';

const MIN_LENGTH = 4;
const MAX_LENGTH = 50;

export class NameValueObject extends ValueObjectBase<string> {
  protected validate(): void {
    if (
      (this._value.length >= MIN_LENGTH && this._value.length <= MAX_LENGTH) ===
      false
    )
      this._error = {
        field: 'name',
        message: `Name is min ${MIN_LENGTH} and max ${MAX_LENGTH} characters`,
      };
    else if (typeof this._value !== 'string')
      this._error = {
        field: 'name',
        message: 'Name is not valid string',
      };
  }
}
